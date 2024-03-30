import './attendance.css'
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>

const Attendance = () => {
    return (
    <div className='main-div'>
        <div className='return-listings'> ← Return to Event Listings</div>
        <div className="main-content">

            <div className="search">
                <div className="search-text">
                    Viewing attendance for <br />
                    <strong>Event Name</strong>

                </div>
                <div className="search-bar"><input placeholder="Search" /></div>
                <div className="search-button">
                    <button>Search</button>
                </div>
            </div>

            <div className='search-results'>Showing 5 results for "Smith"</div>

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