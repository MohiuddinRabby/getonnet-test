const initialState = {
  cart: [],
};
export const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const newItems = {
        id: action.id,
        name: action.name,
        price: action.price,
      };
      const newCart = [...state.cart, newItems];
      return { ...state, cart: newCart };
    case "DELETE_FROM_CART": {
      return {
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    }
    default:
      return action;
  }
};
