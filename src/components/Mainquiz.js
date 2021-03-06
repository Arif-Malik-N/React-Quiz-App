import React from "react";

import Question from "./question/Question";
import Answer from "./answer/Answer";

class Mainquiz extends React.Component {
  state = {
    questions: {
      1: "HTML is what type of language ?",
      2: "How can you make a bulleted list with numbers",
      3: "HTML tags are surrounded by which type of brackets",
      4: "HTML web pages can be read and rendered by",
    },
    answers: {
      1: {
        1: "Markup Language",
        2: "Scripting Language",
        3: "Network Protocol",
      },
      2: {
        1: "<ol></ol>",
        2: "<ul></ul>",
        3: "<list></list>",
      },
      3: {
        1: "Angle",
        2: "curly",
        3: "Round",
      },
      4: {
        1: "Complier",
        2: "Web browser",
        3: "Server",
      },
    },
    correctAnswers: {
      1: "1",
      2: "1",
      3: "1",
      4: "2",
    },
    correctAnswer: 0,
    clickedAnswer: 0,
    step: 1,
    score: 0,
  };

  checkAnswer = (answer) => {
    let { correctAnswers, step, score } = this.state;
    if (answer === correctAnswers[step]) {
      this.setState({
        score: score + 1,
        correctAnswer: correctAnswers[step],
        clickedAnswer: answer,
      });
    } else {
      this.setState({
        correctAnswer: 0,
        clickedAnswer: answer,
      });
    }
  };

  nextQuestion = (step) => {
    this.setState(
      {
        step: step + 1,
        correctAnswer: 0,
        clickedAnswer: 0
      },
    );
  };

  render() {
    let { questions, step, answers, score,clickedAnswer } = this.state;
    console.log(score);
    return (
      <div>
        {step <= Object.keys(questions).length ? (
          <>
            <Question question={questions[step]} />
            <Answer answers={answers[step]} checkAnswer={this.checkAnswer} clickedAnswer = {clickedAnswer} />
            <button onClick={() => this.nextQuestion(step)}>Next</button>
          </>
        ) : (
          <div className="result">
            <h1>Result</h1>
            <p>
              Your score is: {score} of {Object.keys(questions).length}
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default Mainquiz;
