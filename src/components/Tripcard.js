import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BookOpen, Edit, Trash2 } from 'react-feather';
import Modal from 'react-bootstrap/Modal';
import { deleteTripApi, editTripApi } from '../services/allApis';
import { Col, Container, Row } from 'react-bootstrap';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Tripcard({ data, update }) {
  const [show, setShow] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [tripInputs, setTripInputs] = useState({
    title: '',
    country: '',
    amount: '',
    imageUrl: '',
    date: '',
    about:''
  });

  useEffect(() => {
    if (data) {
      setTripInputs(data);
    }
  }, [data]);

  const handleClose = () => {
    setShow(false);
    setIsEditing(false);
  };

  const handleShow = () => {
    setTripInputs(data);
    setShow(true);
  };

  const deleteTrip = async (id) => {
    const result = await deleteTripApi(id);
    if (result.status >= 200 && result.status < 300) {
      update(true);
      toast.success('Trip deleted successfully', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });    }
  };

  const handleEdit = () => {
    setIsEditing(true);
    handleShow();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTripInputs({ ...tripInputs, [name]: value });
  };

  const saveChanges = async () => {
    const { id, title, country, amount, imageUrl, date ,about} = tripInputs;
    if (title === '' || country === '' || amount === '' || imageUrl === '' || date === '' || about === '') {
      toast.warn('Please fill all datas', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });   
       }
       else {
      const result = await editTripApi(id, tripInputs);
      if (result.status >= 200 && result.status < 300) {
        toast.success('Trip updated successfully', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          });
           handleClose();
        update(true);
      } else {
        toast.error('Trip update failed', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          });      }
    }
  };

  return (
    <div>
      <div>
        <Card style={{ width: '18rem',height:'250px' }} className='ms-5 mt-5 d-flex text-center c6'>
          <div className='image'>
            <Card.Img variant="top" src={data.imageUrl} style={{height:'170px'}}/>
  
                   
            <div className='d-flex  overlay '>
              <Button onClick={handleEdit}><Edit></Edit></Button>
              <Button  onClick={handleShow} className=' mt-2'><BookOpen></BookOpen></Button>
              <Button className=' mt-2' onClick={() => deleteTrip(data.id)}><Trash2 /></Button>
            </div>
            </div> 
          <Card.Body>
            <Card.Title className='tit' style={{fontSize:'25px'}}>{data.title}</Card.Title>
          </Card.Body>
        </Card>
        <Modal show={show} onHide={handleClose} size="lg"
                       aria-labelledby="contained-modal-title-vcenter"
                        centered className='m1'>
          <Modal.Header closeButton>
            <Modal.Title style={{textTransform:'uppercase'}}>{isEditing ? 'Edit Trip' : data.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {isEditing ? (
              <>
                <input type="text" className='form-control mt-3' placeholder='Enter place name' value={tripInputs.title} onChange={handleInputChange} name='title' />
                <input type="text" className='form-control mt-3' placeholder='Enter country name' value={tripInputs.country} onChange={handleInputChange} name='country' />
                <input type="text" className='form-control mt-3' placeholder='Enter description' value={tripInputs.about} onChange={handleInputChange} name='about' />
                <input type="text" className='form-control mt-3' placeholder='Enter package amount' value={tripInputs.amount} onChange={handleInputChange} name='amount' />
                <input type="text" className='form-control mt-3' placeholder='Enter imageUrl' value={tripInputs.imageUrl} onChange={handleInputChange} name='imageUrl' />
                <input type="date" className='form-control mt-3' placeholder='Enter departure date' value={tripInputs.date} onChange={handleInputChange} name='date' />
              </>
            ) : (
              <>
                {/* <h4>Country: {data.country}</h4>
                <h4>Amount: {data.amount}</h4>
                <h4>Date: {data.date}</h4>
                <h4>About:{data.about}</h4> */}
                <Container className='c4'>
                  <Row>
                    <Col lg={6} md={12} sm={12} className='p-5'>
                    
                    <img src={data.imageUrl} alt=""  style={{width:'300px'}}/>
                    
                    </Col>
                    <Col lg={6} md={12} sm={12} className='p-4'>
                      <p >{data.about}</p>
                      <h4>{data.country}</h4>
                    
                    </Col>
                  </Row>

              <div className='mt-3 ms-4'>
                    <h4><i class="fa-solid fa-calendar-days"></i> : {data.date}</h4>
                    <h4><i class="fa-solid fa-sack-dollar"></i> : Rs {data.amount}</h4>
  
              </div>              
                </Container>

              </>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            {
            isEditing && (
              <Button variant="dark" onClick={saveChanges}>
                Save Changes
              </Button>
            )}
          </Modal.Footer>
        </Modal>
      </div>

    </div>
  );
}

export default Tripcard;
