import axios from "axios";

const newRequest = axios.create({
  baseURL: "http://localhost:8000/api"
});


export default newRequest;
