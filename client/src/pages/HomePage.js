import Eventcard from '../components/EventCard';
import Search from '../components/Search';

import "../styles/Homepage.css";

const Homepage = () => {
    return (
        
        <div>

            <Search></Search>

            <p classname= "no-results">Showing # events</p>

            <Eventcard> 
            </Eventcard>

            <Eventcard> 
            </Eventcard>

            
        </div>



    );
}


export default Homepage

