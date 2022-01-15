import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllProducts } from '../../Redux/Action/action';

import ProductCardComponent from '../ProductsCardComponent/ProductCardComponent';
import ProductsEditPopupComponent from '../ProductsEditPopupComponent/ProductsEditPopupComponent';

import './DashBoardEditProductsComponent.css';

function DashBoardEditPorductComponent() {
  const selector = useSelector((state) => state.userStoreData.FetchAllProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  console.log(selector);

  return (
    <div className="Products_Edit_div">
      <ProductsEditPopupComponent isActive={true} />

      <h1>Products</h1>

      <div className="AllProducts_div">
        {selector.allProduct.length > 0 && selector.success === true
          ? selector.allProduct.slice(0, 8).map(({ _id, ...otherProps }) => <ProductCardComponent key={_id} {...otherProps} />)
          : null}
      </div>
    </div>
  );
}

export default DashBoardEditPorductComponent;
