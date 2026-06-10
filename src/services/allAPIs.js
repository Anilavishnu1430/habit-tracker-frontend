import { serverURL } from "./serverUrl";
import { commonAPI } from "./commonAPI";

//1. Add habit => POST
export const addHabitAPI = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/habit`,reqBody)
}

// GET all habits
export const getHabitAPI = async () => {
  return await commonAPI("GET", `${serverURL}/habit`);
}

//Delete Habit
export const deleteHabitAPI = async(id)=>{
    return await commonAPI("DELETE",`${serverURL}/habit/${id}`,{})
}

//Get a particular Habit
export const getSingleHabitAPI = async (id) => {
  return await commonAPI("GET", `${serverURL}/habit/${id}`);
};


//Update Habit
export const updateHabitAPI = async(id,reqBody)=>{
    return await commonAPI("PUT",`${serverURL}/habit/${id}`,reqBody)
}