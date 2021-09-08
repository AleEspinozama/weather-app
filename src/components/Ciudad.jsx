import React from "react";
import s from './Ciudad.module.css';

export default function Ciudad({city}) {
    console.log(city);
    if (city){
    return (
        <div className={s.container}>
                <div className={s.card}>
                    <div className= {s.textos}>
                    <h2 classname= {s.title}>{city.name}</h2>
                    <div className={s.info}>
                    <img src={`http://openweathermap.org/img/wn/${city.img}@2x.png`} alt={"img"} />
                        <div>Temperature: {city.temp} ºC</div>
                        <div>Weather: {city.weather}</div>
                        <div>Wind: {city.wind} km/h</div>
                        <div>Clouds: {city.clouds}</div>
                        <div>Latitude: {city.latitud}º</div>
                        <div>Longitude: {city.longitud}º</div>
                    </div>
                    </div>
            </div>
        </div>
    )}

    else {
        return (
            <div > </div>
        )
    }
}