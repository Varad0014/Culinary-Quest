import React from "react";
import "../css/Restaurant.css"
import { Link } from "react-router-dom";

function Restaurant({ restaurant }) {
  return (
    <div className="col-lg-4 col-md-6 d-flex justify-content-center  my-3">
      <div
        className="card"
      >
        <div className="card-body">
          <h5
            className="card-title"

          >
            {restaurant.name}
          </h5>
          <div className="card-text">
            <div className="my-2"><b>Cuisine:</b> {restaurant.cuisine}</div>
            
            <div className="my-2"><b>Zipcode:</b> {restaurant.address.zipcode}</div>

          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link
              to={`/restaurants/${restaurant._id}`}
              className="btn btn-outline-primary col-lg-5 mx-1"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Restaurant;
