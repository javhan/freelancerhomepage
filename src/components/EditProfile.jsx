import React, { useState, useContext } from "react";
import { ProfileContext } from "../App"

export default function EditProfile(props) {
    const profileContext = useContext(ProfileContext);
    const [formData, setFormData] = useState(profileContext.profile);    
  
    const handleSaveChanges = (event) => {
    event.preventDefault();
    profileContext.updateProfile({...formData});
    props.handleClick();
  };

  const handleChange = (event) => {
    const name = event.target.name;
    setFormData({ ...formData, [name]: event.target.value });
  };

  return (
    <div className="edit_profile">
      <div>
        <form onSubmit={handleSaveChanges}>
        <button onClick={handleSaveChanges}>Save Changes</button>
        <button onClick={props.handleClick}>Cancel</button>
        <br></br>
        <span>First Name: </span><input
            name="firstName"
            type="string"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
          <br></br>
          <span>Last Name: </span><input
            name="lastName"
            type="string"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
          <br></br>
          <span>Title: </span><input
            name="jobTitle"
            type="string"
            placeholder="Job Title"
            value={formData.jobTitle}
            onChange={handleChange}
          />
          <br></br>
          <span>Email: </span><input
            name="emailAddress"
            type="string"
            placeholder="Email Address"
            value={formData.emailAddress}
            onChange={handleChange}
          />
          <br></br>
          <span>Contact Number: </span><input
            name="contactNumber"
            type="string"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={handleChange}
          />
        </form>
      </div>
    </div>
  );
}
