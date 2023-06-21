import React from "react";
import "./banner.scss";
import { Link } from "react-router-dom";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation();
  let defaultLang = localStorage.getItem("i18nextLng");

  return (
    <div className="banner_section">
      <div className="container mx-auto">
        <div className="line">
          <Link to={"/shop/women"} className="box">
            <div
              className={
                defaultLang === "ar" ? "text left-auto right-8" : "text"
              }
            >
              <h4>{t("MEN'S PERFUME")}</h4>
              <span>
                {t("Shop Now")}{" "}
                {defaultLang === "ar" ? (
                  <MdKeyboardDoubleArrowLeft size={20} />
                ) : (
                  <MdKeyboardDoubleArrowRight size={20} />
                )}
              </span>
            </div>
          </Link>
          <Link to={"/shop/men"} className="box">
            <div
              className={
                defaultLang === "ar" ? "text left-auto right-8" : "text"
              }
            >
              <h4>{t("WOMEN PERFUME")}</h4>
              <span>
                {t("Shop Now")}{" "}
                {defaultLang === "ar" ? (
                  <MdKeyboardDoubleArrowLeft size={20} />
                ) : (
                  <MdKeyboardDoubleArrowRight size={20} />
                )}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
