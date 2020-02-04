import React from "react";
import "./CommentForm.css";

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { comment: this.props.comment, submittedComment: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.sendDelta = this.sendDelta.bind(this);
  }

  componentDidMount() {
    document.getElementById('result').innerHTML = localStorage.getItem(this.props.id);
  }

  sendDelta(delta) {
    let newComment = Object.assign({}, delta);
    this.props.updateComment(newComment);
  }

  handleChange(event) {
    this.sendDelta({ comment: event.target.value });
    this.setState({ comment: event.target.value });


  }

  handleClick(event) {
    event.preventDefault();
    this.setState(prevState => ({ submittedComment: prevState.comment }));

    let newDone = Object.assign({}, { done: !this.props.done });
    this.props.updateDone(newDone);

    document.getElementById('result').innerHTML =
    localStorage.getItem(this.props.id);
  }

  render() {
    const commentStyle = {
      position: "absolute",
      top: "80%",
      left: "50%",
      margin: "-70px 0 0 -170px"
    };
    return (
      <div className="formContainer" style={commentStyle}>
        <form id="comment-form" onSubmit={this.handleSubmit}>
          <label>
            Add a comment:
            <input
              value={this.props.comment}
              disabled={this.props.done}
              type="text"
              onChange={this.handleChange}
            />
          </label>
          <button onClick={this.handleClick}>
            {this.props.done ? "Edit" : "Save"}
          </button>
          {/* <p>{this.props.comment}</p> */}
          <p id="result"></p>
        </form>
      </div>
    );
  }
}
export default CommentForm;
