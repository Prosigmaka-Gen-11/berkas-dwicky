import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function MoviesDetail() {
    const params = useParams();
    const [movies, setMovies] = useState({});

    async function getMoviesDetail() {
        const result = await axios.get(
            "http://localhost:3000/movies/" + params.moviesId
        );
        setMovies(result.data);
    }

    console.log(movies)
    useEffect(() => {
        getMoviesDetail();
    }, []);

    return (
        <>
            <h1>Movies Detail</h1>

            <ul>
                <li>Title : {movies.title}</li>
                <li>Release Date : {movies.releaseDate}</li>
                <li>Description : {movies.description}</li>
                <li>Theatre : {movies.theatre}</li>
                <li>Genres : {movies.genre}</li>
                <li>Payment : {movies.payment}</li>
            </ul>
        </>
    );
}
