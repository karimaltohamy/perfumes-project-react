import React from "react";
import logoImg from "../../images/logo_300x.webp";
import { AiOutlineClose } from "react-icons/ai";
import "./menuMobile.scss";
import { NavLink } from "react-router-dom";

const MenuMobile = ({ setOpenMenu, openMenu }) => {
  return (
    <div className={`menu_overflow ${openMenu ? "active" : ""}`}>
      <div className={`menu_mobile ${openMenu ? "active" : ""}`}>
        <div className="flex items-center justify-between">
          <div className="logo">
            <img src={logoImg} alt="logo" className="w-[100px]" />
          </div>
          <AiOutlineClose
            size={30}
            onClick={() => setOpenMenu(false)}
            className="cursor-pointer"
          />
        </div>
        <div className="links">
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to={"/shop/men"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Men's
          </NavLink>
          <NavLink
            to={"/shop/women"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            women's
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MenuMobile;
