import React, { useState, useContext } from "react";
import image from "../assets/profilepic.jpg";
import "./Profile.css";
import EditProfile from "./EditProfile";
import Review from "./Review";
import { ProfileContext } from "../App";

export default function Profile() {
  const [edit, setEdit] = useState(false);
  const profileContext = useContext(ProfileContext);

  const handleClick = () => {
    if (edit === true) {
      setEdit(false);
    } else {
      setEdit(true);
    }
  };

  if (!edit) {
    return (
      <div className="profilepage">
        <div className="left_column">
          <h1>Snapshot</h1>
          <div id="details">
            <div id="ppic">
              <img src={image} alt="profile pic" className="profilePic" />
            </div>
            <div id="basicdetails">
              <button onClick={handleClick}>Edit</button>
              <p>First Name: {profileContext.profile.firstName}</p>
              <p>Last Name: {profileContext.profile.lastName}</p>
              <p>Title: {profileContext.profile.jobTitle}</p>
              <p>Email: {profileContext.profile.emailAddress} </p>
              <p>Contact Number: {profileContext.profile.contactNumber}</p>
            </div>
          </div>
        </div>
        <div className="right_column">
          <h1>About You</h1>
          <div id="write-up">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <h2>Reviews</h2>
          <div id="review">
            <Review />
          </div>
        </div>
      </div>
    );
  } else if (edit) {
    return <EditProfile image={image} handleClick={handleClick} />;
  }
}
