
import React from "react";
import { Link } from "react-router-dom";

function Restaurant({ restaurant }) {
    const address = `${restaurant.address.building} ${restaurant.address.street}, ${restaurant.address.zipcode}`;
    return (
        <div className="col-lg-4 pb-1">
            <div className="card" style={{ "backgroundColor": "#0d6efd", "color": "white", "border": "1px solid #6610f2", "borderRadius": "10px", "height": "250px", "min-width": "300px", "margin": "10px" }}>
                <div className="card-body" >
                    <h5 className="card-title" style={{ "textAlign": "center", "border": "4px solid white", "borderRadius": "10px" }}>{restaurant.name}</h5>
                    <p className="card-text">
                        <b>Cuisine: </b>{restaurant.cuisine}<br />
                        <b>Address: </b>{address}
                    </p>
                    <div style={{ "display": "flex", "justifyContent": "center" }}>
                        <Link to={`/restaurants/${restaurant._id}/reviews`} className="btn btn-primary col-lg-5 mx-1 mb-1" style={{ "backgroundColor": "#6610f2" }}>
                            Reviews
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Restaurant;