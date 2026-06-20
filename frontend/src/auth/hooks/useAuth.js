import { useContext } from "react";
import { register, login, logout, getMe } from "../Services/auth.api"
import { authContext } from "../Services/Context/authContext";

export const useAuth = () => {
    const context = useContext(authContext)
    const { user, setUser, loading, setLoading } = context

    const handleLogin = async ({ email, password }) => {
        setLoading(true)
        try {
            
            const data = await login({ email, password })
            setUser(data.user)
        } catch (error) {

        } finally {
            setLoading(false)
        }
    }

    const handleRegister = async ({ username, email, password }) => {
        setLoading(true)
        try {
            const data = await register({ username, email, password })
        } catch (error) {

        } finally {
            setLoading(false)
        }
    }

    const handleLogout = async () => {
        setLoading(true)
        try {
            await logout()
            setUser(null)

        } catch (error) {

        } finally {
            setLoading(false)
        }
    }

    return { user, loading, handleRegister, handleLogin, handleLogout }
}