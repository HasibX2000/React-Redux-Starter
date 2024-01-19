import React from "react";

const Product = (props) => {
  const { product, addToCart } = props;

  return (
    <div className="p-5 border border-orange-400  flex flex-col items-center">
      <h1 className="text-3xl mb-3">{product.name}</h1>
      <button
        onClick={() => addToCart(product.id, product.name)}
        className="bg-orange-600 py-1 px-3 text-white rounded hover:bg-orange-500 duration-300"
      >
        Add to cart
      </button>
    </div>
  );
};

export default Product;
