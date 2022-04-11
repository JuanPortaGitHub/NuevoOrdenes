import { CREATE_ORDERS_DATA } from "../action-creators/ActionTypes";

const initialState = {
  loading: true,
  error: false,
  data: null,
  createData: {}
};

export const OrdersReducer = (state = initialState, action) => {
  console.log('action', action.payload)
  switch (action.type) {
    case "FETCH_ORDERS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "CREATE_ORDERS_DATA":
      return {
        ...state,
        loading: false,
        createData: action.payload,
      };
    case "remove_order":
      return {
        ...(state + action.payload),
      };
    case "filterorder":
      return {
        ...(state + action.payload),
      };
    case "ERROR":
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
