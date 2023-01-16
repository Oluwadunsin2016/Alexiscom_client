import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="bg-light min-vh-100 text-center">
      <h3 className="pt-5 text-danger">Oops! Page not found</h3>
      <h5>
        The page you are looking for does not exist.
        <Link
          to="/"
          className="to_home btn fw-bold text-start text-primary"
        >
          <span className="go_home">Go to home page</span>
          <FaArrowCircleRight className="fs-5" />
        </Link>
      </h5>
    </div>
  );
};

export default PageNotFound;
