import React from 'react'
import { Box, TextField, Button, Typography, Paper, IconButton, Stack, Card, CardContent, LinearProgress } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from 'react';
import { addHabitAPI, deleteHabitAPI, getHabitAPI } from '../services/allAPIs';
import { useEffect } from 'react';
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import Edit from './Edit';
import { Link } from 'react-router-dom';


function HabitList() {
  const [habits, setHabits] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [updatedData, setUpdatedData] = useState({})


  const fetchHabits = async () => {
    try {
      const response = await getHabitAPI();
      setHabits(response.data);

    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchHabits();
  }, []);

  console.log(habits);

  const handleDownload = async () => {
    try {
      //to get the div content as pdf
      console.log(document.getElementById("result"));
      //to create canvas from the div
      //html2canvas library to take  a "screenshot" of a specific HTML element and convert it into a canvas element.
      const canvas = await html2canvas(document.getElementById("result"), { scale: 3 })
      console.log(canvas);//it returns promise
      //convert canvas to image using toDataURL
      const imgData = canvas.toDataURL('image/png');
      console.log(imgData);
      //PDF generation using jsPDF
      const pdf = new jsPDF('p', 'mm', 'a4');
      //define width and height
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      //add image to pdf
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      //save the pdf
      pdf.save('habit.pdf')
      //get current date and time
      const timezone = new Date()
      console.log(timezone);
      //formated date and time
      const formatedDate = `${timezone.toLocaleDateString()} ,  ${timezone.toLocaleTimeString()}`
      console.log(formatedDate);
    }
    catch (err) {
      console.log(err);
    }
  }



  const handleDelete = async (id) => {
    console.log(id);

    try {
      const response = await deleteHabitAPI(id)
      console.log(response);
      fetchHabits();
    }
    catch (err) {
      console.log(err);
    }
  }

  const onUpdateData = (data) => {
    setUpdatedData(data)
    fetchHabits()
  }
  console.log(updatedData);


  const filteredHabits = habits?.filter?.(h =>
    h.habitName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    h.category?.toLowerCase().includes(searchTerm.toLowerCase())
  ) || []


  return (
    <div>
      <Box sx={{
        backgroundImage: "url('https://images.rawpixel.com/image_social_landscape/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm00MjItMDYzLWt6cGhnMjNrLmpwZw.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        px: 24,
        py: 5,
      }}>
        <Paper id="result" sx={{ p: 3, backgroundColor: "#dccdbe" }}>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 2,
              pb: 6
            }}
          >

            <Typography variant="h4" sx={{ color: "#7D4427", fontWeight: 800, fontFamily: '"Dancing Script", cursive', textAlign: "center", flexGrow: 1 }}>
              Track, Edit, and Improve
            </Typography>
            <Button
              variant="outlined" onClick={handleDownload} data-aos="flip-left" 
              sx={{ mt: 3, mr:2, borderColor: "#7D4427", color: "white", backgroundColor: "#7D4427", "&:hover": { backgroundColor: "#b87d6b" }, }}>
              Download Report
            </Button>
            <Link to={"/habit"}>
            <Button
              variant="outlined" data-aos="flip-left" 
              sx={{ mt: 3, borderColor: "#7D4427", color: "white", backgroundColor: "#7D4427", "&:hover": { backgroundColor: "#b87d6b" }, }}>
              Add Habit
            </Button>
            </Link>
          </Box>

          <TextField
            label="Search habits"
            variant="outlined"
            margin="normal"
            fullWidth
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ border: "2px solid #7D4427", borderRadius: 2, mt: 5, mb: 5 }}
          />

          {
            filteredHabits.length > 0 ?
              filteredHabits.map((h) => (
                <Card data-aos="zoom-in" key={h.id} sx={{ mb: 2, p: 1, backgroundColor: "#ebe9ea", border: "1px solid #B08F78" }}>
                  <CardContent sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Box>
                      <Typography variant="h4" sx={{ color: "#925737" }}>{h.habitName}</Typography>

                      <Typography variant="body1" sx={{ color: "#925737", fontWeight: "600" }}>
                        {h.category} — {h.status}
                      </Typography>

                      <Typography variant="body1" sx={{ color: "#925737" }}>Frequency: {h.frequency}</Typography>

                      <Box sx={{ mt: 1 }}>
                        <Typography variant="body1" sx={{ color: "#925737" }}>Progress: {h.progress}%</Typography>
                        <LinearProgress variant="determinate" value={h.progress} sx={{ height: 6, borderRadius: 3, mt: 2, mb: 2 }} />
                      </Box>

                      <Typography variant="body1" sx={{ color: "#925737", mr: 2 }}>
                        Start: {h.startDate}
                      </Typography>

                      <Typography variant="body1" sx={{ color: "#925737" }}>
                        Goal: {h.goal}
                      </Typography>

                      <Typography variant="body1" sx={{ color: "#925737" }}>
                        Notes: {h.notes}
                      </Typography>

                    </Box>
                    <Box>
                      <Edit habitId={h.id} onUpdate={onUpdateData} />
                      <IconButton onClick={() => handleDelete(h.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              ))
              : ""
          }
        </Paper>
      </Box>

    </div>
  )
}

export default HabitList
