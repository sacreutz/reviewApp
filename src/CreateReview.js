import React from 'react'
//style={{border: none, width: 800, height: 450}}
class createReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review : []
    }
  }

  render() {
    return (
        <div>
        <h1>HELLO {this.props.author}</h1>
        </div>
    )
  }

}

export default createReview;

