import "./style.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import LeftSidebar from "../LeftSidebar";
import MainArea from "../MainArea";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Navbar({ onMobileBarClick, leftSidebarVisible }) {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [submenusVisibility, setSubmenusVisibility] = useState({});

  const toggleSubmenu = (submenuName) => {
    setSubmenusVisibility((prevState) => ({
      ...prevState,
      [submenuName]: !prevState[submenuName] || false,
    }));
  };

  

  const menuRef = useRef();

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      // Clicked outside the menu, close all submenus
      setSubmenusVisibility({});
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  //mobile Toggle Effect 

  const handleLogout = () => {
    Cookies.set("user", "");
    dispatch({ type: "LOGOUT"});
    navigate("/login");
  };
 

  return (
      <div className={leftSidebarVisible ? 'admin-nav' : 'full-nav'}>
        <div className={leftSidebarVisible ? 'mobile-bar' : 'toggle-mobile-bar'}>
          <i className="fa fa-bars"  onClick={onMobileBarClick}></i>
        </div>
        <div className="visit-website">
        <Link to="/" className="custom-link">
          <i class="fa fa-external-link"></i>
          
             <span style = {{marginLeft : '10px'}}>Visit Website</span>
          </Link>
        </div>
        <div className="user-profile">
          <div
            className="user-profile-info"
            onClick={() => toggleSubmenu("userProfile")}
            ref={menuRef}
          >
            <p>Admin</p>
            <i class="fa fa-user-circle-o" aria-hidden="true"></i>
          </div>

          {submenusVisibility.userProfile && (
            <div className="user-profile-card">
              <div className="first-item">
                <div className="first-item-1">
                  <span>
                    <i className="fa fa-user-circle-o"></i>
                  </span>
                </div>

                <div className="first-item-2">
                  <span style={{ fontWeight: "bold" }}>Admin</span>
                  <span style={{ color: "gray" }}>admin@test.com</span>
                </div>
              </div>
              <div className="splitter"></div>
              <div className="second-item">

                <div className="second-item-1">
                  <span>
                    <i class="fa fa-list" aria-hidden="true"></i>
                  </span>
                  <Link className="custom-link" to='/admin/profile' style={{ color: "gray" }}>Profile Setting</Link>
                </div>

                <div className="second-item-2">
                  <span>
                    <i class="fa fa-sign-out" aria-hidden="true"></i>
                  </span>
                  <Link className="custom-link" to='/login'  onClick={handleLogout}  style={{ color: "gray" }}>Logout</Link>
                </div>
                
              </div>
            </div>
          )}
        </div>
      </div>
    
  );
}
