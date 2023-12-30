import "./style.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function LeftSidebar() {
  const [submenusVisibility, setSubmenusVisibility] = useState({});

  const toggleSubmenu = (submenuName) => {
    setSubmenusVisibility((prevState) => ({
      ...prevState,
      [submenuName]: !prevState[submenuName] || false,
    }));
  };

  return (
    <div className="admin-sidebar">
      <div className="admin-logo">
        <Link to={"/admin/dashboard"} className="custom-link">
          <img src="http://blanco2.creabox.es/assets/admin/img/sidebar_logo_min.png" />
        </Link>
      </div>
      <div className="splitter"></div>

      <div className="sidebar-panel">
        <div className="sidebar-panel-menu">
          <span className="icon">
            <i class="fa fa-tachometer" aria-hidden="true"></i>
          </span>
          <span className="text">Dashboard</span>
        </div>
      </div>

      <div className="splitter"></div>

      <div className="sidebar-panel">
        <div className="sidebar-panel-menu">
          <span className="icon">
            <i class="fa fa-picture-o" aria-hidden="true"></i>
          </span>
          <span className="text">Slider</span>
        </div>
      </div>

      <div className="splitter"></div>

      <div className="sidebar-panel" onClick={() => toggleSubmenu("blogs")}>
        <div className="sidebar-panel-menu">
          <span className="icon">
            <i class="fa fa-thumb-tack" aria-hidden="true"></i>
          </span>
          <span className="text">Blogs </span>
          <span className="icon icon-sub">
            <i className="fa fa-chevron-right"></i>
          </span>
        </div>

        {submenusVisibility.blogs && (
          <div className="sidebar-panel-submenu">
            <span className="sub-title">Blog Section</span>
            <span className="submenu">Posts</span>
            <span className="submenu">Categories</span>
          </div>
        )}
      </div>

      <div className="splitter"></div>
    </div>
  );
}
