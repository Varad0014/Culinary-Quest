import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  // date: {
  //   type: Date,
  //   default: Date.now,
  // },
});

const Review = mongoose.model("Review", reviewSchema);

export default Review;
