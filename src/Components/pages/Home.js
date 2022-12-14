import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Carousel from "../Carousel";
import Row from "../Row";
const Home = ({
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
  const smartPhones = products.filter(
    (product) => product.category == "smartphones"
  );
  const laptops = products.filter((product) => product.category == "laptops");
  const fragrances = products.filter(
    (product) => product.category == "fragrances"
  );
  const skinCare = products.filter((product) => product.category == "skincare");
  const groceries = products.filter(
    (product) => product.category == "groceries"
  );
  const homeDecoration = products.filter(
    (product) => product.category == "home-decoration"
  );

  return (
    <>
      <Carousel />
      {error && <h5 className="text-danger text-center mt-4">{error}</h5>}
      <div className="py-4">
        <h1 className="text-center border-bottom mb-4">CATEGORIES</h1>
        <Row
          products={laptops}
          rowId="1"
          title="LAPTOPS"
          handleCart={handleCart}
          goToDetails={goToDetails}
          truncatedString={truncatedString}
          changedToNaira={changedToNaira}
          actuaPrice={actuaPrice}
          discountPercentage={discountPercentage}
          cartMode={cartMode}
          handleSave={handleSave}
          saveMode={saveMode}
          isLoading={isLoading}
        />

        <Row
          products={smartPhones}
          rowId="2"
          title="SMARTPHONES"
          handleCart={handleCart}
          goToDetails={goToDetails}
          truncatedString={truncatedString}
          changedToNaira={changedToNaira}
          actuaPrice={actuaPrice}
          discountPercentage={discountPercentage}
          cartMode={cartMode}
          handleSave={handleSave}
          saveMode={saveMode}
          isLoading={isLoading}
        />

        <Row
          products={fragrances}
          rowId="3"
          title="FRAGRANCES"
          handleCart={handleCart}
          goToDetails={goToDetails}
          truncatedString={truncatedString}
          changedToNaira={changedToNaira}
          actuaPrice={actuaPrice}
          discountPercentage={discountPercentage}
          cartMode={cartMode}
          handleSave={handleSave}
          saveMode={saveMode}
          isLoading={isLoading}
        />

        <Row
          products={skinCare}
          rowId="4"
          title="SKIN CARE"
          handleCart={handleCart}
          goToDetails={goToDetails}
          truncatedString={truncatedString}
          changedToNaira={changedToNaira}
          actuaPrice={actuaPrice}
          discountPercentage={discountPercentage}
          cartMode={cartMode}
          handleSave={handleSave}
          saveMode={saveMode}
          isLoading={isLoading}
        />

        <Row
          products={groceries}
          rowId="5"
          title="GROCERIES"
          handleCart={handleCart}
          goToDetails={goToDetails}
          truncatedString={truncatedString}
          changedToNaira={changedToNaira}
          actuaPrice={actuaPrice}
          discountPercentage={discountPercentage}
          cartMode={cartMode}
          handleSave={handleSave}
          saveMode={saveMode}
          isLoading={isLoading}
        />

        <Row
          products={homeDecoration}
          rowId="6"
          title="HOME DECORATION"
          handleCart={handleCart}
          goToDetails={goToDetails}
          truncatedString={truncatedString}
          changedToNaira={changedToNaira}
          actuaPrice={actuaPrice}
          discountPercentage={discountPercentage}
          cartMode={cartMode}
          handleSave={handleSave}
          saveMode={saveMode}
          isLoading={isLoading}
        />
        <div className="my-4 d-flex justify-content-end">
          <Link
            to="/products"
            className="btn btn-outline-dark d-flex me-4 pt-3 to_products_btn"
          >
            <h5 className="to_products">Go to products</h5>
            <FaArrowCircleRight className="fs-4" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
