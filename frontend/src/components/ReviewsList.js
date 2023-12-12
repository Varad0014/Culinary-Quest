import React from "react";
import { useState, useEffect } from "react";
import ReviewDataService from "../services/review-services.js";
import { Link, useParams } from "react-router-dom";
import { Tilt } from "react-tilt";
import "../css/ReviewsList.css";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

function ReviewsList({ user }) {
  const { restaurantId } = useParams();
  const [reviews, setReviews] = useState([]);
  const getAllReviews = async (restaurantId) => {
    ReviewDataService.getReviews(restaurantId)
      .then((response) => {
        console.log(response.data);
        setReviews(response.data.reviews);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const deleteReview = async (reviewId, restaurantId) => {
    try {
      await ReviewDataService.deleteReview(reviewId, restaurantId);
      await getAllReviews(restaurantId);
      console.log("Nuked");
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getAllReviews(restaurantId);
  }, [restaurantId]);
  return (
    <div>
      <Link
        to={`/restaurants/${restaurantId}/reviews/new`}
        className="btn btn-outline-primary col-lg-3 mx-1 my-5"
      >
        Add Review
      </Link>
      <div className="row">
        {reviews.map((review) => {
          return (
            <div className="col-xl-4 col-md-6 d-flex justify-content-center  my-3">
              <Tilt
                options={defaultOptions}
                style={{ height: "100%", width: "100%" }}
              >
                <div className="review-card card">
                  <div className="card-body">
                    <h5 className="card-title">{review.username}</h5>
                    <div className="card-text d-flex flex-column justify-content-between">
                      <div className="my-2"> {review.text}</div>
                      {user && user.id === review.userId && (
                        <div className="row d-flex flex justify-content-center">
                          <button
                            className="btn btn-primary col-lg-5 mx-1 mb-1"
                            onClick={() =>
                              deleteReview(review._id, review.restaurantId)
                            }
                          >
                            Delete
                          </button>
                          <Link
                            to={`/restaurants/${restaurantId}/reviews/${review._id}/edit`}
                            className="btn btn-primary col-lg-5 mx-1 mb-1"
                          >
                            Edit
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Tilt>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ReviewsList;
