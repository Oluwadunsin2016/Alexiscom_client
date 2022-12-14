import React, { useEffect, useState } from "react";
import { types, useAlert } from "react-alert";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  decreaseItemQty,
  deleteItem,
  increaseItemQty,
} from "../../Redux/Actions";

const Cart = ({changedIncreasedToNaira}) => {
  const state = useSelector((state) => state.addItems);
  // const quantities = useSelector((state) => state.quantityHandler);
  const dispatch = useDispatch();
  const navigate=useNavigate()

  const myAlert= useAlert()


  const handleClose = (cartItem) => {
    dispatch(deleteItem(cartItem));
  };

  const goToCheckOut=()=>{
  if (localStorage.myToken) {
    navigate("/checkout")
  }else{
  alert("") 
   myAlert.show(<div className="text-lowercase">You haven't logged in</div>,{type:types.ERROR})
    navigate("/signin")
  }
  }

  const cartItems = (cartItem) => {
    return (
      <div className="px-4 border-bottom" key={cartItem.id}>
        <div className="container py-4">
          <div className=" d-flex">
            <div className="col-md-4">
              <img
                src={cartItem.thumbnail}
                alt=""
                height="100px"
                width="80px"
              />
            </div>
            <div className="w-100 ps-4">
              <div className="mt-4 d-md-flex justify-content-between">
                <h5>{cartItem.title}</h5>
                <p className="lead ms-2">&#8358;{changedIncreasedToNaira(cartItem)}</p>
              </div>

              <div className="mt-4 d-md-flex justify-content-between">
                <button
                  onClick={() => handleClose(cartItem)}
                  className="btn textColor"
                >
                  <FaTrash className="fs-5" /> REMOVE
                </button>
                <div>
                  <button
                    onClick={() => dispatch(decreaseItemQty(cartItem.id))}
                    className="btn buttonColor text-white fw-bold me-2"
                  >
                    -
                  </button>
                  {cartItem.qty}
                  {/* {quantities} */}
                  <button
                    onClick={() => dispatch(increaseItemQty(cartItem.id))}
                    className="btn buttonColor text-white fw-bold ms-2"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3">
        <div className="container py-4">
          <div className="row">
            <h4 className="text-center">Your cart is empty, add item(s)</h4>
          </div>
        </div>
      </div>
    );
  };

  const checkOut = () => {
    return (
      <div className="row my-4 px-3">
        <button onClick={goToCheckOut}
          className="btn buttonColor text-white col-md-4 mx-auto mb-4"
        >
          Proceed to Checkout
        </button>
      </div>
    );
  };

  return (
    <>
      <div className="container col-md-7 min-vh-100">
        <div className=" bg-light my-4">
          {state.length == 0 && emptyCart()}
          {state.length > 0 && state.map(cartItems)}
          {state.length > 0 && checkOut()}
        </div>
      </div>
    </>
  );
};

export default Cart;
