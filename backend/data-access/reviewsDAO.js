import Restaurant from "../models/restaurant.js";
import Review from "../models/review.js";
import mongoose from "mongoose";

export default class ReviewsDataAccess {
  static async getReviews(restaurantId) {
    try {
      const getResponse = await Review.find({
        restaurantId: new mongoose.Types.ObjectId(restaurantId),
      });

      console.log(getResponse);
      // return getResponse.
      return { reviewsList: getResponse, totalNumReviews: getResponse.length };
    } catch (e) {
      console.error(`Unable to update review: ${e}`);
    }
  }

  static async addReview(restaurantId, user, review) {
    try {
      const reviewDoc = [
        {
          username: user.name,
          userId: user._id,
          // date: date,
          text: review,
          restaurantId: new mongoose.Types.ObjectId(restaurantId),
        },
      ];

      // return await reviews.insertOne(reviewDoc)

      const rev = await Review.insertMany(reviewDoc);
      console.log(rev);
    } catch (e) {
      console.error(`Unable to post review: ${e}`);
    }
  }

  static async updateReview(reviewId, userId, text) {
    try {
      const updateResponse = await Review.findOneAndUpdate(
        { userId: userId, _id: new mongoose.Types.ObjectId(reviewId) },
        { text: text }
      );

      console.log(updateResponse);
    } catch (e) {
      console.error(`Unable to update review: ${e}`);
    }
  }

  static async deleteReview(reviewId) {
    try {
      const deleteResponse = await Review.findByIdAndDelete(reviewId);

      console.log(deleteResponse);
    } catch (e) {
      console.error(`Unable to delete review: ${e}`);
    }
  }
}
