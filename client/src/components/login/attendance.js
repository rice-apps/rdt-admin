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
            <div className='search-results'></div>
            Showing 5 results for "Smith"
        </div>
    </div>
    
    
    );
}

export default Attendance