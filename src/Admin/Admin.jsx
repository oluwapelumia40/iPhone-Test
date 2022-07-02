import React from 'react'
import "./admin.css"
import "bootstrap"
import { Link } from 'react-router-dom'
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalculateIcon from '@mui/icons-material/Calculate';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PaymentIcon from '@mui/icons-material/Payment';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ConstructionIcon from '@mui/icons-material/Construction';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import LogoutIcon from '@mui/icons-material/Logout';
import ViewSidebarIcon from '@mui/icons-material/ViewSidebar';
import { useState } from 'react';

export default function Admin() {
    const[tool, setTool] = useState(false)
    const showTool=()=> {
        setTool(true);
    }
    const hideTool=()=>{
        setTool(false);
    }
    
  return (
        <div className="body">
            <div className="leftMenu">
                <div className="leftLogo">
                    <img src="/logo/appleLogo.png" className="logo"/>
                    <h2>administration </h2>
                </div>
                    <div className="leftItem">
                <ul>
                    <li> <Link to=""> <DashboardIcon/> DashBoard </Link> </li>
                    <li> <Link to=""> <PaymentIcon/> Payment </Link> </li>
                    <li> <Link to=""> <SupervisorAccountIcon/> SupervisorAccount </Link> </li>
                    <li> <Link to=""> <DashboardIcon/> Account </Link> </li>

                <div className="dropDownTools" onMouseEnter={showTool} onMouseLeave={hideTool}>
                    <li> <Link to=""> <ConstructionIcon/> Tools </Link>
                {tool ? (<div className="toolsList" onMouseEnter={showTool}>
                    <li> <Link to=""> <SettingsApplicationsIcon/> Settings </Link> </li>
                    <li> <Link to=""> <CalculateIcon/> Calculator</Link></li>
                    <li> <Link to=""> <CalendarMonthIcon/> Calender </Link> </li> 
                </div> 
                ): null} 
                     </li>
             </div>

            </ul>
        </div> 
        </div>

       <div className="row">
       <div className="topMenu">
                <span> <Link></Link>  </span>
                    <Link to=""> <LogoutIcon/> Logout</Link>        
        </div>
       </div>
    </div>
  )
}
