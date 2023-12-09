import ReviewsDataAccess from "../data-access/reviewsDAO.js";

export default class ReviewsController {
  static async postReviewAPI(req, res, next) {
    try {
      const restaurantId = req.body.restaurantId;
      const review = req.body.text;
      const userInfo = {
        name: req.body.name,
        _id: req.body.user_id,
      };
      //   const date = new Date();

      const ReviewResponse = await ReviewsDataAccess.addReview(
        restaurantId,
        userInfo,
        review
      );
      res.json({ status: "success" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  static async updateReviewAPI(req, res, next) {
    try {
      const reviewId = req.params.reviewId;
      const text = req.body.text;

      const reviewResponse = await ReviewsDataAccess.updateReview(
        reviewId,
        req.body.user_id,
        text
      );

      res.json({ status: "success" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
  static async deleteReviewAPI(req, res, next) {
    try {
      const reviewId = req.params.reviewId;
      // const userId = req.body.userId
      console.log(reviewId);
      const reviewResponse = await ReviewsDataAccess.deleteReview(reviewId);
      res.json({ status: "success" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
}
