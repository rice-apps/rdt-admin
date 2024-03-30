import './attendance.css'
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Switch, Space, App } from 'antd';
import { Divider } from "antd";
import Attendanceswitch from './attendanceswitch';
import {data} from './mock_data'

const Attendance = () => {
    console.log(data);
    const navigate = useNavigate();
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
                <div className='search-results'>Showing 5 results for "Smith"</div>
                <div className="search-criteria-switch">
                    <Attendanceswitch />
                </div>
            </div>

            <div className="entry-header">
                <div className="entry-header1">Name</div>
                <div className="entry-header2">Ticket Type</div>
                <div className="entry-header3">Payment Status</div>
                <div className="entry-header4">Seat Number</div>
            </div>

            <div className="user-cards">
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
                <div className="card">
                    <div className="name">My Name</div>
                    <div className="ticket-type">Family</div>
                    <div className="payment-status">Paid</div>
                    <div className="seat-number">A21</div>
                </div>
                <div className="card">
                    <div className="name">My Name</div>
                    <div className="ticket-type">Family</div>
                    <div className="payment-status">Paid</div>
                    <div className="seat-number">A21</div>
                </div>
                <div className="card">
                    <div className="name">My Name</div>
                    <div className="ticket-type">Family</div>
                    <div className="payment-status">Paid</div>
                    <div className="seat-number">A21</div>
                </div>
                <div className="card">
                    <div className="name">My Name</div>
                    <div className="ticket-type">Family</div>
                    <div className="payment-status">Paid</div>
                    <div className="seat-number">A21</div>
                </div>
            </div>
        </div>
    </div>
    
    
    );
}

export default Attendance