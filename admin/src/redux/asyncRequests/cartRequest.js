import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utils/API";


export const fetchCart = createAsyncThunk("/cart/fetchCart", async (opts,thunkAPI) => {
	try {
		const response =  await  API.renderCart(opts);
		return response.data;
	}
	catch (err) {
		//if we failed set payload to error message
    	return thunkAPI.rejectWithValue("Some Error Occured. Try Again!!");
   }
});


export const updateCart = createAsyncThunk("/cart/updateCart", async ({checked,productId,quantity},thunkAPI) => {
	try {
		const response = await API.addToCart(productId, quantity, checked);
		if(response.statusText==="OK"){
			return {checked,productId,quantity};
		}
	}
	catch (err) {
		//if we failed set payload to error message
    	return thunkAPI.rejectWithValue("Some Error Occured. Try Again!!");
   }
});

export const addToCart = createAsyncThunk("/cart/addToCart", async ({product,productId,quantity},thunkAPI) => {
	try {
		const response = await API.addToCart(productId, quantity);
		if(response.statusText==="OK"){
			return {product,productId,quantity};
		}
	}
	catch (err) {
		console.log("error",err)
		//if we failed set payload to error message
    	return thunkAPI.rejectWithValue("Some Error Occured. Try Again!!");
   }
});


export const removeFromCart = createAsyncThunk("/cart/removeFromCart", async ({checked,productId,quantity},thunkAPI) => {
	try {
		const response =  await  API.delFromCart(productId);
		if(response.statusText==="OK"){
			return {checked,productId,quantity};
		}
	}
	catch (err) {
		//if we failed set payload to error message
    	return thunkAPI.rejectWithValue("Some Error Occured. Try Again!!");
   }
});


