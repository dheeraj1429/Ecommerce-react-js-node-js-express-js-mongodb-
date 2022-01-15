import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { PostProducts, uploadProduct } from '../../Redux/Action/action';

import InputComponent from '../InputComponent/InputComponent';
import CustomButtonComponent from '../../Components/CustomButtonComponent/CustomButtonComponent';
import DashBoardSelectImageComponent from '../DashBoardSelectImageComponent/DashBoardSelectImageComponent';

import './ProductUploadSecondComponent.css';
import { useEffect } from 'react';

function ProductUploadSecondComponent() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.userStoreData);

  const [UploadProduct, setUploadProduct] = useState({
    image: '',
    galleryImageOne: '',
    galleryImageTwo: '',
  });

  const ChangeInputValue = function (e) {
    let name = e.target.name;
    let value = e.target.value;
    setUploadProduct({ ...UploadProduct, [name]: value });
  };

  // if the only one gallery image is added the send the only one object into the data base ?
  // and if the all gallery values is full filed then send the all object into the database ?

  const SendProductData = function (e) {
    dispatch(
      PostProducts(
        Object.assign(selector.ProductUploadInfo, {
          image: [{ public_id: Math.trunc(Math.random() * 100000), url: UploadProduct.image }],
          galleryImage: [{ img: UploadProduct.galleryImageOne }, { img: UploadProduct.galleryImageTwo }],
        })
      )
    );
  };

  return (
    <div className="ProductUpload__Second_div">
      <InputComponent Tag={'h1'} TagInnerContent={'Product Image'} InputPLac={'Product Image'} show={false} />
      <div className="Products_imge_show">
        <div className="Images_prev">
          <DashBoardSelectImageComponent UploadProduct={UploadProduct.image} />
          <DashBoardSelectImageComponent UploadProduct={UploadProduct.galleryImageOne} />
          <DashBoardSelectImageComponent UploadProduct={UploadProduct.galleryImageTwo} />
        </div>

        <p className="Light_para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere consectetur quidem temporibus officiis necessitatibus non, veritatis ipsam
          enim odit distinctio voluptatibus illo quo, molestiae minus repellat? Eligendi odio voluptate eaque!
        </p>

        <InputComponent
          Tag={'h1'}
          TagInnerContent={'Product Image Url'}
          InputPLac={'Product Image url'}
          show={true}
          name="image"
          Value={UploadProduct.image}
          ChangeFunction={ChangeInputValue}
        />

        <div className="Gallery_image_div">
          <div>
            <InputComponent
              Tag={'h1'}
              TagInnerContent={'Product Gallery Image Url'}
              InputPLac={'Gallery Image url'}
              show={true}
              name="galleryImageOne"
              Value={UploadProduct.galleryImageOne}
              ChangeFunction={ChangeInputValue}
            />
          </div>
          <div>
            <InputComponent
              Tag={'h1'}
              TagInnerContent={'Product Gallery Image Url'}
              InputPLac={'Gallery Image url'}
              show={true}
              name="galleryImageTwo"
              Value={UploadProduct.galleryImageTwo}
              ChangeFunction={ChangeInputValue}
            />
          </div>
        </div>
      </div>
      <CustomButtonComponent textContent={'ADD PRODUCT'} ButtonClass={'add_product'} type={'submit'} onCLick={SendProductData} />
    </div>
  );
}

export default ProductUploadSecondComponent;
