import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

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
            <nav className="flex" aria-label="Breadcrumb">
                <ol className="p-10 inline-flex items-center  space-x-1 md:space-x-3">
                    <li className="inline-flex items-center ">
                        <Link to="/" className="inline-flex items-center text-lg font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">

                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
                            Home
                            <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                        </Link>
                    </li>
                    <li className="inline-flex items-center ">
                        <Link to="/movies/list" className="inline-flex items-center text-lg font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">


                            List

                        </Link>
                    </li>
                    <li aria-current="page">
                        <div className="flex items-center">
                            <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                            <span className="ml-1 text-lg font-medium text-gray-500 md:ml-2 dark:text-gray-400">Movies Detail</span>
                        </div>
                    </li>
                </ol>
            </nav>
            <section className="mx-10 grid grid-cols-2 gap-4">
                <div className="w-full">


                    <img className="bg-contain h-1/2 w-full" src="https://source.unsplash.com/random/760×540/?netflix" alt="" />
                </div>
                <div className="container mx-auto">
                    <h1 className="font-bold text-7xl mb-4">{movies.title}</h1>
                    <section className="inline">
                        <span className="bg-red-700 text-red-100 text-base font-medium mr-2 px-4 py-1 rounded ">Now Playing</span>
                        <span className="bg-red-100 text-red-800 text-base font-medium mr-2 px-4 py-1 rounded ">{movies.theatre}</span>
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">{movies.payment}</span>
                    </section>
                    <h3 className="font-semibold text-2xl mt-10">Showtimes</h3>
                    <p className="text-base italic">{movies.releaseDate}</p>
                    <hr className="my-2 w-1/2 h-0.5 bg-gray-500 rounded border-0 " />
                    <h3 className="font-semibold text-2xl">Genres</h3>
                    <p className="text-base italic">{movies.genre}</p>
                    <h3 className="font-semibold text-2xl mt-4">Description</h3>
                    <p className="w-1/2 mb-3 font-light text-gray-500  first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900  first-letter:mr-3 first-letter:float-left">{movies.description}</p>

                </div>

            </section>



        </>
    );
}
