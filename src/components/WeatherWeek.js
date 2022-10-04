import React from "react";
import "../App.css";
export default function WeatherWeek() {
  return (
    <div className="container-week">
      <div className="weather-week-time">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
        </ul>
      </div>
      <div className="weather-week-status">
        <h4>Mon, 22/2</h4>
        <ul className="list-status">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
        </ul>
      </div>
    </div>
  );
}
