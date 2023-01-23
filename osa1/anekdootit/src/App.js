import {useState} from "react";

const Header = props => (
  <div>
    <h1> {props.text} </h1> 
  </div>
)

const Anecdote = props => (
  <div>
    {props.text}
  </div>
)

const Votes = props => (
  <div>
    {props.votes}
  </div>
)

const Content = props => (
  <div>
    <Anecdote text={props.text} />
    <Votes votes={props.votes} />
  </div>
)

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const HeaderWithContent = props => (
  <div> 
    <Header text={props.header} />
    <Content text={props.anecdote} votes={props.votes} />
  </div>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(10))

  const randomNumber = (min, max) => {
    const random = Math.floor(Math.random() * (max - min + 1) + min)
    console.log("Random number: ", random)
    return random 
  }

  const voteCurrentAnecdote = () => {
    const newVotes = { ...votes }
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  const setValueToRandom = () => {
    const number = randomNumber(0, 7)
    setSelected(number)
  }

  const findIndexOfMaxVotes = () => {
    var max = votes[0];
    var maxIndex = 0;

    for (var i in votes) {
      if (votes[i] > max) {
          maxIndex = i;
          max = votes[i];
      }
    }

    return maxIndex;
  }

  var indexOfMostVotes = findIndexOfMaxVotes()
  // console.log(indexOfMostVotes)

  return (
    <div>
      <HeaderWithContent header="Anecdote of the day" anecdote={anecdotes[selected]} votes={votes[selected]} />
      <Button handleClick={() => voteCurrentAnecdote()} text="vote" />
      <Button handleClick={() => setValueToRandom()} text="next anecdote" />

      <HeaderWithContent header="Anecdote with most votes" anecdote={anecdotes[indexOfMostVotes]} votes={votes[indexOfMostVotes]} />
    </div>
  )
}

export default App;