import { useState } from "react";
import UseForm from "./UseForm";

export default function HandlingHookFunction() {
    const { inputData, setInputData, handleInputData, handleCheckbox } = UseForm({
        title: '', //text
        releaseDate: '', //date
        genre: '', //checkboxes
        description: '', //textarea
        theatre: 'Bandung', //radio
        payment: '', //select
    })


    function handleSubmit(evt) {
        evt.preventDefault()
        console.log(inputData)
    }

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
                        <label className="mr-2">
                            <input
                                className="mr-2"
                                defaultChecked
                                type="radio"
                                value="Bandung"
                                name="theatre"
                                onChange={evt => handleInputData(evt, 'theatre')}
                            />
                            Bandung
                        </label>
                        <label className="mr-2">
                            <input
                                className="mr-2"
                                type="radio"
                                value="Jakarta"
                                name="theatre"
                                onChange={evt => handleInputData(evt, 'theatre')}
                            />
                            Jakarta
                        </label>
                        <label className="mr-2">
                            <input
                                className="mr-2"
                                type="radio"
                                value="Bekasi"
                                name="theatre"
                                onChange={evt => handleInputData(evt, 'theatre')}
                            />
                            Bekasi
                        </label>
                    </div>
                    <br /><br />
                    {/* Akhir Radio Input */}


                    {/* Checkboxes Input  */}

                    <div className="row">
                        <div className="col-md-6">
                            <label >Genre :</label> <br />
                            <div className="form-check m-3">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="genre"
                                    value="Fantasy"
                                    id="flexCheckDefault"
                                    onChange={handleCheckbox}
                                />
                                <label
                                    className="pl-5"
                                    htmlFor="flexCheckDefault"
                                >
                                    Fantasy
                                </label>
                            </div>
                            <div className="form-check m-3">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="genre"
                                    value="Horror"
                                    id="flexCheckDefault"
                                    onChange={handleCheckbox}
                                />
                                <label
                                    className="pl-5"
                                    htmlFor="flexCheckDefault"
                                >
                                    Horror
                                </label>
                            </div>
                            <div className="form-check m-3">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="genre"
                                    value="Romance"
                                    id="flexCheckDefault"
                                    onChange={handleCheckbox}
                                />
                                <label
                                    className="pl-5"
                                    htmlFor="flexCheckDefault"
                                >
                                    Romance
                                </label>
                            </div>
                            <div className="form-check m-3">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="genre"
                                    value="Sci-Fi"
                                    id="flexCheckDefault"
                                    onChange={handleCheckbox}
                                />
                                <label
                                    className="pl-5"
                                    htmlFor="flexCheckDefault"
                                >
                                    Sci-Fi
                                </label>
                            </div>
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
            </section>

            {/* Display Data */}
            <div className="container mx-auto">
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
            </div>
            {/* Akhir Display Data */}


        </>)


}