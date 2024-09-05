import React, {useState } from 'react';
import './Sidebar.scss';
import sidebarElement from './SideData';
import { NavLink } from 'react-router-dom';
import userImage from './assets/user.jpg';
import {
  PiCaretLeftBold,

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

              {sidebarElement.map((el) => {
                return (
                  <>
                    <p className="title">{el.menuHeading}</p>
                    <ul>
                      <li>
                        <NavLink to={el.path}>
                          <i className="icon"> {<el.icon />}</i>
                          <span className="text">{el.title}</span>
                        </NavLink>
                        {el.submenu && (
                          <ul className={isMenuOpen ? "sub-menu-open" : "sub-menu"}>
                            {el.submenu.map((subEl) => {
                              <li>
                                <NavLink to={subEl.subpath}>
                                  <span className="text">{subEl.subtitle}</span>
                                </NavLink>
                              </li>
                            })}
                          </ul>
                        )}
                      </li>
                    </ul>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Sidebar