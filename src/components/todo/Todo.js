import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import { Container } from 'react-bootstrap'
import TodoAssignments from './TodoAssignments'

function Todo() {
    const classrooms = window.localStorage.getItem('classrooms')
    var classroom = ''
    if (window.localStorage.getItem('classrooms') !== '') {
        const todos = JSON.parse(classrooms)
        classroom = todos
    }
    const arr = Object.values(classroom)


   
  return (
    <Container>
        <br></br>
        <ListGroup>
            {arr.map(item => (
                <ListGroup.Item className='align-items-center' key={item.courseId}>
                    <center><h2>{item.courseName}</h2></center>
                    <ListGroup as='ul' className='d-flex align-items-center' >
                    {item.assignmentList.courseWork && item.assignmentList.courseWork.map(assignments => (
                        <ListGroup as='li' key={assignments.id}>
                            {assignments.title}
                        </ListGroup>
                    ))}
                    </ListGroup>
                </ListGroup.Item>
            ))}
        </ListGroup>
    </Container>
   

  ) 
    //  <div>
    //     {arr.map((item) => (
    //         <div>{item.courseName}</div>
    //     ))}
    // </div>
//   <CardGroup>
//   {arr.map((classroom, index) => (
//   <Card>{(names = arr[index].courseName) && console.log(names)}
//       <Card.Header>{names}</Card.Header>
//       {arr[index].assignmentList.courseWork.map((work, i) => (
//           <Card.Body>
//               <Card.Title>{arr[index].assignmentList.courseWork[i].title}</Card.Title>
//               <Card.Text>{arr[index].assignmentList.courseWork[i].title}</Card.Text>
//           </Card.Body>
//       ))}
//   </Card>
//   ))}
// </CardGroup>
}

export default Todo