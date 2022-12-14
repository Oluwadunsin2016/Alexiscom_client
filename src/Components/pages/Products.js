import React from "react";
import Skeleton from "react-loading-skeleton";
import Product from "../Product";
import "react-loading-skeleton/dist/skeleton.css";

const Products = ({
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
  isLoading,
  error,
}) => {
  const Loading = ({ num }) => {
    return (
      <div className="row px-5">
        {Array(num)
          .fill("cardSkeleton")
          .map((_, id) => (
            <div
              key={id}
              className="card-skeleton mx-md-0 mx-auto col-sm-6 col-lg-3 col-md-4 mt-4 h-100"
            >
              <div className="card">
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
      </div>
    );
  };

  return (
    <>
      <div className="container-fluid pt-4 pb-5 min-vh-100">
        {error && <h5 className="text-danger text-center">{error}</h5>}
        {isLoading && <Loading num={30} />}
        {
          <div className="row px-5">
            {products.map((product, id) => (
              <Product
                product={product}
                id={id}
                handleCart={handleCart}
                goToDetails={goToDetails}
                truncatedString={truncatedString}
                changedToNaira={changedToNaira}
                actuaPrice={actuaPrice}
                discountPercentage={discountPercentage}
                cartMode={cartMode}
                handleSave={handleSave}
                saveMode={saveMode}
              />
            ))}
          </div>
        }
      </div>
    </>
  );
};

export default Products;
