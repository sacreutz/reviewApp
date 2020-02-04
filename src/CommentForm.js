import React from 'react';
import './CommentForm.css';

class CommentForm extends React.Component {



  constructor(props) {
    super(props);
    this.state = {comment: '',
    submittedComment: ''}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({comment: event.target.value});
  }

  handleSubmit(event) {
   // alert('A comment was submitted: ' + this.state.value);
    event.preventDefault();
    this.setState(prevState => ({ submittedComment: prevState.comment }));


  }

  render() {

    const commentStyle = {
      position: "absolute",
      top: "70%",
      left: "50%",
      margin: "-70px 0 0 -170px"
   }
    return (
      <div className="formContainer" style={commentStyle}>
      <form onSubmit={this.handleSubmit}>
        <label>
          Add a comment:
          <input type="text" comment="comment" onChange={this.handleChange} />
        </label>
        <button type="submit" onClick={this.handleSubmit}> Submit </button>
        {this.state.submittedComment && <p>{this.state.submittedComment}</p>}
      </form>

      </div>
    );
  }
}
export default CommentForm;


