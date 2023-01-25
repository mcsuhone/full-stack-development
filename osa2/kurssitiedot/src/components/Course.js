const Part = (props) => {
    return (
      <div>
        <p>
          {props.part} {props.exercises}
        </p>
      </div>
    )
}
  
  const Header = (props) => {
    return (
      <div>
        <h1>{props.course}</h1>
      </div>
    )
}
  
  const Content = (props) => {
    const part_components = props.parts.map(part => <Part key={part.id} part={part.name} exercises={part.exercises}/>)
    
    return (
      <div>
        {part_components}
      </div>
    )
}
  
  const Total = ({parts}) => {
    const initial = 0
    const exercises = parts.reduce( (accumulator, currentValue) => accumulator + currentValue.exercises, initial )
  
    return (
      <div>
        <p><b>total of {exercises} exercises</b></p>
      </div>
    )
}
  
  const Course = ({course}) => {
    return (
      <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
}

export default Course;