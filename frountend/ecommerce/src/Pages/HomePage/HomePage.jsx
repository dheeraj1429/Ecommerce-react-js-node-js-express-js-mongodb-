import React from 'react';

import BannerComponent from '../../Components/BannerComponent/BannerComponent';
import NavbarComponent from '../../Components/NavbarComponent/NavbarComponent';
import ProductBannerComponent from '../../Components/ProductsBannerComponent/ProductBannerComponent';

import './HomePage.css';

function HomePage() {
  return (
    <div>
      <NavbarComponent />
      <BannerComponent />
      <ProductBannerComponent />
    </div>
  );
}

export default HomePage;
