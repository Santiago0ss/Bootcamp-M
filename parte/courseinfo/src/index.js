import React from 'react';
import ReactDOM from 'react-dom';

const Title = (props) => {
  return <h1>{props.course}</h1>
}
const Part1 = (props) => {
  return <p>{props.part1}</p>
}
const Exercise1 = (props) => {
  return <p>{props.exercises1}</p>
}
const Part2 = (props) => {
  return <p>{props.part2}</p>
}
const Exercise2 = (props) => {
  return <p>{props.exercises2}</p>
}
const Part3 = (props) => {
  return <p>{props.part3}</p>
}
const Exercise3 = (props) => {
  return <p>{props.exercises3}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Title course={course} />
      <Part1 part1={part1} />
      <Exercise1 exercises1={exercises1} />
      <Part2 part2={part2} />
      <Exercise2 exercises2={exercises2} />
      <Part3 part3={part3} />
      <Exercise3 exercises3={exercises3} />
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
