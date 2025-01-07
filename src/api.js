import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api", // Adjust the base URL if needed
});

export default API;
