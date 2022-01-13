import React from 'react';

import './ProductUploadComponent.css';

function ProductUploadComponent() {
  return (
    <div className="Product__upload_div">
      <h1>Product Name</h1>
      <input type="text" placeholder="Product Name" />
      <p>Please enter the Product Name.</p>
    </div>
  );
}

export default ProductUploadComponent;
