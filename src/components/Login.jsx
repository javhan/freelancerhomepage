import React from "react";

export default function Login() {
  return (
    <div className="login">
      <div className="user">
        <span>Username: </span>
        <input type="text"></input>
      </div>
      <div className="password">
        <span>Password: </span>
        <input type="text"></input>
      </div>
      <button>Submit</button>
    </div>
  );
}
