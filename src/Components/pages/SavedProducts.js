import React from "react";
import { useSelector } from "react-redux";

const SavedProducts = ({
  handleCart,
  goToDetails,
  truncatedString,
  changedToNaira,
  actuaPrice,
  discountPercentage,
  cartMode,
  handleSave,
  saveMode,
}) => {
 const state = useSelector((state) => state.saveItems)

  const getSavedItems = (product, id) => {
    return (
      <div
        key={id}
        className="mx-md-0 mx-auto col-sm-6 col-lg-3 col-md-4 mt-4 h-100"
      >
        <div className="card shadow">
          <img
            onClick={() => goToDetails(product)}
            src={product.thumbnail}
            className="card-img-top"
            height={"250"}
            alt="..."
          />
          <small className="discount position-absolute mt-2 p-2">
            {discountPercentage(product)}
          </small>
          <div className="card-body">
            <h5 className="card-title">
              {truncatedString(product?.title, 12)}
            </h5>
            <div className="d-flex justify-content-between">
              <h6>&#8358;{changedToNaira(product)}</h6>
              <h6 className="actualPrice text-secondary">
                &#8358;{actuaPrice(product)}
              </h6>
            </div>
            <p className="card-text">
              {product?.description.substring(0, 26)}...
            </p>
            <div className="d-flex justify-content-between add">
              <div onClick={() => handleSave(product)}>{saveMode(product)}</div>
              <button
                onClick={() => handleCart(product)}
                className="btn buttonColor text-white fw-bold shadow-sm"
              >
                {cartMode(product)}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptiedSavedItems=()=>{
  return(
   <h4 className="text-center">You don't have any saved item</h4>
  )
  }

  return (
    <>
      <div className="container-fluid pt-4 pb-5 min-vh-100">
        <div className="row px-5">
        {state.length == 0 && emptiedSavedItems()}
        {state.length > 0 && state.map(getSavedItems)}
        </div>
      </div>
    </>
  );
};

export default SavedProducts;
