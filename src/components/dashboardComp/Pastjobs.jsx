import React, { useContext } from "react";
import { TestContext } from "../../App";
import firebase from "../data/firebase";

export default function Pastjobs() {
  const testContext = useContext(TestContext);
  console.log(testContext)
  const sortedTest = testContext.test.sort((a, b) => {
    return (new Date(b.StartTime)) - (new Date (a.StartTime))
  })
  console.log("sorted", sortedTest)

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
  const tasks = sortedTest.map((event, index) => {
    let g1 = new Date();
    let g2 = new Date(event.StartTime);
    if (g2.getTime() < g1.getTime()) {
      sum++;
      return (
        <div onClick={() => deleteAppt(event)}
          key={index}
          style={{ backgroundColor: sum % 2 === 0 ? " #ffe6e6" : "#ff6669" }}
        >
          <p>
            <span>{event.Subject}</span>
          </p>
          <p>
            <span>Start:</span> {g2.toString()}
          </p>
          <p>
            <span>End:</span> {new Date(event.EndTime).toString()}
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
