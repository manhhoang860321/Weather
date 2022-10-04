import React from "react";
export default function WeatherToDay() {
  return (
    <div className="container-tab">
      <nav className="weather-time">
        <ul className="weather-time-list">
          <li>
            <a href="/day">Day</a>
          </li>
          <li>
            <a href="/Week">Week</a>
          </li>
          <li>
            <a href="/Hour">Hour</a>
          </li>
        </ul>
      </nav>
      <div className="weather-status-list">
        <div className="item">1</div>
        <div className="item">2</div>
        <div className="item">3</div>
        <div className="item">4</div>
        <div className="item">5</div>
        <div className="item">6</div>
      </div>
    </div>
  );
}
