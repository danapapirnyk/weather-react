import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./styles.css";
import Form from "./Form.js";

export default function Weather(props) {
  
  const [weatherData,setWeatherData] = useState({ready: false});
function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt),
      description: response.data.weather[0].description,
      iconUrl:"https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
}

if (weatherData.ready) {
return (
  <div className="container body-wrap">
    <Form />
    <div className="card-box">
      <h1 className="main-city">{weatherData.city}</h1>
      <ul сlassName="icon-text">
        <li className="icon-text">
          <FormattedDate date={weatherData.date} />
        </li>
        <li className="icon-text text-capitalize">{weatherData.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src={weatherData.iconUrl}
            alt={weatherData.description}
            className="icon"
          />
          <span className="current-temp">
            {Math.round(weatherData.temperature)}°C
          </span>
        </div>
        <div className="col-6 main-temp">
          <h4 className="day-temp">
            <strong>29°</strong>/ 17°
          </h4>
          <p className="forecast-info">
            Wind: {weatherData.wind} m/s
            <br />
            Humidity: {weatherData.humidity} %
          </p>
        </div>
      </div>
    </div>
  </div>
);
}
else {
const apiKey = "da8e914e9e52c2f4d94d48b554426efc";
    let apiUrl =
      `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);
    
    return "Loading...";

}   
}