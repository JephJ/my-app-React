import Reactf, { useState } from "react"; 
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
export default function WeatherForecast(props){
    let [loaded, setLoaded] = useState(false);
    let[forecast, setForecst] = useState(null);
function handleResponse(response) {
    setForecst(response.data.daily);
    setLoaded(true);

}
    
if (loaded){
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay data = {forecast[0]} / >
            </div>
        </div>
      </div>
    );
}
else {
    let apiKey = "866a208a73eeff02182218e9441647a1";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;}  
}
