
import React, { useState, useEffect } from "react";
import Weather from "./Weather";
import "./index.css";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          "https://api.openweathermap.org/data/2.5/weather?q=idukki&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric" //api of idukki weather
        );
        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }
        const data = await response.json();
        setWeatherData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchWeather();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="app">
      {/* <h1 className="app-title"></h1> */}
      {weatherData && <Weather data={weatherData} />}
    </div>
  );
};

export default App;
