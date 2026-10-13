import axios from "axios";

// const API_URL = import.meta.env.VITE_API_URL;
const API_URL = "https://mickey.dawebsolutions.com"
// https://mickey.dawebsolutions.com/public/api/user/login

console.log(API_URL);



const api = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
})



// Request Interceptor
api.interceptors.request.use(
    (config) => {
        console.log(
            "➡️",
            config.method?.toUpperCase(),
            config.url
        );

        return config;
    },
    (error) => Promise.reject(error)
);

// Response Interceptor
api.interceptors.response.use(
    (response) => response,

    (error) => {
        if (error.response?.status === 401) {
            console.log("Session expired");
        }

        return Promise.reject(error);
    }
);

export default api;
