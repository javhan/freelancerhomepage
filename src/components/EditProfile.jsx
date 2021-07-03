import React, { useState } from "react";

export default function EditProfile(props) {
    const [formData, setFormData] = useState(props.profile);    
  
    const handleSaveChanges = (event) => {
    event.preventDefault();
    props.updateProfile({...formData});
    console.log("Hello");
  };

  const handleFirstNameChange = (event) => {
    const firstName = event.target.name;
    setFormData({ ...formData, [firstName]: event.target.value });
  };

  const handleLastNameChange = (event) => {
    const lastName = event.target.name;
    setFormData({ ...formData, [lastName]: event.target.value });
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
            // onChange={handlePriceChange}
          />
          <br></br>
          <input
            name="jobTitle"
            type="string"
            placeholder="Job Title"
            // value={formData.description}
            // onChange={handleDesChange}
          />
          <br></br>
          <input
            name="emailAddress"
            type="string"
            placeholder="Email Address"
            // value={formData.description}
            // onChange={handleDesChange}
          />
          <br></br>
          <input
            name="contactNumber"
            type="string"
            placeholder="Contact Number"
            // value={formData.description}
            // onChange={handleDesChange}
          />
        </form>
      </div>
    </div>
  );
}
