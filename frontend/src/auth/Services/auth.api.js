import axios from "axios";
const api = axios.create({
    baseURL: "https://localhost:10000",
    withCredentials: true
})

export async function register({ username, email, password }) {
    try {
        const response = await api.post("/user/auth/register", {
            username, email, password
        })
        console.log(response.data)
        return response.data

    } catch (error) {
        console.log(error)
    }

}


export async function login({email, password }) {
    try {
        const response = await axios.post("/user/auth/login", {
            email, password
        })
        console.log(response.data)
        return response.data

    } catch (error) {
        console.log(error)
    }
}


export async function logout() {
    try {
        const response = await axios.get("/user/auth/logout")
        console.log(response.data)
        return response.data

    } catch (error) {
        console.log(error)
    }
}

export async function getMe() {
    try {
        const response = await axios.get("/user/auth/get-me")
        console.log(response.data)
        return response.data

    } catch (error) {
        console.log(error)
    }
}