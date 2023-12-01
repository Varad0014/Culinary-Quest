import express from 'express';
import RestaurantController from '../controllers/restaurants.controller.js';

const router = express.Router();
router.route("/").get(RestaurantController.getRestaurantsAPI);
router.route("/cuisines").get(RestaurantController.getCuisinesAPI);
router.route("/:id").get(RestaurantController.getRestaurantByIdAPI);



router.route("/:id/reviews").get(async (req, res, next)=>{
    const { id } = req.params;
    res.send(`Display restaurant reviews with id ${id}`);
});
router.route("/:id/reviews").post(async (req, res, next)=>{
    const { id } = req.params;
    res.send(`Add new review`);
});
router.route("/:id/reviews/new").get(async (req, res, next)=>{
    const { id } = req.params;
    res.send(`Display form to add review`);
});
router.route("/:id/reviews/:reviewId/edit").get(async (req, res, next)=>{
    const { id, reviewId } = req.params;
    res.send(`Send edit form for review with id ${reviewId} of restaurant with id ${id}`);
});
router.route("/:id/reviews/:reviewId").patch(async (req, res, next)=>{
    const { id, reviewId } = req.params;
    res.send(`Edit review with id ${reviewId} of restaurant with id ${id}`);
});
router.route("/:id/reviews/:reviewId").delete(async (req, res, next)=>{
    const { id, reviewId } = req.params;
    res.send(`Delete review with id ${reviewId} of restaurant with id ${id}`);
});


export default router;
