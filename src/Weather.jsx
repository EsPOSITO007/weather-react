// Weather.jsx
import React from "react";
import "./index.css";
import cloudIcon from "./assets/cloud.png";
import clearIcon from "./assets/clear.png";
import drizzleIcon from "./assets/drizzle.png";
import rainIcon from "./assets/rain.png";
import snowIcon from "./assets/snow.png";
import windIcon from "./assets/wind.png";

const Weather = ({ data }) => {
  let weatherIcon;
  const condition = data.weather[0].main.toLowerCase();

  switch (condition) {
    case "clouds":
      weatherIcon = cloudIcon;
      break;
    case "clear":
      weatherIcon = clearIcon;
      break;
    case "drizzle":
      weatherIcon = drizzleIcon;
      break;
    case "rain":
      weatherIcon = rainIcon;
      break;
    case "snow":
      weatherIcon = snowIcon;
      break;
    case "wind":
      weatherIcon = windIcon;
      break;
    default:
      weatherIcon = clearIcon; 
  }

  return (
    <div className="weather">
      <img src={weatherIcon} alt={`${data.weather[0].description} icon`} />
      <h2>Weather in {data.name}</h2>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Feels like: {data.main.feels_like}°C</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Condition: {data.weather[0].description}</p>
    </div>
  );
};

export default Weather;
