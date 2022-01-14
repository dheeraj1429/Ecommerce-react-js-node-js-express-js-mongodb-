import React, { useState } from 'react';

import './DashBoardSelectImageComponent.css';

function DashBoardSelectImageComponent({ UploadProduct }) {
  return (
    <div className="Products_show_image_div">
      {!UploadProduct ? (
        <div className="Photo_Selected_div">
          <i class="far fa-file-image"></i>
          <p>Please select image here, Click here to browser</p>
        </div>
      ) : (
        <img src={UploadProduct} alt="" />
      )}
    </div>
  );
}

export default DashBoardSelectImageComponent;
