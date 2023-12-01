import RestaurantsDataAccess from "../data-access/restaurantsDAO.js";

export default class RestaurantController {
    static async getRestaurantsAPI(req, res, next) {
        let restaurantsPerPage = 15;
        let page = 0;
        if (req.query.restaurantsPerPage) {
            restaurantsPerPage = parseInt(req.query.restaurantsPerPage, 10);
        }
        if (req.query.page) {
            page = parseInt(req.query.page, 10)
        }
        let filters = {};
        if (req.query.cuisine) {
            filters.cuisine = req.query.cuisine
        } else if (req.query.zipcode) {
            filters.zipcode = req.query.zipcode
        } else if (req.query.name) {
            filters.name = req.query.name
        }
        const { restaurantsList, totalNumRestaurants } = await RestaurantsDataAccess.getRestaurants({
            filters,
            page,
            restaurantsPerPage,
        })
        const response = {
            restaurants: restaurantsList,
            page: page,
            filters: filters,
            entriesPerPage: restaurantsPerPage,
            totalResults: totalNumRestaurants,
        }
        res.json(response);
    }

    static async getRestaurantByIdAPI(req, res, next) {
        const {id} = req.params;
        try{
            const restaurant = await RestaurantsDataAccess.getRestaurantById(id);
            res.json(restaurant);
        }
        catch(err){
            console.log(err);
        }
    }
    static async getCuisinesAPI(req, res, next) {
        try{
            const cuisines = await RestaurantsDataAccess.getCuisines();
            res.json(cuisines);
        }
        catch(err){
            console.log(err);
        }
    }
}