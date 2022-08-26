import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
    return (
      <div className="WeatherInfo">
        <h1 className="main-city">{props.data.city}</h1>
        <ul сlassName="icon-text">
          <li className="icon-text">
            <FormattedDate date={props.data.date} />
          </li>
          <li className="icon-text text-capitalize">
            {props.data.description}
          </li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              className="icon"
            />
            <span className="current-temp">
              {Math.round(props.data.temperature)}°C
            </span>
          </div>
          <div className="col-6 main-temp">
            <ul>
              <li className="day-temp">
                <strong>29°</strong>/ 17°
              </li>
              <li className="forecast-info"> Wind: {props.data.wind} m/s</li>
              <li className="forecast-info">
                {" "}
                Humidity: {props.data.humidity} %
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}