import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./styles.css";

export default function WeatherInfo(props) {
    return (
      <div className="WeatherInfo">
        <h1 className="main-city">{props.data.city}</h1>
        <ul className="icon-text">
          <li className="icon-text">
            <FormattedDate date={props.data.date} />
          </li>
          <li className="icon-text text-capitalize">
            {props.data.description}
          </li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div>
              <div className="float-left">
                <WeatherIcon code={props.data.icon} size={72} />
              </div>
              <div className="float-left">
                <WeatherTemperature celsius={props.data.temperature} />
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul className="information">
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