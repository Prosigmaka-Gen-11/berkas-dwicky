import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function MoviesList(props) {
    const [movies, setMovies] = useState([]);

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
            <nav className="flex" aria-label="Breadcrumb">
                <ol className="p-10 inline-flex items-center  space-x-1 md:space-x-3">
                    <li className="inline-flex items-center ">
                        <Link to="/" className="inline-flex items-center text-lg font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">

                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
                            Home

                        </Link>
                    </li>
                    <li aria-current="page">
                        <div className="flex items-center">
                            <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                            <span className="ml-1 text-lg font-medium text-gray-500 md:ml-2 dark:text-gray-400">List</span>
                        </div>
                    </li>
                </ol>
            </nav>

            <h1 className="text-center text-3xl font-bold my-10"> List Movies</h1>
            <div className="container mx-auto overflow-x-auto relative shadow-lg sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 ">
                    <thead className="text-sm text-white uppercase bg-green-500 ">
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
                                        <button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">Detail</button>
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