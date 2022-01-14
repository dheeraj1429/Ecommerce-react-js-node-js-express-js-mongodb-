import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { PostProducts, uploadProduct } from '../../Redux/Action/action';

import InputComponent from '../InputComponent/InputComponent';
import CustomButtonComponent from '../../Components/CustomButtonComponent/CustomButtonComponent';
import DashBoardSelectImageComponent from '../DashBoardSelectImageComponent/DashBoardSelectImageComponent';

import './ProductUploadSecondComponent.css';

function ProductUploadSecondComponent() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.userStoreData.ProductUploadInfo);

  const [UploadProduct, setUploadProduct] = useState({
    image: '',
  });

  const ChangeInputValue = function (e) {
    let name = e.target.name;
    let value = e.target.value;
    setUploadProduct({ ...uploadProduct, [name]: value });
  };

  const SendProductData = function (e) {
    dispatch(PostProducts(Object.assign(selector, { image: [{ public_id: Math.trunc(Math.random() * 100000), url: UploadProduct.image }] })));
  };

  return (
    <div className="ProductUpload__Second_div">
      <InputComponent Tag={'h1'} TagInnerContent={'Product Image'} InputPLac={'Product Image'} show={false} />
      <div className="Products_imge_show">
        <DashBoardSelectImageComponent UploadProduct={UploadProduct.image} />

        <InputComponent
          Tag={'h1'}
          TagInnerContent={'Product Image Url'}
          InputPLac={'Product Image url'}
          show={true}
          name="image"
          Value={UploadProduct.image}
          ChangeFunction={ChangeInputValue}
        />

        <p className="Light_para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere consectetur quidem temporibus officiis necessitatibus non, veritatis ipsam
          enim odit distinctio voluptatibus illo quo, molestiae minus repellat? Eligendi odio voluptate eaque!
        </p>
      </div>
      <CustomButtonComponent textContent={'ADD PRODUCT'} ButtonClass={'add_product'} type={'submit'} onCLick={SendProductData} />
    </div>
  );
}

export default ProductUploadSecondComponent;
