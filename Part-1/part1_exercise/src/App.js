// Part #3.)
const Header = (props) => { 
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part = {props} exercise = {props} />
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      {props.name} {props.exercise}
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      Number of exercises {props.total}
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return (
    <div>
      <Header course = {course}/>
      <Part name = {part1.name} exercise = {part1.exercises}/>
      <Part name = {part2.name} exercise = {part2.exercises}/>
      <Part name = {part3.name} exercise = {part3.exercises}/>
      <Total total = {part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}

export default App
