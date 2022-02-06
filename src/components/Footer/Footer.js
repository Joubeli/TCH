import React from "react";
import "./Footer.css";
import { BackTop } from "antd";
import { Link } from "react-scroll";
import facebook from '../../images/Footer/facebook.png'
import linkedin from '../../images/Footer/linkedin.png'
import back_to_top from '../../images/Footer/back_to_top.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="links">
        <Link className="link" to="accueil" smooth={true} duration={1000}>
          Accueil
        </Link>{" "}
        |
        <Link className="link" to="a_propos" smooth={true} duration={1000}>
          {" "}
          A propos
        </Link>{" "}
        |
        <Link className="link" to="produits" smooth={true} duration={1000}>
          {" "}
          Produits
        </Link>{" "}
        |
        <Link className="link" to="quisommesnous" smooth={true} duration={1000}>
          {" "}
          Qui Sommes Nous
        </Link>{" "}
        |
        <Link className="link" to="partenaires" smooth={true} duration={1000}>
          {" "}
          Partenaires
        </Link>{" "}
        |
        <Link className="link" to="contact" smooth={true} duration={1000}>
          {" "}
          Contact
        </Link>
      </div>
      <div className="copy">
        Copyright © 2022{" "}
        <Link to="a_propos" className="link">
          {" "}
          TCH Industries
        </Link>{" "}
        • A Private owned Tunisian company established in 2012{" "}
      </div>
      <div className="socials">
        <a
          className="social"
          target="_blank"
          href="https://www.facebook.com/TCH-Industries-2385071294838958/"
        >
          <img
            src={facebook}
            width="32px"
            height="32px"
            alt="facebook logo"
          />
        </a>
        <a
          className="social"
          target="_blank"
          href="https://www.linkedin.com/company/tch-industries/about/"
        >
          <img
            alt="linkedin logo"
            src={linkedin}
            width="32px"
            height="32px"
          />
        </a>
      </div>
      <BackTop>
        <img
          className="arrow"
          src={back_to_top}
          width="32px"
          height="32px"
          alt="back to top icon"
        />
      </BackTop>
    </div>
  );
};

export default Footer;
