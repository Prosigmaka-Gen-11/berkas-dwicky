import { useState } from "react"
import { useContext } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { AuthContext } from "./AuthProvider"
import axios from 'axios'

export default function Login() {
    const { handleAfterLogin, isLogin } = useContext(AuthContext)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function handleLogin(evt) {
        evt.preventDefault()
        try {
            const result = await axios.post('https://dummyjson.com/auth/login', { username, password })
            handleAfterLogin(result.data)
        } catch (err) {
            console.log(err.message)
        }

    }


    return isLogin ? <Navigate to="/" /> : (
        <>
            <form onSubmit={handleLogin}>
                <label>
                    Username :
                    <br />
                    <input
                        type="text"
                        value={username}
                        onChange={evt => setUsername(evt.target.value)} />
                </label>
                <br /><br />


                <label>
                    password :
                    <br />
                    <input
                        type="password"
                        value={password}
                        onChange={evt => setPassword(evt.target.value)} />
                </label>
                <br /><br />

                <button>Login</button>


            </form>
        </>
    )
}