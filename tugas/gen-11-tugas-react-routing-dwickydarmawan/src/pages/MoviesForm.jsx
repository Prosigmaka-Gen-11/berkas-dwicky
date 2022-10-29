import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

const initialForm = {
    title: "", //text
    releaseDate: "", //date
    genre: [], //checkboxes
    description: "", //textarea
    theatre: "Bandung", //radio
    payment: "", //select
};

const genresCheckbox = ["Fantasy", "Romance", "Horror", "Sci-Fi", "Cartoon", "Action"];
const theatreRadio = ["Bandung", "Jakarta", "Bekasi", "Malang"];

export default function MoviesForm() {

    const location = useLocation();
    const states = location.state;
    console.log(states);

    const [movies, setMovies] = useState({});
    const [inputData, setInputData] = useState({ ...initialForm });
    const isEditing = inputData.id;


    async function getMovies() {
        if (states) {
            setInputData({ ...states })
        } else {
            const result = await axios.get("http://localhost:3000/movies");
            setMovies(result.data);
        }
    }


    function handleInputData(evt, propName) {
        setInputData({ ...inputData, [propName]: evt.target.value });
    }

    const handleCheckbox = (e) => {
        const { value, checked } = e.target;
        const { genre } = inputData;

        console.log(`${value} is ${checked}`);

        if (checked) {
            setInputData({ ...inputData, genre: [...genre, value] });
        } else {
            setInputData({ ...inputData, genre: genre.filter((e) => e !== value) });
        }
    };

    async function handleSubmit(evt) {
        evt.preventDefault();

        if (isEditing) {
            await axios.put(
                `http://localhost:3000/movies/${inputData.id}`,
                inputData
            );
        } else {
            await axios.post(`http://localhost:3000/movies`, inputData);
        }


        setInputData({ ...initialForm });
    }


    useEffect(() => {
        getMovies();
    }, []);
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
                            <span className="ml-1 text-lg font-medium text-gray-500 md:ml-2 dark:text-gray-400">Form</span>
                        </div>
                    </li>
                </ol>
            </nav>

            <h1 className="text-center text-3xl font-bold my-10"> Form Movies</h1>


            <form
                className="container w-1/3 mx-auto mb-20"
                onSubmit={(evt) => handleSubmit(evt)}
            >
                <div className="mb-6">
                    <label className="block  text-md font-medium text-gray-900 ">
                        Title Movie
                        <input
                            type="text"
                            value={inputData.title}
                            onChange={(evt) => handleInputData(evt, "title")}
                            className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </label>
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-md font-medium text-gray-900 ">
                        Release Date
                        <input
                            type="date"
                            value={inputData.releaseDate}
                            onChange={(evt) => handleInputData(evt, "releaseDate")}
                            className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </label>
                </div>
                <div className="mb-6">
                    <div>
                        <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-400">
                            Description Movie
                        </label>
                        <textarea
                            value={inputData.description}
                            onChange={(evt) => handleInputData(evt, "description")}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Leave a description..."
                        />
                    </div>
                </div>
                <div className=" mb-4">
                    <label className="flex items-baseline text-md font-medium text-gray-900 ">
                        Choose Theatre
                    </label>
                    {theatreRadio.map((theatres) => (
                        <>
                            <input
                                type="radio"
                                name="theatre"
                                value={theatres}
                                checked={inputData.theatre.indexOf(theatres) !== -1}
                                onChange={(evt) => handleInputData(evt, "theatre")}
                                className="w-4 h-4  text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                                className="ml-2  text-sm font-medium text-gray-900 "
                                key={theatres.id}
                            >
                                {theatres}
                            </label>
                            <br />
                        </>
                    ))}
                </div>
                <div className=" mb-4">
                    <label className="block mb-2 text-md font-medium text-gray-900 ">
                        Genres
                    </label>
                    {genresCheckbox.map((genres) => (
                        <>
                            <input
                                type="checkbox"
                                name="genre"
                                value={genres}
                                checked={inputData.genre.indexOf(genres) !== -1}
                                onChange={handleCheckbox}
                                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                                className="ml-2 text-sm font-medium text-gray-900 "
                                key={genres}
                            >
                                {genres}
                            </label>
                            <br />
                        </>
                    ))}
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-md font-medium text-gray-900 ">
                        Payment
                    </label>
                    <select
                        value={inputData.payment}
                        onChange={(evt) => handleInputData(evt, "payment")}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        <option value="" disabled>
                            Choose Payment
                        </option>
                        <option value="DANA">DANA</option>
                        <option value="OVO">OVO</option>
                        <option value="Link Aja">Link Aja</option>
                    </select>
                </div>


                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Submit

                </button>

            </form>
        </>
    )
}