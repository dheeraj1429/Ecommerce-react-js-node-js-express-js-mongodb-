import { ACTION_TYPE } from '../ActionType/actionType';

export const getData = function (data) {
  return {
    type: ACTION_TYPE.GET_DATA,
    payload: data,
  };
};

// Search product by name
export const searchProduct = function (data) {
  return async function (dispatch) {
    try {
      const res = await fetch(`/products/get/${data}`, {
        headers: {
          'Content-type': 'application/json',
        },
        method: 'POST',
      });

      const dataRef = await res.json();
      console.log(dataRef);

      dispatch({
        type: ACTION_TYPE.SEARCH_PRODUCT,
        payload: dataRef,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

// Fetch all products from the database
export const fetchAllProducts = function () {
  return async function (dispatch) {
    const productRef = await fetch('/products', {
      headers: {
        'Content-type': 'application/json',
      },
      method: 'POST',
    });

    const ProductDataRef = await productRef.json();

    dispatch({
      type: ACTION_TYPE.FETCH_ALL_PRODUCTS,
      payload: ProductDataRef,
    });
  };
};
