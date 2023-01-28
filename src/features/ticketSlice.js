import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items   : [],
    status : null,
}

export const ticketFetch = createAsyncThunk(
    "tickets/ticketFetch",
    async(id=null, {rejectWithValue}) => {
        try{
            const response = await axios.get("https://domner-server.onrender.com/api/popular/");
            return response?.data.data;
        }
        catch(error){
            return rejectWithValue("An error occur");
        }
    }
)

const ticketSlice = createSlice({
    name : "tickets",
    initialState,
    reducers : {

    },
    extraReducers : (builder) => {
        builder.addCase(ticketFetch.pending,(state, action) =>{
            state.status  =  "pending"
        })
        builder.addCase(ticketFetch.fulfilled,(state, action) =>{
            state.status =  "success"
            
            state.items = action.payload
        })
        builder.addCase(ticketFetch.rejected,(state, action) =>{
            state.status = "reject"
            state.items   = action.payload
        })
        // [ticketFetch.fulfilled] : (state, action) =>{
        //     state.status =  "success"
            
        //     state.items = action.payload

        // },
        // [ticketFetch.rejected] : (state, action) =>{
        //     state.status = "reject"
        //     state.items   = action.payload
        //  }
    }
})

export default ticketSlice.reducer;