import Restaurant from "../models/restaurant.js";

export default class RestaurantsDataAccess {
    static async getRestaurants({
        filters = null,
        page,
        restaurantsPerPage,
    } = {}) {
        let query = {};
        if (filters) {
            if ("name" in filters) {
                query = { "name": { $regex: filters["name"] } }
            } else if ("cuisine" in filters) {
                query = { "cuisine": { $eq: filters["cuisine"] } }
            } else if ("zipcode" in filters) {
                query = { "address.zipcode": { $eq: filters["zipcode"] } }
            }
        }
        let data = null;
        try {
            data = await Restaurant.find(query)
                .limit(restaurantsPerPage)
                .skip(restaurantsPerPage * page);
            return ({ restaurantsList: data, totalNumRestaurants: data.length })
        }
        catch (err) {
            console.log(err);
            return ({ restaurantsList: [], totalNumRestaurants: 0 });
        }
    }
    static async getRestaurantById(id) {
        try {
            const restaurant = await Restaurant.findById(id);
            return(restaurant);
        }
        catch (err) {
            console.log(err);
            return(null);
        }
    }
}