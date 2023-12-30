import "./style.css";
import React, { useState } from "react";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import axios from "axios";
import Cookies from "js-cookie";

import { useNavigate } from "react-router-dom";

const profileInfos = {
  full_name: "",
    email: "",
    image: "",
    current_password: "",
    new_password: "",
    repeat_new_password: "",
};


export default function Profile() {
  const { user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState(null);

  const [profile, setProfile] = useState(profileInfos);
  const {full_name, email, current_password, image, new_password, repeat_new_password} = profile;

  
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
};

  const [error, setError] = useState("");

  const profileSubmit = async (e) => {
    e.preventDefault();

    try {
        const { data } = await axios.post('http://localhost:8000/profile', { full_name, email, image, current_password, new_password, repeat_new_password });
        dispatch({ type: "LOGIN", payload: data });
        Cookies.set("user", JSON.stringify(data));
        navigate("/admin/dashboard");

    } catch (error) {
        setError(error.response.data.message);

    }
}

  return (
    <div className="admin-profile">
      <div className="admin-profile-wrapper">
        <h3>Profile Setting</h3>

        <div className="admin-card">
          <div className="admin-card-title">
            {user.name == null ? "Admin" : user.name}
          </div>
          <div className="admin-card-description">
          {error && <div className="validation-error">{error}</div>}
            <form onSubmit={profileSubmit}>
              <div className="column-form">
                <div className="profile-form">
                  <label for="name">Name</label>
                  <br></br>
                  <input
                    id="name"
                    type="text"
                    name="full_name"
                    placeholder="Enter your Full Name"
                    onChange={handleProfileChange}
                  />
                </div>

                <div className="profile-form">
                  <label for="email">Email</label>
                  <br></br>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    onChange={handleProfileChange}
                  />
                </div>
              </div>

              <div className="signle-form">
                <div className="profile-form">
                  <br />
                  <label>Image</label>
                  <div className="image-place">
                    {selectedImage ? (
                      <img
                        src={URL.createObjectURL(selectedImage)}
                        alt="Selected"
                        className="image-icon"
                      />
                    ) : (
                      <i
                        className="fa fa-picture-o image-icon"
                        aria-hidden="true"
                      ></i>
                    )}
                  </div>

                  <div className="upload-btn">
                    <input
                      type="file"
                      id="upload"
                      className="customfile"
                      name="image"
                      onChange={handleProfileChange}
                    />
                  </div>
                </div>
              </div>

              <br />
              <div className="splitter"></div>

              <div className="signle-form">
                <div className="profile-form">
                  <br />
                  <label for="cp">Current Password</label>
                  <br />

                  <input
                    type="password"
                    id="cp"
                    name="current_password"
                    placeholder="Enter your current password"
                    onChange={handleProfileChange}
                  />
                </div>
              </div>

              <br />

              <div className="column-form">
                <div className="profile-form">
                  <label for="np">New Password</label>
                  <br></br>

                  <input
                    type="password"
                    id="np"
                    name="new_password"
                    placeholder="Enter your new password"
                    onChange={handleProfileChange}
                  />
                </div>

                <div className="profile-form">
                  <label for="rnp">Repeat New Password</label>
                  <br></br>

                  <input
                    type="password"
                    id="rnp"
                    name="repeat_new_password"
                    placeholder="Confirm your password"
                    onChange={handleProfileChange}
                  />
                </div>
              </div>

              <br />

              <br />

              <div className="splitter"></div>
              <br />
              <br />

              <button className="btn-primary" type="submit">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
