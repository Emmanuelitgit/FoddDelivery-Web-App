import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchMeal = createAsyncThunk("meals", async(cat)=>{
    try{
        const response = await axios.get(`http://localhost:5000/meals/${cat.cat}`);
        return response.data
    }catch(err){
        console.log(err)
    }
});

export const mealSlice = createSlice({
    name:"meal",
    initialState:{meal:[]},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchMeal.fulfilled, (state, action)=>{
            state.meal = action.payload
        })
    }
})