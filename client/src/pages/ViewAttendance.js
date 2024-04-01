
import '../styles/ViewAttendance.css'
import { BrowserRouter, useNavigate, useLocation } from 'react-router-dom';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Switch, Space, App } from 'antd';
import { Divider } from "antd";
import AttendanceSwitch from '../components/AttendanceSwitch.js';

import axios from "axios"
import React, { useState, useEffect } from "react";

const ViewAttendance = () => {
    
    const URL = "https://rdt-backend-production.up.railway.app/getusers";
    const navigate = useNavigate();
    const { state } = useLocation()
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log(state)
    },[]);
    
    console.log(data);
    
    return (
    <div className='main-div'>
        <div className='return-listings'>
        {/* <Link to="">← Return to Event Listings</Link> */}
        <a href="home" onClick={() => navigate("home")}>← Return to Event Listings</a>
        </div>
        <div className="main-content">

            <div className="search">
                <div className="search-text">
                    Viewing attendance for<br />
                    <strong>Event Name</strong>

                </div>
                <div className="search-bar"><input placeholder="Search" /></div>
                <div className="search-button">
                    <button>Search</button>
                </div>
            </div>

            <div className="search">
                <div className='search-results'>Showing {data.length} results for "Smith"</div>
                <div className="search-criteria-switch">
                    <AttendanceSwitch />
                </div>
            </div>

            <div className="entry-header">
                <div className="entry-header1">Name</div>
                <div className="entry-header2">Ticket Type</div>
                <div className="entry-header3">Payment Status</div>
                <div className="entry-header4">Seat Number</div>
            </div>

            <div className="user-cards">

                {data.map((item) => (
                    <div className="card">
                    <div className="name">My Name</div>
                    <div className="ticket-type">Family</div>
                    {/* <Divider className='divider' type='vertical'></Divider> */}
                    <div className="payment-status">
                        <div className="toggle">
                            <Switch checkedChildren="Paid" unCheckedChildren="Unpaid" defaultUnchecked />
                        </div>
                    </div>
                    <div className="seat-number">A21</div>
                </div>
                ))}

            </div>
        </div>
    </div>
    
    
    );
}

export default ViewAttendance