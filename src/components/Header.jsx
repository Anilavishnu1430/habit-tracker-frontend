import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Stack,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";



function Header() {
   
  return (
    <div>
        <AppBar position="static" color="default" elevation={1} sx={{
          backgroundColor: "#925737",
          color: "white"
        }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        
        <Stack direction="row" spacing={1} alignItems="center">
          <Box
            component="img"
            src="https://png.pngtree.com/png-clipart/20221212/ourmid/pngtree-habit-tracker-with-a-glass-of-milk-ornament-png-image_6520606.png" 
            alt="Habit Tracker Logo"
            sx={{ width: 40, height: 40 }}
          />
          <Typography variant="h6" color="#ebe9ea" sx={{fontFamily: '"Science Gothic", sans-serif'}}>
            Habitify
          </Typography>
        </Stack>

        <Stack direction="row" spacing={3}>
          <Link component={RouterLink} to="/" underline="none" sx={{fontFamily: '"Science Gothic", sans-serif'}}><Typography sx={{ textDecoration: "none", color: "#ebe9ea", fontWeight: 600,fontFamily: '"Dancing Script", cursive', "&:hover": { backgroundColor: "#b87d6b", px:2,fontFamily:'"Dancing Script", cursive',textDecoration:"none" }}}>Home</Typography></Link>
          <Link component={RouterLink} to="" underline="none"><Typography sx={{ textDecoration: "none", color: "#ebe9ea", fontWeight: 600,fontFamily: '"Dancing Script", cursive', "&:hover": { backgroundColor: "#b87d6b", px:2,fontFamily:'"Dancing Script", cursive' } }}>Blog</Typography></Link>
          <Link component={RouterLink} to="/habitlist" underline="none"><Typography sx={{ textDecoration: "none", color: "#ebe9ea", fontWeight: 600,fontFamily: '"Dancing Script", cursive', "&:hover": { backgroundColor: "#b87d6b", px:2,fontFamily:'"Dancing Script", cursive' } }}>Reports</Typography></Link>
          <Link component={RouterLink} to="/habit-details" underline="none"><Typography sx={{ textDecoration: "none", color: "#ebe9ea", fontWeight: 600,fontFamily: '"Dancing Script", cursive', "&:hover": { backgroundColor: "#b87d6b", px:2,fontFamily:'"Dancing Script", cursive' } }}>About</Typography></Link>
        </Stack>

        <Stack direction="row" spacing={2}>
          <Link component={RouterLink} to='/register'>
          <Button variant="contained" sx={{ color:"#ebe9ea",backgroundColor: "#b87d6b","&:hover": { backgroundColor: "#7D4427" },}}>Sign Up</Button>
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>

    </div>
  )
}

export default Header
