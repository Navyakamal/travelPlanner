import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Footer() {
  return (
   
    <div className='foot py-2' style={{ backgroundColor: "rgba(128, 128, 0, 0.497)" }}>

<Container>
        <Row>
          <Col lg={4} md={6} sm={12} className='mt-2'>
            <h4><b>TakeOff</b></h4>
            <h6>Copyright ©  2024 TakeOff All rights reserved.</h6>
          </Col>
  
          <Col lg={4} md={6} sm={12} className='mt-2'>
            <h5><b>Links</b></h5>
            <Link to={'/landing'} style={{textDecoration:"none", color:"black"}}><h6>Home</h6></Link>
            <Link to={'/'} style={{textDecoration:"none", color:"black"}}><h6>Landing page</h6></Link>
            <Link to={'/about'} style={{textDecoration:"none", color:"black"}}><h6>About</h6></Link>
          </Col>
  
          <Col lg={4} md={6} sm={12} className='mt-2'>
          <div>
            <h5><b>Contact Us</b></h5>
              <div className='d-flex justify-content-between mt-2 w-50'>
                <i className="fa-brands fa-2x fa-instagram"></i>
                <i className="fa-brands fa-2x fa-facebook" ></i>
                <i className="fa-brands fa-2x fa-twitter" ></i>
                <i className="fa-brands fa-2x fa-github"></i>
              </div>
              <div className='mt-3'>
              <InputGroup >
          <InputGroup.Text id="basic-addon1" style={{backgroundColor:'transparent'}}><i class="fa-solid fa-magnifying-glass"></i></InputGroup.Text>
          <Form.Control
            placeholder="Enter your email"
            aria-label="Username"
            aria-describedby="basic-addon1"
            style={{backgroundColor:'transparent'}}
          />
        </InputGroup>
              </div>
          </div>
          </Col>
        </Row>
  
</Container>
    </div>
  )
}

export default Footer
