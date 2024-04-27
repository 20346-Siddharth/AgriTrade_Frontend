import React from 'react';
import "./admin/style/admindash.css";
import user_profile from "./media/user_profile.png";

const Profile = ({user}) => {
  return (
    <div className="card">
      <h2 className="card-border-top">
        <img
          src={user_profile}
          alt="user_profile"
          className="usermodal"
        />
      </h2>
      <p className="job">Profile</p>
      <div className="profile-details">
        <p><strong>Name:</strong> {user.username}</p>
        <p><strong>Mobile:</strong> {user.mobile}</p>
        <p><strong>Aadhar:</strong> {user.adhar}</p>
        <p><strong>Category:</strong> {user.category}</p>
        <p><strong>Address:</strong> {user.address}</p>
        <button>Close</button>
      </div>
    </div>
  );
};

export default Profile;
