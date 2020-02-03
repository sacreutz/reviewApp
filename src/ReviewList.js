import Data from './jsonData';
import React from 'react'
import './ReviewList.css';
import CreateReview from './CreateReview';
import ReviewCard from './ReviewCard';
import {Link, Route, Router, NavLink} from 'react-router-dom';

const ReviewList = ({ reviews }) => {
  const renderReviews = reviews.map(review =>
    <ul className="grid-container">
    <NavLink key={review.id} to={`/reviews/${review.id}`}><ReviewCard review={review} reviewId={review.id}/></NavLink>
    </ul>
  );

  return (
    <ul>
      {renderReviews}
    </ul>
  );
};


export default ReviewList;
