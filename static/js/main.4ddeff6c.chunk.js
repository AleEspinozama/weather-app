(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{10:function(e,t,a){e.exports={container:"Ciudad_container__2wt7B",card:"Ciudad_card__1NPd7",textos:"Ciudad_textos__3h_m1",info:"Ciudad_info__3ZeQ5",close:"Ciudad_close__2gh-4",btn:"Ciudad_btn__16WMJ"}},17:function(e,t,a){e.exports={btn:"SearchBar_btn__1JlFj",input:"SearchBar_input__20pck"}},19:function(e,t,a){e.exports={cards:"Cards_cards__1GJXh",nocity:"Cards_nocity__1vLi4"}},20:function(e,t,a){e.exports={container:"About_container__I1hEI",title:"About_title__2I3_J"}},30:function(e,t,a){},32:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(22),r=a.n(c),i=a(25),s=a(14),d=(a(30),a(17)),o=a.n(d),l=a(0);function j(e){var t=e.onSearch,a=Object(n.useState)(""),c=Object(s.a)(a,2),r=c[0],i=c[1];return Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(r),i("")},children:[Object(l.jsx)("input",{className:o.a.input,placeholder:"City...",type:"text",value:r,onChange:function(e){i(e.target.value),e.target.value=" "}}),Object(l.jsx)("button",{className:o.a.btn,value:"Agregar",children:" Add City "})]})}a(32);var h=a(8);var u=function(e){var t=e.onSearch;return Object(l.jsxs)("nav",{className:"bar",children:[Object(l.jsx)(h.b,{to:"/weather-app/",className:"nombre",children:Object(l.jsx)("div",{children:"Ale's- Weather App"})}),Object(l.jsx)(h.b,{to:"/weather-app/about",className:"about",children:Object(l.jsx)("span",{children:"About"})}),Object(l.jsx)(j,{onSearch:t})]})},m=a(7),b=a.n(m);function p(e){var t=e.min,a=e.max,n=e.name,c=e.img,r=e.id,i=e.onClose;return Object(l.jsxs)("div",{className:b.a.card,children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:b.a.close,children:Object(l.jsx)("button",{className:b.a.btn,onClick:i,children:"X"})}),Object(l.jsx)(h.b,{to:"/weather-app/ciudad/".concat(r),className:b.a.prueba,children:Object(l.jsx)("h1",{className:b.a.city,children:n})})]}),Object(l.jsxs)("div",{className:b.a.row,children:[Object(l.jsxs)("div",{className:b.a.column,children:[Object(l.jsx)("h2",{className:b.a.temps,children:"Max"}),Object(l.jsxs)("h2",{className:b.a.temps2,children:[a,"\xb0C"]})]}),Object(l.jsxs)("div",{className:b.a.column,children:[Object(l.jsx)("h2",{className:b.a.temps,children:"Min"}),Object(l.jsxs)("h2",{className:b.a.temps2,children:[t,"\xb0C"]})]})]}),Object(l.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(c,"@2x.png"),alt:"img"})]})}var x=a(19),_=a.n(x);function O(e){var t=e.cities,a=e.onClose;return t.length>0?Object(l.jsx)("div",{className:_.a.cards,children:t.map((function(e){return Object(l.jsx)(p,{max:e.max,min:e.min,name:e.name,img:e.img,id:e.id,onClose:function(){return a(e.id)}},e.id)}))}):Object(l.jsx)("div",{className:_.a.nocity,children:"No cities"})}var f=a(20),v=a.n(f);function w(){return Object(l.jsxs)("div",{className:v.a.container,children:[Object(l.jsx)("h1",{className:v.a.title,children:" About "}),Object(l.jsx)("span",{children:" "}),Object(l.jsx)("p",{children:" Ale's Weather app helps us to track weather in different cities around the world in real time. You can add new cities in the search bar and they will be added to the cities list with their min and max temperature. If you want to know more about their weather, you can click on each city."}),Object(l.jsx)("p",{children:"This app was created in September of 2021 at Henry's Web Development Bootcamp by Alejandra Espinoza Lezama."}),Object(l.jsx)("p",{children:" It uses React library and fetch information in real time from openweathermap.org API."})]})}var g=a(10),C=a.n(g);function N(e){var t=e.city;return console.log(t),t?Object(l.jsx)("div",{className:C.a.container,children:Object(l.jsxs)("div",{className:C.a.card,children:[Object(l.jsxs)("div",{className:C.a.textos,children:[Object(l.jsx)("h2",{classname:C.a.title,children:t.name}),Object(l.jsxs)("div",{className:C.a.info,children:[Object(l.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(t.img,"@2x.png"),alt:"img"}),Object(l.jsxs)("div",{children:["Temperature: ",t.temp," \xbaC"]}),Object(l.jsxs)("div",{children:["Weather: ",t.weather]}),Object(l.jsxs)("div",{children:["Wind: ",t.wind," km/h"]}),Object(l.jsxs)("div",{children:["Clouds: ",t.clouds]}),Object(l.jsxs)("div",{children:["Latitude: ",t.latitud,"\xba"]}),Object(l.jsxs)("div",{children:["Longitude: ",t.longitud,"\xba"]})]})]}),Object(l.jsx)(h.b,{to:"/weather-app/",className:"nombre",children:Object(l.jsx)("button",{className:C.a.btn,children:"Back"})})]})}):Object(l.jsx)("div",{children:" "})}var y=a(2);var A=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1];function r(e){c((function(t){return t.filter((function(t){return t.id!==e}))}))}function d(e){fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat("72d4e7bfe56901d8029846c52b97470a","&units=metric")).then((function(e){return e.json()})).then((function(e){if(void 0!==e.main){var t={min:Math.round(e.main.temp_min),max:Math.round(e.main.temp_max),img:e.weather[0].icon,id:e.id,wind:e.wind.speed,temp:e.main.temp,name:e.name,weather:e.weather[0].main,clouds:e.clouds.all,latitud:e.coord.lat,longitud:e.coord.lon};c((function(e){return[].concat(Object(i.a)(e),[t])}))}else alert("City not found")}))}function o(e){var t=a.filter((function(t){return t.id===parseInt(e)}));return t.length>0?t[0]:null}return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(y.a,{path:"/weather-app/",render:function(){return Object(l.jsx)(u,{onSearch:d})}}),Object(l.jsx)(y.a,{exact:!0,path:"/weather-app/about",component:w}),Object(l.jsx)(y.a,{exact:!0,path:"/weather-app/",render:function(){return Object(l.jsx)(O,{cities:a,onClose:r})}}),Object(l.jsx)(y.a,{exact:!0,path:"/weather-app/ciudad/:ciudadId",render:function(e){var t=e.match;return Object(l.jsx)(N,{city:o(t.params.ciudadId)})}})]})};r.a.render(Object(l.jsx)(h.a,{children:Object(l.jsx)(A,{})}),document.getElementById("root"))},7:function(e,t,a){e.exports={card:"Card_card__1Xb6w",city:"Card_city__rSg6n",close:"Card_close__mdkOp",btn:"Card_btn__2KXte",temps:"Card_temps__3T3gL",temps2:"Card_temps2__1fVYS",row:"Card_row__325Wh",column:"Card_column__26VDI",prueba:"Card_prueba__1R7xW"}}},[[38,1,2]]]);
//# sourceMappingURL=main.4ddeff6c.chunk.js.map