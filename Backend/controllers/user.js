const User = require("../models/User");
const bcrypt = require("bcrypt");
const { generateToken } = require("../helpers/token");

exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      const checkPassword = await bcrypt.compare(password, user.password);
      if (checkPassword) {
        const token = generateToken({ id: user._id.toString() }, "7d");

        res.send({
          id: user._id,
          email: user.email,
          token: token,
        });
      } else {
        return res.status(400).json({
          message: "Password is error",
        });
      }
    } else {
      return res.status(400).json({
        message: "email is error",
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.Profile = async (req, res) => {
  try {
    const {
      full_name,
      email,
      image,
      current_password,
      new_password,
      repeat_new_password,
    } = req.body;

    const user = await User.findOne({ email });

    if (current_password) {
      const check = await bcrypt.compare(current_password, user.password);

      if (check) {
        const check_new = new_password === repeat_new_password;

        if (check_new) {
          var crypted_password = await bcrypt.hash(new_password, 12);

          // Update the user's data
          user.full_name = full_name;
          user.email = email;
          user.image = image;
          user.password = crypted_password;

          // Save the updated user to the database
          await user.save();

          return res
            .status(200)
            .json({ message: "Profile updated successfully", user });
        } else {
          return res.status(400).json({
            message: "Confirmed Password not matched",
          });
        }
      } else {
        return res.status(400).json({
          message: "Error Your Current Password",
        });
      }
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.Logout = async (req, res) => {
  res.clearCookie("jwtoken", { path: "/login" });
};
