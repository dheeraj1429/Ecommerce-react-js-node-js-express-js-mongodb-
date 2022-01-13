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
            backgroundImage: 'url(https://opencart.dostguru.com/MS13/readymart_03/image/cache/catalog/slider/S2-1230x555.jpg)',
          }}
        >
          <div className="Banner_Contnet">
            <h3>SPPING - SUMMER 2021</h3>
            <h1>New Arrivals</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat illo adipisci blanditiis, suscipit quibusdam aut corporis ut quisquam
              possimus. Maxime explicabo tempora id omnis aliquam facere dignissimos quasi officiis et.
            </p>

            <CustomButtonComponent type={'button'} ButtonClass={'ShopNow_button'} textContent={'SHOP NOW'} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerComponent;
