import { useState } from 'react'

//Exercise 1.14 Anecdotes Part 4 (Final)
//              Now implement the final version of the application that displays the anecdote with the largest number of votes.

//Button component.
const Button = ({handleClick, text}) => (<button onClick={handleClick}>{text}</button>)

//Header Component.
const Header = ({text}) => (<h1>{text}</h1>)

//Display Component
const Display = ({text}) => (<div>{text}</div>)

//Component that'll display the most voted for annecdote.
const MostVoted = ({anecdotes, points}) => {
  //Math.max grabs the largest value inside array.
  //indexOf returns the index of the element inside the array.
  const largestAtIndex = points.indexOf(Math.max(...points))

  //Displaying the header and text.
  //Since the website rerenders everytime an event handler is called.
  if(Math.max(...points) === 0){
    return (
      <div>
        <Header text="Anecdote with the most votes"/>
        <p>No votes</p>
      </div>
    )
  }
  return (
    <div>
      <Header text="Anecdote with the most votes"/>
      <Display text={anecdotes[largestAtIndex]}/>
    </div>
  )
}
//Array that stores votes. First number is the index of the anecdotes array.
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

  const [ selected, setSelected ] = useState(0)
  const [ points, setPoints ] = useState(Array(8).fill(0))
  
  //Setting the variable selected to a random number between the ranges of (0-7)
  const set = () => {
    setSelected(Math.floor(Math.random() * 8))
    console.log("Selected: ",selected)
  }

  //Function that'll increment the point array everytime the vote button is pressed.
  const vote = () => {
    const temp = [...points]
    temp[selected] += 1
    setPoints(temp)
  }

  return (
    <div>
      <Header text="Anecdote of the day"/>
      <Display text={anecdotes[selected]}/>
      <Button handleClick={vote} text='vote'/>
      <Button handleClick={set} text='next anecdote'/>
      <MostVoted anecdotes={anecdotes} points={points}/>
    </div>
  )
}

export default App