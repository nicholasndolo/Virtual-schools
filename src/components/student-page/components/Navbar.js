import React from 'react'
import Container from 'react-bootstrap/Container';
// import moment from 'moment';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import '../Styles/Navbar.css';

const NavBar = () => {
  return (
    <>
      <Navbar className='navigation' bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">E-Masomo</Navbar.Brand>

          <Button className='btn' variant="info">Log out</Button>{' '}


        </Container>

      </Navbar>

    </>
  )
}

export default NavBar;
