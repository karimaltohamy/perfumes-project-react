import React, { useState } from "react";
import logoImg from "../../images/logo_300x.webp";
import { NavLink, Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdLanguage } from "react-icons/md";
import { BiMenu } from "react-icons/bi";
import "./header.scss";
import langAr from "../../images/ar.png";
import langEn from "../../images/Flag-United-States-of-America.webp";
import MenuMobile from "../menuMobile/MenuMobile";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [openLangList, setOpenLangList] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  let defaultLang = localStorage.getItem("i18nextLng");

  //   handle change language
  const handleDefaultLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("i18nextLng", lang);

    if (lang === "ar") {
      document.body.style.direction = "rtl";
    } else {
      document.body.style.direction = "ltr";
    }
  };

  return (
    <div className="header">
      <div className="container mx-auto">
        <div className="content">
          <div className="logo">
            <img src={logoImg} alt="" />
          </div>
          <div className="links">
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {t("home")}
            </NavLink>
            <NavLink
              to={"/shop/men"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {t("men's")}
            </NavLink>
            <NavLink
              to={"/shop/women"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {t("women's")}
            </NavLink>
          </div>
          <div className="info">
            <div className="lang_list hidden md:block">
              <MdLanguage
                size={25}
                className="cursor-pointer"
                onClick={() => setOpenLangList(!openLangList)}
              />

              {openLangList && (
                <div className="list">
                  <div
                    className="item"
                    onClick={() => {
                      setOpenLangList(false);
                      handleDefaultLang("en");
                    }}
                  >
                    <img
                      src={langEn}
                      alt="Flag-United-States-of-America"
                      loading="lazy"
                    />
                    <span>English (UK)</span>
                  </div>
                  <div
                    className="item"
                    onClick={() => {
                      setOpenLangList(false);
                      handleDefaultLang("ar");
                    }}
                  >
                    <img src={langAr} alt="ar-img" loading="lazy" />
                    <span>Arabic (ar)</span>
                  </div>
                </div>
              )}
            </div>

            <Link to={"/login"} className=" hidden md:block">
              <CgProfile size={25} />
            </Link>

            <Link to={"/contact-us"} className="btn_contact">
              {t("contact_us")}
            </Link>
            <BiMenu
              size={30}
              className="block md:hidden cursor-pointer"
              onClick={() => setOpenMenu(true)}
            />
          </div>
        </div>
        <MenuMobile openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </div>
    </div>
  );
};

export default Header;
