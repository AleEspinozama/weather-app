import React, { useState } from 'react';
import s from './SearchBar.module.css';
import { useHistory } from "react-router-dom";

export default function SearchBar({onSearch}) {
  // acá va tu código
  const [city, setCity] = useState("");
  let history = useHistory();

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity("");
      history.push('/weather-app/');
      
    }}>
          <input 
          className={s.input} 
          placeholder ={"City..."} 
          type= {"text"}
          value={city}
          onChange={e =>  {
            setCity(e.target.value)
            e.target.value= " ";
          }
           } 
          />
          <button 
          className={s.btn}
          value= "Agregar"
          > Add City </button>

    </form>
  )
};