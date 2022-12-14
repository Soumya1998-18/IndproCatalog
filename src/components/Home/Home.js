import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import { useAuth } from "../Auth";

export default function Home() {
  const { logout } = useAuth();
  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={handleLogout}
              >
                Logout
              </Button>
              <Link to="/profile">
                {" "}
                <Button variant="contained" color="secondary" size="large">
                  Profile
                </Button>{" "}
              </Link>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
      <div margin="100%">
        <h1>
          <center>Welcome to Dashboard</center>
        </h1>
      </div>
    </>
  );
}
