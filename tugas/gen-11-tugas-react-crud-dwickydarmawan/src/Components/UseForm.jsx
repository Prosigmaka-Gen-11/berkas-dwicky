import { useState } from "react";
import axios from "axios";
import UseList from "./UseList";

export default function UseForm(data) {
    const { getMovies } = UseList([])
    const [inputData, setInputData] = useState(data)

    function handleInputData(evt, propName) {
        setInputData({ ...inputData, [propName]: evt.target.value })
    }

    const handleCheckbox = (e) => {
        const { value, checked } = e.target;
        const { genre } = inputData;

        console.log(`${value} is ${checked}`);

        if (checked) {
            setInputData({ genre: [...genre, value], });
        }

        else {
            setInputData({ genre: genre.filter((e) => e !== value), });
        }
    }

    const isEditing = inputData.id

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







    return {
        inputData, setInputData,
        handleInputData,
        handleCheckbox,
        handleSubmit,
        handleEdit,
        handleDelete

    }
}