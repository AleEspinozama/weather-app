import React from "react";
import s from './About.module.css';

export default function About () {
    return (
        <div className= {s.container}>
         <h1 className= {s.title} > About </h1> 
         <span> </span>
         <p> Ale's Weather app helps us track weather in different cities around the world in real time. You can add new cities in the search bar and they will be listed with their min and max temperature. If you want to know more about their weather, you can click on each city.</p>
            
         <p>This app was created in September of 2021 at Henry's Web Development Bootcamp by Alejandra Espinoza Lezama.</p>
         
         <p> It uses React library and fetch information in real time from openweathermap.org API.</p>
        </div>
    )
}