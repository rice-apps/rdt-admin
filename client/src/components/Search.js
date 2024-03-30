
import '../styles/search.css'

const Search = () => {
    return (
    <div className= "big-search"> 
      <div className="search-container">
        <input type="text" className= "searchbox" id="search-input" placeholder="Search" /> 
        <button className="search-button"> Search </button>

      </div>
        <p className= "no-results">Showing # events</p>
    </div>
    );
  };
  
  export default Search;
  