import React from "react";
import "./footer.scss";
import {
  AiOutlineTwitter,
  AiOutlineBehance,
  AiOutlineInstagram,
} from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import logoImg from "../../images/logo_300x.webp";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  let defaultLang = localStorage.getItem("i18nextLng");

  return (
    <footer>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 line">
          <div>
            <div className="logo">
              <img src={logoImg} alt="" />
            </div>
            <p className="text-[17px]">
              {t("Sophisticated simplicity for the independent mind.")}
            </p>
            <div className="flex items-center gap-3 mt-[20px] justify-center md:justify-start ">
              <AiOutlineTwitter
                size={25}
                className="text-white hover:text-red-500"
              />
              <AiOutlineBehance
                size={25}
                className="text-white hover:text-red-500"
              />
              <AiOutlineInstagram
                size={25}
                className="text-white hover:text-red-500"
              />
              <GrFacebookOption
                size={25}
                className="text-white hover:text-red-500"
              />
            </div>
          </div>
          <div className="links">
            <h4 className={defaultLang === "ar" ? "right" : ""}>
              {t("Help & Information")}
            </h4>
            <Link>{t("About Us")}</Link>
            <Link>{t("Privacy Policy")}</Link>
            <Link>{t("Terms & Conditions")}</Link>
            <Link>{t("Products Return")}</Link>
            <Link>{t("Wholesale Policy")}</Link>
          </div>
          <div className="links">
            <h4 className={defaultLang === "ar" ? "right" : ""}>
              {t("About Us")}
            </h4>
            <Link>{t("Pagination")}</Link>
            <Link>{t("Terms & Conditions")}</Link>
            <Link>{t("Contact")}</Link>
            <Link>{t("Accessories")}</Link>
            <Link>{t("Home page")}</Link>
          </div>
          <div className="links">
            <h4 className={defaultLang === "ar" ? "right" : ""}>
              {t("Categories")}
            </h4>
            <Link>{t("Help Center")}</Link>
            <Link>{t("Address Store")}</Link>
            <Link>{t("Privacy Policy")}</Link>
            <Link>{t("Receivers & Amplifiers")}</Link>
            <Link>{t("CantzyStore")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
