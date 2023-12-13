import React from "react";
import { useState, useEffect } from "react";
import RestaurantDataService from "../services/restaurant-services.js";
import Restaurant from "./Restaurant.js";
import "../css/RestaurantsList.css"

function RestaurantsList() {
    const [restaurants, setRestaurants] = useState([]);
    const [searchName, setSearchName] = useState("");
    const [searchZip, setSearchZip] = useState("");
    const [searchCuisine, setSearchCuisine] = useState("");
    const [cuisines, setCuisines] = useState(["All Cuisines"]);

    useEffect(() => {
        getAllRestaurants();
        getAllCuisines();
    }, []);
    const onChangeSearchName = e => {
        const searchName = e.target.value;
        setSearchName(searchName);
    };

    const onChangeSearchZip = e => {
        const searchZip = e.target.value;
        setSearchZip(searchZip);
    };

    const onChangeSearchCuisine = e => {
        const searchCuisine = e.target.value;
        setSearchCuisine(searchCuisine);

    };

    const getAllRestaurants = () => {
        RestaurantDataService.getRestaurants()
            .then(response => {
                console.log(response.data);
                setRestaurants(response.data.restaurants);
            })
            .catch(e => {
                console.log(e);
            });
    };
    const getAllCuisines = () => {
        RestaurantDataService.getCuisines()
            .then(response => {
                console.log(response.data);
                setCuisines(["All Cuisines"].concat(response.data));
            })
            .catch(e => {
                console.log(e);
            });
    };

    const refreshList = () => {
        getAllRestaurants();
    };

    const find = (query, by) => {
        RestaurantDataService.find(query, by)
            .then(response => {
                console.log(response.data);
                setRestaurants(response.data.restaurants);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const findByName = () => {
        find(searchName, "name")
    };

    const findByZip = () => {
        find(searchZip, "zipcode")
    };

    const findByCuisine = () => {
        if (searchCuisine === "All Cuisines") {
            refreshList();
        } else {
            find(searchCuisine, "cuisine")
        }
    };


    return (<div>
        <div className="row restaurant-list">
            <div className="input-group mt-3 mb-2 d-flex justify-content-between">
                <input
                    type="text"
                    placeholder="Search Restaurant by Name"
                    value={searchName}
                    onChange={onChangeSearchName}
                    
                />
                <div className="input-group-append">
                    <button
                        className="btn btn-outline-primary"
                        type="button"
                        onClick={findByName}
                    >
                        Search
                    </button>
                </div>
            </div>
            <div className="input-group my-2 d-flex justify-content-between">
                <input
                    type="text"
                    placeholder="Search Restaurant by Zip Code"
                    value={searchZip}
                    onChange={onChangeSearchZip}
                    
                />
                <div className="input-group-append">
                    <button
                        className="btn btn-outline-primary"
                        type="button"
                        onClick={findByZip}
                    >
                        Search
                    </button>
                </div>
            </div>
            <div className="input-group my-2">

                <select onChange={onChangeSearchCuisine} >
                    {cuisines.map(cuisine => {
                        return (
                            <option value={cuisine}> {cuisine.substr(0, 20)} </option>
                        )
                    })}
                </select >

                <div className="input-group-append">
                    <button
                        className="btn btn-outline-primary"
                        type="button"
                        onClick={findByCuisine}
                    >
                        Search
                    </button>
                </div>

            </div>
        </div>
        <div className="row">
            {restaurants.map((restaurant) => {
                return (<Restaurant key={restaurant._id} restaurant={restaurant} />)
            })}
        </div>
    </div>)
}

export default RestaurantsList;