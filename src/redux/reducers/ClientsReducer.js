const initialState = {
  clients: {algo:'algo'},
};

export const ClientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "add_client":
      return {
        ...(state + action.payload),
      };
    case "remove_client":
      return {
        ...(state + action.payload),
      };
      case "filter_client":
      return {
        ...(state + action.payload),
      };
    default:
      return state;
  }
};
