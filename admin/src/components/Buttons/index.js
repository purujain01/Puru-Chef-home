/*
  A simple component for all the buttons we used in our page 
    
*/
import React from "react";
import { Button } from "react-bootstrap";
import COLOR from "../../Style"
import './style.css'


function Buttons(props) {
  let className = `text-uppercase ${props.className} allButtonEffect`;
  let backgroundcolor = `${COLOR.BgRed}`;
  let bordercolor;
  let color;
  if(props.style){
   backgroundcolor = props.style.backgroundcolor?props.style.backgroundcolor:`${COLOR.BgRed}`;
   bordercolor=props.style.bordercolor?props.style.bordercolor:`${COLOR.BgRed}`;
   color=props.style.color?props.style.color:"white";
  } 
  
  let style = {
    borderColor:bordercolor,
    color: color,
    cursor:"pointer",
    backgroundColor: backgroundcolor,
    border: `1px solid ${bordercolor} !important`,
    borderRadius:"0",
    padding: ".375rem .75rem",
    ...props.style
  };
  // let variant = props.variant ? props.variant : "warning";
  
  return (
    <Button
      {...props}
      // variant={variant}
      className={className}
      style={style}
      onClick={props.onClick}
    >
      {props.text}
    </Button>
  );
}

export default Buttons;
