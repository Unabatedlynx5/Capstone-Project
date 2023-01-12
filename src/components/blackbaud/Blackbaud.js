import React from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import ListGroup  from 'react-bootstrap/ListGroup'

function Blackbaud() {
  return (
    <Container>
        <br></br>
        <ListGroup>
            <ListGroup.Item className='align-items-center'>
                <center><h2>AP English Literature and Comp A - 1 (Period 1)</h2></center>
                <ListGroup as='ul' className='d-flex align-items-center' >
                    <ListGroup as='li'>Cornell Notes</ListGroup>
                    <ListGroup as='li'>AP Classroom MCQ</ListGroup>
                </ListGroup>
            </ListGroup.Item>
            <ListGroup.Item className='align-items-center'>
                <center><h2>AP Physics A - 1 (Period 3)</h2></center>
                <ListGroup as='ul' className='d-flex align-items-center' >
                    <ListGroup as='li'>Ch 6 #10 Quiz</ListGroup>
                    <ListGroup as='li'>Ch 5 Quiz #75</ListGroup>
                    <ListGroup as='li'>Ch 5 #16 Quiz</ListGroup>
                    <ListGroup as='li'>Ch 4 #81 Quiz</ListGroup>
                </ListGroup>
            </ListGroup.Item>
            <ListGroup.Item className='align-items-center'>
                <center><h2>AP US Gov A - 3 (Period 5)</h2></center>
                <ListGroup as='ul' className='d-flex align-items-center' >
                    <ListGroup as='li'>EdPuzzle - The Electoral College</ListGroup>
                    <ListGroup as='li'>Applying the Bill of Rights (TG FACULTY & STAFF)</ListGroup>
                    <ListGroup as='li'>The Living Room Candidate - Campaign Commercial Analysis </ListGroup>
                    <ListGroup as='li'>Current Events - Basketball Diplomacy</ListGroup>
                    <ListGroup as='li'>"Meme" The Bill of Rights</ListGroup>
                    <ListGroup as='li'>Race to Ratify - Simulation</ListGroup>
                    <ListGroup as='li'>Race to Ratify - Post Game Reflection</ListGroup>
                    <ListGroup as='li'>EdPuzzle: The Articles of Confederation</ListGroup>
                </ListGroup>
            </ListGroup.Item>
            <ListGroup.Item className='align-items-center'>
                <center><h2>CIS / AP Calculus AB A - 1 (Period 4)</h2></center>
                <ListGroup as='ul' className='d-flex align-items-center' >
                    <ListGroup as='li'>1st & 2nd Derivative Wksht</ListGroup>
                    <ListGroup as='li'>Derivative Homework</ListGroup>
                    <ListGroup as='li'>Semester Prayer</ListGroup>
                    <ListGroup as='li'>Ch 1 Homework</ListGroup>
                </ListGroup>
            </ListGroup.Item>
            <ListGroup.Item className='align-items-center'>
                <center><h2>Digital Imaging & Photo - 1 (Period 6) </h2></center>
                <ListGroup as='ul' className='d-flex align-items-center' >
                    <ListGroup as='li'>Lg Maze</ListGroup>
                    <ListGroup as='li'>Practice Maze</ListGroup>
                    <ListGroup as='li'>Thought Cloud</ListGroup>
                    <ListGroup as='li'>Roy Lichtenstein Speech Bubble</ListGroup>
                    <ListGroup as='li'>Simpson's Clouds</ListGroup>
                    <ListGroup as='li'>Arcimboldo Portrait</ListGroup>
                    <ListGroup as='li'>Pixelated Color image after Franck Slama (Invader)</ListGroup>
                    <ListGroup as='li'>Pixelated black and white image after Franck Slama</ListGroup>
                    <ListGroup as='li'>Warm Up Drawings Diary Wimpy Kid and Fortnite</ListGroup>
                    <ListGroup as='li'>Team Mascot Satire</ListGroup>
                    <ListGroup as='li'>Robert Indiana Personal Emblem</ListGroup>
                    <ListGroup as='li'>Miro Biomorphic Abstraction</ListGroup>
                    <ListGroup as='li'>Mascot Brainstorm</ListGroup>
                </ListGroup>
            </ListGroup.Item>
        </ListGroup>
    </Container>
  )
}

export default Blackbaud