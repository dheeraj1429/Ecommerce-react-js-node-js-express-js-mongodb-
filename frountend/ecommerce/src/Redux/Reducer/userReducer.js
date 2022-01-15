import { ACTION_TYPE } from '../ActionType/actionType';

const initalState = {
  num: 0,
  SearchProduct: [],
  FetchAllProducts: [],
  ProductUploadInfo: null,
  ProductUploadStatus: [],
};

const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case ACTION_TYPE.SEARCH_PRODUCT:
      return {
        ...state,
        SearchProduct: action.payload,
      };

    case ACTION_TYPE.FETCH_ALL_PRODUCTS:
      return {
        ...state,
        FetchAllProducts: action.payload,
      };

    case ACTION_TYPE.UPLOAD_PRODUCT:
      return {
        ...state,
        ProductUploadInfo: action.payload,
      };

    case ACTION_TYPE.UPLOAD_PRODUCTS_STATUS:
      return {
        ...state,
        ProductUploadStatus: action.payload,
      };

    default:
      return {
        state,
      };
  }
};

export default userReducer;
