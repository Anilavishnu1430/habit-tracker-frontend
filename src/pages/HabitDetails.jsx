import React, { useEffect } from 'react'
import { Box, Typography, Container } from "@mui/material";
import Footer from '../components/Footer';
import Header from '../components/Header';


function HabitDetails() {
  return (
    <div>
      <Header/>
        <Box sx={{
                    backgroundImage: "url('https://images.rawpixel.com/image_social_landscape/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm00MjItMDYzLWt6cGhnMjNrLmpwZw.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}>
      <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography
        variant="h3"
        sx={{ color: "#7D4427", fontWeight: "700", textAlign: "center", mb: 4,fontFamily: '"Dancing Script", cursive',fontWeight:"800" }}
      >
        Habits
      </Typography>
      <Typography data-aos="zoom-in" variant="body1" sx={{ color: "#312b23", mb: 4,fontFamily: '"Science Gothic", sans-serif' }}>
        Habits are the small routines and behaviors we repeat daily. They shape
        our lifestyle, influence our health, and determine our long‑term success.
        Understanding the difference between good and bad habits helps us make
        better choices.
      </Typography>
      <Typography data-aos="zoom-in" variant="h4" sx={{ color: "#7D4427", fontWeight: "600", mb: 2,fontFamily: '"Dancing Script", cursive',fontWeight:"800" }}>
        Good Habits
      </Typography>
      <Typography data-aos="zoom-in" variant="body1" sx={{ color: "#312b23", mb: 2,fontFamily: '"Science Gothic", sans-serif' }}>
        Good habits strengthen discipline, improve well‑being, and help you grow
        personally and professionally. They are the foundation of a healthy and
        productive life.
      </Typography>
      <Typography data-aos="zoom-in" variant="body1" sx={{ color: "#312b23", mb: 4,fontFamily: '"Science Gothic", sans-serif' }}>
        Examples include:
        <br />• Exercising regularly
        <br />• Eating balanced meals
        <br />• Reading and continuous learning
        <br />• Practicing gratitude and mindfulness
        <br />• Sleeping on time
      </Typography>
      <Typography data-aos="zoom-in" variant="h4" sx={{ color: "#7D4427", fontWeight: "600", mb: 2,fontFamily: '"Dancing Script", cursive',fontWeight:"800" }}>
        Bad Habits
      </Typography>
      <Typography data-aos="zoom-in" variant="body1" sx={{ color: "#312b23", mb: 2,fontFamily: '"Science Gothic", sans-serif' }}>
        Bad habits drain energy, harm health, and block progress. Identifying
        them is the first step toward replacing them with positive routines.
      </Typography>
      <Typography data-aos="zoom-in" variant="body1" sx={{ color: "#312b23", mb: 4,fontFamily: '"Science Gothic", sans-serif' }}>
        Examples include:
        <br />• Procrastination
        <br />• Excessive screen time
        <br />• Skipping meals
        <br />• Negative self‑talk
        <br />• Poor sleep schedule
      </Typography>

      <Typography data-aos="zoom-in" variant="h4" sx={{ color: "#7D4427", fontWeight: "600", mb: 2 ,fontFamily: '"Dancing Script", cursive',fontWeight:"800" }}>
        Building Better Habits
      </Typography>
      <Typography data-aos="zoom-in" variant="body1" sx={{ color: "#312b23",fontFamily: '"Science Gothic", sans-serif' }}>
        Start small, stay consistent, and track your progress. Replacing one bad
        habit with a good one can transform your lifestyle over time. Habits are
        powerful — they can either hold you back or push you forward.
      </Typography>
    </Container>
    </Box>
    <Footer/>
    </div>
  )
}

export default HabitDetails
