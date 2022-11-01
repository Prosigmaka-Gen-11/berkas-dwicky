import axios from "axios"
import { useContext, useEffect } from "react"
import { MoviesContext } from "./MoviesProvider"

export default function List() {
    const contextDariProvider = useContext(MoviesContext)

    async function getMovies() {
        const result = await axios.get("http://localhost:3000/movies")
        contextDariProvider.setMovies(result.data)
    }

    useEffect(() => {
        getMovies()
    }, [contextDariProvider.movies])
    return (
        <>
            <table border="1" width="100%">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Release Date</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {contextDariProvider.movies.map((movie) => (
                        <tr key={movie.id}>
                            <td>{movie.title}</td>
                            <td>{movie.releaseDate}</td>
                            <td>{movie.description}</td>
                        </tr>
                    ))}


                </tbody>
            </table>

        </>)
}