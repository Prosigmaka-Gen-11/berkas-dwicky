import { useDispatch, useSelector } from "react-redux"
import { handleLogout } from "./authSlice"


export default function Home() {
    const authSlice = useSelector(state => state.auth)
    const dispatch = useDispatch()


    return (
        <>
            <h1>Ini Home</h1>
            <ul>
                {/* <li>Nama Anda : {authSlice.userData.firstName}</li> */}
                <li>Nama Anda : {authSlice.userData.firstName}</li>
                <li>Token Anda : {authSlice.token}</li>
            </ul>
            <button onClick={() => dispatch(handleLogout())}>Logout</button>
        </>
    )
}