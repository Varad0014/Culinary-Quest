import http from "http.js";

class ReviewDataService {
  getReviews(page = 0) {
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

export default new ReviewDataService();
