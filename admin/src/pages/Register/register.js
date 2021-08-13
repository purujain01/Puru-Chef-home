import React, { Component } from "react";
import Input from "../../comman/input";
import "./register.css";

class Register extends Component {
  render() {
    const column = [
      //Made an array of column to display for input
      {
        name: "email",
        label: "Email",
        type: "email",
      },
      {
        name: "password",
        label: "Password",
        type: "password",
      },
      {
        name: "confirmPassword",
        label: "Confirm Password",
        type: "password",
      },
    ];
    // lr->loginRegister
    return (
      <form className="rForm">
        <div className="rBody">
          {/* TopLabel-CenterAligned */}
          <label id="rLabel" htmlFor="rLabel">
            Register
          </label>
          {/* Displaying the column array */}
          {column.map((item) => {
            return (
              <Input
                key={item.name}
                name={item.name}
                label={item.label}
                type={item.type}
              />
            );
          })}
          {/* Radio buttons for selecting Account type */}
          <div className="accountType">
            <label id="accountTag" htmlFor="accountTag">
              ACCOUNT TYPE:
            </label>
            <label className="rcontainer">
              <label htmlFor="coreTeam"> Core team</label>
              <input type="radio" name="radio" />
            </label>
            <label className="rcontainer">
              <label htmlFor="franchise"> Franchise</label>
              <input type="radio" name="radio" />
            </label>
          </div>
          {/* Login Button */}
          <button id="registerButton">Login</button>
        </div>
      </form>
    );
  }
}

export default Register;
