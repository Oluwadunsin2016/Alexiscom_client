import React from "react";

const SearchedProducts = ({
  products,
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
  const getProducts = (product, id) => {
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
  return (
    <>
      <div className="container-fluid pt-4 pb-5 min-vh-100">
        <div className="row px-5">{products.length>0? products.map(getProducts): <h4 className="text-center fw-normal mt-4 text-danger">Oops, no product!!!</h4> }</div>
      </div>
    </>
  );
};

export default SearchedProducts;
