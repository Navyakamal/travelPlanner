import React from 'react'
import { Button } from 'react-bootstrap'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addTripApi } from '../services/allApis';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({update}) {
      
    //create a state to store all inputs

    const [tripInputs,setInputs]=useState({
        title:"",
        country:"",
        amount:"",
        imageUrl:"",
        date:"",
        about:""
    })
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const setDatas=(e)=>{
        // console.log(e.target.value);
        // console.log(e.target.name);

        let {value,name}=e.target
        setInputs({...tripInputs,[name]:value})
    }
    console.log(tripInputs);
    
    const addTrip=async()=>{
        // alert('button clicked')
        const {title,country,amount,imageUrl,date,about}=tripInputs
        if(title=="" || country=="" || amount=="" || imageUrl=="" || date=="" || about==""){
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
            });        }
        else{
           const out=await addTripApi(tripInputs)
           console.log(out);
           if(out.status>=200 && out.status<300){
            toast.success('Trip added successfully', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
                });           
                 handleClose()
            update(true)
           }
           else{
            toast.error('Trip access failed', {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
              });           }
        }
    }
  return (
    <div>
          <div className='cont' style={{marginTop:'62px'}}>
            <img src="https://i.postimg.cc/d3yXfS1h/travel-agency-theme-ppt-templates-270377.jpg" alt="" style={{width:'100%'}}/>
             <div className='write'>
                  <p className='w1'>The most beautiful in the world is, <br></br>of course, the world itself.” – Wallace Stevens</p>
                  <p className='w2'>Create your Own....</p>
                  <Button className='w3'  onClick={handleShow}>Add more package</Button>
              </div>
          </div>   
            <Modal show={show} onHide={handleClose}>
                 <Modal.Header closeButton>
                     <Modal.Title>Add a Package</Modal.Title>
                 </Modal.Header>
             <Modal.Body>
                <input type="text" className='form-control mt-3' placeholder='Enter place name' onChange={(e)=>setDatas(e)} name='title'/>
                <input type="text" className='form-control mt-3' placeholder='Enter country name' onChange={(e)=>setDatas(e)} name='country'/>
                <input type="text" className='form-control mt-3' placeholder='Enter description' onChange={(e)=>setDatas(e)} name='about'/>
                <input type="text" className='form-control mt-3' placeholder='Enter package amount' onChange={(e)=>setDatas(e)} name='amount'/>
                <input type="text" className='form-control mt-3' placeholder='Enter imageUrl' onChange={(e)=>setDatas(e)} name='imageUrl' />
                <input type="date" className='form-control mt-3' placeholder='Enter departure date' onChange={(e)=>setDatas(e)} name='date'/>

             </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="dark" onClick={addTrip}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </div>
  )
}

export default Add
