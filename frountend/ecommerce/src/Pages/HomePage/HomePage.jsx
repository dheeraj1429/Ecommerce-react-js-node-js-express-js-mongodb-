import React from 'react';

import BannerComponent from '../../Components/BannerComponent/BannerComponent';
import ProductBannerComponent from '../../Components/ProductsBannerComponent/ProductBannerComponent';

import './HomePage.css';

function HomePage() {
  return (
    <div>
      <BannerComponent />
      <ProductBannerComponent />
    </div>
  );
}

export default HomePage;
