import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Box } from "@mui/material";
import "./Login.css";
import { useAuth } from "../Auth";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { auth } = useAuth();

  const handleSubmission = async () => {
    try {
      if (!email || !password) {
        setError("Fill all fields");
        return;
      }
      setError("");
      await login(email, password);
    } catch (err) {
      setError(err.message);
    }
  };
  // useEffect(() => {
  //   if (auth) {
  //     console.log("Hello");
  //     // console.log(auth);
  //     navigate("/home");
  //   }
  // }, [auth, navigate]);
  return (
    <div className="container">
      <div className="innerBox">
        <h1 className="heading">Login</h1>

        <div className="box">
          <Box component="form">
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              type="text"
              placeholder="Enter email address"
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              type="password"
              placeholder="Enter Password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </Box>
        </div>
        <div className="footer">
          <b className="error">{error}</b>
          <button onClick={handleSubmission}>Login</button>
          <p>
            Don't have an account?{" "}
            <span>
              <Link to="/signup">Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
