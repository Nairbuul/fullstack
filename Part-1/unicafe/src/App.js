import { useState } from 'react'

//Exercise 1.7) Unicafe Part 2. 
//            Display the average and the percentage of positive.

//Creating a component that'll create a header.
const Header = ({title}) => (<h1>{title}</h1>)

//Creating a component to display the variables.
const Display = ({value, name}) => (<div>{name} {value}</div>)

//Creating a componet that'll create a button.
const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

//Component that'll display the percentage.
const Percentage = (props) => (
  <div>
    {props.text} {props.percentage}%
  </div>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  //Functions incrementing good/neutral/bad
  const incrementGood = () => {setGood(good +  1)}
  const incrementNeutral =  () => {setNeutral(neutral + 1)}
  const incrementBad = () => {setBad(bad + 1)}

  //Variables for (amount of clicks), (average), (perctange of positive responses).
  const total = good+neutral+bad
  const average = total/3
  const positivePercentage = (good/total)*100

  return (
    <div>
      <Header title={"give feedback"}/>
      <Button handleClick={incrementGood} text='good'/>
      <Button handleClick={incrementNeutral} text='neutral'/>
      <Button handleClick={incrementBad} text='bad'/>
      <Header title={"statistics"}/>
      <Display value={good} name='good'/>
      <Display value={neutral} name='neutral'/>
      <Display value={bad} name='bad'/>
      <Display value={total} name='total:'/>
      <Display value={average} name='average'/>
      <Percentage percentage={positivePercentage} text="Positive:"/>
    </div>
  )
}

export default App