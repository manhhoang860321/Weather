import { useState } from "react";
import BarChart from "./Bar";

function WeatherHour(dataHour) {
  let dataTime = [];

  let time = [];

  let temp_c = [];
  let feelslike_c = [];
  let feelslike_f = [];
  const label = dataHour?.dataHour?.dataTab?.forecast?.forecastday[0]?.hour;
  label.map((item) => {
    time = item.time.slice(11, 16);
    dataTime.push(time);
  });

  label.map((item) => {
    temp_c.push(item.temp_c);
  });
  label.map((item) => {
    feelslike_c.push(item.feelslike_c);
  });
  // label.map((item) => {
  //   feelslike_f.push(item.feelslike_f);
  // });

  // console.log(feelslike_c);

  const [userData, setUserData] = useState({
    labels: dataTime,
    datasets: [
      {
        label: "Temp (C)",
        data: temp_c,
        backgroundColor: [
          "rgb(143, 140, 140, 0.7)",
          // "#ecf0f1",
          // "#50AF95",
          // "#f3ba2f",
          // "#2a71d0",
        ],
        borderColor: "#9970AC",
        borderWidth: 3,
      },
      {
        label: "Feel Like (C)",
        data: feelslike_c,
        backgroundColor: [
          "rgb(143, 140, 140, 0.7)",
          // "#ecf0f1",
          // "#50AF95",
          // "#f3ba2f",
          // "#2a71d0",
        ],
        borderColor: "#9DD7CA",
        borderWidth: 3,
      },
    ],
  });
  return (
    <div className="App">
      {/* <p>qqqq</p> */}
      <BarChart chartData={userData} />
    </div>
  );
}

export default WeatherHour;
