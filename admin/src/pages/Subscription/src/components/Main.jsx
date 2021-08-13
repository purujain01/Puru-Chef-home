import React from "react";

const Main = (props) =>{
    return (
        <>
        <div className="container">
        <h2 style={{margin: "20px"}}>{props.content}</h2>
        <p style={{margin: "30px 0 0 85px", fontSize: "55px"}}>{props.number}</p>
        </div>
        </>
    )
}

export default Main;