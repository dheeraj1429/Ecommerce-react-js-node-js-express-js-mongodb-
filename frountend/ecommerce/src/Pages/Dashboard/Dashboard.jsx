import React from 'react';

import { Outlet } from 'react-router';

import DashBoardSiderBarComponent from '../../DashBoardComponents/DashBoardSideBarComponent/DashBoardSiderBarComponent';

import './Dashboard.css';

function Dashboard() {
  return (
    <div className="User_DashBoard_div ">
      <div className="User_DashBoard_Inner_div">
        <DashBoardSiderBarComponent />
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
