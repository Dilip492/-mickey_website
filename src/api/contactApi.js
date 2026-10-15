import api from "./axios";


export const contactApi = async (data) => {
    // await api.get("/sanctum/csrf-cookie");
    const response = await api.post("/api/v1/contact-inquiries", data);
    return response.data;
}

