import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import { userReducer } from "../reducers/userReducer";
import API from "../..//utils/API";

let initUserState;
//checking if token is expired
if(!API.checkTokenExp()){
	 initUserState = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
 }
 else{
 	 initUserState=null;
 }

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: initUserState,
  },

  reducers: userReducer,
});

export default userSlice.reducer;

export const { setCurrentUser, logoutUserSuccess } = userSlice.actions;


// export const loginUser = () => async (dispatch) => {
//   try {
//     const response = await axios.get("/employer/currentuser");
//     localStorage.setItem("userToken", response.data);
//     dispatch(setCurrentUser(response.data.user));
//   } catch (error) {
//     return error.message;
//   }
// };

// export const logoutUser = () => async (dispatch) => {
//   try {
//     const response = await axios.get("/employer/logout");
//     if (response.status === 200) {
//       localStorage.removeItem("userToken");
//       dispatch(logoutUserSuccess());
//     }
//   } catch (error) {
//     return error.message;
//   }
// };
