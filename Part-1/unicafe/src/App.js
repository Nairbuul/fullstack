import { useState } from 'react'

//Exercise 1.6) Unicafe Part 1. 
//          Create a website that has three buttons that'll report the feedback of the unicafe.
//          Then display the statistics onto the web page.

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


//This doesn't work figure out why later.
// const ArrayOfButtons = (props) => (
//   <div>
//     <Button onClick={props.array[0]} text={props.array[1]}/>
//     <Button onClick={props.array[2]} text={props.array[3]}/>
//     <Button onClick={props.array[4]} text={props.array[5]}/>
//   </div>
// )

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGood = () => {setGood(good +  1)}
  const incrementNeutral =  () => {setNeutral(neutral + 1)}
  const incrementBad = () => {setBad(bad + 1)}

  // const array=[incrementGood, 'good', incrementBad, 'Bad', incrementNeutral, 'Neutral']

  return (
    <div>
      <Header title={"give feedback"}/>
      {/* <ArrayOfButtons array={array}/> */}
      <Button handleClick={incrementGood} text='good'/>
      <Button handleClick={incrementNeutral} text='neutral'/>
      <Button handleClick={incrementBad} text='bad'/>
      <Header title={"statistics"}/>
      <Display value={good} name='good'/>
      <Display value={neutral} name='neutral'/>
      <Display value={bad} name='bad'/>
    </div>
  )
}

export default App