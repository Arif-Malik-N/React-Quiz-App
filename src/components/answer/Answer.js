import React, { Component } from "react";
import "../../App.css";
class Answer extends Component {
  render(props) {
    let answers = Object.keys(this.props.answers);
    return (
      <div>
        <h2 disabled={this.props.clickedAnswer ? true : false} className="list">
          {answers.map((qa, i) => {
            return (
              <li
                className={
                  this.props.clickedAnswer === qa ? "clicked" : "options"
                }
                onClick={() => this.props.checkAnswer(qa)}
                key={i}
              >
                {this.props.answers[qa]}{" "}
              </li>
            );
          })}
        </h2>
      </div>
    );
  }
}

export default Answer;
