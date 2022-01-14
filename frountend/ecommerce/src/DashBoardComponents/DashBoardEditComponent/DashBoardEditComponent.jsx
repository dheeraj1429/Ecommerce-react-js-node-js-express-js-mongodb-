import React from 'react';

import CustomButtonComponent from '../../Components/CustomButtonComponent/CustomButtonComponent';
import ProductUploadFirstComponent from '../ProductUploadComponent/ProductUploadComponent';
import ProductUploadSecondComponent from '../ProductUploadSecondComponent/ProductUploadSecondComponent';

import './DashBoardEditComponent.css';

function DashBoardEditComponent() {
  return (
    <div className="DashBoard_Edit_Div">
      <div className="DashBoard_Edit_Inner_Div">
        <div className="DashBoard_Heading_div">
          <h1>UPLOAD PRODUCTS</h1>

          <div>
            <CustomButtonComponent ButtonClass={'Open_Doc'} type={'sumbit'} textContent={'Open Documantation'} />
            <CustomButtonComponent ButtonClass={'Setup_Details'} type={'sumbit'} textContent={'Setup Details'} />
          </div>
        </div>

        <div className="DashBoard_About">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi accusamus voluptates fugit vero nemo odio, unde eius tempore fugiat
            corrupti tempora voluptatibus perspiciatis odit veniam quibusdam iure obcaecati. Quaerat, itaque?
          </p>
        </div>

        <div className="DashBoard_Uploding_Aria_div">
          <ProductUploadFirstComponent />
          <ProductUploadSecondComponent />
        </div>
      </div>
    </div>
  );
}

export default DashBoardEditComponent;
