import axios from "axios";
import jwt_decode from "jwt-decode";
import authService from "./authService";
import orderService from "./orderService";

const API = {
  setAuthHeader: function () {
    let token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    }
  },
  removeAuthHeader: function () {
    axios.defaults.headers.common["Authorization"] = "";
  },
  checkTokenExp: function () {
    let token = localStorage.getItem("token");
    //check only if token avalible
    if (token) {
      var decoded = jwt_decode(token);
      let currentDate = new Date();
      // JWT exp is in seconds
      if (decoded.exp * 1000 < currentDate.getTime()) {
        //removing user data from local storage
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        return true;
      }
    }
    return false;
  },
  decodedUserJWT: function () {
    let token = localStorage.getItem("token");
    //check only if token avalible
    if (token) {
      var decoded = jwt_decode(token);
      let user = { username: decoded.username, email: decoded.email, gender: decoded.gender };
      return user;
    }
    return null;
  },

  checkUserCred: authService.checkUserCred,
  signUp: authService.signUp,
  login: authService.login,
  logout: authService.logout,
  forgotPass: authService.forgotPass,

  getAllOrders: orderService.getAllOrders,
  changeStatus: orderService.changeStatus,
  getOneOrder: orderService.findOne,
  getuserCount: orderService.getUserCount
};
//setting token
API.setAuthHeader();
export default API;
