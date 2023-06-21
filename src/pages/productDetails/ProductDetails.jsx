import React, { Fragment, useEffect, useState } from "react";
import "./productDetails.scss";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import imgProduct1 from "../../images/product1.webp";
import { productsData } from "../../data";
import { AiFillStar } from "react-icons/ai";

const ProductDetails = () => {
  const [singleData, setSingleData] = useState({});

  useEffect(() => {
    setSingleData(productsData[0]);
  }, []);

  return (
    <Fragment>
      <Header />
      <div className="container mx-auto">
        <div className="product_details">
          <div className="left">
            <div className="image">
              <img src={imgProduct1} alt="img-product" className="mx-auto" />
            </div>
          </div>
          <div className="right">
            <div className="stars">
              {singleData.rating &&
                Array(Math.round(singleData.rating))
                  .fill("")
                  .map((ele) => {
                    return <AiFillStar size={18} />;
                  })}
            </div>
            <h1>{singleData.title}</h1>
            <span className="price">${singleData.price}</span>
            <p className="desc">{singleData.desc}</p>
            <button className="btn_cart">Add To Cart</button>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default ProductDetails;
