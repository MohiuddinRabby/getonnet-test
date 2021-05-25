import { createContext, useReducer } from "react";
import { CartReducer } from "../reducer/CartReducer";

export const CartContext = createContext();
export const CartContextProvider = (props) => {
  const [state, dispatch] = useReducer(CartReducer);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};
