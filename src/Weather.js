import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date:new Date( response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: " https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
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
          <li> < FormattedDate date= {weatherData.date} />
          </li>
          <li className="text-capitalize"> {weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col -6">
            <img src={weatherData.iconUrl} alt={weatherData.description} />

            <span className="temperature">
              {" "}
              {Math.round(weatherData.temperature)}

            </span>
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
    const apiKey = "53f3bc1f5d348c44be3e3754c7185573";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "The App is loading";
  }
}
