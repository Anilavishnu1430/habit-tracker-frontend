import React, { useEffect, useState } from 'react'
import EditIcon from "@mui/icons-material/Edit";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {IconButton, TextField,Button, Stack, FormControl, FormLabel, RadioGroup,FormControlLabel, Radio, Slider} from '@mui/material';
import { getSingleHabitAPI, updateHabitAPI } from '../services/allAPIs';
import Swal from 'sweetalert2'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  maxHeight: '80vh', 
  overflowY: 'auto',
};

function Edit({habitId,onUpdate}) {
  console.log(habitId);

  const [habit, setHabit] = useState({
      id:"",
      habitName: "",
      category: "",
      status: "",
      frequency: "",
      startDate: "",
      goal: "",
      notes: "",
      progress: 0
    })

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getHabit=async()=>{
    try{
      const response = await getSingleHabitAPI(habitId)
      console.log(response);
      setHabit(response.data)
    }
    catch(err){
      console.log(err);
    }
  }
  useEffect(()=>{
    getHabit()
  },[habitId])

  const handleUpdate=async()=>{
    try{
      const response = await updateHabitAPI(habitId,habit)
      console.log(response);
      onUpdate(response.data)
      handleClose()
      Swal.fire({
      title: "Good job!",
      text: "Habit Updated Successfully",
      icon: "success"
    });  
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <div>
      <IconButton onClick={handleOpen}><EditIcon /></IconButton>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6" mb={2}>Edit Habit</Typography>
          <Stack spacing={2}>
            <TextField
              name="habitName"
              label="Habit Name"
               value={habit.habitName}
               onChange={(e) => setHabit({ ...habit, habitName: e.target.value })}
            />
            <TextField
              name="category"
              label="Category"
               value={habit.category}
               onChange={(e) => setHabit({ ...habit, category: e.target.value })}
            />
            <TextField
              name="status"
              label="Status"
               value={habit.status}
               onChange={(e) => setHabit({ ...habit, status: e.target.value })}
            />

            <FormControl component="fieldset">
              <FormLabel>Frequency</FormLabel>
              <RadioGroup
                row
                name="frequency"
                 value={habit.frequency}
                 onChange={(e) => setHabit({ ...habit, frequency: e.target.value })}
              >
                <FormControlLabel value="Daily" control={<Radio />} label="Daily" />
                <FormControlLabel value="Weekly" control={<Radio />} label="Weekly" />
                <FormControlLabel value="Monthly" control={<Radio />} label="Monthly" />
              </RadioGroup>
            </FormControl>

            <TextField
              type="date"
              name="startDate"
              label="Start Date"
              InputLabelProps={{ shrink: true }}
               value={habit.startDate || ""}
               onChange={(e) => setHabit({ ...habit, startDate: e.target.value })}
            />

            <TextField
              name="goal"
              label="Target Goal"
               value={habit.goal}
               onChange={(e) => setHabit({ ...habit, goal: e.target.value })}
            />

            <TextField
              name="notes"
              label="Notes"
              multiline
              rows={2}
               value={habit.notes}
               onChange={(e) => setHabit({ ...habit, notes: e.target.value })}
            />

            <FormControl fullWidth>
              <FormLabel>Progress</FormLabel>
              <Slider
                name="progress"
                 value={habit.progress}
                onChange={(e, newValue) => setHabit({ ...habit, progress: newValue })}
                step={10}
                marks
                min={0}
                max={100}
                valueLabelDisplay="auto"
              />
            </FormControl>

            <Button
              variant="contained"
              sx={{ backgroundColor: "#7D4427", color: "#fff" }}
              onClick={handleUpdate}
            >
              Update
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>

  )
}

export default Edit
