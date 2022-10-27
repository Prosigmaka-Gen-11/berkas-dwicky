import { useEffect, useState } from "react";
import axios from "axios";

const initialForm = {
  title: "", //text
  releaseDate: "", //date
  genre: [], //checkboxes
  description: "", //textarea
  theatre: "Bandung", //radio
  payment: "", //select
};

const genresCheckbox = ["Fantasy", "Romance", "Horror", "Sci-Fi", "Cartoon"];
const theatreRadio = ["Bandung", "Jakarta", "Bekasi", "Malang"];

export default function App() {
  const [movies, setMovies] = useState([]);
  const [inputData, setInputData] = useState({ ...initialForm });
  const isEditing = inputData.id;

  async function getMovies() {
    const result = await axios.get("http://localhost:3000/movies");
    setMovies(result.data);
    console.log(movies);
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

    getMovies();
    setInputData({ ...initialForm });
  }

  function handleEdit(movie) {
    setInputData({ ...movie });
  }

  async function handleDelete(id) {
    await axios.delete(`http://localhost:3000/movies/${id}`);
    getMovies();
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <h1 className="text-center text-3xl font-bold my-10"> Form Movies</h1>

      <form
        className="container w-1/3 mx-auto"
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

      {/* Display Table */}

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
                  <button
                    type="button"
                    onClick={() => handleEdit(movie)}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDelete(movie.id)}
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* AKhir Display Table */}

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
