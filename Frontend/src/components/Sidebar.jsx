import React, { useState } from 'react';
import * as FaIcons from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import * as AiIcons from "react-icons/ai";
import * as LuIcons from "react-icons/lu";
import * as MdIcons from "react-icons/md";
import * as GrIcons from "react-icons/gr";
import * as BsIcons from "react-icons/bs";
import * as PiIcons from "react-icons/pi";
import pic2 from './pic2.png'
import { AiOutlineLogout } from 'react-icons/ai';

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/Dashboard",
            name:"Dashboard",
            icon:<AiIcons.AiFillHome />
        },
        {
            path:"/Admin",
            name:"Admin",
            icon: <GrIcons.GrUserAdmin />
        },
        {
            path:"/Customer",
            name:"Customer",
            icon:<PiIcons.PiPersonSimpleThin />
        },
        {
            path:"/Employee",
            name:"Employee",
            icon:<BsIcons.BsFillPersonFill/>
        },
        {
            path:"/Invoice",
            name:"Invoice",
            icon:<FaIcons.FaFileInvoice />
        },
        {
            path:"/Payment",
            name:"Payment",
            icon:<MdIcons.MdPayment />
        },
        {
            path:"/Quote",
            name:"Quote",
            icon:<LuIcons.LuFileClock />
        },
        {
            path:"/",
            name:"Logout",
            icon:<AiOutlineLogout />
        }
    ]
    return (
        <>
        <div className='nav-top'>
        <div className="top_section">
                   {/* <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1> */}
                   <img src={pic2} height={50} width={60} onClick={toggle}/>
                   {/* <div style={{marginLeft: isOpen ? "80px" : "0px" }} className="bars">
                       <FaIcons.FaBars onClick={toggle}/>
                   </div> */}
               </div>
        </div>
        <div className="container-fluid">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
        </>
    );
};

export default Sidebar;