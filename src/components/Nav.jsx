import React from 'react';
import SearchBar from './SearchBar.jsx';

import './Nav.css';
import { Link } from 'react-router-dom';

function Nav({ onSearch }) {
  return (
    <nav className= "bar">
      <Link to='/'className= "nombre">
        <div >
            Ale's- Weather App
        </div>
      </Link>
    
   
      <Link to='/about' className= "about">
        <span>About</span>
      </Link>

      <SearchBar 
      onSearch={onSearch} 
      />


    </nav>
  );
};

export default Nav;
