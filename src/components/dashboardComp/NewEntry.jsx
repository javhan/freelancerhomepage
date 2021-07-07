import React, { useState } from "react";
import firebase from "../data/firebase";
import { v4 as uuidv4 } from "uuid";

export default function NewEntry() {
  const [Subject, setSubject] = useState("");
  const [StartTime, setStartTime] = useState("");
  const [EndTime, setEndTime] = useState("");

  const ref = firebase.firestore().collection("events");

  const addEvent = (newEvent) => {
    if (
      newEvent.Subject === "" ||
      newEvent.StartTime === "" ||
      newEvent.EndTime === ""
    ) {
      alert("Please fill all entries");
      return;
    } else if (newEvent.StartTime > newEvent.EndTime) {
      alert("CHECK TIMES");
      return;
    }
    ref
      .doc(newEvent.id)
      .set(newEvent)
      .catch((err) => {
        console.error(err);
      });
    alert("ADDED");
  };

  return (
    <div className="add_job">
      <h1>New Jobs</h1>
      <label>Subject: </label>
      <br></br>
      <input type="text" onChange={(e) => setSubject(e.target.value)} />
      <br></br>
      <label>Start Time: </label>
      <br></br>
      <input
        type="datetime-local"
        onChange={(e) => setStartTime(e.target.value)}
      />
      <br></br>
      <label>End Time: </label>
      <br></br>
      <input
        type="datetime-local"
        onChange={(e) => setEndTime(e.target.value)}
      />
      <br></br>
      <button
        onClick={(event) => {
          event.preventDefault();
          addEvent({ Subject, StartTime, EndTime, id: uuidv4() });
        }}
      >
        Add
      </button>
    </div>
  );
}
