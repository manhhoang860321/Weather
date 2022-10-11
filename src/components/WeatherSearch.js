import React, { useState } from "react";
import "../App.css";
const axios = require("axios");
const API_KEY = "220b162ef6574c97ac432326212612";
const BASE_URL = "http://api.weatherapi.com/v1";

export default function Search({ dataSearch, dataDay }) {
  let [weather, setWeather] = useState([]);
  const [address, setAddress] = useState("lang son");

  const [day, setDay] = useState("");

  async function getWeather() {
    try {
      const response = await axios.get(
        `${BASE_URL}/forecast.json?key=${API_KEY}&q=${address}`
      );
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
      // console.log(response.data.location.localtime);
      const d = new Date(response.data.location.localtime);
      var dayy = weekday[d.getDay()];
      setDay(dayy);
    } catch (error) {
      console.error(error);
    }
  }

  // console.log(dataSearch);
  // console.log(dataSearch?.location?.localtime);
  return (
    <div className="search-output">
      {dataSearch && (
        <div className="search-content">
          <ul>
            <li>
              <img
                src={`${dataSearch?.current?.condition?.icon}`}
                alt=""
                border="0"
              />
            </li>
            <li>{dataSearch?.location?.name}</li>
            <li>
              <span>{dataSearch?.current?.temp_c.toFixed(0)}</span>
              <span>
                <sup>o</sup>
              </span>
              <span>C</span>
            </li>
            <li>
              <span>{dataDay}</span>
              <span>, </span>
              <span>{dataSearch?.location?.localtime.slice(11, 16)}</span>
              <span> pm</span>
            </li>
            <li>
              {dataSearch?.forecast?.forecastday[0]?.day?.condition?.text}
            </li>

            <li>
              {dataSearch?.forecast?.forecastday[0]?.hour[0]?.condition?.text}
            </li>
            <li>{dataSearch?.location?.name}</li>
            <li>
              <img
                src={`${dataSearch?.current?.condition?.icon}`}
                alt=""
                border="0"
              />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
