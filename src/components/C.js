import axios from "axios";
import React from "react";
import { useState } from "react";
export default function Capital() {
  const [address, setAddress] = useState("lang son");
  const [data, setData] = useState();
  const [dataLatLon, setDataLatLon] = useState();

  async function getWeather() {
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
      const exclude = "daily";
      const appid = "eb5560de6a31080f8e00d5068c23ac7b";

      if (data?.coord?.lat && data?.coord?.lat) {
        // const lat1 = lat;
        // const lon1 = lon;
        const resdata = await axios.get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${appid}`
        );
        setDataLatLon(resdata);

        // console.log("loi roi");
        console.log(resdata.data.hourly[0]);
        // console.log(lat, lon);
        console.log(dataLatLon);
      }
    }
  }

  // console.log();
  // console.log(dataLatLon);

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
