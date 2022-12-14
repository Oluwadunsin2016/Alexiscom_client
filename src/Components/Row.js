import React from "react";
import Skeleton from "react-loading-skeleton";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Row = ({
  products,
  rowId,
  title,
  handleCart,
  goToDetails,
  truncatedString,
  changedToNaira,
  actuaPrice,
  discountPercentage,
  cartMode,
  handleSave,
  saveMode,
  isLoading
}) => {
  const slideLeft = () => {
    let slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  const hide = () => {
    let chevronLeft = document.getElementById("chevronLeft" + rowId);
    let chevronRight = document.getElementById("chevronRight" + rowId);
    chevronLeft.style.display = "none";
    chevronRight.style.display = "none";
  };
  const show = () => {
    let chevronLeft = document.getElementById("chevronLeft" + rowId);
    let chevronRight = document.getElementById("chevronRight" + rowId);
    chevronLeft.style.display = "block";
    chevronRight.style.display = "block";
  };

   const Loading = ({ num }) => {
    return (
      <>
        {Array(num)
          .fill("cardSkeleton")
          .map((_, id) => (
             <div key={id} className="mx-2">
            <div
              className="card shadow h-100"
              style={{ width: "18rem"}}
              key={id}
            >
                <Skeleton className="card-img-top" height="250px" />

                <div className="card-body">
                  <Skeleton
                    width="50%"
                    height="25px"
                    className="card-title"
                  ></Skeleton>
                  <div className="d-flex justify-content-between">
                    <Skeleton width={100} />
                    <Skeleton width={100} />
                  </div>
                  <Skeleton className="card-text" />
                  <div className="d-flex justify-content-between add">
                    <Skeleton className="mt-3" height={15} width={15} circle />
                    <Skeleton height={35} width={90} />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </>
    );
  };

  return (
    <div className="container-fluid mt-4">
      <h3 className="ps-5 border-bottom mb-2">{title}</h3>
      <div
        className="ProductRow"
        id={"slider" + rowId}
        onMouseOver={show}
        onMouseOut={hide}
      >
        <FaChevronLeft
          onClick={slideLeft}
          id={"chevronLeft" + rowId}
          className="chevronLeft fs-1"
        />
        {isLoading && <Loading num={5} />}
        {products.map((product, id) => (
          <div key={id} className="mx-2">
            <div
              className="card shadow h-100"
              style={{ width: "18rem"}}
              key={id}
            >
              <img
                onClick={() => goToDetails(product)}
                src={product.thumbnail}
                className="card-img-top"
                height={"250"}
                alt={product.title}
              />
              <small className="discount position-absolute mt-2 p-2">
                {discountPercentage(product)}
              </small>
              <div className="card-body">
                <h5 className="card-title">
                  {truncatedString(product?.title, 16)}
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
                  <div onClick={() => handleSave(product)}>
                    {saveMode(product)}
                  </div>
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
        ))}
        <FaChevronRight
          onClick={slideRight}
          id={"chevronRight" + rowId}
          className="chevronRight fs-1"
        />
      </div>
    </div>
  );
};

export default Row;
