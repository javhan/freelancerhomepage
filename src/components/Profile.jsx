import React, { useState, useContext } from "react";
import image from "../assets/profilepic.jpg";
import "./Profile.css";
import EditProfile from "./EditProfile";
import { ProfileContext } from "../App";

export default function Profile() {
  const [edit, setEdit] = useState(false);
  const profileContext = useContext(ProfileContext);
  console.log(profileContext);

  const handleClick = () => {
    if (edit === true) {
      setEdit(false);
    } else {
      setEdit(true);
    }
  };

  if (!edit) {
    return (
      <div>
        <img src={image} alt="profile pic" className="profilePic" />
        <button onClick={handleClick}>Edit</button>
        <p>First Name: {profileContext.profile.firstName}</p>
        <p>Last Name: {profileContext.profile.lastName}</p>
        <p>Title: {profileContext.profile.jobTitle}</p>
        <p>Email: {profileContext.profile.emailAddress} </p>
        <p>Contact Number: {profileContext.profile.contactNumber}</p>
      </div>
    );
  } else if (edit) {
    return (
      <EditProfile image={image} handleClick={handleClick} />
    );
  }
}
