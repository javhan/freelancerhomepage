import React from "react";

export default function NewEntry() {

  return (
    <div className="add_job">
        <h1>New Jobs</h1>
      <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
      <iframe className="airtable-embed" src="https://airtable.com/embed/shrKxsmbODHg0bi08?backgroundColor=blue" frameBorder="0" width="100%" height="300" style={{background: "transparent", border: "1px solid #ccc"}}></iframe>
    </div>
  );
}
