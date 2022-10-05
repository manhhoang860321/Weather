import { useState } from "react";
// import "./App.css";
import BarChart from "./Bar";

function App() {
  const [userData, setUserData] = useState({
    labels: ["1", "2", "3", "4"],
    datasets: [
      {
        label: "Users Gained",
        data: [10, 45, 10, 45],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
    <div className="App">
      <BarChart chartData={userData} />
    </div>
  );
}

export default App;
