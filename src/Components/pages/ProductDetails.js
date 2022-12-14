import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProductDetails = ({ changedToNaira, handleCart, cartMode,discountPercentage }) => {
  const [product, setProduct] = useState("");
  const [productImage, setProductImage] = useState("");
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const view = JSON.parse(localStorage.getItem("viewedItem"));
    setProduct(view);
    setImages(view.images);
    if (!localStorage.viewedItem) {
      navigate("/");
    }
  }, []);

  const viewOthers = (image) => {
    setProductImage(image);
  };

  const goToCart = () => {
    navigate("/cart");
  };

  return (
    <>
      <div className="container-fluid px-md-5 mt-5 py-3 min-vh-100">
        <div className="d-md-flex">
          <div className="product col-md-6 px-2 px-md-0">
            <img
              className="currentImg"
              src={productImage == "" ? product.thumbnail : productImage}
              height="450px"
              width="100%"
              alt=""
            />
            <div className="img-grid">
              {images.map((image, id) => (
                <div
                  key={id}
                  className={
                    productImage == image ? "img-wrap current" : "img-wrap"
                  }
                  onClick={() => viewOthers(image)}
                >
                  <img src={image} alt="" />
                </div>
              ))}
            </div>
          </div>
          <div className="mx-2 mx-md-4 col-md-6">
            <div className="d-flex justify-content-between">
              <h3 className="">Name: {product.title}</h3>
              <h4>Price: &#8358;{changedToNaira(product)}</h4>
            </div>
            <div className="d-flex justify-content-between">
              <p className="fw-bold text-muted">Category: {product.category}</p>
              <p className="fw-bold text-muted">Brand: {product.brand}</p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="fw-bold text-muted">Rating: {product.rating}</p>
              <p className="fw-bold text-muted">Stock: {product.stock}</p>
            </div>
              <p className="fw-bold text-muted">Discount Percentage: {discountPercentage(product)}</p>

            <h5 className=" mt-4 mb-0 border-bottom">Description</h5>
            <p className="text-muted">{product.description}</p>
            <div className="mt-4 mx-auto d-flex justify-content-between">
              <button
                className="btn buttonColor fw-bold text-white"
                onClick={() => handleCart(product)}
              >
                {cartMode(product)}
              </button>
              <button
                className="btn buttonColor fw-bold text-white"
                onClick={goToCart}
              >
                Go to Cart
              </button>
            </div>
            <h5 className="mt-5 mb-0 border-bottom">About the Product</h5>
            <p className="text-muted">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
              blanditiis eos, laborum quisquam nisi consequuntur voluptates
              porro explicabo beatae magnam nesciunt sequi voluptas quo et esse
              consequatur, dicta nostrum adipisci! Magnam accusamus, molestias
              repellat illo alias dolor ut veritatis ipsa modi distinctio nihil
              tempora numquam veniam cum similique dolorum vero non atque
              aliquam nemo quod hic. Placeat aperiam reiciendis quod.
              Doloremque, at iure? Deleniti praesentium voluptatibus atque
              provident recusandae aspernatur perspiciatis, quibusdam tempora
              cum? Odit, nostrum fugit tempore, perferendis a ex alias error
              dolore, quae doloribus blanditiis nobis inventore corrupti.
              Facilis unde corrupti est aliquid sunt dicta ducimus. Vel
              architecto cupiditate esse velit sit quam deserunt, assumenda,
              eveniet molestiae harum possimus consectetur repudiandae ab fugit
              qui reiciendis rerum explicabo maxime? Molestiae totam voluptate
              ducimus sunt! Nemo doloribus commodi accusantium! Et nobis iusto
              distinctio adipisci a, aut sapiente! Illo iusto amet minima
              dolorem, debitis delectus veniam perspiciatis ipsam voluptate
              fugit ipsa. Placeat, facere. Quam illum porro, maiores perferendis
              reiciendis vel perspiciatis ducimus rem mollitia dolorem nihil, et
              fugiat. Inventore, ipsa voluptas asperiores sed maiores
              exercitationem assumenda cupiditate quibusdam nihil corporis
              consequuntur?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
