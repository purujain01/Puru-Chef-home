import axios from "axios";

export default {
  checkUserCred: function ({email="", phone=0, username="", opts={signal:""}}) {
    return axios.post("/checkUserCred", {email: email, phone: phone, username: username}, {
      cancelToken: opts.signal
    });
  },

  signUp: function ({username, gender, email, phone, password, confirmPassword, otp, opts={signal:""}}) {
    return axios.post("/signup", {
      username,
      gender,
      email,
      phone,
      password,
      confirmPassword,
      otp
    }, {
      cancelToken: opts.signal
    });
  },

  login: function ({email, password, opts={signal:""}}) {
    return axios.post("/login", {email: email, password: password}, {
      cancelToken: opts.signal
    });
  },

  logout: function () {
    return axios.get("/logout");
  },

  forgotPass: function ({email="", phone=0, newPassword, otp, opts={signal:""}}) {
    return axios.post("/forgotPass", {email: email, phone: phone, newPassword: newPassword, otp: otp}, {
      cancelToken: opts.signal
    });
  }
};
