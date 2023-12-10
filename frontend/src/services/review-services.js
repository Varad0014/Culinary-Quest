import http from "./http.js";

class ReviewDataService {
  getReviews(restaurantId) {
    return http.get(`/${restaurantId}/reviews`);
  }
  getReviewById(restaurantId, reviewId) {
    return http.get(`/${restaurantId}/reviews/${reviewId}`);
  }
  createReview(restaurantId, data) {
    return http.post(`/${restaurantId}/reviews`, data);
  }
  updateReview(restaurantId, reviewId, data) {
    return http.patch(`/${restaurantId}/reviews/${reviewId}`, data);
  }
  deleteReview(reviewId, restaurantId) {
    return http.delete(`/${restaurantId}/reviews/${reviewId}`);
  }
}

export default new ReviewDataService();
