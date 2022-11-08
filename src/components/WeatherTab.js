import React from "react";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import WeatherToDay from "./WeatherToDay";
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
      {/* <nav>
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
      </nav> */}
      {/* <Routes>
        <Route path="/" element={<WeatherToDay dataToDay={dataTab} />}></Route>
        <Route
          path="/today"
          element={<WeatherToDay dataToDay={dataTab} />}
        ></Route>
        <Route
          path="/"
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
        <Route path="/" element={<WeatherHour dataHour={dataTab} />}></Route>
        <Route
          path="/hour"
          element={<WeatherHour dataHour={dataTab} />}
        ></Route>
      </Routes> */}
      <Tabs>
        <TabList>
          <Tab>ToDay</Tab>
          <Tab>Week</Tab>
          <Tab>Hour</Tab>
        </TabList>

        <TabPanel>
          <WeatherToDay dataToDay={dataTab}></WeatherToDay>
          {/* <h2> 1</h2> */}
        </TabPanel>
        <TabPanel>
          <WeatherWeek
            dataWeek={dataTab}
            dataTime={dataTime}
            dataDate={dataDate}
            dataWeekAll={dataLatLon}
          ></WeatherWeek>
          {/* <h2> 2</h2> */}
        </TabPanel>
        <TabPanel>
          <WeatherHour dataHour={dataTab}></WeatherHour>
          {/* <h2> 3</h2> */}
        </TabPanel>
      </Tabs>
    </div>
  );
}
