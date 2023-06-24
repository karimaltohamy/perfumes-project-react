import React from "react";
import "./secoundHero.scss";
import { Link } from "react-router-dom";
import { t } from "i18next";

const SecoundHero = ({ title, page }) => {
  return (
    <div className="secound_hero">
      <div className="container mx-auto">
        <div className="content">
          <h1>{t(title)}</h1>
          <p>
            <Link to="/">{t("home")}</Link> /{" "}
            <Link to={`/${page}`}>{t(page)}</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecoundHero;
