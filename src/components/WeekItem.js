import React, { useState } from "react";

export default function WeekItem({ dataWeekAll }) {
  const [d, setD] = useState([]);
  //   console.log(dataWeekAll.dataWeekAll);
  console.log(d);
  console.log(d?.temp?.min);
  return (
    <div>
      {dataWeekAll.dataWeekAll.map((item, index) => {
        {
          /* console.log("1", index); */
        }

        return (
          <div key={index}>
            <li
              onClick={() => {
                setD(item);
              }}
            >
              <h4>
                <span>
                  {new Date(item.dt * 1000).toDateString().slice(0, 3)}
                </span>
                <span>, </span>
                <span>
                  {new Date(item.dt * 1000).toLocaleDateString().slice(0, 5)}
                </span>
              </h4>
              <img
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt=""
              />
              <p>
                <span>
                  {(item.temp.min - 273.15).toFixed(0)} <sup>o</sup>
                </span>
                <span> - </span>
                <span>{(item.temp.max - 273.15).toFixed(0)}</span>
              </p>
            </li>
          </div>
        );
      })}
      {
        <div className="weather-week-status">
          <h4>
            <span>{new Date(d.dt * 1000).toDateString().slice(0, 3)}</span>
            <span>, </span>
            <span>
              {new Date(d.dt * 1000).toLocaleDateString().slice(0, 5)}
            </span>
          </h4>
          <ul className="list-status">
            <li>
              <span>
                Temp current:
                {((d?.temp?.min - 273.15 + d?.temp?.max - 273.15) / 2).toFixed(
                  0
                )}
              </span>
              <span>
                <sup>o</sup>
              </span>
              <span>C</span>
            </li>
            <li>
              <span>Temp :{(d?.temp?.min - 273.15).toFixed(2)}</span>
              <span>
                <sup>o</sup>
              </span>
              <span>C</span>

              <span> - </span>
              <span>Temp :{(d?.temp?.max - 273.15).toFixed(2)}</span>
              <span>
                <sup>o</sup>
              </span>
              <span>C</span>
            </li>
            <li>
              {d?.humidity} <span>%</span>
            </li>
            <li>
              Wind speed: {d.wind_speed} <span>km/h</span>
            </li>
            <li>Temp current: 21 C</li>
            <li>Temp current: 21 C</li>
            <li>Temp current: 21 C</li>
            <li>Temp current: 21 C</li>
          </ul>
        </div>
      }
    </div>
  );
}

{
  /* <div className="weather-week-status">
      <h4>Mon, 22/2</h4>
      <ul className="list-status">
        <li>Temp current: 21 C</li>
        <li>Temp current: 21 C</li>
        <li>Temp current: 21 C</li>
        <li>Temp current: 21 C</li>
        <li>Temp current: 21 C</li>
        <li>Temp current: 21 C</li>
        <li>Temp current: 21 C</li>
        <li>Temp current: 21 C</li>
      </ul>
    </div> */
}
