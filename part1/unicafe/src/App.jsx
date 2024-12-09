import { useState } from "react";

const Title = () => <h1>Give feedback</h1>;

const UpdateFeedback = (typeOfFeedback, setFeedback) => {
  return () => {
    setFeedback((prev) => {
      const newFeedback = {
        ...prev,
        [typeOfFeedback]: prev[typeOfFeedback] + 1,
      };
      const total = newFeedback.good + newFeedback.neutral + newFeedback.bad;
      newFeedback.average = total
        ? ((newFeedback.good - newFeedback.bad) / total).toFixed(2)
        : 0;
      newFeedback.positive = total
        ? ((newFeedback.good / total) * 100).toFixed(1)
        : 0;
      return newFeedback;
    });
  };
};

const Button = ({ typeofFeedback, setFeedback }) => {
  return (
    <button onClick={UpdateFeedback(typeofFeedback, setFeedback)}>
      {typeofFeedback}
    </button>
  );
};

const Buttons = ({ setFeedback }) => {
  return (
    <div>
      <Button typeofFeedback="good" setFeedback={setFeedback} />
      <Button typeofFeedback="neutral" setFeedback={setFeedback} />
      <Button typeofFeedback="bad" setFeedback={setFeedback} />
    </div>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ feedback }) => {
  if (feedback.good === 0 && feedback.neutral === 0 && feedback.bad === 0) {
    return <p>No feedback given</p>;
  } else {
    return (
      <div>
        <h2>Statistics</h2>
        <table>
          <tbody>
            <StatisticLine text="good" value={feedback.good} />
            <StatisticLine text="neutral" value={feedback.neutral} />
            <StatisticLine text="bad" value={feedback.bad} />
            <StatisticLine text="average" value={feedback.average} />
            <StatisticLine text="positive" value={feedback.positive + "%"} />
          </tbody>
        </table>
      </div>
    );
  }
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
