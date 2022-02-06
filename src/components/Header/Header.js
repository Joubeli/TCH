import React from "react";
import logo from "../../images/Header/logo.png";
import arrow from "../../images/Header/arrow.png";
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
      <nav className="nav">
        <li className="nav-menu">
          <Link to="accueil" smooth={true} duration={1000}>
            Accueil
          </Link>
        </li>
        <li className="nav-menu">
          <Link to="a_propos" smooth={true} duration={1000}>
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
          <img className="arrow" alt="arrow icon" src={arrow} />
          <div className="dropdown">
            <li>
              <a target="_blank" href={pdf1}>
                Thread Identification Guide
              </a>
            </li>
            <li>
              <a target="_blank" href={pdf2}>
                TCH Line Card
              </a>
            </li>
          </div>
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
      </nav>
    </div>
  );
};

export default Header;
