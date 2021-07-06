import React, { useContext } from "react";
import { ScheduleContext } from "../../App";

export default function Pastjobs() {
  const scheduleContext = useContext(ScheduleContext);
  let sum = 0;
  const tasks = scheduleContext.event.map((event, index) => {
    let g1 = new Date();
    let g2 = new Date(event.fields.StartTime);
    if (g2.getTime() < g1.getTime()) {
      sum++;
      return (
        <div
          key={index}
          style={{ backgroundColor: sum % 2 === 0 ? " #ffe6e6" : "#ff6669" }}
        >
          <p>
            <span>{event.fields.Subject}</span>
          </p>
          <p>
            <span>Start:</span> {g2.toString()}
          </p>
          <p>
            <span>End:</span> {new Date(event.fields.EndTime).toString()}
          </p>
        </div>
      );
    }
  });

  return (
    <div>
      <h1>Past Jobs</h1>
      <div className="jl">{tasks}</div>
    </div>
  );
}
