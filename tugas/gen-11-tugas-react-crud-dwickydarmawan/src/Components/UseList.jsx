import { useState } from "react";
import axios from 'axios'

export default function UseList() {
    const [movies, setMovies] = useState([])

    async function getMovies() {
        const result = await axios.get('http://localhost:3000/movies')
        setMovies(result.data)
        console.log(movies)
    }

    return {
        movies, setMovies,
        getMovies
    }
}