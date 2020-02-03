import React from 'react';
import {Link} from 'react-router-dom';
import "./ReviewCard.css";

const ReviewCard = (props) => {
  const {reviewId, review} = props;
  //console.log(props);
  //guard clause: render something different if review doesn't exist
  return (
    <li className="cardContainer">
      <h3>Rating: {review.rating}</h3>
      {review && <h5>{review.content}</h5>}
      <h4> Submitted by: {review.author}</h4>

      <h4>Date submitted: {review.published_at}</h4>
    </li>
  );
}












export default ReviewCard;