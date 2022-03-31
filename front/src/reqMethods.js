import axios from "axios";

const BASE_URL = "http://localhost:8081/api/";
const TOKEN = process.env.REACT_APP_MY_TOKEN;

export const publicReq = axios.create({
    baseURL: BASE_URL,
});

export const userReq = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});