import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
function NavbarComponent() {
  return (
    
    <Navbar bg="light" data-bs-theme="light" expand="lg" fixed="top" className='border-bottom mb-2'>
        <Container >
          <Navbar.Brand href="#home">SDSN</Navbar.Brand>
          <Nav className="me-5">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
  )
}

export default NavbarComponent