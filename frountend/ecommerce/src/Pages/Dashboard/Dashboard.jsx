import React from 'react';
import { useLocation } from 'react-router';
import { Outlet } from 'react-router';
import DashBoardSiderBarComponent from '../../DashBoardComponents/DashBoardSideBarComponent/DashBoardSiderBarComponent';

import './Dashboard.css';

function Dashboard() {
  const location = useLocation();
  const path = location.pathname;

  // if the user got to the dashboard hi only gose the user/dashboard route
  // if the user go to the user/dashboard/new/prosut/.... then the user redirect to the dashboard page

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
