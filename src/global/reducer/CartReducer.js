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

    default:
      return action;
  }
};
