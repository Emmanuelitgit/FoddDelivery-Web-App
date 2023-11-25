import { createSlice} from "@reduxjs/toolkit";

export const notificationSlice = createSlice({
    name:"notification",
    initialState:{
        open:false,
        message:[],
    },

    reducers:{
        showNotification:{
            reducer(state, action){
                state.open = action.payload.open
                state.message = action.payload.message
            },
            prepare(open, message){
                return{
                    payload:{
                        open,
                        message
                    }
                }
            }
        }
    }
})

export const notification = notificationSlice.actions;