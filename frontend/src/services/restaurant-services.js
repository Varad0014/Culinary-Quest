import http from "./http.js";

class RestaurantDataService {
  getRestaurants(page = 0) {
    return http.get(`?page=${page}`);
  }
  getRestaurantByID(restaurantId) {
    return http.get(`/${restaurantId}`);
  }
  getCuisines() {
    return http.get(`/cuisines`);
  }
  find(query, by = "name", page = 0) {
    return http.get(`?${by}=${query}&page=${page}`);
  }
}

export default new RestaurantDataService();
