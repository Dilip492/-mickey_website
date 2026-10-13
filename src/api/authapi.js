import api from "./axios";


export const loginApi = async (data) => {
    // await api.get("/sanctum/csrf-cookie");
    const response = await api.post("/api/user/login", data);
    return response.data;
}

export const RegisterApi = async (data) => {

    const response = await api.post("/api/user/register", data);

    return response.data;
}