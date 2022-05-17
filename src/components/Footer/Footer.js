import React from "react";
import "./Footer.css";
import { BackTop } from "antd";
import facebook from "../../images/Footer/facebook.png";
import linkedin from "../../images/Footer/linkedin.png";
import back_to_top from "../../images/Footer/back_to_top.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_links">
        <a className="link" href="#accueil">
          Accueil
        </a>{" "}
        |
        <a className="link" href="#a_propos">
          {" "}
          A propos
        </a>{" "}
        |
        <a className="link" href="#produits">
          {" "}
          Produits
        </a>{" "}
        |
        <a className="link" href="#quisommesnous">
          {" "}
          Qui Sommes Nous
        </a>{" "}
        |
        <a className="link" href="#partenaires">
          {" "}
          Partenaires
        </a>{" "}
        |
        <a className="link" href="#contact">
          {" "}
          Contact
        </a>
      </div>
      <div className="copy">
        Copyright © 2022 <a href="#a_propos"> TCH Industries</a> • Entreprise
        Tunisienne Privée Créée en 2012{" "}
      </div>
      <div className="socials">
        <a
          rel="noopener noreferrer"
          className="social"
          target="_blank"
          href="https://www.facebook.com/TCH-Industries-2385071294838958/"
        >
          <img src={facebook} width="32px" height="32px" alt="facebook logo" />
        </a>
        <a
          rel="noopener noreferrer"
          className="social"
          target="_blank"
          href="https://www.linkedin.com/company/tch-industries/about/"
        >
          <img alt="linkedin logo" src={linkedin} width="32px" height="32px" />
        </a>
      </div>
      <BackTop>
        <img
          className="arrow_footer"
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
