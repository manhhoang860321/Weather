import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import WeatherToday from "./WeatherToDay";
import WeaherWeek from "./WeatherWeek";
import WeatherHour from "./WeatherHour";

export default function WeatherTab() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/today">ToDay</Link>
          </li>
          <li>
            <Link to="/week">Week</Link>
          </li>
          <li>
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
