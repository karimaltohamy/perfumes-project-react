import React, { useEffect, useState } from "react";
import "./bestSaller.scss";
import { productsData } from "../../data";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
        <h1 className="title">{t("Best Seller")}</h1>
        <p className="subtitle">{t("Best Seller Product This Week!")}</p>
        <div className="boxs">
          {data &&
            data.map((item, i) => {
              return (
                <Link to={`/productDetails/${item.id}`} className="box" key={i}>
                  <div className="image">
                    <img src={item.img} alt="product-img" />
                  </div>
                  <h4>{t(item.title)}</h4>
                  <span className="price">${item.price}</span>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default BestSaller;
