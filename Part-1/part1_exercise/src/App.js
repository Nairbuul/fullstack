// Part #4.)
const Header = (props) => { 
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name = {props.parts[0].name} exercise = {props.parts[0].exercises} />
      <Part name = {props.parts[1].name} exercise = {props.parts[1].exercises} />
      <Part name = {props.parts[2].name} exercise = {props.parts[2].exercises} />
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
      Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
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

  const parts = [part1, part2, part3]
  return (
    <div>
      <Header course = {course}/>
      <Content parts = {parts}/>
      <Total parts = {parts}/>
    </div>
  )
}

export default App