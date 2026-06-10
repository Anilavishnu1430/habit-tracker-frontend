import React, { useState } from 'react'
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";


function Login() {
    const [userDetails, setUserDetails] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate()

    const login = () => {
        console.log(userDetails);
        if (userDetails.email == "" || userDetails.password == "") {
            alert("Please fill the form")
        }
        else {
            const userData = JSON.parse(sessionStorage.getItem("userDetails"))
            console.log(userData);
            if (userDetails.email == userData.email) {
                if (userDetails.password == userData.password) {
                    alert("Login Successfull")
                    navigate('/habit')
                }
                else {
                    alert("Password Mismatch")
                }
            }
            else {
                alert("User Not Found")
            }
        }
    }
    return (
        <div>
            <Box display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
                flexDirection="column"
                sx={{
                    backgroundImage: "url('https://images.rawpixel.com/image_social_landscape/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm00MjItMDYzLWt6cGhnMjNrLmpwZw.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <Link to="/">
                    <Button variant="contained" sx={{ fontWeight: 600, backgroundColor:"#7D4427",mb:5 }} >
                        Back to Home
                    </Button>
                </Link>
                <Paper
                    elevation={3}
                    sx={{
                        p: 4,
                        width: 350,
                        borderRadius: 3,
                        textAlign: "center",
                    }}
                >
                    <Typography variant="h4" fontWeight={700} mb={3} sx={{ color: '#7D4427',fontFamily:'"Dancing Script", cursive',fontWeight:"800" }}>
                        Login
                    </Typography>

                    <TextField fullWidth label="Email" type="email" variant="outlined" margin="normal" value={userDetails.email} onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                    />

                    <TextField fullWidth label="Password" type="password" variant="outlined" margin="normal" value={userDetails.password} onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })}
                    />

                    <Button fullWidth variant="contained" sx={{ mt: 3, backgroundColor: "#7D4427", color: "#fff", "&:hover": { backgroundColor: "#5a3220" }, }} onClick={login}
                    >
                        Login
                    </Button>

                    <Typography variant="body2" sx={{ mt: 2 }}>
                        Don't have an account?
                        <Link to="/register">
                            <Button variant="text" sx={{ color: "#7D4427", fontWeight: 600 }} >
                                Register
                            </Button>
                        </Link>
                    </Typography>
                </Paper>
            </Box>

        </div>
    )
}

export default Login
