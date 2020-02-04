import React from 'react';
import {Link} from 'react-router-dom';
import "./ReviewCard.css";

const ReviewCard = (props) => {
  const myStyle = {
    position: "absolute",
    top: "20%",
    left: "50%",
    margin: "-70px 0 0 -170px"
  }
  const {reviewId, review} = props;
  //console.log(props);
  //guard clause: render something different if review doesn't exist
  if (props.someData === "yes") {
  return (
    <li className="cardContainer">
      <h3>{review.place}</h3>
      <h3>Rating: {review.rating} stars</h3>


      <h4> Submitted by: {review.author}</h4>

      <h4>Date submitted: {review.published_at}</h4>
    </li>
  );
  }
  else {

    return (
      <li className="cardContainer" style={myStyle}>
       <h3>{review.place}</h3>
      <h3>Rating: {review.rating}</h3>
      {review && <h5>{review.content}</h5>}

      <h4> Submitted by: {review.author}</h4>

      <h4>Date submitted: {review.published_at}</h4>
    </li>
    )
  }
}












export default ReviewCard;
