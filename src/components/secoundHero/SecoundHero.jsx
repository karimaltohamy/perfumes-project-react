import React from "react";
import "./secoundHero.scss";
import { Link } from "react-router-dom";

const SecoundHero = ({ title, page }) => {
  return (
    <div className="secound_hero">
      <div className="container mx-auto">
        <div className="content">
          <h1>{title}</h1>
          <p>
            <Link to="/">Home</Link> / <Link to={`/${page}`}>{page}</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecoundHero;
