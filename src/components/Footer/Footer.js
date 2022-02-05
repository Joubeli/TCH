import React from "react";
import "./Footer.css";
import { BackTop } from "antd";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <div className="footer">
      <div className="links">
        <Link className="link" to="accueil" smooth={true} duration={1000}>
          Accueil
        </Link>{" "}
        |
        <Link className="link" to="apropos" smooth={true} duration={1000}>
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
        <Link to="apropos" className="link">
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
          >
            <path
              fill="#459baa"
              d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"
            />
          </svg>
        </a>
        <a
          className="social"
          target="_blank"
          href="https://www.linkedin.com/company/tch-industries/about/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
          >
            <path
              fill="#459baa"
              d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"
            />
          </svg>
        </a>
      </div>
      <BackTop>
        <svg
          className="arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
        >
          <path
            fill="#459baa"
            d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm17-1h-4v8h-2v-8h-4l5-6 5 6z"
          />
        </svg>
      </BackTop>
    </div>
  );
};
export default Footer;
