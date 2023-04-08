// Part #2.)
const Header = (props) => { 
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part = {props.array[0]} exercise = {props.array[1]}/>
      <Part part = {props.array[2]} exercise = {props.array[3]}/>
      <Part part = {props.array[4]} exercise = {props.array[5]}/>
    </div>
  )
}

const Part = (props) => {
  return(
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
  const array = [part1, exercises1, part2, exercises2, part3, exercises3]
  
  return (
    <div>
      <Header course={course} />
      <Content array = {array}/>
      <Total exercise = {exercises1 + exercises2 + exercises3} />
    </div>
  )
}
export default App
