import { useEffect, useState } from 'react'
import axios from 'axios'

const initialForm = {
  title: '', //text
  releaseDate: '', //date
  genre: [], //checkboxes
  description: '', //textarea
  theatre: 'Bandung', //radio
  payment: '', //select
}

const genresCheckbox = ["Fantasy", "Romance", "Horror", "Sci-Fi", "Cartoon"]
const theatreRadio = ["Bandung", "Jakarta", "Bekasi", "Malang"]

export default function App() {
  const [movies, setMovies] = useState([])
  const [inputData, setInputData] = useState({ ...initialForm })
  const isEditing = inputData.id


  async function getMovies() {
    const result = await axios.get('http://localhost:3000/movies')
    setMovies(result.data)
    console.log(movies)
  }



  function handleInputData(evt, propName) {
    setInputData({ ...inputData, [propName]: evt.target.value })
  }

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    const { genre } = inputData;

    console.log(`${value} is ${checked}`);

    if (checked) {
      setInputData({ ...inputData, genre: [...genre, value], });
    }

    else {
      setInputData({ ...inputData, genre: genre.filter((e) => e !== value), });
    }
  }



  async function handleSubmit(evt) {
    evt.preventDefault()

    if (isEditing) {
      await axios.put(`http://localhost:3000/movies/${inputData.id}`, inputData)
    } else {
      await axios.post(`http://localhost:3000/movies`, inputData)
    }

    getMovies()
    setInputData({ ...initialForm })


  }

  function handleEdit(movie) {
    setInputData({ ...movie })
  }

  async function handleDelete(id) {
    await axios.delete(`http://localhost:3000/movies/${id}`)
    getMovies()
  }


  useEffect(() => {
    getMovies()
  }, [])

  return (
    <>

      <section className="container flex justify-center">
        <form onSubmit={evt => handleSubmit(evt)} >
          {/* Akhir Text Input  */}
          <label>
            Title Movie <br />
            <input type="text" value={inputData.title} onChange={evt => handleInputData(evt, 'title')} />
          </label>
          <br /><br />
          {/* Akhir Text Input  */}

          {/* Akhir Date Input  */}
          <label>
            Release Date <br />
            <input type="date" value={inputData.releaseDate} onChange={evt => handleInputData(evt, 'releaseDate')} />
          </label>
          <br /><br />
          {/* Akhir Date Input  */}

          {/* Description Input  */}
          <label>
            Description <br />
            <textarea value={inputData.description} onChange={evt => handleInputData(evt, 'description')} ></textarea>
          </label>
          <br /><br />
          {/* Akhir Description Input  */}


          {/* Radio Input */}
          <div>
            <label >Theatre :</label> <br />
            {theatreRadio.map(theatres =>
              <label className="mr-2" key={theatres}>
                <input
                  className="mr-2"
                  type="radio"
                  value={theatres}
                  name="theatre"
                  checked={inputData.theatre.indexOf(theatres) !== -1}
                  onChange={evt => handleInputData(evt, 'theatre')}
                />
                {theatres}
              </label>
            )}

          </div>
          <br /><br />
          {/* Akhir Radio Input */}


          {/* Checkboxes Input  */}

          <div className="row">
            <div className="col-md-6">
              <label >Genre :</label> <br />
              {genresCheckbox.map(genres =>

                <div className="form-check m-3" key={genres}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="genre"
                    value={genres}
                    checked={inputData.genre.indexOf(genres) !== -1}
                    onChange={handleCheckbox}
                  />
                  <label
                    className="pl-5"
                    htmlFor="flexCheckDefault"
                  >
                    {genres}
                  </label>
                </div>
              )}
            </div>
          </div>
          {/* Akhir Checkboxes Input  */}

          {/* Select Input */}
          <label>
            Payment <br />
            <select value={inputData.payment} onChange={evt => handleInputData(evt, 'payment')}>
              <option value="" disabled >Choose Payment</option>
              <option value="DANA">DANA</option>
              <option value="OVO">OVO</option>
              <option value="Link Aja">Link Aja</option>
            </select>
          </label>
          <br /><br />
          {/* Akhir Select Input */}



          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            submit
          </button>

        </form>
      </section >

      {/* Display Data */}
      <div div className="container mx-auto" >
        <h2 className="mb-2 text-lg font-semibold text-gray-900 ">Movie Data :</h2>
        <ul className="space-y-1 max-w-md list-inside text-black">
          <li className="flex items-center">
            <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            Title : {inputData.title}
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            Release Date : {inputData.releaseDate}
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            Description : {inputData.description}
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            Theatre : {inputData.theatre}
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            Genre : {inputData.genre}
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            Payment : {inputData.payment}
          </li>

        </ul>
      </div >
      {/* Akhir Display Data */}
      <br /> <br />

      <h1 className="text-center text-3xl text-bold"> Daftar Artikel</h1 >

      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Title</th>
            <th>Release Date</th>
            <th>Genre</th>
            <th>Description</th>
            <th>Theatre</th>
            <th>Payment</th>
            <th>Opsi</th>
          </tr>
        </thead>
        <tbody>
          {movies.map(movie =>
            <tr key={movie.id}>
              <td>{movie.title}</td>
              <td>{movie.releaseDate}</td>
              <td>{movie.genre}</td>
              <td>{movie.description}</td>
              <td>{movie.theatre}</td>
              <td>{movie.payment}</td>
              <td>
                <button onClick={() => handleEdit(movie)} >Edit</button>
                <button onClick={() => handleDelete(movie.id)}>Hapus</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <br /><hr /><br />


    </>)


}