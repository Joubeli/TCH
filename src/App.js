import { useState } from "react";
import "./App.css";
import Apropos from "./components/Apropos/Apropos";
import Produits from "./components/Produits/Produits";
import QuiSommesNous from "./components/QuiSommesNous/QuiSommesNous";
import Partenaires from "./components/Partenaires/Partenaires";
import Contact from "./components/Contact/Contact";
import Accueil from "./components/Accueil/Accueil";
import Footer from "./components/Footer/Footer";
import logo2 from "./images/Header/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import PPV from "./components/Produits/PPV";
function App() {
  const [activeClass, setActiveClass] = useState("accueil");
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)
  return (
    <div className="App">
      <div className="topbar">
        <div className="logo">
          <a href="#accueil">
            <img src={logo2} alt="logo" className="logo-pic" />
          </a>
        </div>
        <nav>                    
          <div className="links">            
            <a
              onClick={() => {
                setActiveClass("accueil");
              }}
              className={
                activeClass === "accueil"
                  ? "active_link_menu topbar_link"
                  : "topbar_link"
              }
              href="#accueil"
            >
              Accueil
            </a>
            <a
              onClick={() => {
                setActiveClass("apropos");
              }}
              className={
                activeClass === "apropos"
                  ? "active_link_menu topbar_link"
                  : "topbar_link"
              }
              href="#Apropos"
            >
              A propos
            </a>
            <a
              onClick={() => {
                setActiveClass("produits");
              }}
              className={
                activeClass === "produits"
                  ? "active_link_menu topbar_link"
                  : "topbar_link"
              }
              href="#produits"
            >
              Produits
            </a>
            
            <a
              onClick={() => {
                setActiveClass("quisommesnous");
              }}
              className={
                activeClass === "quisommesnous"
                  ? "active_link_menu topbar_link"
                  : "topbar_link"
              }
              href="#quisommesnous"
            >
              Qui Sommes Nous
            </a>
            <a
              onClick={() => {
                setActiveClass("partenaires");
              }}
              className={
                activeClass === "partenaires"
                  ? "active_link_menu topbar_link"
                  : "topbar_link"
              }
              href="#partenaires"
            >
              Partenaires
            </a>
            <a
              onClick={() => {
                setActiveClass("contact");
              }}
              className={
                activeClass === "contact"
                  ? "active_link_menu topbar_link"
                  : "topbar_link"
              }
              href="#contact"
            >
              Contact
            </a>
          </div>
        </nav>
        <div className="nav-sidebar">
          <div className="navbar">
            <FontAwesomeIcon
              icon={faBars}
              onClick={showSidebar}
              className='faBars'
            />
          </div>
          <div className={sidebar ? 'sidebar-menu active' : 'sidebar-menu'}>
            <ul className='sidebar-menu-items' onClick={showSidebar}>
              <li>
                <FontAwesomeIcon
                icon={faXmark}
                className='faXmark'
                />
              </li>
              <li>
                <a
                  onClick={() => {
                    setActiveClass("accueil");
                  }}
                  className={
                    activeClass === "accueil"
                      ? "active-sidebar-menu-item sidebar-menu-item"
                      : "sidebar-menu-item"
                  }
                  href="#accueil"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setActiveClass("apropos");
                  }}
                  className={
                    activeClass === "apropos"
                      ? "active-sidebar-menu-item sidebar-menu-item"
                      : "sidebar-menu-item"
                  }
                  href="#Apropos"
                >
                  A propos
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setActiveClass("produits");
                  }}
                  className={
                    activeClass === "produits"
                      ? "active-sidebar-menu-item sidebar-menu-item"
                      : "sidebar-menu-item"
                  }
                  href="#produits"
                >
                  Produits
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setActiveClass("quisommesnous");
                  }}
                  className={
                    activeClass === "quisommesnous"
                      ? "active-sidebar-menu-item sidebar-menu-item"
                      : "sidebar-menu-item"
                  }
                  href="#quisommesnous"
                >
                  Qui Sommes Nous
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setActiveClass("partenaires");
                  }}
                  className={
                    activeClass === "partenaires"
                      ? "active-sidebar-menu-item sidebar-menu-item"
                      : "sidebar-menu-item"
                  }
                  href="#partenaires"
                >
                  Partenaires
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setActiveClass("contact");
                  }}
                  className={
                    activeClass === "contact"
                      ? "active-sidebar-menu-item sidebar-menu-item"
                      : "sidebar-menu-item"
                  }
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>   
       <div id="accueil">
        <Accueil />
      </div>
      <div>
        <PPV/>
      </div>
      <div id="Apropos">
        <Apropos />
      </div>
      <div id="produits">
        <Produits />
      </div>
       <div id="quisommesnous">
        <QuiSommesNous />
      </div>  
      <div id="partenaires">
        <Partenaires />
      </div>
      <div id="contact">
        <Contact />
      </div> 
      <Footer />
    </div>
  );
}
export default App;
