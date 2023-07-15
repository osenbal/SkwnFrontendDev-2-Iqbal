import React from "react";
import "./profile.header.modules.css";

const ProfileHeader = () => {
  return (
    <div className="container_profile_header">
      <div>
        <p className="greeting">Hello</p>
        <p className="user_name">Aurellia</p>
      </div>
      <div>
        <img
          className="profile_img"
          src="./assets/img/profile.png"
          alt="profile"
        />
      </div>
    </div>
  );
};

export default ProfileHeader;
