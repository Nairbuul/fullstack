import { useState } from 'react'

//Exercise 1.9) Unicafe Part 4
//              Change your application to display statistics only once feed back has been gathered.

//Creating a component that'll create a header.
const Header = ({title}) => (<h1>{title}</h1>)


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

//Component that'll print the statistics.
const StatisticsLine = ({value, text}) => (
  <tr>
    <td>
      {text}
    </td>
    <td>{value}</td>
  </tr>
)

//Component that'll compute the averagge.
const Average = ({total, good}) => {
  let average = good/total
  return (
    <div>
      Average {average}
    </div>
  )
}

const Statistics = (props) => {
  console.log(props.array.length)
  let good = props.array[0]
  let neutral = props.array[1]
  let bad = props.array[2]

  let total = 0;
  for(let i=0; i < props.array.length; i++){
    total += props.array[i];
  }
  
  let average = good/props.array.length
  let percentage = ( good / total ) * 100

  if(good != 0){
    return (
      <table>
        <StatisticsLine text='good' value={good}/>
        <StatisticsLine text='neutral' value={neutral}/>
        <StatisticsLine text='bad' value={bad}/>
        <StatisticsLine text='total' value={total}/>
        <Average total={total} good={good}/>
        <Percentage text='positive' percentage={percentage}/>
      </table>
    )
  }
  else if(good == 0 && (neutral != 0 || bad != 0)){
    return (
      <table>
        <StatisticsLine text='good' value={good}/>
        <StatisticsLine text='neutral' value={neutral}/>
        <StatisticsLine text='bad' value={bad}/>
        <StatisticsLine text='total' value={total}/>
        <Average total={total} good={good}/>
      </table>
    )
  }
  else{
    return (
      <table>
        <StatisticsLine text = "No feedback given."/>
      </table>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  //Functions incrementing good/neutral/bad
  const incrementGood = () => {setGood(good +  1)}
  const incrementNeutral =  () => {setNeutral(neutral + 1)}
  const incrementBad = () => {setBad(bad + 1)}

  return (
    <div>
      <Header title={"give feedback"}/>
      <Button handleClick={incrementGood} text='good'/>
      <Button handleClick={incrementNeutral} text='neutral'/>
      <Button handleClick={incrementBad} text='bad'/>
      <Header title={"statistics"}/>
      <Statistics array={[good,neutral,bad]}/>
    </div>
  )
}

export default App