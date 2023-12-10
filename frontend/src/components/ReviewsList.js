import React from "react";
import { useState, useEffect } from "react";
import ReviewDataService from "../services/review-services.js";
import { Link, useParams } from "react-router-dom";
import Review from './Review.js'
function ReviewsList() {
    const { restaurantId } = useParams();
    const [reviews, setReviews] = useState([]);
    const getAllReviews = (restaurantId) => {
        ReviewDataService.getReviews(restaurantId)
        .then(response => {
            console.log(response.data);
            setReviews(response.data.reviews)
        })
        .catch(e => {
            console.log(e);
        });
    };
    useEffect(() => {
        getAllReviews(restaurantId);
    }, [restaurantId]);
    return (<div>
        <div className="row">
            {reviews.map((review) => {
                return (<Review key={review._id} review={review} />)
            })}
        </div>
    </div>)
}


export default ReviewsList;