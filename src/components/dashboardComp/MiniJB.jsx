import React from "react";
import { useState, useEffect } from "react";

const adzunaID = process.env.REACT_APP_ID;
const adzunaKey = process.env.REACT_APP_KEY;

const jobURL = `https://api.adzuna.com/v1/api/jobs/sg/search/1?app_id=${adzunaID}&app_key=${adzunaKey}&results_per_page=5`;

export default function MiniJB() {
  const [topFive, setTopFive] = useState([
    {
      jobTitle: "",
      companyName: "",
    },
  ]);

  useEffect(() => {
    const makeApiCall = async () => {
      const res = await fetch(jobURL);
      const json = await res.json();
      console.log("json", json.results);
      setTopFive(json.results);
    };
    makeApiCall();
  }, []);

  return (
    <div>
      {assets.map((props, index) => (
        <div key={index}>
          <div>name= {props.company.display_name}</div>
          <br></br>
        </div>
      ))}
    </div>
  );
}
