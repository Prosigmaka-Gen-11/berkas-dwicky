
import { useDispatch, useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"


export default function ProtectedLayout() {
    const authSlice = useSelector(state => state.auth)
    const dispatch = useDispatch()

    return authSlice.isLogin != null ? <Outlet /> : <Navigate to="/login" />
}