import { useDispatch, useSelector } from "react-redux"
import { handleLogout } from "./authSlice"

export default function Home() {
    const authSlice = useSelector(state => state.auth)
    const dispatch = useDispatch()
    return (
        <>
            <h1>Ini Home</h1>
            <button onClick={() => dispatch(handleLogout)}>Logout</button>
        </>
    )
}