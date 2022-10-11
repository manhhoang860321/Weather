import React, { useState } from "react";
import "../App.css";
import WeatherSearch from "./WeatherSearch";
import WeatherTab from "./WeatherTab";
// import WeatherToDay from "./WeatherToDay";

const axios = require("axios");
const API_KEY = "220b162ef6574c97ac432326212612";
const BASE_URL = "http://api.weatherapi.com/v1";

export default function Data() {
  let [weather, setWeather] = useState([]);
  const [address, setAddress] = useState("lang son");
  const [day, setDay] = useState("");

  //apiWeatherApp
  // const [addresss, setAddresss] = useState();
  // const [data, setData] = useState();
  // const [data, setData] = useState();
  async function getWeather() {
    try {
      const response = await axios.get(
        `${BASE_URL}/forecast.json?key=${API_KEY}&q=${address}`
      );
      // console.log(response?.data);

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
      // console.log(response);
    } catch (error) {
      console.error(error);
    }

    //apiWeatherAPI
    // if (address) {
    //   const appid = "eb5560de6a31080f8e00d5068c23ac7b";
    //   const q = address;
    //   const units = "metric";

    //   // let data = [];

    //   const res = await axios.get(
    //     `https://api.openweathermap.org/data/2.5/current?q=${q}&units=${units}&appid=${appid}`
    //   );
    //   // data = await res.json();
    //   setData(res?.data);
    //   // console.log(data);
    // }
  }
  // console.log(response?.data);
  // console.log(day);
  return (
    <div className="weather">
      <div className="search-input">
        <input
          placeholder="Search"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && getWeather()}
        />
      </div>
      <WeatherSearch dataSearch={weather} dataDay={day} />
      <WeatherTab dataTab={weather} />
    </div>
  );
}
