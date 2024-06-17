import React from 'react'
import { Container ,Row ,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
          <div className='home'>
      <div className='image'>
        <img src="https://i.postimg.cc/SRnDvLwQ/beautiful-girl-standing-viewpoint-koh-nangyuan-island-near-koh-tao-island-surat-thani-thailand-33522.avif" alt="" style={{width:'100%',height:'700px'}}/>
        <div className='text'>
          <h3>Travel to make memories all around the world</h3>
<Link to={'/landing'}>
            <button>Plan a trip</button>
  
</Link>      
  </div>
        <Container className='mt-5 mb-5'>
          <h2 className='our'>OUR SERVICES</h2>
          <Row>
             <Col lg={3} md={6} sm={12}>
                <div className="card" style={{width:'18rem'}}>
                    <img src="https://i.postimg.cc/9XthTrPx/what-is-the-forex-market-1.png" alt=""  style={{width:'260px',height:'100px'}}/>
                    <h2 className="card-title">Forex</h2>
                 </div>
             </Col>
             <Col lg={3} md={6} sm={12}>
                 <div className="card" style={{width:'18rem'}}>
                    <img src="https://i.postimg.cc/SQVPk8fp/ezgif-sixteen-nine-355.avif" alt="" style={{width:'260px',height:'100px'}}/>
                    <h2 className="card-title">Flight Booking</h2>
                 </div>
             </Col>
               <Col lg={3} md={6} sm={12}>
                 <div className="card" style={{width:'18rem'}}>
                    <img src="https://i.postimg.cc/BZCrbRsk/wait-for-visas-is-getting-even-longer-say-companies.webp" alt="" style={{width:'260px',height:'100px'}}/>
                    <h2 className="card-title">Visa</h2>
                 </div>
               </Col>
               <Col lg={3} md={6} sm={12}>
                 <div className="card" style={{width:'18rem'}}>
                    <img src="https://i.postimg.cc/XYrm2JF6/JCAGH-P288-Penthouse-Suite-Terrace-4x3.webp" alt="" style={{width:'260px',height:'100px'}}/>
                    <h2 className="card-title">Hotel Booking</h2>
                 </div>
               </Col>
          </Row>
        </Container>
      </div>
    </div>
    </div>
  )
}

export default Home
