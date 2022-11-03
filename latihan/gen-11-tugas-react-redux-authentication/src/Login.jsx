import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import axios from 'axios'
import { useSelector, useDispatch } from "react-redux"
import { handleAfterLogin } from "./authSlice"

export default function Login() {

    const authSlice = useSelector(state => state.auth)
    const dispatch = useDispatch()


    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function handleLogin(evt) {
        evt.preventDefault()
        try {
            const result = await axios.post('https://dummyjson.com/auth/login', { username, password })
            dispatch(handleAfterLogin(result.data))
        } catch (err) {
            console.log(err.message)
        }

    }




    return authSlice.isLogin != null ? <Navigate to="/" /> : (
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