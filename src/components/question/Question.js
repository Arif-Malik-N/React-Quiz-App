import React from "react";

import "../../App.css";
class Question extends React.Component {
  render(props) {
    return (
      <div>
        <h2 className="questions">{this.props.question}</h2>
      </div>
    );
  }
}

export default Question;
