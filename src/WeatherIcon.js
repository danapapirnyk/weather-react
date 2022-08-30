import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./styles.css";

export default function WeatherIcon(props) {
    const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "CLOUDY",
    "03n": "CLOUDY",
    "04d": "PARTLY_CLOUDY_DAY",
    "04n": "PARTLY_CLOUDY_NIGHT",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "CLEAR_NIGHT",
    "11n": "CLEAR_NIGHT",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };

  return (
    <div className="Weather-icon">
      <ReactAnimatedWeather
        icon={codeMapping[props.code]}
        color="white"
        size={props.size}
        animate={true}
      />
    </div>
  );
}