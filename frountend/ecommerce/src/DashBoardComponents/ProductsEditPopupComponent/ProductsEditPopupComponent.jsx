import React from 'react';
import ReactDOM from 'react-dom';

import { useDispatch, useSelector } from 'react-redux';
import { showEditPopup } from '../../Redux/Action/action';
import CustomButtonComponent from '../../Components/CustomButtonComponent/CustomButtonComponent';
import DashBoardSelectImageComponent from '../DashBoardSelectImageComponent/DashBoardSelectImageComponent';
import ProductsDetailsComponent from '../ProductsDetailsComponent/ProductsDetailsComponent';

import './ProductsEditPopupComponent.css';

function ProductsEditPopupComponent({ isActive }) {
  const selector = useSelector((state) => state.userStoreData.DashBoardSelectedProducts);
  const dipatch = useDispatch();

  const CloseModalWindow = function () {
    dipatch(showEditPopup(false));
  };

  return ReactDOM.createPortal(
    <div className={isActive == false ? 'ProductsEditDiv' : 'ProductsEditDiv ProductsEditDivActive'}>
      <div className="ProductsEdit__inner_div">
        {selector !== null && selector.hasOwnProperty('id') && Object.keys(selector).length > 0 ? (
          <>
            <h1>Edit Product</h1>
            <i className="fa fa-close closeButton" onClick={CloseModalWindow}></i>
            <div className="ProductEdit_Inner_content_div">
              <div>
                {selector.galleryImage.length > 0
                  ? selector.galleryImage.map((el) => <DashBoardSelectImageComponent key={el._id} UploadProduct={el.img} />)
                  : null}
              </div>

              <div>
                <DashBoardSelectImageComponent UploadProduct={selector.image[0].url} ClassData={'Products_Main_image'} />
              </div>

              <div className="Products_edit_content_div">
                <ProductsDetailsComponent Heading={'Product Name'} InnerTextContent={selector.name} Tag={'h4'} />

                <ProductsDetailsComponent ClData={'Discription'} Heading={'Discription'} InnerTextContent={selector.discription} Tag={'h5'} />
                <ProductsDetailsComponent Heading={'Category'} ClData={'Discription'} InnerTextContent={selector.category} Tag={'h4'} />

                <div className="Product_edit_button_div">
                  <CustomButtonComponent textContent={'Update'} ButtonClass={'update_products'} type={'submit'} />
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>,
    document.getElementById('Products_Edit')
  );
}

export default ProductsEditPopupComponent;
