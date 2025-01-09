import React from "react";
import ProductCard from "./ProductCard";
import "../styles/ProductList.css";


function ProductList({ products, onUpdateCart, cartItems }) {
    return (
        <div className="productList">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            onUpdateCart={onUpdateCart}
            cartItems={cartItems}
          />
        ))}
      </div>
    );
}

export default ProductList;