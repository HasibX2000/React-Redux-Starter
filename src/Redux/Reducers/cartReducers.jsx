import { ADD_TO_CART, REMOVE_FROM_CART } from "../Actions/cartActions";
import ProductData from "../../Data/Products.json";
const initialState = {
  cart: [],
  products: ProductData,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = {
        productId: action.id,
        name: action.name,
        cartId: state.cart.length + 1,
      };
      return {
        ...state,
        cart: [...state.cart, newItem],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.cartId != action.id),
      };
    default:
      return state;
  }
};

export default cartReducer;
