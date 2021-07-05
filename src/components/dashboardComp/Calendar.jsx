import React, { useContext } from "react";
import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
} from "@syncfusion/ej2-react-schedule";

import { ScheduleContext } from "../../App"

export default function Calendar() {
    const scheduleContext = useContext(ScheduleContext);
  return (
    <div className="scheduler">
      <ScheduleComponent
        currentView="Month"
        eventSettings={{ dataSource: scheduleContext.event.map((prop) => prop.fields) }}
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    </div>
  );
}
