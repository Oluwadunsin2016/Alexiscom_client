import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import Cart from "./Components/pages/Cart";
import Home from "./Components/pages/Home";
import Navbar from "./Components/Navbar";
import ProductDetails from "./Components/pages/ProductDetails";
import Products from "./Components/pages/Products";
import "./index.css";
import Checkout from "./Components/pages/Checkout";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem, deleteItem, removeItem, saveItem } from "./Redux/Actions";
import SignIn from "./Components/pages/SignIn";
import SignUp from "./Components/pages/SignUp";
import Footer from "./Components/Footer";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import SavedProducts from "./Components/pages/SavedProducts";
import ProtectedRoute from "./Components/ProtectedRoute";
import SearchedProducts from "./Components/pages/SearchedProducts";
import { SkeletonTheme } from "react-loading-skeleton";
import { types, useAlert } from "react-alert";
import PageNotFound from "./Components/PageNotFound";

function App() {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState({});
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartStatus, setCartStatus] = useState("Add to Cart");
  const [heart, setHeart] = useState(
    <FaRegHeart className="mt-3 text-danger" />
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  const myAlert = useAlert();

  const fetchData = () => {
    axios
      .get(process.env.REACT_APP_PRODUCTS_URL)
      .then((res) => {
        console.log(res.data.products);
        setIsLoading(false);
        setProducts(res.data.products);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  useEffect(() => {
    const token = localStorage.myToken;
    if (token) {
      axios
        .get(`http://localhost:3700/customer/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          if (!res.data.status) {
            localStorage.removeItem("myToken");
          } else {
            console.log(res);
            setUser(res.data.user);
          }
        });
    }
  }, []);

  const discountPercentage = (product) => {
    const discountPercent = Math.round(product.discountPercentage);
    return `${discountPercent}% OFF`;
  };

  const actuaPrice = (product) => {
    const actualPrice = Math.round(
      product.price * (product.discountPercentage / 100) + product.price
    );
    const converted = JSON.stringify(actualPrice * 440);
    const num = converted.length - 3;
    const thouEnd = converted.slice(-3);
    return `${converted.slice(0, num)},${thouEnd}.00`;
  };

  const changedIncreasedToNaira = (product) => {
    const converted = JSON.stringify(product.totalPrice * 440);
    if (converted.length > 9) {
      const num = converted.length - 9;
      const thouEnd = converted.slice(-3);
      const mil = converted.slice(5, -3);
      const bil = converted.slice(2, -6);
      return `${converted.slice(0, num)},${bil},${mil},${thouEnd}.00`;
    } else if (converted.length > 6) {
      const num = converted.length - 6;
      const thouEnd = converted.slice(-3);
      const mil = converted.slice(1, 4);

      return `${converted.slice(0, num)},${mil},${thouEnd}.00`;
    } else if (converted.length > 3) {
      const num = converted.length - 3;
      const thouEnd = converted.slice(-3);
      return `${converted.slice(0, num)},${thouEnd}.00`;
    } else {
      return `${converted}.00`;
    }
  };

  const changedToNaira = (product) => {
    const converted = JSON.stringify(product.price * 440);
    if (converted.length > 9) {
      const num = converted.length - 9;
      const thouEnd = converted.slice(-3);
      const mil = converted.slice(5, -3);
      const bil = converted.slice(2, -6);
      return `${converted.slice(0, num)},${bil},${mil},${thouEnd}.00`;
    } else if (converted.length > 6) {
      const num = converted.length - 6;
      const thouEnd = converted.slice(-3);
      const mil = converted.slice(1, 4);

      return `${converted.slice(0, num)},${mil},${thouEnd}.00`;
    } else if (converted.length > 3) {
      const num = converted.length - 3;
      const thouEnd = converted.slice(-3);
      return `${converted.slice(0, num)},${thouEnd}.00`;
    } else {
      return `${converted}.00`;
    }
  };

  const truncatedString = (str, num) => {
    if (str?.length > num) {
      return str?.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  const goToDetails = (product) => {
    console.log(product);
    localStorage.setItem("viewedItem", JSON.stringify(product));
    navigate(`/products/${product.id}`);
  };

  const handleCart = (product) => {
    if (cartStatus === "Add to Cart") {
      setCartStatus("Remove from Cart");
    } else {
      setCartStatus("Add to Cart");
    }

    if (localStorage.savedProducts) {
      const allProducts = JSON.parse(localStorage.getItem("savedProducts"));
      const existed = allProducts.find((e) => {
        return e.id == product.id;
      });
      if (existed) {
        if (!localStorage.selectedProducts) {
          dispatch(removeItem(product));
          dispatch(addItem(product));
          myAlert.show(
            <div className="text-lowercase">Sucessfully added to cart</div>,
            { type: types.SUCCESS }
          );
        } else {
          const allProducts = JSON.parse(
            localStorage.getItem("selectedProducts")
          );
          const addedItem = allProducts.find((e) => {
            return e.id == product.id;
          });
          if (!addedItem) {
            dispatch(removeItem(product));
            dispatch(addItem(product));
            myAlert.show(
              <div className="text-lowercase">Sucessfully added to cart</div>,
              { type: types.SUCCESS }
            );
          } else {
            dispatch(deleteItem(product));
            myAlert.show(
              <div className="text-lowercase">
                Sucessfully deleted from cart
              </div>,
              { type: types.SUCCESS }
            );
          }
        }
      } else {
        if (!localStorage.selectedProducts) {
          dispatch(removeItem(product));
          dispatch(addItem(product));
          myAlert.show(
            <div className="text-lowercase">Sucessfully added to cart</div>,
            { type: types.SUCCESS }
          );
        } else {
          const allProducts = JSON.parse(
            localStorage.getItem("selectedProducts")
          );
          const addedItem = allProducts.find((e) => {
            return e.id == product.id;
          });
          if (!addedItem) {
            dispatch(removeItem(product));
            dispatch(addItem(product));
            myAlert.show(
              <div className="text-lowercase">Sucessfully added to cart</div>,
              { type: types.SUCCESS }
            );
          } else {
            dispatch(deleteItem(product));
            myAlert.show(
              <div className="text-lowercase">
                Sucessfully deleted from cart
              </div>,
              { type: types.SUCCESS }
            );
          }
        }
      }
    } else {
      if (!localStorage.selectedProducts) {
        dispatch(addItem(product));
        myAlert.show(
          <div className="text-lowercase">Sucessfully added to cart</div>,
          { type: types.SUCCESS }
        );
      } else {
        const allProducts = JSON.parse(
          localStorage.getItem("selectedProducts")
        );
        const existed = allProducts.find((e) => {
          return e.id == product.id;
        });
        if (!existed) {
          dispatch(addItem(product));
          myAlert.show(
            <div className="text-lowercase">Sucessfully added to cart</div>,
            { type: types.SUCCESS }
          );
        } else {
          dispatch(deleteItem(product));
          myAlert.show(
            <div className="text-lowercase">Sucessfully deleted from cart</div>,
            { type: types.SUCCESS }
          );
        }
      }
    }
  };

  const handleSave = (product) => {
    if (heart === <FaRegHeart className="mt-3 text-danger" />) {
      setHeart(<FaHeart className="mt-3 text-danger" />);
    } else {
      setHeart(<FaRegHeart className="mt-3 text-danger" />);
    }

    if (localStorage.myToken) {
      if (localStorage.selectedProducts) {
        let products = JSON.parse(localStorage.getItem("selectedProducts"));
        let productAdded = products.find((e) => {
          return e.id == product.id;
        });

        if (productAdded) {
          myAlert.show(
            <div className="text-lowercase">
              You can't save the item, it has already been added to cart
            </div>,
            { type: types.ERROR }
          );
        } else {
          if (!localStorage.savedProducts) {
            dispatch(saveItem(product));
            myAlert.show(
              <div className="text-lowercase">Saved successfully</div>,
              { type: types.SUCCESS }
            );
          } else {
            const allProducts = JSON.parse(
              localStorage.getItem("savedProducts")
            );
            const existed = allProducts.find((e) => {
              return e.id == product.id;
            });
            if (!existed) {
              dispatch(saveItem(product));
              myAlert.show(
                <div className="text-lowercase">Saved successfully</div>,
                { type: types.SUCCESS }
              );
            } else {
              dispatch(removeItem(product));
              myAlert.show(
                <div className="text-lowercase">Deleted successfully</div>,
                { type: types.SUCCESS }
              );
            }
          }
        }
      } else {
        if (!localStorage.savedProducts) {
          dispatch(saveItem(product));
          myAlert.show(
            <div className="text-lowercase">Saved successfully</div>,
            { type: types.SUCCESS }
          );
        } else {
          const allProducts = JSON.parse(localStorage.getItem("savedProducts"));
          const existed = allProducts.find((e) => {
            return e.id == product.id;
          });
          if (!existed) {
            dispatch(saveItem(product));
            myAlert.show(
              <div className="text-lowercase">Saved successfully</div>,
              { type: types.SUCCESS }
            );
          } else {
            dispatch(removeItem(product));
            myAlert.show(
              <div className="text-lowercase">Deleted successfully</div>,
              { type: types.SUCCESS }
            );
          }
        }
      }
    } else {
      myAlert.show(<div className="text-lowercase">Login to Saved items</div>, {
        type: types.ERROR,
      });
    }
  };

  const cartMode = (product) => {
    if (localStorage.selectedProducts) {
      const allProducts = JSON.parse(localStorage.getItem("selectedProducts"));
      const existed = allProducts.find((e) => {
        return e.id == product.id;
      });

      if (existed) {
        return "Remove from Cart";
      } else {
        return "Add to Cart";
      }
    } else {
      return "Add to Cart";
    }
  };

  const saveMode = (product) => {
    if (localStorage.myToken) {
      if (localStorage.savedProducts) {
        const allProducts = JSON.parse(localStorage.getItem("savedProducts"));
        const existed = allProducts.find((e) => {
          return e.id == product.id;
        });

        if (existed) {
          return <FaHeart className="mt-3 text-danger" />;
        } else {
          return <FaRegHeart className="mt-3 text-danger" />;
        }
      } else {
        return <FaRegHeart className="mt-3 text-danger" />;
      }
    } else {
      return <FaRegHeart className="mt-3 text-danger" />;
    }
  };

  const NavbarHandler = () => {
    const location = useLocation();
    if (location.pathname === "/404") {
      return null;
    }
    return (
      <Navbar setSearchedProducts={setSearchedProducts} products={products} />
    );
  };

  const FooterHandler = () => {
    const location = useLocation();
    if (location.pathname === "/404") {
      return null;
    }
    return (
      <Footer />
    );
  };

  return (
    <div>
      <NavbarHandler />
      <SkeletonTheme baseColor="#b4b3b3" highlightColor="#dbdbdd">
        <Routes>
          <Route path="*" element={<Navigate to="/404"/>}/>
          <Route path="/404" element={<PageNotFound/>}/>
          <Route
            path="/"
            element={
              <Home
                products={products}
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
                error={error}
              />
            }
          />
          <Route
            path="/products"
            element={
              <Products
                products={products}
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
                error={error}
              />
            }
          />
          <Route
            path="/products/:id"
            element={
              <ProductDetails
                changedToNaira={changedToNaira}
                handleCart={handleCart}
                discountPercentage={discountPercentage}
                cartMode={cartMode}
              />
            }
          />
          <Route
            path="/cart"
            element={<Cart changedIncreasedToNaira={changedIncreasedToNaira} />}
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout
                  changedToNaira={changedToNaira}
                  changedIncreasedToNaira={changedIncreasedToNaira}
                  user={user}
                />
              </ProtectedRoute>
            }
          />

          <Route
            path="/savedItems"
            element={
              <ProtectedRoute>
                <SavedProducts
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
              </ProtectedRoute>
            }
          />

          <Route
            path="/search"
            element={
              <SearchedProducts
                products={searchedProducts}
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
            }
          />
        </Routes>
      </SkeletonTheme>
      <FooterHandler />
    </div>
  );
}

export default App;
