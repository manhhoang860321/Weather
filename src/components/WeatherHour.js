import { useEffect, useState } from "react";
import BarChart from "./Bar";

function WeatherHour({ dataHour }) {
  let dataTime = [];
  // console.log(dataHour);
  // const [dataTime, setDataTime] = useState([]);
  // setDataTime(dataHour);
  const [userData, setUserData] = useState({});

  let time = [];

  let temp_c = [];
  let feelslike_c = [];
  let feelslike_f = [];
  const label = dataHour?.forecast?.forecastday[0]?.hour;
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
  // w=[]
  // label.map((item) => {
  //   feelslike_f.push(item.feelslike_f);
  // });

  // console.log(feelslike_c);
  useEffect(() => {
    setUserData([dataTime, temp_c, feelslike_c]);
  }, [dataHour]);
  // console.log(userData);
  // setUserData(dataTime);
  return (
    <div className="App">
      {/* <p>qqqq</p> */}
      <BarChart chartData={userData} />
    </div>
  );
}

export default WeatherHour;
