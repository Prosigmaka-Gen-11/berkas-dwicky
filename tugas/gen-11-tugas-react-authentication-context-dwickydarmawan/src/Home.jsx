import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "./AuthProvider"

export default function Home() {
    const { token, handleLogout } = useContext(AuthContext)

    const [users, setUsers] = useState([])
    const [products, setProducts] = useState([])

    async function getUsers() {
        const result = await axios.get('https://dummyjson.com/users?limit=5', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        const res = await axios.get('https://dummyjson.com/products?limit=5', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        setUsers(result.data.users)
        setProducts(res.data.products)
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
                {users.map((user, product) => (
                    <>
                        <h3>{user.firstName} {user.lastName} </h3>
                    </>
                ))}
                {products.map((product) => (
                    <>
                        <p>{product.title} </p>
                    </>
                ))}
            </ul>
            <button onClick={Logout}>Logout</button>
        </>
    )
}