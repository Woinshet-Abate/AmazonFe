import axios from 'axios';

//for Backend Communication
const axiosInstance = axios.create({
  // baseURL: "http://localhost:5000" // for local host
  baseURL: "https://amazonbe-9tns.onrender.com",
});

export { axiosInstance };