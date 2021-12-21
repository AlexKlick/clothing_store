import toggleCart from "./cart.actions";
import CartActionTypes from "./cart.types";
import { addItemToCart } from "./cart.utils";

const initialState = {
  hidden: true,
  cartItems: [],
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
