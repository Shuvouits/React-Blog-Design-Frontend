import { Link } from "react-router-dom";
import "./style.css";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Navbar() {
  const { user } = useSelector((state) => ({ ...state }));
  const [isToggled, setToggled] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleToggle = () => {
    setToggled(!isToggled);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolling(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={scrolling ? "nav-scrolling" : "nav"}>
      <div className="nav-wrapper">
        <div className="logo">
          <Link to="/">
            <img src="https://mezzo-demo.pbminfotech.com/wp-content/uploads/2018/09/logo.png" />
          </Link>
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/category/fashion/" className="custom-link">
                FASHION
              </Link>
            </li>
            <li>
              <Link to="/lifestyle">LIFESTYLE</Link>
            </li>
            <li>
              <Link to="/about-me">ABOUT ME</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>

        <div className="social">
          <ul>
            <li>
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
            </li>

            <li>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </li>

            <li>
              <a href="#">
                <i className="fa fa-flickr"></i>
              </a>
            </li>

            <li>
              <a href="#">
                <i className="fa fa-youtube-play"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-google-plus"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="search">
          <input type="text" placeholder="SUBSCRIBE" />
          <i className="fa fa-search"></i>
        </div>

        <div className="login">
          {!user && (
            <Link to={"/login"} className="custom-link">
              Login
            </Link>
          )}

          {user && (
            <Link to={"/login"} className="custom-link">
              Dashboard
            </Link>
          )}
        </div>

        <div className="bar-icon">
          {!isToggled && <i className="fa fa-bars" onClick={handleToggle}></i>}

          {isToggled && <i className="fa fa-close" onClick={handleToggle}></i>}
        </div>
      </div>

      {isToggled && (
        <div className="mobile-menu">
          <div className="mobile-menu-wrap">
            <ul>
              <li>
                <a href="#">HOME</a>
              </li>
              <div className="splitter"></div>
              <li>
                <a href="#">FASHION</a>
              </li>
              <div className="splitter"></div>
              <li>
                <a href="#">LIFESTYLE</a>
              </li>
              <div className="splitter"></div>
              <li>
                <a href="#">ABOUT ME</a>
              </li>
              <div className="splitter"></div>
              <li>
                <a href="#">CONTACT</a>
              </li>
              <div className="splitter"></div>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
