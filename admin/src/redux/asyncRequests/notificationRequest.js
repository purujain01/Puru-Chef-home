import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utils/API";

export const getUnreadNotificationCount = createAsyncThunk("/cart/getUnreadNotificationCount", async (opts,thunkAPI) => {
	try {
		const response =  await  API.getUnreadNotificationCount(opts);
		if(response.data.status==="success"){
			return response.data;
		}
		//if we failed set payload to error message
    	return thunkAPI.rejectWithValue(response.data.message);
	}
	catch (err) {
		//if we failed set payload to error message
    	return thunkAPI.rejectWithValue("Some Error Occured. Try Again!!");
   }
});


export const getNotification = createAsyncThunk("/cart/getNotification", async (opts,thunkAPI) => {
	try {
		const response = await API.getNotification(opts);
		console.log(response,"getNotification")
		if(response.data.status==="success"){
			return response.data.message;
		}
		//if we failed set payload to error message
    	return thunkAPI.rejectWithValue(response.data.message);
	}
	catch (err) {
		//if we failed set payload to error message
    	return thunkAPI.rejectWithValue("Some Error Occured. Try Again!!");
   }
});


export const removeNotification = createAsyncThunk("/cart/removeNotification", async (id,thunkAPI) => {
	try {
		const response = await API.removeNotification(id);
		console.log(response,"removeNotification")
		if(response.data.status==="success"){
			//return the id to remove form global state
			return id;
		}
		//if we failed set payload to error message
    	return thunkAPI.rejectWithValue(response.data.message);
	}
	catch (err) {
		//if we failed set payload to error message
    	return thunkAPI.rejectWithValue("Some Error Occured. Try Again!!");
   }
});


export const markAsReadNotification = createAsyncThunk("/cart/markAsReadNotification", async (id,thunkAPI) => {
	try {
		const response = await API.markAsReadNotification(id);
		console.log(response,"markAsReadNotification")
		if(response.data.status==="success"){
			//return the id to remove form global state
			return id;
		}
		//if we failed set payload to error message
    	return thunkAPI.rejectWithValue(response.data.message);
	}
	catch (err) {
		//if we failed set payload to error message
    	return thunkAPI.rejectWithValue("Some Error Occured. Try Again!!");
   }
});