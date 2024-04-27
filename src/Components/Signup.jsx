import React, { useState } from "react";
import "./admin/style/adminpage.css";
import { Link } from "react-router-dom";
import profileicon from "./media/profile icon.png";

const Admin = () => {
  const [formData, setFormData] = useState({
    username: "",
    mobile: "",
    aadhar: "",
    address: "",
    password: "",
    category: ""
  });
  const [formError, setFormError] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isFormEmpty = Object.values(formData).some(value => value === "");
    if (isFormEmpty) {
      setFormError("All fields are required");
    } else {
      setFormError("");

      try {
        const response = await fetch("http://localhost:4000/api/userRegister", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        });


        const data = await response.json();
        if (data.success) {
          // Redirect to home upon successful registration
          alert("Registration successful");
          window.location.href = "/"; // Redirect to home page
        } else {
          // Show alert for other success response
          alert("Registration successful but redirection failed.");
        }


        if (data.AlreadyExists) {
          alert("User with this mobile number already exists.");
        } else if (data.invalid) {
          alert("Invalid input data. Please check your details.");
        }

      } catch (error) {
        console.error("Error:", error);
        alert(error.message || "An error occurred during registration.");
      }
    }
  };

  return (
    <div className="signupcontainer">
      <div className="page">
        <div className="container">
          <div className="left">
            <img src={profileicon} alt="profile icon" className="profileicon" />
            <div className="login">Signup</div>
            <div className="eula">Krishi-Mandi Registration</div>
          </div>
          <div className="right">
            <div className="form">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="input-container">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="username" value={formData.name} onChange={handleChange} />
                  </div>
                  <div className="input-container">
                    <label htmlFor="mobileNumber">Mobile Number</label>
                    <input type="text" id="mobile" value={formData.mobileNumber} onChange={handleChange} />
                  </div>
                </div>
                <div className="row">
                  <div className="input-container">
                    <label htmlFor="aadhar">Aadhar Number</label>
                    <input type="text" id="aadhar" value={formData.aadhar} onChange={handleChange} />
                  </div>
                  <div className="input-container">
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" value={formData.address} onChange={handleChange} />
                  </div>
                </div>
                <div className="row">
                  <div className="input-container">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={formData.password} onChange={handleChange} />
                  </div>
                  <div className="input-container">
                    <label htmlFor="category">Category</label>
                    <select id="category" value={formData.category} onChange={handleChange} style={{ width: "170px" }}>
                      <option value="">Select</option>
                      <option value="buyer">Trader</option>
                      <option value="farmer">Farmer</option>
                    </select>
                  </div>


                </div>
                {formError && <div className="error">{formError}</div>}
                <div className="row">
                  <button type="submit">
                    <span>Submit</span>
                  </button>
                </div>
              </form>
            </div>
            <div className="bottomLine">
              <h3>Already have an account? Click <Link to="/login">Login</Link></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
