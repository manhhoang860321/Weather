import React from "react";
import { useState } from "react";
// const axios = require("axios");
// const API_KEY = "eb5560de6a31080f8e00d5068c23ac7b";
// const BASE_URL = "'https://api.openweathermap.org/data/2.5/onecall?'";
export default function Capital() {
  //   let [weather, setWeather] = useState();
  const [address, setAddress] = useState();
  var data = [];

  async function getWeather() {
    // try {
    //   const reponse = await axios.get(
    //     `${BASE_URL}/current.json?key=${API_KEY}&q=${address}`
    //   );
    //   console.log(reponse?.data);
    //   setWeather(reponse?.data);
    // } catch (error) {
    //   console.error(error);
    // }

    if (address) {
      const appid = "eb5560de6a31080f8e00d5068c23ac7b";
      const q = address;
      const units = "metric";

      // let data = [];

      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${q}&units=${units}&appid=${appid}`
        );
        data = await res.json();

        console.log("ed");
        if (data) {
          console.log(data);
        }
        return data;
        // const appid = "eb5560de6a31080f8e00d5068c23ac7b";
      } catch (error) {
        console.log("loi roi");
      }

      // if (data && data.coord.lat && data.coord.lat) {
      //   const lat = data.coord.lat;
      //   const lon = data.coord.lon;
      //   const exclude = "daily";

      //   if (data.coord.lat && data.coord.lat) {
      //     const resdata = await fetch(
      //       `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${appid}`
      //     );

      //     const dataLatLon = await resdata.json();
      //     console.log(dataLatLon);
      //   }
      // }

      // console.log(address);
    }
  }
  console.log(data);
  return (
    <div>
      {/* <img src="" alt="bieu tuong thoi tiet" /> */}
      <input
        placeholder="Search"
        defaultValue={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button onClick={getWeather}>Search</button>

      <ul>
        <li>thời tiết tại {data.name}</li>
        <li>
          <a href="" title="Free Weather API"></a>
          <img
            //   src={`${weather?.current?.condition?.icon}`}
            alt="Weather dât by WeatherAPI.com"
          />
        </li>
      </ul>
    </div>
  );
}
