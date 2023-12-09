import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:4000/restaurants",
  headers: {
    "Content-type": "application/json"
  }
});


class RestaurantDataService {
  getRestaurants(page = 0) {
    return http.get(`?page=${page}`);
  }
  getRestaurantByID(id) {
    return http.get(`/${id}`);
  }
  getCuisines() {
    return http.get(`/cuisines`);
  }
  find(query, by = "name", page = 0) {
    return http.get(`?${by}=${query}&page=${page}`);
  }

}

export default new RestaurantDataService();
