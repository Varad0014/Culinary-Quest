import http from "./http.js";

class ReviewDataService {
  getReviews(restaurantId) {
    return http.get(`/${restaurantId}/reviews`);
  }
  deleteReview(id, restaurantId) {
    return http.delete(`/${restaurantId}/reviews/${id}`);
  }
}

export default new ReviewDataService();
