import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dashboardSelectedProduct, fetchAllProducts, showEditPopup } from '../../Redux/Action/action';
import { svg } from '../../Components/SpnnerImageComponent/SpnnerImage';
import ProductCardComponent from '../ProductsCardComponent/ProductCardComponent';
import ProductsEditPopupComponent from '../ProductsEditPopupComponent/ProductsEditPopupComponent';

import './DashBoardEditProductsComponent.css';

function DashBoardEditPorductComponent() {
  const selector = useSelector((state) => state.userStoreData.FetchAllProducts);
  const ShowPopupComponentData = useSelector((state) => state.userStoreData.ShowEditPopupComponent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  const StoreData = function (data, id) {
    dispatch(dashboardSelectedProduct(Object.assign(data, { id })));
    dispatch(showEditPopup(!ShowPopupComponentData));
  };

  return (
    <div className="Products_Edit_div">
      <ProductsEditPopupComponent isActive={ShowPopupComponentData} />

      <h1>Products</h1>

      <div className="AllProducts_div">
        {selector !== null && Object.keys(selector).includes('success') && selector.success === true ? (
          selector.allProduct
            .slice(0, 8)
            .map(({ _id, ...otherProps }) => <ProductCardComponent Function={() => StoreData(otherProps, _id)} key={_id} {...otherProps} />)
        ) : (
          <div className="spnner_div">
            <img src={svg} />
          </div>
        )}
      </div>
    </div>
  );
}

export default DashBoardEditPorductComponent;
