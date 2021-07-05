import React, { useRef } from "react";

export default function NewEntry() {
  const inputST = useRef("test");
  const inputET = useRef("test");
  const clickHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="add_job">
        <h1>New Jobs</h1>
      {/* <h1>Add A New Job</h1>
      <form>
        <p>Job Name</p>
        <input type="text"></input>
        <p>Start Time</p>
        <input ref={inputST} type="datetime-local"></input>
        <p>End Time</p>
        <input ref={inputET} type="datetime-local"></input>
        <button onClick={clickHandler}>Test</button>
      </form> */}
      <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
      <iframe className="airtable-embed" src="https://airtable.com/embed/shrKxsmbODHg0bi08?backgroundColor=blue" frameBorder="0" width="100%" height="300" style={{background: "transparent", border: "1px solid #ccc"}}></iframe>
    </div>
  );
}
