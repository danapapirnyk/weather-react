import React from "react";
import "./styles.css";
import Form from "./Form.js";

export default function App() {
  let weatherData = {
    city: "Kyiv",
    temperature: 23,
    dayTemperature: 26,
    nightTemperature: 17,
    date: "Tuesday 20:00",
    description: "Sunny",
    humidity: 60,
    wind: 10
  };
  return (
    <div className="container body-wrap">
      <Form />
      <div className="card-box">
        <div className="row">
          <div className="col-6">
            <h1 className="main-city">{weatherData.city}</h1>
            <p className="current-date">{weatherData.date}</p>
            <h3 className="icon-text">{weatherData.description}</h3>
            <img
              src="https://cdn-icons-png.flaticon.com/128/2924/2924900.png"
              alt="clear-sky"
              className="icon"
            />
          </div>
          <div className="col-6 main-temp">
            <h2 className="current-temp">
              {weatherData.temperature}
              <a href="/" className="active celcius-link">
                °C{" "}
              </a>
            </h2>
            <h4 className="day-temp">
              <strong>{weatherData.dayTemperature}°</strong>/
              {weatherData.nightTemperature}°
            </h4>
            <p className="forecast-info">
              Wind: {weatherData.wind} m/s
              <br />
              Humidity: {weatherData.humidity} %
            </p>
          </div>
        </div>
      </div>
      <div className="footer">
        Coded by Dana Papirnyk and is{" "}
        <a
          href="https://github.com/danapapirnyk"
          target="_blank"
          className="link-github"
          rel="noreferrer"
        >
          open-sourced on GitHub{" "}
        </a>
      </div>
      <div className="footer-icons">
        <a
          href="https://instagram.com/danapapirnyk?igshid=YmMyMTA2M2Y="
          className="inst-link"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-instagram inst-icon"></i>
        </a>
        <a
          className="fb-link"
          target="_blank"
          href="https://github.com/danapapirnyk"
          rel="noreferrer"
        >
          <i class="fa-brands fa-github"></i>
        </a>
        <a
          className="lnk-link"
          target="_blank"
          href="https://www.linkedin.com/in/bohdana-papirnyk-216934226/"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin lnk-icon"></i>
        </a>
      </div>
    </div>
  );
}


