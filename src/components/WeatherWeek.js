import React from "react";
import axios from "axios";
import { useState } from "react";
import WeekList from "./WeekList";
export default function WeatherWeek({
  dataWeek,
  dataTime,
  dataDate,
  dataWeekAll,
}) {
  // console.log(dataWeek);
  // console.log(dataWeekAll);
  // console.log(dataWeekAll[0].weather[0].icon);

  return (
    <div className="container-week">
      <div className="weather-week-time">
        <ul className="weather-week-list">
          <WeekList dataWeekAll={{ dataWeekAll, dataWeek }}></WeekList>
        </ul>
      </div>

      {/* <FooterWeek
        dtFooterWeek={{ dataTime, dataDate, dataWeekAll }}
      ></FooterWeek> */}
    </div>
  );
}
