import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: "",
      iconUrl: " https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col -9">
              <input
                type="search"
                placeholder="Enter a City.."
                className="form-control"
                autoFocus="on"
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
        <h1> {weatherData.city}</h1>
        <ul>
          <li> Friday 09:00 am</li>
          <li> {weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col -6">
            <img src={weatherData.iconUrl} alt={weatherData.description} />

            <span className="temperature"> {Math.round(temperature)}</span>
            <span className="unit">&deg;C</span>
          </div>
          <div className="col -6 ">
            <ul>
              <li> Humidity: {weatherData.humidity}%</li>
              <li> Wind: {weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let city = "London";
    const apiKey = "ff1d9ea9376b5c27a82e04fc2b2abdbb";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return "The App is loading";
  }
}
