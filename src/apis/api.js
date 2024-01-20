import axios from "axios";

const api = axios.create({
    baseURL: process.env.BASE_SERVER_URL,
    withCredentials: true,
})

export default api