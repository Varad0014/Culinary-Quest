import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import RestaurantDataService from "../services/restaurant-services.js";
import Restaurant from "./Restaurant.js";


function RestaurantDetails() {
    const { id } = useParams();
    const initialRestaurantState = {
        id: null,
        name: "",
        address: {},
        cuisine: "",
        contact: {},
        reviews: [],
    };
    const [restaurant, setRestaurant] = useState(initialRestaurantState);
    const getRestaurantByID = (id) => {
        RestaurantDataService.getRestaurantByID(id)
            .then(response => {
                console.log(response.data);
                setRestaurant(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }
    useEffect(() => {
        getRestaurantByID(id);
    }, [id]);

    return (<div>

        {restaurant ? (
            <div>
                <h3>{restaurant.name}</h3>
                <p>
                    <b>Cuisine: </b>
                    {restaurant.cuisine}
                    <br />
                    <b>Address: </b>
                    {restaurant.address.building} {restaurant.address.street},{" "}
                    {restaurant.address.zipcode}
                    <br />
                    <b>Contact Number: </b>
                    {restaurant.contact.phone}
                    <br />
                    <b>Email: </b>
                    {restaurant.contact.email}

                </p>
                <Link to={`/restaurants/${restaurant._id}/reviews`} className="btn btn-primary col-lg-5 mx-1 mb-1" style={{ "backgroundColor": "#6610f2" }}>
                    View Reviews
                </Link>
            </div>
        ) : (
            <div> No restaurant found </div>
        )
        }
    </div>)
}

export default RestaurantDetails;