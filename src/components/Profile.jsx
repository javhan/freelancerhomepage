import React, { useState } from "react";
import image from "../assets/profilepic.jpg";
import "./Profile.css";
import profileData from "./data/profile";
import EditProfile from "./EditProfile";

export default function Profile() {
  const [edit, setEdit] = useState(false);
  const [profile, setProfile] = useState(profileData);

  const handleClick = () => {
    if (edit === true) {
      setEdit(false);
    } else {
      setEdit(true);
    }
  };


  const updateProfile = (updatedEntry) => {
      setProfile(updatedEntry);
      setEdit(false);
  }



  if (!edit) {
    return (
      <div>
        <img src={image} alt="profile pic" className="profilePic" />
        <button onClick={handleClick}>Edit</button>
        <p>First Name: {profile.firstName}</p>
        <p>Last Name: {profile.lastName}</p>
        <p>Title: {profile.jobTitle}</p>
        <p>Email: {profile.emailAddress} </p>
        <p>Contact Number: {profile.contactNumber}</p>
      </div>
    );
  } else if (edit) {
    return (
      <EditProfile image={image} handleClick={handleClick} profile={profile} updateProfile={updateProfile}/>
    );
  }
}
