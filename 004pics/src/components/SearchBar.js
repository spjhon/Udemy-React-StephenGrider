import './SearchBar.css'

import { useState } from "react";

function SearchBar({onSubmit}) {

  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  const handleChange = (event) => {
    // console.log(event.target.value);
    setTerm(event.target.value);
  };

    /* const handleClick = () => {
        onSubmit('cars');
    }; */

    //<button onClick={handleClick}>Click me!</button>

    //lo que se encierra dentro de form se hace submit cuando se da enter

    return (
      <div className='search-bar'>
        <form onSubmit={handleFormSubmit}>
          <label>Enter Search Term</label>
          <input value={term} onChange={handleChange} />
        </form>
      </div>
    );
  }
  
  export default SearchBar;