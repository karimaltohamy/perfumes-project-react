import React from "react";
import "./sectionTypes.scss";
import { Link } from "react-router-dom";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";
import { useTranslation } from "react-i18next";

const SectionTypes = () => {
  const { t } = useTranslation();
  let defaultLang = localStorage.getItem("i18nextLng");

  return (
    <div className="section_types">
      <div className="container mx-auto">
        <div className="boxs">
          <div
            className="box"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <div
              className={
                defaultLang === "ar" ? "text left-auto right-8" : "text"
              }
            >
              <span>{t("From")} $30</span>
              <h4>{t("Lily Perfume")}</h4>
              <Link to={"/shop"}>
                {t("Veiw More")}{" "}
                {defaultLang === "ar" ? (
                  <MdKeyboardDoubleArrowLeft size={20} />
                ) : (
                  <MdKeyboardDoubleArrowRight size={20} />
                )}
              </Link>
            </div>
          </div>
          <div
            className="box"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            <div
              className={
                defaultLang === "ar" ? "text left-auto right-8" : "text"
              }
            >
              <span>{t("From")} $50</span>
              <h4>{t("Natural Flavor")}</h4>
              <Link to={"/shop"}>
                {t("Veiw More")}{" "}
                {defaultLang === "ar" ? (
                  <MdKeyboardDoubleArrowLeft size={20} />
                ) : (
                  <MdKeyboardDoubleArrowRight size={20} />
                )}
              </Link>
            </div>
          </div>
          <div
            className="box"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="900"
          >
            <div
              className={
                defaultLang === "ar" ? "text left-auto right-8" : "text"
              }
            >
              <span>{t("From")} $45</span>
              <h4>{t("Rose Perfume")}</h4>
              <Link to={"/shop"}>
                {t("Veiw More")}{" "}
                {defaultLang === "ar" ? (
                  <MdKeyboardDoubleArrowLeft size={20} />
                ) : (
                  <MdKeyboardDoubleArrowRight size={20} />
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTypes;
