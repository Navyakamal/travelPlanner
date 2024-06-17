import React, { useEffect,  useState } from 'react'
import Tripcard from './Tripcard'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { accessTripApi } from '../services/allApis'
import Dropdown from 'react-bootstrap/Dropdown';

function Trips({updatedData}) {
    const [allTrips, setTrips] = useState([]);
    const [sdata, setSdata] = useState("");
    const [deleteUpdate, setDeleteUpdate] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);

    const getTrip = async () => {
        const result = await accessTripApi();
        if (result.status >= 200 && result.status < 300) {
            setTrips(result.data);
        } else {
            alert('Trip access failed');
        }
    };
// const datee=()=>{
// const sorted=[...allTrips]
// sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
// setTrips(sorted)
// }
// const all=()=>{
// const data=[...allTrips]
// setTrips(data)
// }
// const below = () => {
// const filtered = originalTrips.filter(trip => trip.amount >= 1000 && trip.amount <= 5000);
// setTrips(filtered);
// };

// const between = () => {
// const filtered = originalTrips.filter(trip => trip.amount >= 6000 && trip.amount <= 10000);
// setTrips(filtered);
// };

// const above = () => {
// const filtered = originalTrips.filter(trip => trip.amount > 10000);
// setTrips(filtered);
// };
    const search = () => {
        const data = allTrips.filter(trip => trip.title.toLowerCase().trim().includes(sdata.toLowerCase().trim()));
        setTrips(data);
    };

    // const low = () => {
    //     const sorted = [...allTrips].sort((a, b) => a.amount - b.amount);
    //     setTrips(sorted);
    // };

    // const high = () => {
    //     const sorted = [...allTrips].sort((a, b) => b.amount - a.amount);
    //     setTrips(sorted);
    // };

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = allTrips.slice(firstPostIndex, lastPostIndex);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const totalPages = Math.ceil(allTrips.length / postsPerPage);

    useEffect(() => {
        getTrip();
    }, [updatedData, deleteUpdate,sdata]);

    


    return (
        <div>
            <div className='p-1'>
                <Container className='w-50'>
                    <Row>
                        <Col lg={3} >
                            {/* <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                    Sort by price
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={low}>Low to High</Dropdown.Item>
                                    <Dropdown.Item onClick={high}>High to Low</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown> */}
                        </Col>
                        <Col lg={6} sm={4} xs={9} md={6} >
                            <input type="text" placeholder='Search for a trip' className='form-control' onChange={(e) => setSdata(e.target.value)} />
                        </Col>
                        <Col lg={3} sm={3} xs={3} md={3}> 
                            <Button onClick={search} variant="outline-secondary"><i className="fa-solid fa-magnifying-glass"></i></Button>
                        </Col>
                    </Row>
                </Container>
                <Row>
                    {currentPosts.length > 0 ? (
                        currentPosts.map(trip => (
                            <Col lg={4} key={trip.id}>
                                <Tripcard data={trip} update={setDeleteUpdate}></Tripcard>
                            </Col>
                        ))
                    ) : (
                        <div>
                            <img src="https://i.postimg.cc/JnX7gvFs/f990c277204955-5c80b796cd4f2.gif" alt="" className='gif' />
                        </div>
                    )}
                </Row>
          
            </div>
            <Row>
                    <Col className='d-flex justify-content-center mt-4 '>
                        <nav>
                            <ul className='pagination'>
                                {[...Array(totalPages).keys()].map(number => (
                                    <li key={number + 1} className='page-item'>
                                        <Button onClick={() => paginate(number + 1)} className='page-link me-3 text-bg-dark'>
                                            {number + 1}
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </Col>
                </Row>
        </div>
    )
}

export default Trips
