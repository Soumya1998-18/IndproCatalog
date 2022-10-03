import React from "react";
import { Link } from "react-router-dom";
import { TextField,  Box } from '@mui/material';
import  "./Login.css";

function Login() {
  
  return (
    <div className="container">
      <div className="innerBox">
        <h1 className="heading">Login</h1>

        <div className="box">
        <Box component='form'  >
          <TextField margin='normal' required fullWidth id='email' 
          label="Email"
          placeholder="Enter email address"
        />
          <TextField margin='normal' required fullWidth id='password' 
          label="Password"
          placeholder="Enter Password"
        />
</Box>
</div>
        <div className="footer">
          <b className="error"></b>
          <button >
            Login
          </button>
          <p>
            Don't have an account?{" "}
            <span>
              <Link to="/">Sign up</Link>
            </span>
          </p>
          {/* <NavLink to='/resetemailpassword' color='success'  >Forgot Password ?</NavLink> */}

        </div>
      </div>
    </div>
  );
}

export default Login;
