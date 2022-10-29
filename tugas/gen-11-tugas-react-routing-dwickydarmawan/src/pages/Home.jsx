import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <h1>This is Home</h1>
            <Link to="movies/form">Fill Form</Link>
            <Link to="movies/list">List Table</Link>
        </>)
}