import http from "./http.js";

class ReviewDataService {
  getReviews(restaurantId) {
    return http.get(`/${restaurantId}/reviews`);
  }
}

export default new ReviewDataService();
