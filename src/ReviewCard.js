import React from "react";
import "./ReviewCard.css";
import CommentForm from "./CommentForm";
import star from "./star.png";

class ReviewCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { comment: "", done: false };
    this.updateComment = this.updateComment.bind(this);
    this.updateDone = this.updateDone.bind(this);
    this.getInitialState = this.getInitialState.bind(this);
  }

  componentDidMount() {
    this.getInitialState();
  }

  getInitialState() {
   var comment = localStorage.getItem(this.props.review.id) || "";
    this.setState({ comment: comment });
  }

  updateComment(newComment) {
    this.setState({ comment: newComment.comment, done: newComment.done });
   localStorage.setItem(this.props.review.id, newComment.comment);
  }

  updateDone(newDone) {
    this.setState({ done: newDone.done });
  }

  render() {
    const myStyle = {
      position: "absolute",
      top: "20%",
      left: "50%",
      margin: "-70px 0 0 -170px"
    };
    //guard clause: render something different if review doesn't exist
    const starInteger = parseInt(this.props.review.rating);
    if (this.props.someData === "yes") {
      return (
        <li className="cardContainer">
          <h3>{this.props.review.place}</h3>
          <h3>
            {[...Array(starInteger)].map((e, i) => (
              <img className="img-responsive" src={star} alt="star" />
            ))}
          </h3>
          <div>
            <h4> Submitted by: {this.props.review.author}</h4>

            <h4>
              Date submitted: {this.props.review.published_at.slice(0, 15)}
            </h4>
          </div>
        </li>
      );
    } else {
      return (
        <div>
          <li className="cardContainer" style={myStyle}>
            <h3>{this.props.review.place}</h3>
            <h3>
              {[...Array(starInteger)].map((e, i) => (
                <img className="img-responsive" src={star} alt="star" />
              ))}
            </h3>
            {this.props.review && <h5>{this.props.review.content}</h5>}

            <h4> Submitted by: {this.props.review.author}</h4>

            <h4>
              Date submitted: {this.props.review.published_at.slice(0, 15)}
            </h4>
          </li>
          <div>
            <CommentForm
              done={this.state.done}
              comment={this.state.comment}
              updateComment={this.updateComment}
              updateDone={this.updateDone}
              id={this.props.review.id}
            />
          </div>
        </div>
      );
    }
  }
}

export default ReviewCard;
