import React from "react";
import "./Sidebar.css";
import logo from "../../assets/logo.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_inner">
        <img src={logo} alt="logo" />
        <h1>Honors</h1>
      </div>
    </div>
  );
};

export default Sidebar;
