import React from "react";
import { useState, useEffect } from "react";
import RestaurantDataService from "../services/restaurant-services.js";
import Restaurant from "./Restaurant.js";

function RestaurantsList() {
    const [restaurants, setRestaurants] = useState([]);
    useEffect(() => {
        getRestaurantsDB();
    }, []);
    const getRestaurantsDB = () => {
        RestaurantDataService.getAllRestaurants()
            .then(response => {
                console.log(response.data);
                setRestaurants(response.data.restaurants);
            })
            .catch(e => {
                console.log(e);
            });
    };
    return (<ul>
        {restaurants.map((restaurant) => {
            return(<Restaurant {...restaurant}/>)
        })}
    </ul>)
}

export default RestaurantsList;