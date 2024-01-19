import React from "react";
import { removeFromCart } from "../Redux/Actions/cartActions";
import { connect } from "react-redux";

const Cart = (props) => {
  console.log(props);
  const { cart, removeFromCart } = props;

  return (
    <div className="w-full lg:w-96">
      <h1 className="text-4xl mb-3">This is our cart</h1>
      <ul className="list-disc">
        {cart.map((product) => (
          <li
            className="mb-3 p-3 pl-3 justify-between bg-orange-50 flex items-center"
            key={product.cartId}
          >
            {product.name}{" "}
            <button
              onClick={() => removeFromCart(product.cartId)}
              className="border flex border-white justify-center items-center w-8 h-8 text-white rounded bg-orange-500"
            >
              X
            </button>
          </li>
        ))}
      </ul>
      <hr />
      <h3 className="text-xl font-bold py-2">Total Items : {cart.length}</h3>
    </div>
  );
};

const mapToState = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = {
  removeFromCart: removeFromCart,
};

export default connect(mapToState, mapDispatchToProps)(Cart);
