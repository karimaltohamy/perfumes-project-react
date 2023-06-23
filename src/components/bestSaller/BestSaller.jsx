import React, { useEffect, useState } from "react";
import "./bestSaller.scss";
import { productsData } from "../../data";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ProductCard from "../productCard/ProductCard";

const BestSaller = () => {
  const [data, setDate] = useState([]);
  const { t } = useTranslation();
  let defaultLang = localStorage.getItem("i18nextLng");

  useEffect(() => {
    setDate(productsData);
  }, []);
  return (
    <div className="best_saller_section">
      <div className="container mx-auto">
        <h1
          className="title"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          {t("Best Seller")}
        </h1>
        <p
          className="subtitle"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          {t("Best Seller Product This Week!")}
        </p>
        <div className="boxs">
          {data &&
            data.map((item, i) => {
              return <ProductCard item={item} key={i} index={i} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default BestSaller;
