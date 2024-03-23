import './attendance.css'

const Attendance = () => {
    return (
    <div className='main-div'>
        <div className='return-listings'> ← Return to Event Listings</div>
        <div className="main-content">
            <div>
                Viewing attendance for <strong>event name  </strong>
                <input placeholder='name' />
            </div>
            <div className='search-results'>Showing 5 results for "Smith"</div>

            <div className="entry-header">Name Ticket Type Payment Status Seat Number</div>
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