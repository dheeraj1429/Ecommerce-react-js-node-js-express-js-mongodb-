import React from 'react';
import { Link } from 'react-router-dom';

import './ProductBannerComponent.css';

function ProductBannerComponent() {
  return (
    <div className="Products__Banner_Sercion side_padding">
      <div className="Products__banerr__inner_div padding_one">
        <Link to="/products/smart&phone">
          <img src="/images/bann.jpg" alt="" />
          <img src="/images/bann1.jpg" alt="" />
        </Link>
      </div>
    </div>
  );
}

export default ProductBannerComponent;
