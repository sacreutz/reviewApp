import React from "react";
import "./ReviewList.css";
import ReviewCard from "./ReviewCard";
import { NavLink } from "react-router-dom";

const ReviewList = ({ reviews }) => {
  const renderReviews = reviews.map(review => (
    <ul className="grid-container">
      <NavLink key={review.id} to={`/reviews/${review.id}`}>
        <ReviewCard review={review} reviewId={review.id} someData={"yes"} />
      </NavLink>
    </ul>
  ));

  return <ul>{renderReviews}</ul>;
};

export default ReviewList;
