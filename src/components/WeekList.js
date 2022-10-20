import React from "react";

import WeekItem from "./WeekItem";
export default function WeekList({ dataWeekAll }) {
    // console.log(dataWeekAll);
  return (
    <div className="list">
      <WeekItem dataWeekAll={dataWeekAll}></WeekItem>
    </div>
  );
}
