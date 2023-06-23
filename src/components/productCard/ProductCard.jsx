import { t } from "i18next";
import React from "react";
import "./prodcutCard.scss";
import { Link } from "react-router-dom";

const ProductCard = ({ item, index }) => {
  return (
    <Link
      to={`/productDetails/${item.id}`}
      className="box"
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-delay={`${index}00`}
    >
      <div className="image">
        <img src={item.img} alt="product-img" />
      </div>
      <h4>{t(item.title)}</h4>
      <span className="price">${item.price}</span>
    </Link>
  );
};

export default ProductCard;
