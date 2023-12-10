import React from "react";
import { useState, useEffect } from "react";
import ReviewDataService from "../services/review-services.js";
import { Link, useParams } from "react-router-dom";


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
      <div className="row">
        {reviews.map((review) => {
          return (
            <div className="col-lg-4 pb-1">
              <div
                className="card"
                style={{
                  backgroundColor: "skyblue",
                  color: "white",
                  border: "1px solid #6610f2",
                  borderRadius: "10px",
                  height: "250px",
                  "min-width": "300px",
                  margin: "10px",
                }}
              >
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{
                      textAlign: "center",
                      border: "4px solid white",
                      borderRadius: "10px",
                    }}
                  >
                    {review.username}
                  </h5>
                  <p className="card-text">
                    <b>Review: </b>
                    {review.text}
                  </p>
                  {user && user.id === review.userId && (
                    <div className="row">
                      <button
                        style={{ backgroundColor: "rgb(102, 16, 242)" }}
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
                        style={{ backgroundColor: "rgb(102, 16, 242)" }}
                      >
                        Edit
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
        <Link to={`/restaurants/${restaurantId}/reviews/new`}>
        Add Review
        </Link>
      </div>
    </div>
  );
}

export default ReviewsList;
