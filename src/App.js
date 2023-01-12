//imports from npm
import React, { useCallback } from 'react';
// import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
//imported components from npm
import { Routes, Route } from 'react-router-dom';
//imported components
import Default from './components/Default';
import Home from './components/Home';
import Toasts from './components/toast/Toast';
// import UsersPage from './components/helper/services/pages/UsersPage';
// import StackingExample from './components/Toast';
//imported CSS components
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Todo from './components/todo/Todo';
import Store from './useStore';
import  Button  from 'react-bootstrap/Button'

//Google
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import { useDispatch, useSelector } from 'react-redux';
import { setAccessToken, setToken } from './components/google/googleSlice';
import { fetchClassList, fetchAssignmentList, getActiveClasses, setClassrooms } from './components/google-classroom/classroomSlice';
import { handleCredentialResponse } from './components/google/googleSlice';
import { fetchBlackbaudAuth } from './components/blackbaud/blackbaudSlice';
import Blackbaud from './components/blackbaud/Blackbaud';

function App() {
  const dispatch = useDispatch()
  // eslint-disable-next-line no-undef
  const updateToken = (credentialResponse) => dispatch(setToken(credentialResponse))
  const handleClassList = () => dispatch(fetchClassList())
  const handleAccessToken = (codeResponse) => dispatch(setAccessToken(codeResponse))
  const handleActiveClasses = () => dispatch(getActiveClasses())
  const activeClasses = useSelector((state) => state.classroom.activeClasses)
  const handleActiveAssignments = async () => {
    const assignmentList = await dispatch(fetchAssignmentList(activeClasses))
    console.log(assignmentList.payload)
  }
  const handleBlackbaudAuth = () => dispatch(fetchBlackbaudAuth())

  const login = useGoogleLogin({
    onSuccess: codeResponse => handleAccessToken(codeResponse),
    flow: 'implicit',
    scope: 'https://www.googleapis.com/auth/classroom.courses.readonly https://www.googleapis.com/auth/classroom.coursework.me.readonly'
  });

  return (
    <div>
      {/* <StackingExample /> */}
      <Navbar bg='dark' variant="dark" fixed="top">
        <Container> 
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href="/Default">Redux</Nav.Link>
            <Nav.Link href="/ToDo">To Do</Nav.Link>
            <Nav.Link href="/Toasts">Toast</Nav.Link>
            {/* <Nav.Link href='/Users'>User Example</Nav.Link> */}
            <Nav.Link href='/Blackbaud'>Blackbaud</Nav.Link>
          </Nav>
          <Nav className='justify-content-end'>
          <Nav.Link href="https://www.google.com/">Google</Nav.Link>
          <Nav.Link href="https://totinograce.myschoolapp.com/">OnCampus</Nav.Link>
          <Nav.Link href="https://classroom.google.com/">Classroom</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br></br>
      <br></br>
      <br></br>
      {!window.localStorage.getItem('token') && 
      <GoogleLogin 
      onSuccess={credentialResponse => {
        console.log(credentialResponse);
        updateToken(credentialResponse)
      }}
      onError={() => {
        console.log('Login Failed');
      }}
      useOneTap
      />}
      {/* {useSelector((state) => {console.log(state.google.token);})} */}
      {/* <Store /> */}
      

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Default" element={<Default />} />
        <Route path="/Toasts" element={<Toasts />} />
        <Route path='/Todo' element={<>
          <Button onClick={handleClassList}>Fetch Class List</Button>
          <Button onClick={login}>Add Access Token</Button>
          <Button onClick={handleActiveClasses}>Add Active Classes</Button>
          <Button onClick={handleActiveAssignments}>Add Active Assignments</Button>
          <center><h1>Google Classroom Assignments</h1></center>
          <Todo />
        </>} />
        {/* <Route path='/Users' element={<UsersPage />} /> */}
        <Route path='/Blackbaud' element={<><center><h1>Totino-Grace OnCampus Assignments</h1></center><Blackbaud /></>} />
      </Routes>

    </div>
  );
}

export default App;
