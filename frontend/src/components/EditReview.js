import React from "react";
import { useState, useEffect } from "react";
import ReviewDataService from "../services/review-services.js";
import { Link, useParams } from "react-router-dom";



function EditReview({ user }) {
  const { restaurantId, reviewId } = useParams();
  const [review, setReview] = useState(null);
  const [submitted, setSubmitted] = useState(false);


  const getReviewById = async (restaurantId, reviewId) => {
    try {
      const response = await ReviewDataService.getReviewById(restaurantId, reviewId);
      setReview(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getReviewById(restaurantId, reviewId);
  }, [restaurantId, reviewId]);

  const handleInputChange = (event) => {
    const currentReview = {
      ...review, text: event.target.value
    }
    setReview(currentReview);
  };

  const saveReview = async () => {
    let data = {
      text: review.text
    };
    
    ReviewDataService.updateReview(restaurantId, reviewId, data)
      .then((response) => {
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div>
      {review ? (
        <div className="submit-form">
          {submitted ? (
            <div>
              <h4>You submitted successfully!</h4>
              <Link to={`/restaurants/${restaurantId}/reviews`} className="btn btn-success">
                Back to Reviews
              </Link>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="description">Edit Review</label>
                <input
                  type="text"
                  className="form-control"
                  id="text"
                  required
                  value={review.text}
                  onChange={handleInputChange}
                  name="text"
                />
              </div>
              <button onClick={saveReview} className="btn btn-success">
                Submit
              </button>
            </div>
          )}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};



export default EditReview;