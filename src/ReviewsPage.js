import React from "react";
import ReviewList from "./ReviewList";
import "./ReviewsPage.css";

const ReviewsPage = ({ match, reviews }) => (
  <div className="grid-container">
    <ReviewList reviews={reviews} fullData={"no"} />
  </div>
);

export default ReviewsPage;
