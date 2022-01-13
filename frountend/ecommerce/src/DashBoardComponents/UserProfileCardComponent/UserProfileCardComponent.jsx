import React from 'react';

import './UserProfileCardComponent.css';

function UserProfileCardComponent() {
  return (
    <div className="userDashboard_profile_div">
      <div className="dashboard_user_profile_div">
        <img
          src="https://images.unsplash.com/photo-1543965860-82ed7d542cc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1460&q=80"
          alt=""
        />
      </div>
      <div>
        <h4>Dheeraj singh</h4>
        <p>Admin</p>
      </div>
    </div>
  );
}

export default UserProfileCardComponent;
