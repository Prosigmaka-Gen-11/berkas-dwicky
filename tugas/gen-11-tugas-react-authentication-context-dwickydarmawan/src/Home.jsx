import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "./AuthProvider"

export default function Home() {
    const { token, handleLogout } = useContext(AuthContext)

    const [users, setUsers] = useState([])

    async function getUsers() {
        const result = await axios.get('https://dummyjson.com/users?limit=5', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        setUsers(result.data.users)
    }

    function Logout() {

        handleLogout()
    }


    useEffect(() => {
        getUsers()
    }, [])

    return (
        <>
            <Link to="/quotes" >Ke Quotes</Link>

            <ul >
                {users.map(user =>
                    <li>{user.firstName} {user.lastName} </li>
                )}
            </ul>
            <button onClick={Logout}>Logout</button>
        </>
    )
}