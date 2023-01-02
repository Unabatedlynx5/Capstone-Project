//imports from npm
import React from 'react';
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
import Toasts from './components/Toast';
// import StackingExample from './components/Toast';
//imported CSS components
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
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
          </Nav>
          <Nav className='justify-content-end'>
          <Nav.Link href="https://www.google.com/">Google</Nav.Link>
          <Nav.Link href="https://totinograce.myschoolapp.com/">OnCampus</Nav.Link>
          <Nav.Link href="https://classroom.google.com/">Classroom</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Default" element={<Default />} />
        <Route path="/Toasts" element={<Toasts />} />
      </Routes>

    </div>
  );
}

export default App;
