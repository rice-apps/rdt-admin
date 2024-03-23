import React from 'react';
import "./Filter.css"


const Eventcard = () => {
    return (
<div className="filter-container">
<h2>Filter events</h2>

<div className="filter-switches">
  <div className="filter-switch">
    <label>Hide past events</label>
    <input type="checkbox" id="hidePastEvents" />
  </div>
  <div className="filter-switch">
    <label>Registration Open</label>
    <input type="checkbox" id="registrationOpen" />
  </div>
</div>

<label>Sort by</label>

<div className="filter-sort">
  <button>Date</button>
  <button>Distance</button>
  <button>No. of Participants</button>
</div>

<div className="filter-date">
<label className= "date-label"> Date </label>

  <input type="date" id="fromDate" />
  <span>to</span>
  <input type="date" id="toDate" />
</div>

<button className="apply-filter">Apply filter</button>
<button className="clear-filter">Clear filter</button>

</div>



    );
}
export default Eventcard