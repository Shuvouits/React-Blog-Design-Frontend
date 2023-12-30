import Navbar from "../Navbar";
import LeftSidebar from "../LeftSidebar";
import MainArea from "../MainArea";
import "./style.css";
import React, { useState } from "react";
import Profile from "../Profile";
import { Outlet } from "react-router-dom";

export default function Template() {
  const currentUrl = window.location.href;
  const parts = currentUrl.split("/");
  const pickedurl = parts[parts.length - 1];

  const [leftSidebarVisible, setLeftSidebarVisible] = useState(true);

  const toggleLeftSidebar = () => {
    setLeftSidebarVisible(!leftSidebarVisible);
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-dashboard-wrapper">
        {leftSidebarVisible && <LeftSidebar />}

        <div className="main-area">
          <Navbar
            onMobileBarClick={toggleLeftSidebar}
            leftSidebarVisible={leftSidebarVisible}
          />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
