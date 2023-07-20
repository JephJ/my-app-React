import Reactf from "react"; 
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";
export default function WeatherForecast(props){
function handleResponse(response) {

}
     let apiKey = "64469ac67e6dc941feb5b50915a18dc7";
     let longitude = props.coordinates.lon;
     let latitude = props.coordinates.lat;
     let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

     axios.get(apiUrl).then(handleResponse);

    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="" WeatherForecast-day>
              {" "}
              Thu
            </div>
            <WeatherIcon code="01d"  size = {36}/ >
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperatures-max">19°</span>
              <span className="WeatherForecast-temperatures-min">10°</span>
            </div>
          </div>
        </div>
      </div>
    );
}
