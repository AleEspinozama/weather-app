import React from 'react';
import Card from './Card';

import s from './Cards.module.css';

export default function Cards({ cities, onClose }) {
 if(cities.length> 0) {
  return (
    <div className= {s.cards}>
      {
        cities.map(ciudad => (
          <Card  
          key= {ciudad.id}
          max={ciudad.max} 
          min={ciudad.min} 
          name={ciudad.name} 
          img={ciudad.img} 
          id= {ciudad.id}
          onClose={()=> onClose(ciudad.id) } 
        
          />
        ))
      }
    </div>
  )
} 
else {
  return (
    <div className= {s.nocity}>No cities</div>
  )
}
};