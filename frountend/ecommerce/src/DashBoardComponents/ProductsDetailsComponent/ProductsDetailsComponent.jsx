import React from 'react';

import './ProductsDetailsComponent.css';

function ProductsDetailsComponent({ Heading, InnerTextContent, Tag, ClData }) {
  return (
    <>
      <h3 className={ClData ? `product_Heading_details ${ClData}` : 'product_Heading_details'}>{Heading}</h3>
      <div className="TagClDiv">
        <Tag contenteditable="true" className="content_write">
          {InnerTextContent}
        </Tag>
      </div>
    </>
  );
}

export default ProductsDetailsComponent;
