import React from "react";
import "../css/Restaurant.css"
import { Link } from "react-router-dom";
import { Tilt } from 'react-tilt'

const defaultOptions = {
  reverse: false,  // reverse the tilt direction
  max: 35,     // max tilt rotation (degrees)
  perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000,   // Speed of the enter/exit transition
  transition: true,   // Set a transition on enter/exit.
  axis: null,   // What axis should be disabled. Can be X or Y.
  reset: true,    // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

function Restaurant({ restaurant }) {
  return (
    
      <div className="col-xl-4 col-md-6 d-flex justify-content-center  my-3">
      <Tilt options={defaultOptions} style={{ height: "100%", width: "100%" }}>
        <div
          className="restaurant-card card"
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
            <div className="d-flex flex-column align-items-center" >
              <Link
                to={`/restaurants/${restaurant._id}`}
                className="btn btn-outline-primary col-lg-5 mx-1"
              >
                Details
              </Link>
            </div>
          </div>
        </div>
     </Tilt>
      </div>

  );
}

export default Restaurant;
