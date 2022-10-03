import React from "react";
import { Link} from "react-router-dom";
import "./Signup.css";
import { TextField,  Box } from '@mui/material';


function Signup() {
  

  return (
    <div className="container">
      <div className="innerBox">
        <h1 className="heading">Signup</h1>
<div className="box">
        <Box component='form'  >
          <TextField margin='normal' required fullWidth id='name' label="Name"
            placeholder="Enter your name"
            />

          <TextField margin='normal' required fullWidth id='email'
            label="Email"
            placeholder="Enter email address"
            />

          <TextField margin='normal' required fullWidth id='Password'
            label="Password"
            placeholder="Enter password"
            />

          <TextField margin='normal' required fullWidth id='conform password'
            label="Conform Password"
            placeholder="Re-Enter password"
            />

          <TextField margin='normal' required fullWidth id='DOb'
            label="DD/MM/YYYY"
            placeholder="DD/MM/YYYY"
            type="date"
           />
        </Box>
</div>
        <div className="footer">
          <b className="error"></b>
          <button >
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
