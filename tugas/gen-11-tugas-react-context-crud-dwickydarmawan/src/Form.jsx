import axios from "axios"
import { useContext } from "react"
import List from "./List"
import { MoviesContext } from "./MoviesProvider"

const initialForm = {
    title: "",
    releaseDate: "",
    description: ""

}

export default function Form() {
    const contextDariProvider = useContext(MoviesContext)

    function handleInputData(evt, propName) {
        contextDariProvider.setInputData({ ...contextDariProvider.inputData, [propName]: evt.target.value })
    }

    async function handleSubmit(evt) {
        evt.preventDefault()
        await axios.post("http://localhost:3000/movies", contextDariProvider.inputData)
        contextDariProvider.setInputData({ ...initialForm })
    }


    return (
        <>
            <form onSubmit={(evt => handleSubmit(evt))}>
                <label > Title
                    <br />
                    <input
                        type="text"
                        value={contextDariProvider.inputData.title}
                        onChange={(evt => handleInputData(evt, "title"))}
                    />
                </label>
                <br /><br />
                <label > Release Date
                    <br />
                    <input
                        type="date"
                        value={contextDariProvider.inputData.releaseDate}
                        onChange={(evt => handleInputData(evt, "releaseDate"))} />
                </label>
                <br /><br />
                <label > Description
                    <br />
                    <textarea
                        value={contextDariProvider.inputData.description}
                        onChange={(evt => handleInputData(evt, "description"))} />
                </label>
                <br /><br />
                <button>
                    submit
                </button>
            </form>
        </>
    )
}