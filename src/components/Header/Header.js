import React, { useState } from "react";
import logo from "../../images/logo.png";
import { Link } from "react-scroll";
import pdf1 from "../../pdf/1.pdf";
import pdf2 from "../../pdf/2.pdf";
import "../../App.css";
import "./Header.css";

const Header = () => {
  return (
    <div className="topbar">
      <div className="logo">
        <Link to="accueil" smooth={true} duration={1000}>
          <img src={logo} alt="logo" height="57px" width="244px" />
        </Link>
      </div>
      <nav >
        <ul className="nav">
          <li className="nav-menu">
            <Link to="accueil" smooth={true} duration={1000}>
              Accueil
            </Link>
          </li>
          <li className="nav-menu">
            <Link to="apropos" smooth={true} duration={1000}>
              A propos
            </Link>
          </li>
          <li className="nav-menu">
            <Link to="produits" smooth={true} duration={1000}>
              Produits
            </Link>
          </li>
          <li className="nav-menu ressources">
            Ressources
            <svg
              className="arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="11"
              viewBox="0 0 24 24"
            >
              <path
                fill="#37517e"
                d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"
              />
            </svg>
            <ul className="dropdown">
              <li className="sub-nav-menu">
                <a target='_blank' href={pdf1}>Thread Identification Guide</a>
              </li>
              <li className="sub-nav-menu">
                <a target='_blank' href={pdf2}>TCH Line Card</a>
              </li>
            </ul>
          </li>
          <li className="nav-menu">
            <Link to="quisommesnous" smooth={true} duration={1000}>
              Qui Sommes Nous
            </Link>
          </li>
          <li className="nav-menu">
            <Link to="partenaires" smooth={true} duration={1000}>
              Partenaires
            </Link>
          </li>
          <li className="nav-menu">
            <Link to="contact" smooth={true} duration={1000}>
              contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
