import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import DashBoardSelectImageComponent from '../DashBoardSelectImageComponent/DashBoardSelectImageComponent';

import './ProductsEditPopupComponent.css';

function ProductsEditPopupComponent({ isActive }) {
  const [ProductDetails, setProductsDetails] = useState({
    name: '',
    description: '',
  });

  const ChangeProductInput = function (e) {
    let name = e.target.name;
    let value = e.target.value;

    setProductsDetails({ ...ProductDetails, [name]: value });
  };

  return ReactDOM.createPortal(
    <div className={!isActive ? 'ProductsEditDiv ' : 'ProductsEditDiv ProductsEditDivActive'}>
      <div className="ProductsEdit__inner_div">
        <h1>Edit Product</h1>

        <div className="ProductEdit_Inner_content_div">
          <div>
            <DashBoardSelectImageComponent UploadProduct={''} />
            <DashBoardSelectImageComponent UploadProduct={''} />
            <DashBoardSelectImageComponent UploadProduct={''} />
          </div>

          <div>
            <DashBoardSelectImageComponent UploadProduct={''} ClassData={'Products_Main_image'} />
          </div>

          <div className="Products_edit_content_div">
            <h3>
              Product Name <i class="fas fa-pen"></i>
            </h3>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, beatae.</h4>

            <h3 className="Discription">
              Discription <i class="fas fa-pen"></i>
            </h3>
            <h5>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia ducimus excepturi possimus cum voluptates accusantium quam error
              accusamus numquam, est nisi minima dicta exercitationem facilis? Dolor, cupiditate sint. Ex iste accusantium pariatur quae beatae
              cupiditate voluptatem asperiores? Ipsam tenetur, magnam in obcaecati ad ratione porro eveniet maiores officia quia recusandae?
            </h5>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('Products_Edit')
  );
}

export default ProductsEditPopupComponent;
