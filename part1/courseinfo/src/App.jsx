import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => { 
  return ( 
    <p>
      {props.part} {props.exercises} 
    </p>
  )
}

const Content = (props) => {
  return (
  <div>
    <Part part={props.coursecontent[0].part} exercises={props.coursecontent[0].exercises}/>
    <Part part={props.coursecontent[1].part} exercises={props.coursecontent[1].exercises}/> 
    <Part part={props.coursecontent[2].part} exercises={props.coursecontent[2].exercises}/> 
  </div>
  )
}
  
const Total = (props) => {
  return (
    <p>Number of exercises {props.coursecontent[0].exercises + props.coursecontent[1].exercises + props.coursecontent[2].exercises}</p>
  )
}

const App = () => {

  const course = 'Half Stack application development'
  const coursecontent = [
    {
      part: 'Fundamentals of React',
      exercises: 10
    },
    {
      part: 'Using props to pass data',
      exercises: 7
    },
    {
      part: 'State of a component',
      exercises: 14
    }
  ]
  return (
    <div>
      <Header course={course} />
      <Content coursecontent={coursecontent}/>
      <Total coursecontent={coursecontent}/>
    </div>
  )
}

export default App