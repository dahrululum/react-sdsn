import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import BallotIcon from '@mui/icons-material/Ballot';
import '../styles/Navbar.css';
import { Link } from "react-router-dom";
function NavbarComponent() {
  return (
    
    // <Navbar bg="light" data-bs-theme="light" expand="lg" fixed="top" className='navbar border-bottom mb-4'>
    //     <Container >
    //       <Navbar.Brand href="#home">
    //         <span><BallotIcon color="success" sx={{ fontSize: 26 }} /></span>
    //         <span className='brand'>SDSN</span> </Navbar.Brand>
    //       <Nav className="me-5">
    //         <Nav.Link href="#home">Home</Nav.Link>
    //         <Nav.Link href="#report">Report</Nav.Link>
    //         <Nav.Link href="#panduan">Panduan</Nav.Link>
    //       </Nav>
    //     </Container>
    //   </Navbar>
     <>
     <div className="navbar fixed-top border-bottom mb-4">
      <div className="leftSide">
        <div className='brand'>
        <span className='mx-1'><BallotIcon color="white" sx={{ fontSize: 25 }} /></span>
        <span className='mx-1 brand-title'>SDSN</span>
        </div>
        
      </div>
      <div className="rightSide">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/report" className="nav-link">Report</Link>
        <Link to="/panduan" className="nav-link">Panduan</Link>
      </div>
       
    </div>
     </>
  )
}

export default NavbarComponent