import React from "react";
import { useCart } from "../../context/CartContext";

const ProductCart = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} added to cart`);
  };

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={product.image} alt={product.name} />
        </figure>

        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <p className="text-xl font-bold">{product.price}tk</p>
          <p>{product.description}</p>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">Details</button>
            <button onClick={handleAddToCart} className="btn btn-primary">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;