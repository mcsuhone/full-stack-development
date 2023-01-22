import {useState} from "react";

const Header = () => (
  <div>
    <h1> give feedback </h1>
  </div>
)

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatHeader = () => (
  <div> <h1> statistics </h1> </div>
)

const StatisticLine = props => (
  <tr>
    <td> {props.text} </td>
    <td> {props.value} </td>
  </tr>
)

const Statistics = props => {
  const all = props.good + props.neutral + props.bad
  const average = ((props.good - props.bad) / all).toFixed(2)
  const positive = String((props.good * 100 / all).toFixed(2)) + " %"
  
  if (all === 0) {
    return (
      <div> <p> No feedback given </p> </div> 
    )
  }
  else {
    return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive} />
        </tbody>
      </table>
    </div>
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const setToValue = (setFunction, newValue) => {
    setFunction(newValue)
  }

  return (
    <div>
      <Header />
      <Button handleClick={() => setToValue(setGood, good + 1)} text="good" />
      <Button handleClick={() => setToValue(setNeutral, neutral + 1)} text="neutral" />
      <Button handleClick={() => setToValue(setBad, bad + 1)} text="bad" />
      <StatHeader />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App;