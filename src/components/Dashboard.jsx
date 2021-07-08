import React from "react";
import "./dashboardComp/dashboard.css";
import Calendar from "./dashboardComp/Calendar";
import MiniJB from "./dashboardComp/MiniJB";
import Pastjobs from "./dashboardComp/Pastjobs";
import Upcomingjobs from "./dashboardComp/Upcomingjobs";
import NewEntry from "./dashboardComp/NewEntry";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="bottom_half">
        <div className="past_jobs">
          <Pastjobs />
        </div>
        <div className="upcoming_jobs">
          <Upcomingjobs />
        </div>
        <div className="newEntry">
          <NewEntry />
        </div>
      </div>
      <div className="calendar">
        <Calendar />
      </div>
      <div className="top_half">
        <MiniJB />
      </div>
    </div>
  );
}
