import React from 'react';

import UserProfileCardComponent from '../UserProfileCardComponent/UserProfileCardComponent';
import DashBoardDropDownComponent from '../DashBoardDropDownComponent/DashBoardDropDownComponent';

import './DashBoardSiderBarComponent.css';

function DashBoardSiderBarComponent() {
  return (
    <div className="DashBoard_Sidebar_Div">
      <UserProfileCardComponent />

      <div className="Dashboard__Content">
        <h1>Dashboard</h1>
      </div>

      <DashBoardDropDownComponent
        HeadingContent={'Product Menagment'}
        SubOptionData={{
          option: [
            {
              data: 'Upload Products',
              id: 1,
            },
            {
              data: 'Edit Products',
              id: 2,
            },
          ],
        }}
      />
    </div>
  );
}

export default DashBoardSiderBarComponent;
