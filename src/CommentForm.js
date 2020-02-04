import React from "react";
import "./CommentForm.css";

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { comment: this.props.comment, submittedComment: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.isDisabled = this.isDisabled.bind(this);
    this.sendDelta = this.sendDelta.bind(this);
  }

  sendDelta(delta) {
    let newComment = Object.assign({}, delta);
    console.log(newComment);
    this.props.updateComment(newComment);
  }

  handleChange(event) {
    this.sendDelta({ comment: event.target.value })
    this.setState({ comment: event.target.value });
   // let newComment =  Object.assign({}, event.target.value, {done: this.props.done});
   // console.log(newComment);
    // this.props.updateComment(newComment);
  }

  handleClick(event) {
    event.preventDefault();
   // this.sendDelta({done: !this.props.done });
    this.setState(prevState => ({ submittedComment: prevState.comment }));
    let newDone = Object.assign({}, {done: !this.props.done})
    this.props.updateDone(newDone)

   // this.sendDelta({comment: event.target.value})


   // var newComment = Object.assign({}, this.props.comment, { done: !this.props.done})
    //this.props.updateComment(newComment);
   // this.isDisabled();
   // this.clearForm();

  }

  clearForm = () => {
    document.getElementById("comment-form").reset();
  };

  isDisabled() {
    if (this.state.submittedComment.length > 0) {
      return true;
    }
    return false;
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
            <input value={this.props.comment} disabled={this.props.done} type="text"  onChange={this.handleChange} />
          </label>
          <button
            // disabled={this.isDisabled()}

            onClick={this.handleClick}
          >

            {this.props.done? "Edit" : "Save"}
          </button>
          {/* {this.props.comment} */}
          {this.state.submittedComment && <p>{this.state.submittedComment}</p>}
        </form>
      </div>
    );
  }
}
export default CommentForm;
