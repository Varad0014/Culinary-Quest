import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:4000/restaurants",
  headers: {
    "Content-type": "application/json"
  }
});


class RestaurantDataService {
  getRestaurantsDB(page = 0) {
    return http.get(`?page=${page}`);
  }
  getCuisinesDB() {
    return http.get(`/cuisines`);
  }
  find(query, by = "name", page = 0) {
    return http.get(`?${by}=${query}&page=${page}`);
  }

}

export default new RestaurantDataService();
