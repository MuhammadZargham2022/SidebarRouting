import React, { useEffect, useState } from 'react';
import './Sidebar.scss';
import lastTwoMenu from './SideData';
import { NavLink } from 'react-router-dom';
import userImage from './assets/user.jpg';
import {
  PiCaretLeftBold,
  PiHouseSimpleBold,
  PiUserBold,
  PiFileTextBold,
  PiCalendarBlankBold,
  PiCaretDownBold
} from "react-icons/pi";

const Sidebar = () => {
  const [isclose, setIsclose] = useState(false);
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const ToggleSidebar = () => setIsclose(!isclose);
  const ToggleSubMenu = () => setisMenuOpen(!isMenuOpen);


  return (
    <>
      <div className="container" >
        <div className={isclose ? "sidebar active" : "sidebar"}>

          <div className="menu-btn" onClick={ToggleSidebar}>
            <PiCaretLeftBold />
          </div>

          <div className="head">
            <div className="user-img">
              <img src={userImage} alt="user" />
            </div>
            <div className="user-details">
              <p className="title">Web Developer</p>
              <p className="name">Sheeda Meeda</p>
            </div>
          </div>

          <div className="nav">
            <div className="menu">
              <p className="title">Main</p>
              <ul>
                <li>
                  <NavLink to='/'>
                    <i className="icon"> <PiHouseSimpleBold /></i>
                    <span className="text">Dashboard</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to='audience' onClick={ToggleSubMenu}>
                    <i className="icon"><PiUserBold /></i>
                    <span className="text">Audience</span>
                    <i className="arrow"><PiCaretDownBold /></i>
                  </NavLink>
                  <ul className={isMenuOpen ? "sub-menu-open" : "sub-menu"} >
                    <li>
                      <NavLink to='user'>
                        <span className="text">User</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='subscriber'>
                        <span className="text">Subscriber</span>
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to='posts'>
                    <i className="icon"> <PiFileTextBold /></i>
                    <span className="text">Posts</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to='schedules'>
                    <i className="icon"> <PiCalendarBlankBold /></i>
                    <span className="text">Schedules</span>
                  </NavLink>
                </li>
              </ul>
            </div>

            {lastTwoMenu.map((el, index) => {
              return (
                <div className="menu" key={index}>
                  <p className="title">{el.menuHeading}</p>
                  <ul>
                    <li>
                      <NavLink to={el.path}>
                        <i className="icon"> {<el.icon />}</i>
                        <span className="text">{el.title}</span>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  )
}
export default Sidebar