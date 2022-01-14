import React, { useState } from 'react';

import { uploadProduct } from '../../Redux/Action/action';
import { useDispatch } from 'react-redux';
import InputComponent from '../InputComponent/InputComponent';
import SelectionDropDownComponent from '../SelectionDropDownComponent/SelectionDropDownComponent';

import './ProductUploadComponent.css';

function ProductUploadFirstComponent() {
  const dispatch = useDispatch();

  const [UploadProduct, setUploadProduct] = useState({
    name: '',
    category: '',
    gender: '',
    stock: '',
    brand: '',
    discription: '',
    price: '',
    rating: '',
  });

  const ChangeInputValue = function (e) {
    let name = e.target.name;
    let value = e.target.value;
    setUploadProduct({ ...UploadProduct, [name]: value });
  };

  const { name, category, gender, stock, brand, discription, price, rating } = UploadProduct;

  const getAllInfo = function () {
    if (name && category && gender && stock && brand && discription && price && rating) {
      dispatch(
        uploadProduct({
          name,
          category,
          gender,
          stock,
          brand,
          discription,
          price,
          rating,
        })
      );
    }
  };

  getAllInfo();

  return (
    <div className="Product__upload_div">
      <InputComponent
        Tag={'h1'}
        TagInnerContent={'Product Name'}
        InputPLac={'Product Name'}
        show={true}
        name="name"
        Value={UploadProduct.name}
        ChangeFunction={ChangeInputValue}
      />
      <p>Please enter the Product Name.</p>

      <div className="Category_div">
        <div>
          <h3>Product Category</h3>
          <input
            name="category"
            className="Product_Input_Section"
            type="text"
            placeholder="Product Category"
            value={UploadProduct.category}
            onChange={ChangeInputValue}
          />
        </div>

        <div>
          <SelectionDropDownComponent
            name="gender"
            Value={UploadProduct.gender}
            ChangeFunction={ChangeInputValue}
            Heading={'gender'}
            options={{
              data: [
                {
                  el: 'Women',
                },
                {
                  el: 'Men',
                },
                {
                  el: 'Both',
                },
              ],
            }}
          />
        </div>

        <div>
          <SelectionDropDownComponent
            name="stock"
            Value={UploadProduct.stock}
            ChangeFunction={ChangeInputValue}
            Heading={'Stoke'}
            options={{
              data: [{ el: 2 }, { el: 10 }, { el: 50 }, { el: 100 }, { el: 200 }],
            }}
          />
        </div>
      </div>

      <InputComponent
        Class={'brand'}
        Tag={'h3'}
        TagInnerContent={'brand'}
        InputPLac={'Product brand Name'}
        show={true}
        name="brand"
        Value={UploadProduct.brand}
        ChangeFunction={ChangeInputValue}
      />

      <h3 className="brand">discription</h3>
      <textarea className="Aria_div" name="discription" value={UploadProduct.discription} onChange={ChangeInputValue}></textarea>
      <p>Please enter product Discritption</p>

      <div className="Category_div">
        <div>
          <h3>price</h3>
          <input
            className="Product_Input_Section"
            type="number"
            placeholder="Product price"
            name="price"
            value={UploadProduct.price}
            onChange={ChangeInputValue}
          />
        </div>

        <div>
          <SelectionDropDownComponent
            name="rating"
            value={UploadProduct.rating}
            ChangeFunction={ChangeInputValue}
            Heading={'rating'}
            options={{
              data: [{ el: '0' }, { el: '1' }, { el: '2' }, { el: '3' }, { el: '4' }, { el: '5' }],
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductUploadFirstComponent;
