import React,{useState} from "react";
import { IconButton } from "@material-ui/core";
import "./style.css"
import { Link } from 'react-router-dom'
import { Menu, Settings, Home } from "@material-ui/icons";

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);
  return (

    <div className={!expanded?"sidebar position-fixed":"expanded sidebar position-fixed"}>
      <div className='d-flex justify-content-between align-items-center mb-3'>
        {expanded?<h3 className='label'>Dashboard</h3>:null}
        <IconButton onClick={()=>expanded?setExpanded(false):setExpanded(true)}>
          <Menu />
        </IconButton>
      </div>
      <div className='Sidemenu'>
        {expanded?<Link to="/" className='menu-bars'>
          <Home className='icons'/>
          <span className='sidebar-text'>Home</span>
        </Link>:<Link to ="/" ><Home className="icon-collapsed"/></Link>}
      </div>

      <div className='Sidemenu'>
        {expanded?<Link to="/" className='menu-bars'><Settings className='icons'/>
          <span className='sidebar-text'>Settings</span>
        </Link>:<Link to ="/"><Settings className="icon-collapsed"/></Link>}
      </div>
    </div>
  );
}
