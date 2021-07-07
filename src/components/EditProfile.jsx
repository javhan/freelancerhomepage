import React, { useState, useContext } from "react";
import { ProfileContext } from "../App";

export default function EditProfile(props) {
  const profileContext = useContext(ProfileContext);
  const [formData, setFormData] = useState(profileContext.profile);

  const handleSaveChanges = (event) => {
    event.preventDefault();
    profileContext.updateProfile({ ...formData });
    props.handleClick();
  };

  const handleChange = (event) => {
    const name = event.target.name;
    setFormData({ ...formData, [name]: event.target.value });
  };

  return (
    <div className="edit_profile">
      <form onSubmit={handleSaveChanges}>
        <br></br>
        <label>First Name: </label>
        <br></br>
        <input
          name="firstName"
          type="string"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <br></br>
        <label>Last Name: </label>
        <br></br>
        <input
          name="lastName"
          type="string"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <br></br>
        <label>Title: </label>
        <br></br>
        <input
          name="jobTitle"
          type="string"
          placeholder="Job Title"
          value={formData.jobTitle}
          onChange={handleChange}
        />
        <br></br>
        <label>Email: </label>
        <br></br>
        <input
          name="emailAddress"
          type="string"
          placeholder="Email Address"
          value={formData.emailAddress}
          onChange={handleChange}
        />
        <br></br>
        <label>Contact Number: </label>
        <br></br>
        <input
          name="contactNumber"
          type="string"
          placeholder="Contact Number"
          value={formData.contactNumber}
          onChange={handleChange}
        />
        <br></br>
        <button onClick={handleSaveChanges}>Save Changes</button>
        <button onClick={props.handleClick}>Cancel</button>
      </form>
    </div>
  );
}
