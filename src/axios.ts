import axios from "axios";

const PortfolioApi = axios.create({
    baseURL: "https://cv-builder-tobe.onrender.com/api/v1/data",
    params: {
        apikey: process.env.API_KEY,
    },
});
export default PortfolioApi;
