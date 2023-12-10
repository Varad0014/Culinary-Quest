import ReviewsDataAccess from "../data-access/reviewsDAO.js";

export default class ReviewsController {
  static async getReviewsAPI(req, res, next) {
    try {
      const restaurantId = req.params.restaurantId;
      const { reviewsList, totalNumReviews } =
        await ReviewsDataAccess.getReviews(restaurantId);
      console.log(reviewsList);

      const response = {
        reviews: reviewsList,
        totalResults: totalNumReviews,
      };
      res.json(response);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
  static async getReviewByIdAPI(req, res, next) {
    const { reviewId } = req.params;
    console.log(reviewId);
    try {
      const review = await ReviewsDataAccess.getReviewById(reviewId);
      res.json(review);
    }
    catch (err) {
      console.log(err); 
    }
  }

  static async postReviewAPI(req, res, next) {
    try {
      const restaurantId = req.params.restaurantId;
      const review = req.body.text;
      const userInfo = {
        name: req.body.name,
        _id: req.body.userId,
      };
      const reviewResponse = await ReviewsDataAccess.addReview(
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
      // console.log(reviewId);
      const reviewResponse = await ReviewsDataAccess.deleteReview(reviewId);
      res.json({ status: "success" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
}
