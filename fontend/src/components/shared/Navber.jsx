import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import profileImg from "../../assets/joy image.jpg"
import { useCart } from "../../context/CartContext";
import { Link } from "react-router";


const Navber = () => {
  const {cartCount}=useCart();
  return (
    <div>
      <div className=" bg-base-100 shadow-sm ">
        <div className="max-w-7xl mx-auto navbar gap-8">
          <Link to="/" className="flex-1">
            <a className="btn btn-ghost text-2xl">Mixins</a>
          </Link>
          <Link to="/cart" className=" relative cursor-pointer">
            <FaShoppingCart className="text-2xl " />

              {
                cartCount > 0 &&(
                  <sup className="absolute  w-5 h-5 bg-violet-600 text-white font-bold flex justify-center items-center rounded-full p-2 -right-3">
                  {cartCount}
               </sup>
                )
              }
                
          </Link>
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring-2 ring-offset-2 cursor-pointer">
              <img src={profileImg} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
