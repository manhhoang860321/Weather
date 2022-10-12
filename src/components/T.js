import axios from "axios";
import React from "react";
import { useState } from "react";
import WeatherWeek from "./WeatherWeek";
export default function T() {
  const [address, setAddress] = useState("ha noi");
  const [data, setData] = useState();
  const [lat, setLat] = useState(21.8333);
  const [lon, setLon] = useState(106.7333);
  const [dataLatLon, setDataLatLon] = useState();
  const [dataT, setDataT] = useState([""]);

  let tam = [];
  let dataTamDate = [];
  let dataTamTime = [];

  let T;
  async function getWeather() {
    // console.log("ppp");
    // if (address) {
    // const appid = "eb5560de6a31080f8e00d5068c23ac7b";
    // const q = address;
    // const units = "metric";
    // const res = await axios.get(
    //   `https://api.openweathermap.org/data/2.5/weather?q=${q}&units=${units}&appid=${appid}`
    // );
    // setData(res?.data);
    // }
    // console.log(data);

    // if (data && data?.coord?.lat && data?.coord?.lat) {
    if ((lat, lon)) {
      //   const lat = data?.coord?.lat;
      //   const lon = data?.coord?.lon;
      const cnt = 7;
      const exclude = "hourly";
      const appid = "eb5560de6a31080f8e00d5068c23ac7b";

      //   T = dataLatLon?.daily;
      //   setDataT(dataTamTime);
      // console.log(dataLatLon);

      //   T?.map((item) => {
      //     tam = new Date(item?.dt * 1000).toLocaleDateString();
      //     dataTamDate?.push(tam);
      //   });
      //   T?.map((item) => {
      //     tam = new Date(item?.dt * 1000).toDateString();
      //     dataTamTime?.push(tam);
      //   });
      //   if (data?.coord?.lat && data?.coord?.lat) {
      const resdata = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${appid}`
      );
      setDataLatLon(resdata);
      console.log(dataLatLon);
      //   }
      // console.log(T);
      // setDataLatLon(T);
      //   console.log(T);
    }
  }
  //   console.log(dataTamDate);
  //   console.log(dataT);
  //   console.log(dataT[0]);

  return (
    <div>
      <input
        placeholder="Search"
        defaultValue={address}
        onChange={(e) => setAddress(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && getWeather()}
      />

      <ul>
        <li>thời tiết tại {data?.name}</li>
        <li>
          <span>{data?.main?.temp.toFixed(0)}</span>
          <span>
            <sup>o</sup>
          </span>
          <span>C</span>
        </li>
      </ul>
      <WeatherWeek dataW={dataLatLon}></WeatherWeek>
    </div>
  );
}
