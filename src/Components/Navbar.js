import React, { useState } from "react";
import { FaHeart, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = ({ setSearchedProducts, products }) => {
  const [searchInput, setSearchInput] = useState("");
  const state = useSelector((state) => state.addItems);
  const saved = useSelector((state) => state.saveItems);

  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("myToken");
    navigate("/");
  };

  const search = (e) => {
    e.preventDefault();
    const searchedText = searchInput.toLowerCase();

    const filtered = products.filter((product) => {
      if (product.brand.toLowerCase().includes(searchedText)) {
        return product.brand.toLowerCase().includes(searchedText);
      } else if (product.title.toLowerCase().includes(searchedText)) {
        return product.title.toLowerCase().includes(searchedText);
      } else if (product.category.toLowerCase().includes(searchedText)) {
        return product.category.toLowerCase().includes(searchedText);
      }
    });

    if (filtered) {
      setSearchedProducts(filtered);
      navigate("/search");
    } else {
      setSearchedProducts([]);
      navigate("/search");
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid px-3 px-lg-5">
          <NavLink to="/" className="navbar-brand" href="#">
            <h1 className="logo">ALEXISCOM</h1>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon border-none"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <div className="d-lg-flex mt-lg-0 mt-4 d-block ms-5 w-100 myNav">
              <form className="d-flex col-lg-8 col-12" role="search">
                <div className="input-group">
                  <input
                    className="form-control search-input shadow-none outline-none"
                    type="search"
                    placeholder="Search products, brands and categories"
                    aria-label="Search"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                  />
                  <FaSearch
                    className="position-absolute mt-3 ms-2 text-secondary"
                    
                  />
                  <button
                    className="buttonColor btn shadow-sm text-white fw-bold input-group-append"
                    type="submit"
                    onClick={search}
                  >
                    SEARCH
                  </button>
                </div>
              </form>
              <ul className="navbar-nav mb-2 mb-lg-0 ms-lg-3">
                <li className="nav-item dropdown me-2 text-lg-start text-end">
                  <a
                    className="nav-link dropdown-toggle fw-bold"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <FaUser className="user me-1 fs-5" />
                    <span className="fs-5">Account</span>
                  </a>
                  {!localStorage.myToken ? (
                    <ul className="dropdown-menu fs-5">
                      <li className="px-2">
                        <NavLink
                          to="/signin"
                          type="button"
                          className="btn buttonColor text-white fw-bold w-100"
                        >
                          SIGN IN
                        </NavLink>
                      </li>
                    </ul>
                  ) : (
                    <ul className="dropdown-menu fs-5">
                      <li>
                        <a className="dropdown-item" href="#">
                          <FaUser className="me-3" />
                          My Account
                        </a>
                      </li>
                      <li>
                        <NavLink
                          to="/savedItems"
                          className="dropdown-item d-flex"
                          href="#"
                        >
                          <div className="position-relative me-3">
                            <FaHeart className="text-danger" />
                            <span className="saved position-absolute top-0 start-100 badge translate-middle buttonColor rounded-circle">
                              {saved.length < 1 ? null : saved.length}
                            </span>
                          </div>
                          Saved Items
                        </NavLink>
                      </li>
                      <hr />
                      <li className="px-2">
                        <button
                          onClick={logOut}
                          type="button"
                          className="btn buttonColor text-white fw-bold w-100"
                        >
                          LOGOUT
                        </button>
                      </li>
                    </ul>
                  )}
                </li>
                
                <li className="nav-item pe-lg-0 pe-4">
                  <NavLink className="nav-link fw-bold d-flex justify-content-lg-start justify-content-end" to="/cart">
                    <div className="position-relative">
                      <FaShoppingCart className="me-1 fs-5 shopping_cart"/>
                      <span className="position-absolute me-4 top-0 start-100 translate-middle badge rounded-circle bg-danger">
                        {state.length < 1 ? null : state.length}
                      </span>
                    </div>
                    <span className="fs-5">Cart</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
         
        </div>
      </nav>
    </>
  );
};

export default Navbar;
