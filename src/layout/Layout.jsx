import React from 'react';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import './Layout.scss';

const Layout = () => {
  return (
    <>
      <div className="app-container">
        <div className="app-container__sidebar">
          <Sidebar />
        </div>
        <div className="app-container__content">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Layout