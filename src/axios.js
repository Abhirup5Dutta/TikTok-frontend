import axios from "axios";

const instance = axios.create({
    baseURL: 'https://mern-tiktok-backend-abhirup.herokuapp.com',
});

export default instance;