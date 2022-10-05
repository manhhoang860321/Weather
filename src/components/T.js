import React, { useState } from "react";
import "../App.css";

const axios = require("axios");
const API_KEY = "220b162ef6574c97ac432326212612";
const BASE_URL = "http://api.weatherapi.com/v1";

export default function Weather() {
  let [weather, setWeather] = useState();
  const [address, setAddress] = useState("lang son");
  const [day, setDay] = useState("");

  //apiWeatherApp
  // const [addresss, setAddresss] = useState();
  // const [data, setData] = useState();
  const [data, setData] = useState();
  async function getWeather() {
    try {
      const response = await axios.get(
        `${BASE_URL}/forecast.json?key=${API_KEY}&q=${address}`
      );
      console.log(response?.data);

      setWeather(response?.data);
      //getday
      const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      console.log(response.data.location.localtime);
      const d = new Date(response.data.location.localtime);
      var dayy = weekday[d.getDay()];
      setDay(dayy);
    } catch (error) {
      console.error(error);
    }

    //apiWeatherAPI
    if (address) {
      const appid = "eb5560de6a31080f8e00d5068c23ac7b";
      const q = address;
      const units = "metric";

      // let data = [];

      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/current?q=${q}&units=${units}&appid=${appid}`
      );
      // data = await res.json();
      setData(res?.data);
      console.log(data);
    }
  }

  return (
    <div className="search">
      <input
        placeholder="Search"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && getWeather()}
      />
      {/* <button onClick={getWeather}>Tra cứu</button> */}
      {weather && (
        <ul>
          <li>
            <a href="https://www.weatherapi.com/" title="Free Weather API">
              <img
                src={`${weather?.current?.condition?.icon}`}
                alt="Weather data by WeatherAPI.com"
                border="0"
              />
            </a>
          </li>
          <li>{weather?.location?.name}</li>
          <li>
            <span>{weather?.current?.temp_c.toFixed(0)}</span>
            <span>
              <sup>o</sup>
            </span>
            <span>C</span>
          </li>
          <li>
            <span>{day}</span>
            <span>, </span>
            <span>{weather?.location?.localtime.slice(11, 16)}</span>
            <span> pm</span>
          </li>
          <li>{weather?.current?.last_updated_epoch}</li>

          <li>{weather?.current?.wind_dir}</li>

          <li>
            <a href="https://www.weatherapi.com/" title="Free Weather API">
              <img
                src={`${weather?.current?.condition?.icon}`}
                alt="Weather data by WeatherAPI.com"
                border="0"
              />
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}
