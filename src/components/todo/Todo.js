import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useStore } from 'react-redux';

export default function Todo() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [status, setStatus] = useState(false);
  const dispatch = useDispatch;
  const handleSubmit = (e) => {
    const todo = [{
        description: '',
        title: ''
  }]
    return todo;
  }
  
  return (
    <Form onSubmit={(e) => {handleSubmit(e)}}>
        <Form.Group controlId='addTitle'>
            <Form.Label>
                Title
            </Form.Label>
            <Form.Control placeholder='Enter Title' />
        </Form.Group>
        <Form.Group>
            <Form.Label>
                Description
            </Form.Label>
            <Form.Control placeholder='Add a Description' />
        </Form.Group>
        <Button variant='secondary' type='submit'>
            Add Todo
        </Button>
    </Form>
  )
}
