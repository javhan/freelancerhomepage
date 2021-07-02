import * as React from "react";
import { useState, useEffect } from "react";

const adzunaID = process.env.REACT_APP_ID
const adzunaKey = process.env.REACT_APP_KEY

const jobURL =
`https://api.adzuna.com/v1/api/jobs/sg/search/1?app_id=${adzunaID}&app_key=${adzunaKey}&results_per_page=5`;


const APITest = (props) => {
  const [assets, setAssetsData] = useState([
    {
      display_name: "",
    },
  ]);
  useEffect(() => {

    const makeApiCall = async () => {
      const res = await fetch(jobURL);
      const json = await res.json();
      console.log("json", json.results);
      setAssetsData(json.results);
    };
    makeApiCall();
  }, [1]);
  // return (
  //     for ()
  // )

  return (
    <>
      {assets.map((props) => (
        <div>
          <div>name= {JSON.stringify(props)}</div>
          <br></br>
        </div>
      ))}
    </>
  );
};
export default APITest;
