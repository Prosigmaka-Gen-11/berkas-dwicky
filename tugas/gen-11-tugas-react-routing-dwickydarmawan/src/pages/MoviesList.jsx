import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

export default function MoviesList(props) {
    const [movies, setMovies] = useState([]);
    const [inputData, setInputData] = useState()


    async function getMovies() {
        const result = await axios.get("http://localhost:3000/movies");
        setMovies(result.data);
        console.log(movies);
    }



    async function handleDelete(id) {
        await axios.delete(`http://localhost:3000/movies/${id}`);
        getMovies();
    }

    useEffect(() => {
        getMovies()
    }, [])
    return (
        <>
            <h1 className="text-center text-3xl font-bold my-10"> List Movies</h1>
            <div className="container mx-auto overflow-x-auto relative shadow-lg sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 ">
                    <thead className="text-xs text-white uppercase bg-green-500 ">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Title
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Release Date
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Genre
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Description
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Theatre
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Payment
                            </th>
                            <th scope="col" className="py-3 px-6">
                                <span className="sr-only">Action</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map((movie) => (
                            <tr
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                key={movie.id}
                            >
                                <td
                                    scope="row"
                                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {movie.title}
                                </td>
                                <td className="py-4 px-6">{movie.releaseDate}</td>
                                <td className="py-4 px-6">{movie.genre.join(", ")}</td>
                                <td className="py-4 px-6">{movie.description}</td>
                                <td className="py-4 px-6">{movie.theatre}</td>
                                <td className="py-4 px-6">{movie.payment}</td>
                                <td className="py-4 px-6 text-right">
                                    <Link to="/movies/form" state={movie}>
                                        <button
                                            type="button"
                                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                        >
                                            Edit
                                        </button>
                                    </Link>
                                    <button
                                        type="button"
                                        onClick={() => handleDelete(movie.id)}
                                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                    >
                                        Delete
                                    </button>
                                    <Link to={'/movies/' + movie.id}>
                                        <button
                                            type="button"

                                            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                        >
                                            Detail
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}