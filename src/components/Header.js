import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
         <Navbar  className='h1' fixed="top">
      <Container>
        <Navbar.Brand  style={{fontSize:'30px'}}>TakeOff</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end ">
        <Navbar.Text className='ms-5 b1' style={{fontSize:'20px'}}><Link to={'/'} style={{textDecoration:'none'}}>Home</Link></Navbar.Text>
          <Navbar.Text className='ms-5 b1' style={{fontSize:'20px'}}> <Link to={'/about'} style={{textDecoration:'none'}}>About</Link></Navbar.Text>
        <Navbar.Text>
      </Navbar.Text>
     </Navbar.Collapse>
    </Container>
    </Navbar>
    </div>
  )
}

export default Header
