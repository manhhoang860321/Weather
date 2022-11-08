import React, { useEffect, useState } from "react";

export default function WeekItem({ dataWeekAll }) {
  // console.log(dataWeekAll.dataWeek?.forecast?.forecastday[0].astro.sunrise);

  const [d, setD] = useState([]);
  useEffect(() => {
    setD(dataWeekAll.dataWeekAll[0]);
  }, [dataWeekAll]);
  const [description, setDescription] = useState();
  // const [sunRise, setSunRise] = useState('')

  const sunRise =
    new Date(d?.sunrise * 1000).toLocaleString().slice(0, 5) + " am";
  const sunSet =
    new Date(d?.sunrise * 1000).toLocaleString().slice(0, 5) + " pm";
  // const description = "Description : "+ d?.weather[0]?.description
  const pressure = "Atmostpheric : " + d?.pressure + " hPa";

  const current =
    "Temp current : " +
    ((d?.temp?.min - 273.15 + d?.temp?.max - 273.15) / 2).toFixed(0) +
    "°C";
  const temp =
    "Tem : " +
    (d?.temp?.min - 273.15).toFixed(2) +
    " °C " +
    "- " +
    (d?.temp?.max - 273.15).toFixed(2) +
    " °C";
  const humidity = "Humidity : " + d?.humidity + " %";
  const wind = " Wind speed : " + d?.wind_speed + " km/h";
  // setDescription(d.weather)

  // const t = d?.weather
  let desc = "";
  if (isNaN(d)) {
    desc = d.weather[0].description;
    console.log(d.weather[0].description);
    console.log("dsads");
  } else {
    console.log("Not data!!");
  }
  console.log(desc);
  // console.log(desc);
  // console.log(d?.weather[0]?.description)

  // console.log(description);

  // console.log(description);
  // console.log(d.sunrise);
  // console.log(sunRise);

  // console.log(d?.temp?.min);
  console.log(dataWeekAll);
  return (
    <div>
      <div className="list-week">
        {dataWeekAll.dataWeekAll.map((item, index) => {
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
      </div>
      <div className="weather-week-status">
        <h4>
          <span>{new Date(d.dt * 1000).toDateString().slice(0, 3)}</span>
          <span>, </span>
          <span>{new Date(d.dt * 1000).toLocaleDateString().slice(0, 5)}</span>
        </h4>
        <ul className="list-status">
          <li>{current}</li>
          <li>{sunRise}</li>
          <li>{temp}</li>
          <li>{sunSet}</li>
          <li>{humidity}</li>
          <li>{desc}</li>
          <li>{wind}</li>
          <li>{pressure}</li>
        </ul>
      </div>
    </div>
  );
}
