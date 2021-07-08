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
          <div id="write-up">{profileContext.profile.writeUp}</div>
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
