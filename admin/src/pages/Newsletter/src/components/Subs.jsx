import React from "react";

const Subs = (props)=>{
    return (
    <div className="subs">
    <p className="name">{props.name}</p>
    <p>{props.email}</p>
    <p>{props.number}</p>
    <button>All details</button>
    </div>
    )
}

export default Subs;