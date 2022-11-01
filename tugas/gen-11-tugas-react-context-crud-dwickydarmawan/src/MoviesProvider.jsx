import { useState } from "react";
import { createContext } from "react";

export const MoviesContext = createContext()


export default function MoviesProvider(props) {
    const [movies, setMovies] = useState([]);
    const [inputData, setInputData] = useState({});

    return <>
        <MoviesContext.Provider value={{
            movies: movies,
            setMovies: setMovies,
            inputData: inputData,
            setInputData: setInputData
        }}>
            {props.children}
        </MoviesContext.Provider>
    </>
}