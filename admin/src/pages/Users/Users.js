import React from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import "./Users.css";


const Users = () => {
  const users = [
    {
      userName: "sneh",
      mailId: "xyz123@gmail.com",
      status: "active",
      type: "Core Team",    
    },
    {
      userName: "sneh",
      mailId: "xyz123@gmail.com",
      status: "active",
      type: "Core Team",    
    },
  ];
  return (
    <div>
      <label id="l" htmlFor="Users">Users</label>
      <div class="mid">
                <div class="navbar">
                    <ul>
                        <li>Username</li>
                        <li>EmailID</li>
                        <li>Status</li>
                        <li>AccountType</li>
                        <li>Details</li>
                    </ul>
                </div>
            </div>
            <table id="p">
        <tbody>
          
          {users.map((user) => {
            return (
              <tr>
                <td >{user.userName}</td>
                <td >{user.mailId}</td>
                <td >
                  {user.status} <FiberManualRecordIcon id="f" fontSize="small" />
                </td>
                <td >{user.type}</td>
                <td>
                  <MoreHorizIcon />
                </td>
                
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Users;