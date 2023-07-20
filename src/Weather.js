import React, { useState } from "react";

import axios from "axios";
import "./Weather.css";
import Weatheinfo from "./Weatherinfo";
import WeatherForecast from "./WeatherForecast";
export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[ 0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }
  function search() {
    const apiKey = "53f3bc1f5d348c44be3e3754c7185573";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCitychange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col -9">
              <input
                type="search"
                placeholder="Enter a City.."
                className="form-control"
                autoFocus="on"
                onChange={handleCitychange}
              />
            </div>
            <div className="col -3">
              <input
                type="submit"
                value="search"
                className="btn btn-primary"
                w-100
              />
            </div>
          </div>
        </form>
        <Weatheinfo data={weatherData} />
        <WeatherForecast />
      </div>
    );
  } else {
    search();

    return "The App is loading";
  }
}
