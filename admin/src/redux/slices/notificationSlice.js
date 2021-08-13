import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import {getUnreadNotificationCount,
		getNotification,
		markAsReadNotification,
		removeNotification
	   } from "../asyncRequests/notificationRequest";

import API from "../..//utils/API";


const userSlice = createSlice({
  name: "user",
  initialState: {
  	notifications:{
  		loading:true,
    	messages: [],
    	UnreadNotificationCount:0,
    	error:""
    }
  },
 extraReducers: {
    //don't set loading for getUnreadNotificationCount 
  	[getUnreadNotificationCount.pending]:(state,action)=>{
  		console.log(state,action,"pending")
  	},
  	[getUnreadNotificationCount.fulfilled]: (state, action) => {
      console.log(state,action.payload,"fulfilled");
      state.notifications.UnreadNotificationCount=action.payload.count;
    },
    [getUnreadNotificationCount.rejected]: (state, action) => {
      console.log(state,action,"rejected");
    },

    [getNotification.pending]:(state,action)=>{
  		console.log(state,action,"pending")
  		state.notifications.loading=true;
  	},
  	[getNotification.fulfilled]: (state, action) => {
      console.log(state,action.payload,"fulfilled");
      //simply putting all notifcation as 
      state.notifications.messages=[...action.payload];
      state.notifications.loading=false;
    },
    [getNotification.rejected]: (state, action) => {
      console.log(state,action,"rejected");
      state.notifications.loading=false;
    },

    [markAsReadNotification.pending]:(state,action)=>{
  		console.log(state,action,"pending")
  		state.notifications.loading=true;
  	},
  	[markAsReadNotification.fulfilled]: (state, action) => {
      console.log(state,action.payload,"fulfilled");
      state.notifications.loading=false;
      //getting id from async request
      let id=action.payload;
      state.notifications.messages.forEach((doc,index)=>{
                if(doc._id===id){
                  //updating as read the notification
                  doc.isRead=1;
                }
              })
      //subtracting one from UnreadNotificationCount 
      state.notifications.UnreadNotificationCount-=1;
    },
    [markAsReadNotification.rejected]: (state, action) => {
      console.log(state,action,"rejected");
      state.notifications.loading=false;
    },

    [removeNotification.pending]:(state,action)=>{
  		console.log(state,action,"pending")
  		state.notifications.loading=true;
  	},
  	[removeNotification.fulfilled]: (state, action) => {
      console.log(state,action.payload,"fulfilledode");
      state.notifications.loading=false;
      //getting id from async request
      let id=action.payload;
      state.notifications.messages.forEach((doc,index)=>{
                if(doc._id===id){
                  //removing the notification from local one 
                  doc.deleted=1;
                  //if user deleted the msg directly without reading we need sub one from UnreadNotificationCount
                  if(!doc.isRead){
      				state.notifications.UnreadNotificationCount-=1;
                  }
                }
              })
    },
    [removeNotification.rejected]: (state, action) => {
      console.log(state,action,"rejected");
      state.notifications.loading=false;
    }
   }
});

export default userSlice.reducer;
