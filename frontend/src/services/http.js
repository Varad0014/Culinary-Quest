import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:4000/restaurants",
  headers: {
    "Content-type": "application/json",
  },
});
export default http;
