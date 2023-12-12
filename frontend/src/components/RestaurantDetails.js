import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import RestaurantDataService from "../services/restaurant-services.js";
import Restaurant from "./Restaurant.js";
import "../css/RestaurantDetails.css"


function RestaurantDetails() {
    const { restaurantId } = useParams();
    const initialRestaurantState = {
        restaurantId: null,
        name: "",
        address: {},
        cuisine: "",
        contact: {},
        reviews: [],
    };
    const [restaurant, setRestaurant] = useState(initialRestaurantState);
    const getRestaurantByID = (restaurantId) => {
        RestaurantDataService.getRestaurantByID(restaurantId)
            .then(response => {
                console.log(response.data);
                setRestaurant(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }
    useEffect(() => {
        getRestaurantByID(restaurantId);
    }, [restaurantId]);

    return (<div className="container outside-container d-flex flex-column justify-content-center align-items-center">

        {restaurant ? (
            <div className="container d-flex flex-column justify-content-center align-items-center py-5 restaurant-item">
                <h3>{restaurant.name}</h3>
                <p className="details">
                    <div className="my-2"><b>Cuisine:</b> {restaurant.cuisine}</div>
                    <div className="my-2"><b>Address:</b> {restaurant.address.building} {restaurant.address.street},{" "}
                        {restaurant.address.zipcode}</div>
                    <div className="my-2"><b>Contact Number:</b> {restaurant.contact.phone}</div>
                    <div className="my-2"><b>Email:</b> {restaurant.contact.email}</div>

                </p>
                <Link to={`/restaurants/${restaurant._id}/reviews`} className="btn btn-outline-primary col-lg-5 mx-1">
                    View Reviews
                </Link>
                
            
            </div>
        ) : (
            <div className="container d-flex flex-column justify-content-center align-items-center"> No restaurant found </div>
        )
        }
    </div>)
}

export default RestaurantDetails;