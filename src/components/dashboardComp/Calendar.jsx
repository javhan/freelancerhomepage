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

import { TestContext } from "../../App";

export default function Calendar() {
  const testContext = useContext(TestContext);

  return (
    <div>
      <h1 id="calendar_header">Your Calendar</h1>
      <div className="scheduler">
        <ScheduleComponent
          currentView="Month"
          eventSettings={{ dataSource: testContext.test }}
        >
          <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent>
      </div>
    </div>
  );
}
