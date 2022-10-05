import React from "react";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import WeatherToday from "./WeatherToDay";
import WeaherWeek from "./WeatherWeek";
import WeatherHour from "./WeatherHour";

export default function WeatherTab() {
  const [active, setActive] = useState("");

  return (
    <div className="weather-tab">
      <nav>
        <ul className="list-day">
          <li
            onClick={() => {
              setActive("today");
            }}
            className={active == "today" ? "active" : ""}
          >
            <Link to="/today">ToDay</Link>
          </li>
          <li
            onClick={() => {
              setActive("week");
            }}
            className={active == "week" ? "active" : ""}
          >
            <Link to="/week">Week</Link>
          </li>
          <li
            onClick={() => {
              setActive("hour");
            }}
            className={active == "hour" ? "active" : ""}
          >
            <Link to="/hour">Hour</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/today" element={<WeatherToday />}></Route>
        <Route path="/week" element={<WeaherWeek />}></Route>
        <Route path="/hour" element={<WeatherHour />}></Route>
      </Routes>
    </div>
  );
}
