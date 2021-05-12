import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/scrapper-api/v1/comments',//process.env.REACT_APP_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
})