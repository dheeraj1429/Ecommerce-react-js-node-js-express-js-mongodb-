import React from 'react';

import CategorySmCardComponent from '../CategorySmCardComponent/CategorySmCardComponent';

import './SideBarComponent.css';

function SideBarComponent() {
  return (
    <div className="SideBar_Div">
      <div className="AllCategory_div">
        <div>
          <i class="fas fa-bars"></i>
          <p>ALL CATEGORIES</p>
        </div>
        <i class="fas fa-sort-down"></i>
      </div>

      <CategorySmCardComponent textContent={'Desktops'} DropDown={true} />
      <CategorySmCardComponent textContent={'Scanners'} DropDown={true} />
      <CategorySmCardComponent textContent={'MP3 Players'} DropDown={false} />
      <CategorySmCardComponent textContent={'Laptops'} DropDown={false} />
      <CategorySmCardComponent textContent={'Tablets'} DropDown={false} />
      <CategorySmCardComponent textContent={'Software'} DropDown={false} />
      <CategorySmCardComponent textContent={'Phones & PADs'} DropDown={true} />
      <CategorySmCardComponent textContent={'Cameras'} DropDown={true} />
      <CategorySmCardComponent textContent={'Fashion'} DropDown={false} />
      <CategorySmCardComponent textContent={'Trackballs'} DropDown={true} />
      <CategorySmCardComponent textContent={'Web Cameras'} DropDown={false} />
      <CategorySmCardComponent textContent={'Fruite'} DropDown={false} />
    </div>
  );
}

export default SideBarComponent;
