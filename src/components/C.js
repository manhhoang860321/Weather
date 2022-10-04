import axios from "axios";
import React from "react";
import { useState } from "react";
export default function Capital() {
  const [address, setAddress] = useState();
  const [data, setData] = useState();
  const [dataLatLon, setDataLatLon] = useState();

  async function getWeather() {
    console.log("ppp");
    if (address) {
      const appid = "eb5560de6a31080f8e00d5068c23ac7b";
      const q = address;
      const units = "metric";
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${q}&units=${units}&appid=${appid}`
      );
      setData(res?.data);
      console.log("rqwrx");
    }

    if (data && data.coord.lat && data.coord.lat) {
      const lat = data.coord.lat;
      const lon = data.coord.lon;
      const exclude = "daily";
      const appid = "eb5560de6a31080f8e00d5068c23ac7b";

      if (data.coord.lat && data.coord.lat) {
        const resdata = await axios.get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${appid}`
        );
        setDataLatLon(resdata?.dataLatLon);
        console.log("loi roi");
      }
    }
  }

  console.log(data);
  console.log(dataLatLon);

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
    </div>
  );
}
