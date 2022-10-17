import React from "react";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import WeatherToday from "./WeatherToDay";
import WeatherWeek from "./WeatherWeek";
import WeatherHour from "./WeatherHour";

export default function WeatherTab({
  dataTab,
  dataTime,
  dataDate,
  dataLatLon,
}) {
  const [active, setActive] = useState("");

  return (
    <div className="weather-tab">
      <nav>
        <ul className="list-day">
          <li
            onClick={() => {
              setActive("today");
            }}
            className={active === "today" ? "active" : ""}
          >
            <Link to="/today">ToDay</Link>
          </li>
          <li
            onClick={() => {
              setActive("week");
            }}
            className={active === "week" ? "active" : ""}
          >
            <Link to="/week">Week</Link>
          </li>
          <li
            onClick={() => {
              setActive("hour");
            }}
            className={active === "hour" ? "active" : ""}
          >
            <Link to="/hour">Hour</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route
          path="/today"
          element={<WeatherToday dataToDay={dataTab} />}
        ></Route>
        <Route
          path="/week"
          element={
            <WeatherWeek
              dataWeek={dataTab}
              dataTime={dataTime}
              dataDate={dataDate}
              dataWeekAll={dataLatLon}
            />
          }
        ></Route>
        <Route
          path="/hour"
          element={<WeatherHour dataHour={dataTab} />}
        ></Route>
      </Routes>
    </div>
  );
}
