import React from "react";
import Input from "../../comman/input";
import "./newMember.css";

const NewMember = () => {
  const column = [
    {
      name1: "name",
      label1: "NAME",
      type1: "text",
      name2: "email",
      label2: "EMAIL ADDRESS",
      type2: "email",
    },
    {
      name1: "address",
      label1: "ADDRESS",
      type1: "text",
      name2: "phoneNumber",
      label2: "PHONE NUMBER",
      type2: "text",
    },
    {
      name1: "panNumber",
      label1: "PAN NUMBER",
      type1: "text",
      name2: "aadharNumber",
      label2: "AADHAR NUMBER",
      type2: "text",
    },
    {
      name1: "nominatedBy",
      label1: "NOMINATED BY",
      type1: "text",
      name2: null,
    },
  ];
  return (
    <form className="newMemberForm">
      <p className="mainTag">Enter the details of new member</p>
      <table className="details">
        <tbody>
          {column.map((item) => {
            return (
              <tr key={item.name1}>
                <th className="col1">
                  <Input
                    name={item.name1}
                    label={item.label1}
                    type={item.type1}
                  />
                </th>
                {item.name2 && (
                  <th className="col2">
                    <Input
                      name={item.name2}
                      label={item.label2}
                      type={item.type2}
                    />
                  </th>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
      <button className="approveButton">APPROVE</button>
      <button className="backButton">BACK</button>
    </form>
  );
};

export default NewMember;
