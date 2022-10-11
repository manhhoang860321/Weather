import axios from "axios";
import React from "react";
import { useState } from "react";
import WeatherWeek from "./WeatherWeek";
export default function T() {
  const [address, setAddress] = useState("lang son");
  const [data, setData] = useState();
  const [dataLatLon, setDataLatLon] = useState();
  let tam = [];
  let dataTam = [];

  let T;
  async function getWeather() {
    try {
      // console.log("ppp");
      if (address) {
        const appid = "eb5560de6a31080f8e00d5068c23ac7b";
        const q = address;
        const units = "metric";
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${q}&units=${units}&appid=${appid}`
        );
        setData(res?.data);
        // console.log(data);
      }

      if (data && data.coord.lat && data.coord.lat) {
        const lat = data.coord.lat;
        const lon = data.coord.lon;
        const cnt = 7;
        const exclude = "hourly";
        const appid = "eb5560de6a31080f8e00d5068c23ac7b";

        // const dataEightDate = [];
        T = dataLatLon?.daily;
        T?.map((item) => {
          tam = item?.dt;
          dataTam?.push(tam);
        });

        if (data?.coord?.lat && data?.coord?.lat) {
          const resdata = await axios.get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${appid}`
          );
          setDataLatLon(resdata?.data);
        }
      }
      console.log(dataTam);
      //   console.log(T);
      return dataTam;
    } catch (error) {
      console.log("lai loi roi");
    }
  }

  // console.log();
  //   console.log(dataTam);
  //   console.log(T);

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
          <span>{data?.main.temp.toFixed(0)}</span>
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
