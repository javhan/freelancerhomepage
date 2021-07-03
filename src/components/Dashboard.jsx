import React from "react";
import Calendar from "./dashboardComp/Calendar"


export default function Dashboard() {
  return (
    <div>
      <div>
        <h1>Mini job box</h1>
      </div>
      <div>
        <h1>Past jobs</h1>
      </div>
      <div>
        <h1>upcoming jobs</h1>
      </div>
      <div>
        <Calendar />
      </div>
    </div>
  );
}
