import React , { useState }from "react";
import { Link,useNavigate } from "react-router-dom";
import { TextField,  Box } from '@mui/material';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import  "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmission = () => {
    if (email || !password) {
      setError("Fill all fields");
      return;
    }
    setError("");

    signInWithEmailAndPassword(auth,email, password)
      .then(async (res) => {
         navigate("/home");
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return (
    <div className="container">
      <div className="innerBox">
        <h1 className="heading">Login</h1>

        <div className="box">
        <Box component='form'  >
          <TextField margin='normal' required fullWidth id='email' 
          label="Email"
          type="text"
          placeholder="Enter email address"
          onChange={(event) => setEmail(event.target.value)}
        />
          <TextField margin='normal' required fullWidth id='password' 
          label="Password"
          type="password"
          placeholder="Enter Password"
          onChange={(event) => setPassword(event.target.value)}
        />
</Box>
</div>
<div className="footer">
          <b className="error">{error}</b>
          <button onClick={handleSubmission}>
            Login
          </button>
          <p>
            Don't have an account?{" "}
            <span>
              <Link to="/">Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
