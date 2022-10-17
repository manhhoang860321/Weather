import axios from "axios";
import React from "react";
import { useState } from "react";
import WeatherWeek from "./WeatherWeek";
export default function T() {
  const [address, setAddress] = useState("ha noi");
  const [data, setData] = useState([]);
  const [dataLatLon, setDataLatLon] = useState();
  const [dataT, setDataT] = useState([]);
  //   const [dataTamTime, setDataTamTime] = useState([]);
  let tam = [];
  let dataTamDate = [];
  let dataTamTime = [];
  let T = [];
  async function getWeather() {
    if (address) {
      const appid = "eb5560de6a31080f8e00d5068c23ac7b";
      const q = address;
      const units = "metric";
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${q}&units=${units}&appid=${appid}`
      );
      setData(res?.data);
      console.log(res);
      if (res?.data?.coord?.lat && res?.data?.coord?.lon) {
        //oke
        const lat = res?.data?.coord?.lat;
        const lon = res?.data?.coord?.lon;
        const cnt = 7;
        const exclude = "hourly";
        const appid = "eb5560de6a31080f8e00d5068c23ac7b";
        if (lat && lon) {
          // hay đây?
          const resdata = await axios.get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${appid}`
          );
          setDataLatLon(resdata?.data?.daily);
        }
      }
    }
  }
  T = dataLatLon;
  console.log(T);
  T?.map((item) => {
    tam = new Date(item?.dt * 1000).toLocaleDateString();
    dataTamDate?.push(tam);
  });
  T?.map((item) => {
    tam = new Date(item?.dt * 1000).toDateString();
    dataTamTime?.push(tam);
  });
  console.log(dataTamDate);
  console.log(dataTamTime);
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
