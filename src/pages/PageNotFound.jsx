import React from 'react'
import { Box, Typography, Button } from "@mui/material";
import { Link } from 'react-router-dom';


function PageNotFound() {
  return (
    <div>
      <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f5f5f5",
        textAlign: "center",
        p: 3
      }}
    >
      <Typography variant="h1" color="#925737" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" gutterBottom color="#925737">
        Oops! Page Not Found
      </Typography>
      <Typography variant="body1" color="#925737" sx={{ mb: 3 }}>
        The page you’re looking for doesn’t exist or has been moved.
      </Typography>
      <Link to="/" style={{ textDecoration: "none" }}>
       <Button variant="contained" sx={{ mt: 2, backgroundColor: "#7D4427", "&:hover": { backgroundColor: "#b87d6b" },}}>
              GO BACK
        </Button>
      </Link>
    </Box>


    </div>
  )
}

export default PageNotFound
