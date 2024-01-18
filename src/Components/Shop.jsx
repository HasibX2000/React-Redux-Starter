import React from "react";
import ProductData from "../Data/Products.json";
import Product from "./Product";

const Shop = () => {
  return (
    <div className="w-full lg:w-2/3">
      <h1 className="text-4xl mb-4">This is our shop</h1>
      <div className="grid gap-5 grid-cols-1 lg:grid-cols-2">
        {ProductData.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
