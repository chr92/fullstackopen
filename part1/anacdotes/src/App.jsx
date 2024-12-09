import { useState } from "react";

const Anecdote = ({ quote }) => {
  return (
    <div>
      <div>{quote.quote}</div>
      <div>has {quote.votes} votes</div>
    </div>
  );
};

const RandomNumber = (max) => Math.floor(Math.random() * max);

const getNextAnecdote = (setSelected, anecdotes) => {
  setSelected(RandomNumber(anecdotes.length));
};

const handleVote = (anecdotes, selected, setAnecdotes) => {
  const newAnecdotes = [...anecdotes];
  newAnecdotes[selected].votes += 1;
  setAnecdotes(newAnecdotes);
};

const NextButton = ({ setSelected, anecdotes }) => (
  <button onClick={() => getNextAnecdote(setSelected, anecdotes)}>
    Next Anecdote
  </button>
);

const VoteButton = ({ anecdotes, selected, setAnecdotes }) => (
  <button onClick={() => handleVote(anecdotes, selected, setAnecdotes)}>
    Vote
  </button>
);

const PopularAnecdote = ({ anecdotes }) => {
  const mostVotes = anecdotes.reduce(
    (prev, current) => (prev.votes > current.votes ? prev : current),
    anecdotes[0]
  );

  return (
    <div>
      <h2>Anecdote with most votes</h2>
      <Anecdote quote={mostVotes} />
    </div>
  );
};

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    { quote: "If it hurts, do it more often.", votes: 0 },
    {
      quote: "Adding manpower to a late software project makes it later!",
      votes: 0,
    },
    {
      quote:
        "The first 90 percent of the code accounts for the first 90 percent of the development time... The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
      votes: 0,
    },
    {
      quote:
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      votes: 0,
    },
    { quote: "Premature optimization is the root of all evil.", votes: 0 },
    {
      quote:
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      votes: 0,
    },
    {
      quote:
        "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
      votes: 0,
    },
    { quote: "The only way to go fast, is to go well.", votes: 0 },
  ]);

  const [selected, setSelected] = useState(0);

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <Anecdote quote={anecdotes[selected]} />
      <NextButton anecdotes={anecdotes} setSelected={setSelected} />
      <VoteButton
        anecdotes={anecdotes}
        selected={selected}
        setAnecdotes={setAnecdotes}
      />
      <PopularAnecdote anecdotes={anecdotes} />
    </div>
  );
};

export default App;
