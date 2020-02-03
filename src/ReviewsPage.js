import React from 'react';
import { Route } from 'react-router-dom';
import ReviewList from './ReviewList';
import ReviewCard from './ReviewCard';
import './ReviewsPage.css';

const ReviewsPage = ({ match, reviews }) => (
  <div className="grid-container">
    <ReviewList reviews={reviews} />


  </div>
)

export default ReviewsPage
