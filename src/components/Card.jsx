import React from 'react';
import s from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card({min, max, name, img, id, onClose}) {
  return (
    <div className= {s.card}>
        <div>
          <div className= {s.close}>
          <button className= {s.btn} onClick={onClose}>X</button>
          </div>
          <Link to={`/weather-app/ciudad/${id}`} className={s.prueba}>
          <h1 className ={s.city}>{name}</h1>
          </Link>
        </div>
        <div className = {s.row}>
            <div className={s.column}> 
                <h2 className={s.temps}>Max</h2>
                <h2 className={s.temps2}>{max}°C</h2>
            </div>
            <div className={s.column}>
              <h2 className={s.temps}>Min</h2>
              <h2 className={s.temps2}>{min}°C</h2>
            </div>
        </div>
     <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt={"img"} />

    </div>
  )
};