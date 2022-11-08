import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function BarChart({ chartData }) {
  console.log(chartData);
  const data = {
    labels: chartData[0],
    datasets: [
      {
        label: "Temp (C)",
        data: chartData[1],
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
        data: chartData[2],
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
  };

  return <Line data={data} />;
}

export default BarChart;
