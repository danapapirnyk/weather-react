import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./styles.css";


export default function Weather(props) {
  
  const [weatherData,setWeatherData] = useState({ready: false});
  const [city,setCity] = useState(props.defaultCity)


function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates:response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
}
function search() {
const apiKey = "da8e914e9e52c2f4d94d48b554426efc";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
}

function showLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

function searchLocation(position) {
  const currentCoords = `lat=${position.coords.latitude}&lon=${position.coords.longitude}`;
  search(currentCoords);
}

function handleSUbmit(event) {
  event.preventDefault();
  search();
}
function handleCityChange(event) {
setCity(event.target.value);
}

if (weatherData.ready) {
return (
  <div className="container body-wrap">
    <form
      className="input-group mb-3 search-tab"
      id="search-tab"
      onSubmit={handleSUbmit}
    >
      <input
        type="text"
        className="form-control shadow"
        id="search-input"
        placeholder="Enter a city"
        autocomplete="off"
        autofocus="on"
        onChange={handleCityChange}
      />
      <button
        className="btn btn-outline-light search-button shadow"
        type="submit"
        id="button-addon2"
      >
        Search
      </button>
      <button
        className="btn btn-outline-light current-button shadow"
        id="location-button"
        onClick={showLocation}
      >
        Current location
      </button>
    </form>
    <div className="card-box">
      <WeatherInfo data={weatherData} />
      <WeatherForecast coordinates={weatherData.coordinates} />
    </div>
  </div>
);
}
else {
  search();
    return "Loading...";
}   
}