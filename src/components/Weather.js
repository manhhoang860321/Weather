import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import WeatherSearch from "./WeatherSearch";
import WeatherTab from "./WeatherTab";
import Tab from "./Tab";
// import WeatherToDay from "./WeatherToDay";

// const axios = require("axios");
const API_KEY = "220b162ef6574c97ac432326212612";
const BASE_URL = "http://api.weatherapi.com/v1";

export default function Data() {
  let [weather, setWeather] = useState([]);
  const [address, setAddress] = useState("lang son");
  const [day, setDay] = useState("");

  //data week
  const [data, setData] = useState();
  const [dataLatLon, setDataLatLon] = useState();
  const [dataT, setDataT] = useState([""]);
  //apiWeek
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
      if (address) {
        const appid = "eb5560de6a31080f8e00d5068c23ac7b";
        const q = address;
        const units = "metric";
        const res = await axios.get(
          `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=${units}&appid=${appid}`
        );
        setData(res?.data);
        // console.log(res);
        if (res?.data?.coord?.lat && res?.data?.coord?.lon) {
          //oke
          const lat = res?.data?.coord?.lat;
          const lon = res?.data?.coord?.lon;
          const cnt = 7;
          const exclude = "hourly";
          const appid = "eb5560de6a31080f8e00d5068c23ac7b";
          if (lat && lon) {
            const resdata = await axios.get(
              `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${appid}`
            );
            setDataLatLon(resdata?.data?.daily);
          }
        }
      }

      // console.log(response);
    } catch (e) {
      // console.error();
    }
  }
  T = dataLatLon;
  // console.log(T);
  T?.map((item) => {
    tam = new Date(item?.dt * 1000).toLocaleDateString();
    dataTamDate?.push(tam);
  });
  T?.map((item) => {
    tam = new Date(item?.dt * 1000).toDateString();
    dataTamTime?.push(tam);
  });
  // console.log(dataTamDate);
  // console.log(dataTamTime);
  let desc = "";
  if (isNaN(weather)) {
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
        {/* {weather && ( */}
        <WeatherTab
          dataTab={weather}
          dataDate={dataTamDate}
          dataTime={dataTamTime}
          dataLatLon={dataLatLon}
        />
        {/* )} */}
      </div>
    );
  } else {
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
        <Tab
          dataTab={weather}
          dataDate={dataTamDate}
          dataTime={dataTamTime}
          dataLatLon={dataLatLon}
        ></Tab>
      </div>
    );
  }

  // return (
  //   <div className="weather">
  //     <div className="search-input">
  //       <input
  //         placeholder="Search"
  //         value={address}
  //         onChange={(e) => setAddress(e.target.value)}
  //         onKeyDown={(e) => e.key === "Enter" && getWeather()}
  //       />
  //     </div>
  //     <WeatherSearch dataSearch={weather} dataDay={day} />
  //     { weather &&
  //       <WeatherTab
  //       dataTab={weather}
  //       dataDate={dataTamDate}
  //       dataTime={dataTamTime}
  //       dataLatLon={dataLatLon}
  //     />
  //     }
  //   </div>
  // );
}
