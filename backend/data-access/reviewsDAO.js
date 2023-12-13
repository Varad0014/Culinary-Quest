import Review from "../models/review.js";
import mongoose from "mongoose";

export default class ReviewsDataAccess {
  //Get all reviews for a particular restuarant
  static async getReviews(restaurantId) {
    try {
      const getResponse = await Review.find({
        restaurantId: new mongoose.Types.ObjectId(restaurantId),
      });

      console.log(getResponse);
      return { reviewsList: getResponse, totalNumReviews: getResponse.length };
    } catch (e) {
      console.error(`Unable to get reviews: ${e}`);
      return { reviewsList: [], totalNumReviews: 0 };
    }
  }
  static async getReviewById(reviewId) {
    try {
      const review = await Review.findById(reviewId);
      return review;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
  static async addReview(restaurantId, user, review) {
    try {
      const reviewDoc = [
        {
          username: user.name,
          userId: user._id,
          text: review,
          restaurantId: new mongoose.Types.ObjectId(restaurantId),
        },
      ];
      console.log(reviewDoc);
      const rev = await Review.insertMany(reviewDoc);
      console.log(rev);
    } catch (e) {
      console.error(`Unable to post review: ${e}`);
      throw e;
    }
  }

  static async updateReview(reviewId, text) {
    try {
      const updateResponse = await Review.findByIdAndUpdate(
        reviewId,
        { text: text },
        { new: true }
      );
      console.log(updateResponse);
    } catch (e) {
      console.error(`Unable to update review: ${e}`);
      throw e;
    }
  }

  static async deleteReview(reviewId) {
    try {
      const deleteResponse = await Review.findByIdAndDelete(reviewId);
      console.log(deleteResponse);
    } catch (e) {
      console.error(`Unable to delete review: ${e}`);
      throw e;
    }
  }
}
