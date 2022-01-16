import { ACTION_TYPE } from '../ActionType/actionType';

const initialState = {
  SearchProduct: [],
  FetchAllProducts: [],
  ProductUploadInfo: null,
  ProductUploadStatus: [],
  DashBoardSelectedProducts: null,
  ShowEditPopupComponent: false,
};

const userReducer = (state = initialState, action) => {
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

    case ACTION_TYPE.DASHBOARD_SELECTED_PRODUCTS:
      return {
        ...state,
        DashBoardSelectedProducts: action.payload,
      };

    case ACTION_TYPE.SHOW_EDIT_POPUP:
      return {
        ...state,
        ShowEditPopupComponent: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
