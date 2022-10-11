import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import "./Signup.css";
import { TextField,  Box } from '@mui/material';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";


function Signup() {
  const navigate = useNavigate();
 const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
    confrmpass:"",
    dob:"",
  });
  console.log(values);
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass || !values.confrmpass|| !values.dob) {
      setErrorMsg("All fields required");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass, values.confrmpass, values.dob)
      .then(async (res) => {
        // console.log(res);
        setSubmitButtonDisabled(false);
        navigate("/login");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className="container">
      <div className="innerBox">
        <h1 className="heading">Signup</h1>
<div className="box">
        <Box component='form'  >
          <TextField margin='normal' required fullWidth id='name' label="Name"
            placeholder="Enter your name"
            type="text"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, name: event.target.value }))
            }
            />

          <TextField margin='normal' required fullWidth id='email'
            label="Email"
            placeholder="Enter email address"
            type="text"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            } 
/>

          <TextField margin='normal' required fullWidth id='Password'
            label="Password"
            placeholder="Enter password"
            type="password"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, pass: event.target.value }))
            }
            />

          <TextField margin='normal' required fullWidth id='conform password'
            label="Conform Password"
            placeholder="Re-Enter password"
            type="password"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, confrmpass: event.target.value }))
            }
            />

          <TextField margin='normal' required fullWidth id='DOb'
            // label="DD/MM/YYYY"
            placeholder="DD/MM/YYYY"
            type="date"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, dob: event.target.value }))
            }
           />
        </Box>
</div>
<div className="footer">
          <b className="error">{errorMsg}</b>
          <button onClick={handleSubmission} disabled={submitButtonDisabled}>
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
