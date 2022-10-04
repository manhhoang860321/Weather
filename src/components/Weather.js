import React from "react";
// import "./Weather.css";
import "../App.css";

// import Capital from "./Capital";
// import C from "./C";
import T from "./T";
// import WeatherToDay from "./WeatherToDay";
import WeatherWeek from "./WeatherWeek";

export default function Weather() {
  return (
    <div className="container">
      {/* <Capital></Capital> */}
      {/* <C></C> */}

      <T></T>
      <WeatherWeek></WeatherWeek>
      {/* <WeatherToDay></WeatherToDay> */}
    </div>
  );
}
