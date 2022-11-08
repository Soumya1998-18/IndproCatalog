import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TextField, Box } from "@mui/material";
import { updatePassword } from "firebase/auth";
import { useAuth } from "../Auth";

function Profile() {
  const { user, logout } = useAuth();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState();

  const handleSubmission = () => {
    if (password !== confirmPassword) {
      setError("Password and Confirm Password Doesn't Match");
    } else if (!password || !confirmPassword) {
      setError("Password Reset Successfully");
    } else {
      setError(null);
      updatePassword(user, password)
        .then(() => {
          logout();
        })
        .catch((err) => {
          setError(err.message);
        });
    }
  };
  return (
    <div className="container">
      <div className="innerBox">
        <h1 className="heading">Reset Password</h1>

        <div className="box">
          <Box component="form">
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              type="password"
              placeholder="password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="Conform password"
              label=" Conform Password"
              placeholder="conform Password"
              type="password"
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </Box>
        </div>
        <div className="footer">
          <b className="error">{error}</b>
          <button onClick={handleSubmission}>Save</button>
          <span>
            <Link to="/home">
              {" "}
              <button>Cancle</button>{" "}
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
