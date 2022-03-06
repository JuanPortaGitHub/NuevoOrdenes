const initialState = {
  orders: {},
};

export const OrdersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addorder":
      return {
        ...(state + action.payload),
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


