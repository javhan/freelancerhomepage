import React from 'react'
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from "@syncfusion/ej2-react-schedule"

export default function Calendar() {
    return (
        <div className="scheduler">
            <ScheduleComponent currentView="Month">
                <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
            </ScheduleComponent>
        </div>
    )
}
