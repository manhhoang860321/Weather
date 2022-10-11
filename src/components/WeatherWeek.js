import React from "react";
export default function WeatherWeek({ dataWeek, dataW }) {
  // console.log(dataW);

  return (
    <div className="container-week">
      <div className="weather-week-time">
        <ul className="weather-week-list">
          <li>
            <h4>UV index</h4>
            <img src="" alt="image weather" />
            <p>0</p>
          </li>
          <li>
            <h4>UV index</h4>
            <img src="" alt="image weather" />
            <p>0</p>
          </li>
          <li>
            <h4>UV index</h4>
            <img src="" alt="image weather" />
            <p>0</p>
          </li>
          <li>
            <h4>UV index</h4>
            <img src="" alt="image weather" />
            <p>0</p>
          </li>
          <li>
            <h4>UV index</h4>
            <img src="" alt="image weather" />
            <p>0</p>
          </li>
          <li>
            <h4>UV index</h4>
            <img src="" alt="image weather" />
            <p>0</p>
          </li>
          <li>
            <h4>UV index</h4>
            <img src="" alt="image weather" />
            <p>0</p>
          </li>
          <li>
            <h4>UV index</h4>
            <img src="" alt="image weather" />
            <p>0</p>
          </li>
        </ul>
      </div>
      <div className="weather-week-status">
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
      </div>
    </div>
  );
}
