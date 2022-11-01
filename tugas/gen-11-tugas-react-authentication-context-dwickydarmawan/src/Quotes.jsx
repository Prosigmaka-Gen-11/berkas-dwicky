import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { AuthContext } from "./AuthProvider"
import { Link } from "react-router-dom"

export default function Quotes() {
    const { token, handleLogout } = useContext(AuthContext)

    const [quotes, setQuotes] = useState([])

    async function getQuotes() {
        const result = await axios.get('https://dummyjson.com/quotes?limit=5', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        setQuotes(result.data.quotes)
    }

    function Logout() {

        handleLogout()
    }


    useEffect(() => {
        getQuotes()
    }, [])

    return (
        <>
            <Link to="/" >Ke Home</Link>

            <ul >
                {quotes.map(katamutiara =>
                    <li>{katamutiara.quote} </li>
                )}
            </ul>
            <button onClick={Logout}>Logout</button>
        </>
    )
}