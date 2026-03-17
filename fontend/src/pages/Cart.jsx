import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router";

const CartPage = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
    cartCount,
    totalPrice,
  } = useContext(CartContext);

  // যদি cart empty হয়
  if (cartItems.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
        <div className="bg-white shadow-md rounded-xl p-8 text-center">
          <h3 className="text-2xl font-semibold text-gray-700 mb-2">
            Your cart is empty 🛒
          </h3>
          <p className="text-gray-500">
            Please add some products to your cart.
          </p>
          <Link to="/" className="text-2xl font-bold text-violet-500 hover:underline">Go to Products</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8">Your Cart</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side - Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-xl p-4 flex flex-col md:flex-row gap-4 items-center"
            >
              {/* Product Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-28 h-28 object-cover rounded-lg border"
              />

              {/* Product Info */}
              <div className="flex-1 w-full">
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-gray-500 mt-1">
                  Price: ৳ {item.price}
                </p>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3 mt-4">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-lg font-bold"
                  >
                    -
                  </button>

                  <span className="text-lg font-medium">{item.quantity}</span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-lg font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Subtotal + Remove */}
              <div className="text-center md:text-right">
                <p className="text-lg font-semibold text-gray-800 mb-3">
                  ৳ {item.price * item.quantity}
                </p>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition cursor-pointer"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side - Cart Summary */}
        <div className="bg-white shadow-md rounded-xl p-6 h-fit">
          <h3 className="text-2xl font-bold mb-6">Order Summary</h3>

          <div className="space-y-4 text-gray-700">
            <div className="flex justify-between">
              <span>Total Items:</span>
              <span className="font-semibold">{cartCount}</span>
            </div>

            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span className="font-semibold">৳ {totalPrice}</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery:</span>
              <span className="font-semibold">৳ 60</span>
            </div>

            <hr />

            <div className="flex justify-between text-xl font-bold">
              <span>Total:</span>
              <span>৳ {totalPrice + 60}</span>
            </div>
          </div>

          <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition cursor-pointer">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;