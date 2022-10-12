import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { TextField, Box } from '@mui/material';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";


function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dob, setDob] = useState("");
 const [error, setError] = useState(null);

  const handleSubmission = () => {
    if (!name || !email || !password || !confirmPassword || !dob) {
        setError("All fields required");
      } else if (password !== confirmPassword) {
        setError("Password and Confirm Password Doesn't Match");
      }else{
        setError(null);
        createUserWithEmailAndPassword(auth, email, password, confirmPassword, dob)
        .then(async (res) => {
          // console.log(res);
          navigate("/login");
        })
        .catch((err) => {
          setError(err.message);
        });
      }
     
    }

return (
    <div className="container">
      <div className="innerBox">
        <h1 className="heading">Signup</h1>
        <div className="box">
          <Box component='form' id='registration-form' >
            <TextField margin='normal' required fullWidth id='name' label="Name"
              placeholder="Enter your name"
              type="text"
              onChange={(event) => setName(event.target.value)}
            />

            <TextField margin='normal' required fullWidth id='email'
              label="Email"
              placeholder="Enter email address"
              type="text"
              onChange={(event) => setEmail(event.target.value)}
            />

            <TextField margin='normal' required fullWidth id='Password'
              label="Password"
              placeholder="Enter password"
              type="password"
              onChange={(event) => setPassword(event.target.value)}
            />

            <TextField margin='normal' required fullWidth id='confirm password'
              label="Confirm Password"
              placeholder="Re-Enter password"
              type="password"
              onChange={(event) => setConfirmPassword(event.target.value)}
            />

            <TextField margin='normal' required fullWidth id='DOb'
              // label="DD/MM/YYYY"
              placeholder="DD/MM/YYYY"
              type="date"
              onChange={(event) => setDob(event.target.value)}
            />
          </Box>
        </div>
        <div className="footer">
           <b className="error">{error}</b>
          <button onClick={handleSubmission} >
            Signup
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
