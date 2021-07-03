import React, { useState, useContext } from "react";
import { ProfileContext } from "../App"

export default function EditProfile(props) {
    const profileContext = useContext(ProfileContext);
    console.log(profileContext)
    const [formData, setFormData] = useState(profileContext.profile);    
  
    const handleSaveChanges = (event) => {
    event.preventDefault();
    profileContext.updateProfile({...formData});
    props.handleClick();
  };

  const handleFirstNameChange = (event) => {
    const firstName = event.target.name;
    setFormData({ ...formData, [firstName]: event.target.value });
  };

  const handleLastNameChange = (event) => {
    const lastName = event.target.name;
    setFormData({ ...formData, [lastName]: event.target.value });
  };

  const handleJobTitleChange = (event) => {
    const jobTitle = event.target.name;
    setFormData({ ...formData, [jobTitle]: event.target.value });
  };

  const handleEmailChange = (event) => {
    const emailAddress = event.target.name;
    setFormData({ ...formData, [emailAddress]: event.target.value });
  };

  const handleContactChange = (event) => {
    const contactNumber = event.target.name;
    setFormData({ ...formData, [contactNumber]: event.target.value });
  };

  return (
    <div>
      <div>
        <img src={props.image} alt="profile pic" className="profilePic" />
        <form onSubmit={handleSaveChanges}>
        <button onClick={handleSaveChanges}>Save Changes</button>
        <button onClick={props.handleClick}>Cancel</button>
        <br></br>
          <input
            name="firstName"
            type="string"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleFirstNameChange}
          />
          <br></br>
          <input
            name="lastName"
            type="string"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleLastNameChange}
          />
          <br></br>
          <input
            name="jobTitle"
            type="string"
            placeholder="Job Title"
            value={formData.jobTitle}
            onChange={handleJobTitleChange}
          />
          <br></br>
          <input
            name="emailAddress"
            type="string"
            placeholder="Email Address"
            value={formData.emailAddress}
            onChange={handleEmailChange}
          />
          <br></br>
          <input
            name="contactNumber"
            type="string"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={handleContactChange}
          />
        </form>
      </div>
    </div>
  );
}
