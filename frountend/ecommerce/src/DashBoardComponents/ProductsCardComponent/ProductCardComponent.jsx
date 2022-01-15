import React from 'react';

import CustomEditButtonComponent from '../../Components/CustomEditButtonComponent/CustomEditButtonComponent';

import './ProductCardComponent.css';

function ProductCardComponent({ name, image, price }) {
  return (
    <div className="Products__card">
      <div className="Products_Card_img">
        <img src={image[0].url} alt="" />
      </div>

      <div className="Product_info_div">
        <h3>{name.slice(0, 30)}</h3>
        <h3>${price}</h3>
      </div>

      <CustomEditButtonComponent TextContent={'Edit Product'} />
    </div>
  );
}

export default ProductCardComponent;
