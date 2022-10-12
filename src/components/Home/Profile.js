import React,{useState} from "react";
import { Link} from "react-router-dom";
import { TextField, Box } from '@mui/material';
import { auth } from "../../firebase";



function Profile() {
  const [values, setValues] = useState({
    pass: "",
    confrmpass: "",
  });
  
 
    return (
        <div className="container">
            <div className="innerBox">
                <h1 className="heading">Reset Password</h1>

                <div className="box">
                    <Box component='form'  >

                        <TextField margin='normal' required fullWidth id='password'
                            label="Password"
                            type="password"
                            placeholder="password"
                        />
                        <TextField margin='normal' required fullWidth id='password'
                            label=" Conform Password"
                            placeholder="conform Password"
                            type="password"
                        />
                    </Box>
                </div>
                <div className="footer">
                    <b className="error"></b>
                    <button >
                        Save
                    </button>
                    <span>
                        <Link to="/home">  <button >
                            Cancle
                        </button> </Link>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Profile;
