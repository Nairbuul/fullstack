import { useState } from 'react'

//Exercise 1.13 Anecdotes Part 3
//              Expand your application so that you can vote for teh displayed annecdote.

//Button component.
const Button = ({handleClick, text}) => (<button onClick={handleClick}>{text}</button>)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  
  //Setting the variable selected to a random number between the ranges of (0-7)
  const set = () => {
    setSelected(Math.floor(Math.random() * 8))
    console.log("Selected: ",selected)
  }

  //Array that stores votes. First number is the index of the anecdotes array.
  const points = { 0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0}

  //Function that'll increment the point array everytime the vote button is pressed.
  const vote = () => {
    points[selected] += 1
    console.log(points)
  }

  return (
    <div>
      <div>
      {anecdotes[selected]}
      </div>
      <Button handleClick={vote} text='vote'/>
      <Button handleClick={set} text='next anecdote'/>
    </div>
  )
}

export default App