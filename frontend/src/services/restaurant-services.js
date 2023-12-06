import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:4000/restaurants",
  headers: {
    "Content-type": "application/json"
  }
});


class RestaurantDataService {
    getAllRestaurants(page = 0) {
      return http.get(`?page=${page}`);
    }
    
  }
  
  export default new RestaurantDataService();
