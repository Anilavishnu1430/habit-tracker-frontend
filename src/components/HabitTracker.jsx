import React from 'react'
import { Box, TextField, Button, Typography, Paper, Stack, Select, MenuItem } from "@mui/material";
import { useState } from 'react';
import { addHabitAPI } from '../services/allAPIs'
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import Slider from '@mui/material/Slider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


function HabitTracker() {
  const [habit, setHabit] = useState({
    habitName: "",
    category: "",
    status: "",
    frequency: "",
    startDate: "",
    goal: "",
    notes: "",
    progress: 0
  })
  console.log(habit);

  const [habits, setHabits] = useState([]);

  const AddHabit = async () => {
    try {
      const response = await addHabitAPI(habit);
      setHabits(response.data);

      if (response.status === 201) {
        Swal.fire({
          title: 'Good Job!',
          icon: 'success',
          text: 'Data successfully added'
        })
      }
      else {
        Swal.fire({
          title: 'Bad Luck!',
          icon: 'error',
          text: 'somthing not corect'
        })
      }
      //clear input fields
      setHabit({ habitName: "", category: "", status: "", frequency: "", startDate: "", goal: "", notes: "", progress: 0 });

    }
    catch (err) {
      console.log(err);
    }
  }


  return (
    <div>
      <Box sx={{
        backgroundImage: "url('https://images.rawpixel.com/image_social_landscape/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm00MjItMDYzLWt6cGhnMjNrLmpwZw.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        px: 24,
        py: 5,
      }}
      >
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
            Track Your Progress, Build Your Future
          </Typography>
          <Link to="/login">
            <Button variant="contained" data-aos="flip-left" sx={{ fontWeight: 600, backgroundColor: "#7D4427" }} >
              LOGOUT
            </Button>
          </Link>
        </Box>

        <Paper sx={{ p: 3, mb: 3, backgroundColor: "#dccdbe" }}>
          <Stack spacing={2}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "#7D4427" }}>
              Habit Name
            </Typography>

            <TextField onChange={(e) => setHabit({ ...habit, habitName: e.target.value })} value={habit.habitName} variant="outlined" />
            <FormControl fullWidth>
              <FormLabel sx={{ fontWeight: 600, color: "#7D4427", marginBottom: 2 }}>Category</FormLabel>
              <Select value={habit.category} onChange={(e) => setHabit({ ...habit, category: e.target.value })}>
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value="Health">Health</MenuItem>
                <MenuItem value="Fitness">Fitness</MenuItem>
                <MenuItem value="Learning">Learning</MenuItem>
                <MenuItem value="Productivity">Productivity</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <FormLabel sx={{ fontWeight: 600, color: "#7D4427", marginBottom: 2 }}>Status</FormLabel>
              <Select value={habit.status} onChange={(e) => setHabit({ ...habit, status: e.target.value })}>
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value="Not Started">Not Started</MenuItem>
                <MenuItem value="In Progress">In Progress</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
              </Select>
            </FormControl>

            <FormControl component="fieldset">
              <FormLabel component="legend" sx={{ fontWeight: 600, color: "#7D4427" }}>Frequency</FormLabel>
              <RadioGroup row value={habit.frequency} onChange={(e) => setHabit({ ...habit, frequency: e.target.value })} >
                <FormControlLabel value="Daily" control={<Radio sx={{ color: "#925737", "&.Mui-checked": { color: "#7D4427" }, }} />} label="Daily" />
                <FormControlLabel value="Weekly" control={<Radio sx={{ color: "#925737", "&.Mui-checked": { color: "#7D4427" }, }} />} label="Weekly" />
                <FormControlLabel value="Monthly" control={<Radio sx={{ color: "#925737", "&.Mui-checked": { color: "#7D4427" }, }} />} label="Monthly" />
              </RadioGroup>
            </FormControl>

            <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "#7D4427" }}>
              Date
            </Typography>
            <TextField type="date" label="Start Date" InputLabelProps={{ shrink: true }} value={habit.startDate || ""} onChange={(e) => setHabit({ ...habit, startDate: e.target.value })} />
            
            <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "#7D4427" }}>
              Goal
            </Typography>
            <TextField value={habit.goal || ""} onChange={(e) => setHabit({ ...habit, goal: e.target.value })} />
            
            <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "#7D4427" }}>
              Notes
            </Typography>
            <TextField multiline rows={2} value={habit.notes || ""} onChange={(e) => setHabit({ ...habit, notes: e.target.value })} />

            <FormControl fullWidth>
              <FormLabel>Progress</FormLabel>
              <Slider value={habit.progress} onChange={(e, newValue) => setHabit({ ...habit, progress: newValue })} step={10} marks min={0} max={100} valueLabelDisplay="auto" disabled
                sx={{ color: "#7D4427", "& .MuiSlider-thumb": { color: "#7D4427", }, "& .MuiSlider-rail": { color: "#ebb294", } }} />
            </FormControl>

            <Link to={"/habitlist"}>
              <Button onClick={AddHabit} data-aos="flip-left" variant="contained" sx={{ backgroundColor: "#7D4427", color: "#fff", "&:hover": { backgroundColor: "#b87d6b" } }} >
                Add Habit
              </Button>
            </Link>
          </Stack>
        </Paper>
      </Box>
    </div>
  )
}

export default HabitTracker
