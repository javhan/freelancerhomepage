import React, { useContext } from "react";
import { TestContext } from "../../App";
import firebase from "../data/firebase";

export default function Upcomingjobs() {
  const testContext = useContext(TestContext);
  const sortedTest = testContext.test.sort((a, b) => {
    return (new Date(a.StartTime)) - (new Date (b.StartTime))
  })

  const ref = firebase.firestore().collection("events");
  
  const deleteAppt = (event) => {
    ref
      .doc(event.id)
      .delete()
      .catch((err) => {
        console.log(err);
      });
  };

  let sum = 0;
  const tasks = sortedTest.map((prop, index) => {
    let g1 = new Date();
    let g2 = new Date(prop.StartTime);
    if (g1.getTime() < g2.getTime()) {
      sum++;
      return (
        <div onClick={() => deleteAppt(prop)}
          key={index}
          style={{ backgroundColor: sum % 2 === 0 ? "#66ff99" : "#ccffdd" }}
        >
          <p>
            <span>{prop.Subject}</span>
          </p>
          <p>
            <span>Start:</span> {g2.toString()}
          </p>
          <p>
            <span>End: </span>  {(new Date(prop.EndTime)).toString()}
          </p>
        </div>
      );
    }
  });

  return (
    <div>
      <h1>Upcoming Jobs</h1>
      <div className="jl">{tasks}</div>
    </div>
  );
}
