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

  //data week
  const [data, setData] = useState();
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  const [dataLatLon, setDataLatLon] = useState();
  const [dataT, setDataT] = useState([""]);
  //apiWeatherApp
  let tam = [];
  let dataTamDate = [];
  let dataTamTime = [];
  let T;
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
  }
  async function getWeather1() {
    try {
      // console.log("ppp");
      // if (address) {
      const appid = "eb5560de6a31080f8e00d5068c23ac7b";
      const q = address;
      const units = "metric";
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${q}&units=${units}&appid=${appid}`
      );
      setData(res?.data);
      // }
      // console.log(data);

      if (data && data?.coord?.lat && data?.coord?.lat) {
        const lat = data?.coord?.lat;
        const lon = data?.coord?.lon;
        const cnt = 7;
        const exclude = "hourly";
        const appid = "eb5560de6a31080f8e00d5068c23ac7b";

        T = dataLatLon?.daily;

        // console.log(dataLatLon);

        T?.map((item) => {
          tam = new Date(item?.dt * 1000).toLocaleDateString();
          dataTamDate?.push(tam);
        });
        T?.map((item) => {
          tam = new Date(item?.dt * 1000).toDateString();
          dataTamTime?.push(tam);
        });

        if (data?.coord?.lat && data?.coord?.lat) {
          const resdata = await axios.get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${appid}`
          );
          setDataLatLon(resdata?.data);
          // console.log(dataLatLon);
        }
        setDataT(dataTamTime);
        console.log(dataT);
        // console.log(T);
        // setDataLatLon(T);
        //   console.log(T);
      }
    } catch (error) {
      console.log("error");
    }
  }

  // console.log(response?.data);
  console.log(weather);

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
