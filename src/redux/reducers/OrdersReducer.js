import { CREATE_ORDERS_DATA } from "../action-creators/ActionTypes";

const initialState = {
  loading: true,
  orders: {},
};

export const OrdersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_ORDERS_DATA":
      return {
        ...state, loading: false, orders: action.payload
      };
    case "remove_order":
      return {
        ...(state + action.payload),
      };
      case "filterorder":
      return {
        ...(state + action.payload),
      };
    default:
      return state;
  }
};


