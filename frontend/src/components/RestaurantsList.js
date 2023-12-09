import React from "react";
import { useState, useEffect } from "react";
import RestaurantDataService from "../services/restaurant-services.js";
import Restaurant from "./Restaurant.js";

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
        <div className="row pb-1">
            <div className="input-group col-lg-4">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search Restaurant by Name"
                    value={searchName}
                    onChange={onChangeSearchName}
                    style={{ "borderRadius": "30px" }}
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
            <div className="input-group col-lg-4">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search Restaurant by Zip Code"
                    value={searchZip}
                    onChange={onChangeSearchZip}
                    style={{ "borderRadius": "30px" }}
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
            <div className="input-group col-lg-4">

                <select onChange={onChangeSearchCuisine} style={{ "borderRadius": "30px" }}>
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