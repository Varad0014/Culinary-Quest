import express from "express";
import RestaurantController from "../controllers/restaurants.controller.js";
import ReviewsController from "../controllers/reviews.controller.js";

const router = express.Router();
router.route("/").get(RestaurantController.getRestaurantsAPI);
router.route("/cuisines").get(RestaurantController.getCuisinesAPI);
router.route("/:id").get(RestaurantController.getRestaurantByIdAPI);

router.route("/:id/reviews").get(ReviewsController.getReviewsAPI);

router.route("/:id/reviews").post(ReviewsController.postReviewAPI);

// router.route("/:id/reviews/new").get(async (req, res, next) => {
//   const { id } = req.params;
//   res.send(`Display form to add review`);
// });

// router.route("/:id/reviews/:reviewId/edit").get(async (req, res, next) => {
//   const { id, reviewId } = req.params;
//   res.send(
//     `Send edit form for review with id ${reviewId} of restaurant with id ${id}`
//   );
// });

router.route("/:id/reviews/:reviewId").patch(ReviewsController.updateReviewAPI);

router
  .route("/:id/reviews/:reviewId")
  .delete(ReviewsController.deleteReviewAPI);

export default router;
