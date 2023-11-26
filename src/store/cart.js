import { createAsyncThunk, createSlice,} from "@reduxjs/toolkit";
import axios from "axios";



export const placeOrder = createAsyncThunk("order", async (order) => {
    try {
        await axios.post("http://localhost:5000/addToCart", order);
        return order;
    } catch (err) { 
      console.log(err);
    }
  });


export const fetchOrders = createAsyncThunk("orders", async (userId) => {
  try {
    const response = await axios.get(`http://localhost:5000/orders/${userId.user_id}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

export const removeFromCart = createAsyncThunk("remove", async(id)=>{
    try{
        await axios.delete(`http://localhost:5000/removeOrder/${id.id}`, id);
        return id
    }catch(err){
        console.log(err)
    }
});

export const increaseQuantity = createAsyncThunk("increase", async(increaseValue)=>{
    try{
        await axios.put(`http://localhost:5000/increaseQuantity/${increaseValue.id}`, increaseValue);
        return increaseValue
    }catch(err){
        console.log(err)
    }
})

export const decreaseQuantity = createAsyncThunk("decrease", async(decreaseValue)=>{
    try{
        await axios.put(`http://localhost:5000/decreaseQuantity/${decreaseValue.id}`, decreaseValue);
        return decreaseValue
    }catch(err){
        console.log(err)
    }
})

export const cartSlice = createSlice({
    name: "cart",
    statuse:"idle",
    initialState:{cartItems:[], totalQuantity:0},
    reducers:{   
    },

    extraReducers:(builder)=>{
        builder
        .addCase(fetchOrders.fulfilled, (state, action)=>{
            state.cartItems = action.payload;
        })
        .addCase(placeOrder.fulfilled, (state, action) => {
            const newOrder = action.payload;
            const existingOrderIndex = state.cartItems.findIndex(item => item.id === newOrder.id);
        
            if (existingOrderIndex !== -1) {
                state.cartItems[existingOrderIndex].quantity++;
            } else {
                state.cartItems.push({ ...newOrder, quantity: 1 });
            }

            state.totalQuantity++;
        })               
        .addCase(removeFromCart.fulfilled, (state, action)=>{
            const {id} = action.payload
            const existingcartItems = state.cartItems.find((item)=>item.id === id);

            if(existingcartItems){
                state.cartItems = state.cartItems.filter((item)=> item.id !== id)
            }
        })
        .addCase(increaseQuantity.fulfilled, (state, action)=>{
            const newOrder = action.payload;
            const existingOrderIndex = state.cartItems.findIndex(item => item.id === newOrder.id);
        
            if (existingOrderIndex !== -1) {
                state.cartItems[existingOrderIndex].quantity++;
            } 
        })
        .addCase(decreaseQuantity.fulfilled, (state, action)=>{
            const newOrder = action.payload;
            const existingOrderIndex = state.cartItems.findIndex(item => item.id === newOrder.id);
        
            if (existingOrderIndex !== -1) {
                state.cartItems[existingOrderIndex].quantity--;
            } 
        })
    }
})


export const cartActions = cartSlice.actions;