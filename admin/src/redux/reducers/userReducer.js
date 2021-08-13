import API from "../../utils/API";

export const userReducer = {
  setCurrentUser: (state, action) => {
  	//getting {user,token }
  	let userData=action.payload;  
    localStorage.setItem("token",userData.token);
    let user=API.decodedUserJWT();
    if(user){
      //note: don't change the order it will lead to some bug 
      localStorage.setItem("user",JSON.stringify(user));
      //once we stored on local storage call the setAuth it get header from local storage
      API.setAuthHeader();
      //after setting auth header change the state 
      state.user = user;
    }
  },
  logoutUserSuccess: (state) => {
    state.user = null;
    //removing user data from local storage
    localStorage.removeItem("user");
    localStorage.removeItem("token");

  },
};
