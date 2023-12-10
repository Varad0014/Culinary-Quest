import React from "react";
import { useState, useEffect } from "react";
import ReviewDataService from "../services/review-services.js";
import { Link, useParams } from "react-router-dom";



function AddReview({ user }) {
    const { restaurantId, reviewId } = useParams();
    const [reviewText, setReviewText] = useState("");
    const [submitted, setSubmitted] = useState(false);



    const handleInputChange = (event) => {
        setReviewText(event.target.value);
    };

    const saveReview = async () => {
        const data = {
            userId: user.id,
            name: user.name,
            text: reviewText
        }
        console.log(data);
        ReviewDataService.createReview(restaurantId, data)
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
            {user ? (
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
                                <label htmlFor="description">
                                    Create Review
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="text"
                                    required
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
                <div>Please log in.</div>
            )}
        </div>)
};



export default AddReview;