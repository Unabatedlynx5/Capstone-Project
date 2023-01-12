import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

function TodoAssignments(index) {
    const classrooms = window.localStorage.getItem('classrooms')
    const todos = JSON.parse(classrooms)
    const arr = Object.values(todos)
    console.log(arr)
    const listAssignments = arr[index.index].assignmentList.courseWork.map((assignment) =>
    <li key={assignment.id}>{assignment.title}</li>)
  return (
    <ListGroup>{listAssignments}</ListGroup>
  )
}

export default TodoAssignments