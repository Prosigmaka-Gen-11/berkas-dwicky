import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { AuthContext } from "./AuthProvider"

export default function ProtectedLayout() {
    const { isLogin } = useContext(AuthContext)

    return isLogin ? <Outlet /> : <Navigate to="/login" />
}