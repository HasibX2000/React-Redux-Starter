import React from "react";

import Product from "./Product";
import { connect } from "react-redux";
import { addToCart } from "../Redux/Actions/cartActions";

const Shop = (props) => {
  console.log(props);
  const { products, addToCart } = props;
  return (
    <div className="w-full lg:w-2/3">
      <h1 className="text-4xl mb-4">This is our shop</h1>
      <div className="grid gap-5 grid-cols-1 lg:grid-cols-2">
        {products.map((product) => (
          <Product addToCart={addToCart} product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    products: state.products,
  };
};

const mapDispatchToProps = {
  addToCart: addToCart,
};

// const connectToStore = connect(mapStateToProps, mapDispatchToProps);

// connectToStore(Shop);
// connect(mapStateToProps, mapDispatchToProps)(Shop)
export default connect(mapStateToProps, mapDispatchToProps)(Shop);
