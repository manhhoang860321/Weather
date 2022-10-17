import React from "react";
// import FontAwesomeIcon from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import uvimg from "../access/img-uv.png";
import wind from "../access/wind.png";
import set from "../access/s.png";
import rise from "../access/r.png";
import humidityimg from "../access/humidity.png";
import visimg from "../access/vis.png";
import pressureimg from "../access/pressure.png";

export default function WeatherToDay({ dataToDay }) {
  // console.log(sunsetimg);
  const uv = dataToDay?.current.uv;
  const windStatus = dataToDay?.current.wind_kph;
  const sunRise = dataToDay?.forecast?.forecastday[0]?.astro?.sunrise;
  const sunSet = dataToDay?.forecast?.forecastday[0]?.astro?.sunset;
  const humidity = dataToDay?.current.humidity;
  const vis_km = dataToDay?.current.vis_km;
  const pressure_mb = dataToDay?.current.pressure_mb;
  // console.log(uv);
  // console.log(dataToDay);
  return (
    <div className="container-tab">
      <div className="weather-status-list">
        <div className="item">
          <h4>UV index</h4>
          <img src={`/..${uvimg}`} alt="image" />

          <p>{uv}</p>
        </div>
        <div className="item">
          <h4>Wind Status</h4>
          <img src={`/..${wind}`} alt="image" />
          <p>{windStatus}</p>
        </div>
        <div className="item">
          <h4>Sunrise & Sunset</h4>
          <span className="sunrise">
            <img className="img-sunrise" src={`/..${rise}`} alt="image" />
            <p className="text-sunrise">{sunRise}</p>
          </span>
          <span className="sunset">
            <img className="img-sunset" src={`/..${set}`} alt="image" />

            <p className="text-sunset">{sunSet}</p>
          </span>
        </div>
        <div className="item">
          <h4>Humidity</h4>
          <img src={`/..${humidityimg}`} alt="imager" />
          <p>{humidity}</p>
        </div>
        <div className="item">
          <h4>Visibility</h4>
          <img src={`/..${visimg}`} alt="image" />
          <p>{vis_km}</p>
        </div>
        <div className="item">
          <h4>Pressure</h4>
          <img src={`/..${pressureimg}`} alt="image" />
          <p>{pressure_mb}</p>
        </div>
      </div>
    </div>
  );
}
