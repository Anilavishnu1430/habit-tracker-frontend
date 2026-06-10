import React from 'react'
import { Box } from "@mui/material";
import { Container } from "@mui/material";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Divider from '@mui/material/Divider';

function Footer() {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#925737",
          color: "white",
          py: 4,
          mt: "auto",
        }}
      >
        <Container maxWidth="lg">

          <Stack
            direction={{ md: "row" }}
            spacing={4}
            justifyContent="space-between"
          >

            <Stack spacing={3} alignItems="center" sx={{ color:"#ebe9ea" }}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Box
                  component="img"
                  src="https://png.pngtree.com/png-clipart/20221212/ourmid/pngtree-habit-tracker-with-a-glass-of-milk-ornament-png-image_6520606.png" 
                  alt="Habit Tracker Logo"
                  sx={{ width: 40, height: 40 }}
                />
                <Typography variant="h4" sx={{fontFamily: '"Science Gothic", sans-serif'}}>
                  Habitify
                </Typography>
              </Stack>

              <Typography variant="body2" sx={{fontFamily: '"Dancing Script", cursive' }}>
            Stay consistent, track progress, and build better habits every day.
          </Typography>

              <Stack direction="row" spacing={3} justifyContent="center">
                <FacebookIcon />
                <InstagramIcon />
                <YouTubeIcon />
                <LinkedInIcon />
              </Stack>
            </Stack>


            <Stack spacing={1} sx={{ color:"#be9ea" }}>
              <Typography variant="h6" sx={{fontFamily: '"Science Gothic", sans-serif'}}>Resources</Typography>
              <Link href="#" underline="hover" color="#ebe9ea">Habit Tips</Link>
              <Link href="#" underline="hover" color="#ebe9ea">FAQ</Link>
              <Link href="#" underline="hover" color="#ebe9ea">Blog</Link>
            </Stack>

            <Stack spacing={1} sx={{ color:"#ebe9ea" }}>
              <Typography variant="h6" sx={{fontFamily: '"Science Gothic", sans-serif'}}>Quick Links</Typography>
              <Link href="#" underline="hover" color="#ebe9ea">Home</Link>
              <Link href="#" underline="hover" color="#ebe9ea">Dashboard</Link>
              <Link href="#" underline="hover" color="#ebe9ea">Reports</Link>
              <Link href="#" underline="hover" color="#ebe9ea">About</Link>
            </Stack>

            <Stack spacing={1} sx={{ color:"#ebe9ea" }}>
              <Typography variant="h6" sx={{fontFamily: '"Science Gothic", sans-serif'}}>Contact Us</Typography>
              <Link href="#" underline="hover" color="#ebe9ea">support@habittracker.com</Link>
              <Link href="#" underline="hover" color="#ebe9ea">+91 98765 43210</Link>
            </Stack>

            
          </Stack>

        </Container>
      <Divider sx={{ bgcolor: "white", mt:5 }}/>
       <Typography sx={{textAlign: "center", mt:5, color: "#ebe9ea"}} > © 2026 Habit Tracker. All rights reserved.
</Typography>
      </Box>

    </div>
  )
}

export default Footer
