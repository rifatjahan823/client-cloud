import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import './MainDashboard.css'

const MainDashboard = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
    
            <div className='container-fluid py-3'>
                {/* --------------------for mobile tablet-------------   */}
                <div className='d-block d-lg-none'>
                    <div className='row'>
                        <div className='col-2'>
                            <div className='h-100' style={{ borderRight: "1px solid rgb(232, 227, 227)" }}>
                                {/* <!-- Sidebar content here --> */}

                                <li><Link to="/maindashboard/dashboard">My Order</Link></li>
                                <li><Link to="/maindashboard/user">My Reviews</Link></li>
                                <li><Link to="/maindashboard/user">My Reviews</Link></li>

                            </div>
                        </div>
                        <div className='col-10'>
                            <Outlet></Outlet>
                        </div>
                    </div>
                </div>
                {/* --------------------for desktop-------------   */}
                <div className='d-none d-lg-block'>
                    <div className='row'>
                        <div className='col-2 '>
                            <div className='h-100' style={{ borderRight: "1px solid rgb(232, 227, 227)" }}>
                                {/* <!-- Sidebar content here --> */}
                                <li><Link to="/maindashboard/dashboard">My Order</Link></li>
                                <li><Link to="/maindashboard/user">My Reviews</Link></li>
                                <li><Link to="/maindashboard/user">My Reviews</Link></li>

                            </div>
                        </div>
                        <div className='col-10'>
                            <Outlet></Outlet>
                        </div>
                    </div>
                </div>
            </div>
       
    );
};

export default MainDashboard;