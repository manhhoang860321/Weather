import axios from "axios";
import React from "react";
import { useState } from "react";
// const axios = require("axios");
// const API_KEY = "eb5560de6a31080f8e00d5068c23ac7b";
// const BASE_URL = "'https://api.openweathermap.org/data/2.5/onecall?'";
// const Con = React.memo((props) => {
//   console.log(Con);
//   return <div></div>;
// });
export default function Capital() {
  //   let [weather, setWeather] = useState();
  const [address, setAddress] = useState();
  // const [data, setData] = useState();
  const [data, setData] = useState();
  const [dataLatLon, setDataLatLon] = useState();

  // const Con = React.memo((props) => {
  //   console.log(Con);
  //   return <div></div>;
  // });
  // var data = [];

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
    console.log("ppp");

    if (address) {
      const appid = "eb5560de6a31080f8e00d5068c23ac7b";
      const q = address;
      const units = "metric";

      // let data = [];

      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/current?q=${q}&units=${units}&appid=${appid}`
      );
      // data = await res.json();
      setData(res?.data);

      // thời tiết theo lat, lon
      {
        const appid = "eb5560de6a31080f8e00d5068c23ac7b";

        if (data && data.coord.lat && data.coord.lat) {
          const lat = data.coord.lat;
          const lon = data.coord.lon;
          const exclude = "daily";

          if (data.coord.lat && data.coord.lat) {
            const resdata = await fetch(
              `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${appid}`
            );
            // setDataLatLon(resdata?.dataLatLon);
            const dataLatLon = await resdata.json();
            console.log(dataLatLon);
          }
        }
      }

      // console.log(address);}
    }
  }
  // console.log("a");
  console.log(data);
  // console.log(dataLatLon);

  return (
    <div>
      {/* <img src="" alt="bieu tuong thoi tiet" /> */}
      <input
        // type="submit"
        // value=
        placeholder="Search"
        defaultValue={address}
        onChange={(e) => setAddress(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && getWeather()}
      />

      <ul>
        {/* <li>thời tiết tại {data?.name}</li> */}
        <li>
          {/* <span>{data?.main.temp.toFixed(0)}</span> */}
          <span>
            <sup>o</sup>
          </span>
          <span>C</span>
        </li>
        <li>
          <span></span>
          <span></span>
        </li>
        <li></li>
      </ul>
    </div>
  );
}
