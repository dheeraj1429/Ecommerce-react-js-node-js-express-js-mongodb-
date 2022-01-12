import React from 'react';

import SideBarComponent from '../SideBarComponent/SiderBarComponent';
import CustomButtonComponent from '../CustomButtonComponent/CustomButtonComponent';

import './BannerComponent.css';

function BannerComponent() {
  return (
    <div className="Banner__Div">
      <div className="Banner__inner_div side_padding">
        <SideBarComponent />

        <div
          className="Banner_content_div"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1541096017664-085dd9a616c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1084&q=80)',
          }}
        >
          <div className="Banner_Contnet">
            <h1>New Arrivals</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat illo adipisci blanditiis, suscipit quibusdam aut corporis ut quisquam
              possimus. Maxime explicabo tempora id omnis aliquam facere dignissimos quasi officiis et.
            </p>

            <CustomButtonComponent type={'button'} ButtonClass={'ShopNow_button'} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerComponent;
