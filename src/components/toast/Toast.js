import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import toastSlice from './toastSlice'
import {
    add,
    subtract,
    invert,
    editBody,
    editTitle,
    selectToast,
    initialState,
} from './toastSlice';
import Button from 'react-bootstrap/Button'
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'
import Form from 'react-bootstrap/Form'
import FormLabel from 'react-bootstrap/esm/FormLabel';
import ToastHeader from 'react-bootstrap/esm/ToastHeader';

export default function Toasts() {
  const toasts = useSelector((state) => (state.toasts));
  const dispatch = useDispatch();
  //increment value
  const [toast, setToast] = useState({})


  const handleChange = (e) => {
    add(e.target.value)
  }
  
return (
    <ToastContainer position='top-end'>
        {initialState.toasts.map((toasts, index) => (
            <Toast bg='secondary' key={index} show={toasts.completed} 
            onClose={(key) => {dispatch(invert(key))}}>
                <ToastHeader>
                    <strong className="me-auto">{toasts.title}</strong>
                    <small>11 mins ago</small>
                </ToastHeader>
                <Toast.Body>
                    {toasts.data}
                    <Button></Button>
                </Toast.Body>
            </Toast>
        ))}
    </ToastContainer>
);
}

