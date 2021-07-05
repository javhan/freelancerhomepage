import React, { useContext } from "react";
import { ScheduleContext } from "../../App";

export default function Upcomingjobs() {
  const scheduleContext = useContext(ScheduleContext);
  const tasks = scheduleContext.event.map((event, index) => {
    let g1 = new Date();
    let g2 = new Date(event.fields.StartTime);
    if (g2.getTime() > g1.getTime())
      return (
        <div key={index}>
          <p>{event.fields.Subject}</p>
        </div>
      );
  });

  return (
    <div>
      <h1>UpcomingJobs</h1>
      {tasks}
    </div>
  );
}
