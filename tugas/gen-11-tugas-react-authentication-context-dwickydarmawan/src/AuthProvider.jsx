import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext()

export default function AuthProvider({ children }) {
    const [userData, setUserData] = useState(function () {
        const savedUserData = localStorage.getItem('userData')
        return savedUserData ? JSON.parse(savedUserData) : {}
    })

    const [token, setToken] = useState(function () {
        const savedToken = localStorage.getItem('token')
        return savedToken ?? null
    })

    const isLogin = token != null

    function handleAfterLogin(data) {
        setUserData(data)
        setToken(data.token)
        localStorage.setItem('userData', JSON.stringify(data))
        localStorage.setItem('token', data.token)

    }

    function handleLogout() {
        setUserData({})
        setToken(null)
        localStorage.removeItem('userData')
        localStorage.removeItem('token')

    }

    return <>
        <AuthContext.Provider value={{
            isLogin,
            userData, setUserData,
            token, setToken,

            handleAfterLogin,
            handleLogout
        }}>
            {children}
        </AuthContext.Provider>
    </>



}