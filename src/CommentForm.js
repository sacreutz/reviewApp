import React from "react";
import "./CommentForm.css";

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { comment: "", submittedComment: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.isDisabled = this.isDisabled.bind(this);
  }

  handleChange(event) {
    this.setState({ comment: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState(prevState => ({ submittedComment: prevState.comment }));
    this.clearForm();
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
            <input type="text" comment="comment" onChange={this.handleChange} />
          </label>
          <button
            disabled={this.isDisabled()}
            type="submit"
            onClick={this.handleSubmit}
          >
            {" "}
            Submit{" "}
          </button>
          {this.state.submittedComment && <p>{this.state.submittedComment}</p>}
        </form>
      </div>
    );
  }
}
export default CommentForm;
