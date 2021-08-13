import React from "react";

const Input = (props) => {
  const { name, label, type } = props;
  return (
    <div className="inputComponent">
      <label htmlFor={name} className="inputLabel">
        {label}
      </label>
      <input className="inputTag"
        id={name}
        name={name}
        type={type}
      />
    </div>
  );
};

export default Input;