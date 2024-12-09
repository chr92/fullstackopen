import { useState } from "react";

const Title = () => <h1>give feedback</h1>;

const UpdateFeedback = (typeOfFeedback, setFeedback) => {
  return () => {
    setFeedback((prev) => {
      const newFeedback = {
        ...prev,
        [typeOfFeedback]: prev[typeOfFeedback] + 1,
      };
      const total = newFeedback.good + newFeedback.neutral + newFeedback.bad;
      newFeedback.average = total
        ? (newFeedback.good - newFeedback.bad) / total
        : 0;
      newFeedback.positive = total ? (newFeedback.good / total) * 100 : 0;
      return newFeedback;
    });
  };
};

const Buttons = ({ setFeedback }) => {
  return (
    <div>
      <button onClick={UpdateFeedback("good", setFeedback)}>good</button>
      <button onClick={UpdateFeedback("neutral", setFeedback)}>neutral</button>
      <button onClick={UpdateFeedback("bad", setFeedback)}>bad</button>
    </div>
  );
};

const Statistics = ({ feedback }) => {
  return (
    <div>
      <h1>statistics</h1>
      <p>good {feedback.good}</p>
      <p>neutral {feedback.neutral}</p>
      <p>bad {feedback.bad}</p>
      <Feedback {feedback} />
    </div>
  );
};

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    average: 0,
    positive: 0,
  });

  return (
    <div>
      <Title />
      <Buttons setFeedback={setFeedback} />
      <Statistics feedback={feedback} />
    </div>
  );
};

export default App;
