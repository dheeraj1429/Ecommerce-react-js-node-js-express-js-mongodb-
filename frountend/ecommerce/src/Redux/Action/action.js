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

// Upload state values into the redux store
export const uploadProduct = function (data) {
  return {
    type: ACTION_TYPE.UPLOAD_PRODUCT,
    payload: data,
  };
};

// Post a product into database
export const PostProducts = function (data) {
  return async function (dispatch) {
    try {
      const ProductUploadRef = await fetch('/products/new', {
        headers: {
          'Content-type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(data),
      });

      const DataRef = await ProductUploadRef.json();
      dispatch({
        type: ACTION_TYPE.UPLOAD_PRODUCTS_STATUS,
        payload: DataRef,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

// Store Selcted data into the store
export const dashboardSelectedProduct = function (data) {
  return {
    type: ACTION_TYPE.DASHBOARD_SELECTED_PRODUCTS,
    payload: data,
  };
};

export const showEditPopup = function (data) {
  return {
    type: ACTION_TYPE.SHOW_EDIT_POPUP,
    payload: data,
  };
};
