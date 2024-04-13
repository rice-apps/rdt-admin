
import '../styles/ViewAttendance.css'
import Navbar from "../components/Navbar"
import { BrowserRouter, useNavigate, useLocation } from 'react-router-dom';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Switch, Space, App } from 'antd';
import { Divider } from "antd";
import AttendanceSwitch from '../components/AttendanceSwitch';

import axios from "axios"
import React, { useState, useEffect } from "react";

const ViewAttendance = () => {
    
    const URL = "https://rdt-backend-production.up.railway.app/";
    // const URL = "http://localhost:3000/"
    const navigate = useNavigate();
    const { state } = useLocation()
    const [purchasedTickets, setPurchasedTickets] = useState([]);

    useEffect(() => {
        console.log(state)

        // state.tickets.filter((ticket) => ticket.)
        axios.get(URL + 'ticketsforevent', {params: { name: state.name }})
            .then(response => {
                console.log('Events received:', response.data);

                // filter for purchased
                let purchased = response.data.tickets.filter((ticket) => ticket.buyerName != null)

                console.log('purchased', purchased)
                setPurchasedTickets(purchased)
            })
            .catch(error => {
                console.error('Failed to get events:', error);
                // Optionally, show error message to the user
            });
    },[]);
    
    // console.log(data);
    
    return (
        <div>
            <Navbar allowCreateEvent={false} />
            <div className='main-div'>
                <div className='return-listings'>
                    {/* <Link to="">← Return to Event Listings</Link> */}
                    <a href="home" onClick={() => navigate("/home")}>← Return to Event Listings</a>
                </div>
                <div className="main-content">

                    <div className="search">
                        <div className="search-text">
                            Viewing attendance for<br />
                            <strong>{state.name}</strong>

                        </div>
                        <div className="search-bar"><input placeholder="Search" /></div>
                        <div className="search-button">
                            <button>Search</button>
                        </div>
                    </div>

                    <div className="search">
                        <div className='search-results'>Showing {purchasedTickets.length} results for "Smith"</div>
                        <div className="search-criteria-switch">
                            <AttendanceSwitch />
                        </div>
                    </div>

                    <div className="entry-header">
                        <div className="entry-header1">Attendee</div>
                        <div className="entry-header1">Buyer</div>
                        <div className="entry-header2">Ticket Type</div>
                        <div className="entry-header3">Payment Status</div>
                        <div className="entry-header4">Seat Number</div>
                    </div>

                    <div className="user-cards">

                        {purchasedTickets.map((item) => (
                            <div className="card">
                                <div className="name">{item.attendeeName}</div>
                                <div className="name">{item.buyerName}</div>
                                <div className="ticket-type">{item.type}</div>
                                {/* <Divider className='divider' type='vertical'></Divider> */}
                                <div className="payment-status">
                                    <div className="toggle">
                                        <Switch checkedChildren="Paid" unCheckedChildren="Unpaid" defaultChecked={item.isPaid} />
                                    </div>
                                </div>
                                <div className="seat-number">{item.seat}</div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

        </div>
        
    
    
    );
}

export default ViewAttendance