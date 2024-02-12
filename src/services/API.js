import axios  from "axios";
const BASE_URL = 'http://localhost:3001';
const API = axios.create({baseURL: BASE_URL});

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('token')){
        req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
    }    
    return req;
});

export default API;