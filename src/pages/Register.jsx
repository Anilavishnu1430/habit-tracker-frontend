import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";


function Register() {
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: ""
  })

  const navigate = useNavigate()

  const register = () => {
    console.log(userDetails);
    if (userDetails.username == "" || userDetails.email == "" || userDetails.password == "") {
      alert("Please fill the form")
    }
    else {
      alert("Register Successfull")
      sessionStorage.setItem("userDetails", JSON.stringify(userDetails))
      navigate('/Login')
    }
  }
  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        sx={{
          backgroundImage: "url('https://images.rawpixel.com/image_social_landscape/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm00MjItMDYzLWt6cGhnMjNrLmpwZw.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Paper
          elevation={4}
          sx={{
            p: 4,
            width: 400,
            borderRadius: 3,
            textAlign: "center",
          }}
        >
          <Typography variant="h4" fontWeight={800} mb={3} sx={{ color: '#7D4427',fontFamily:'"Dancing Script", cursive',fontWeight:"800" }}>
            Register
          </Typography>

          <TextField fullWidth label="Username" type="text" variant="outlined" margin="normal" value={userDetails.username} onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })}
          />

          <TextField
            fullWidth label="Email"
            type="email" variant="outlined" margin="normal" value={userDetails.email} onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
          />

          <TextField fullWidth label="Password" type="password" variant="outlined" margin="normal" value={userDetails.password} onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })
          }
          />

          <Button fullWidth variant="contained" sx={{ mt: 3, backgroundColor: "#7D4427", color: "#fff", "&:hover": { backgroundColor: "#5a3220" }, }}
            onClick={register}>
            Sign Up
          </Button>

          <Typography variant="body2" sx={{ mt: 2 }}>
            Already have an account?{" "}
            <Link to='/login'>
              <Button variant="text" sx={{ color: "#7D4427", fontWeight: 600 }}>
                Login
              </Button>
            </Link>
          </Typography>
        </Paper>
      </Box>

    </div>
  )
}

export default Register
