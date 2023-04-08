// Part #1.) 
const Header = (props) => { 
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      {props.part} {props.exercise}
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      Number of exercises {props.exercise}
    </div>
  )
}

const App = () => {
  // const-definitions
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
      <Header course={course} />
      <Content  part = {part1} exercise = {exercises1}/>
      <Content  part = {part2} exercise = {exercises2}/>
      <Content  part = {part3} exercise = {exercises3}/>
      <Total exercise = {exercises1 + exercises2 + exercises3} />
    </div>
  )
}
export default App
