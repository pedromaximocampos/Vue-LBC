import axios from "axios";

const baseURL = "https://vue-http-demo-bf799-default-rtdb.firebaseio.com/surveys.json";

const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 1000,
    headers:{
        "Content-Type": "application/json"
    }
});

export default axiosInstance;