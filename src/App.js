import { useRef, useState } from "react";
import "./App.css";
import Navbar from './components/Navbar/Navbar'
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
function App() {
  const [sidebar, setSidebar] = useState(false)
  const [activeClass, setActiveClass] = useState("accueil");
  const showSidebar = () => setSidebar(!sidebar)
  const sectionAccueil = useRef()
  const sectionApropos = useRef()
  const sectionProduits = useRef()
  const sectionQuiSommesNous = useRef()
  const sectionPartenaires = useRef()
  const sectionContact = useRef()
  const navHeader = [
    {
      headerTitle: 'Accueil',
      headerRef: sectionAccueil,
      headerId: 'accueil'
    },
    {
      headerTitle: 'A propos',
      headerRef: sectionApropos,
      headerId: 'Apropos'
    },
    {
      headerTitle: 'Produits',
      headerRef: sectionProduits,
      headerId: 'produits'
    },
    {
      headerTitle: 'Qui Sommes Nous',
      headerRef: sectionQuiSommesNous,
      headerId: 'quisommesnous'
    },
    {
      headerTitle: 'Partenaires',
      headerRef: sectionPartenaires,
      headerId: 'partenaires'
    },
    {
      headerTitle: 'Contact',
      headerRef: sectionContact,
      headerId: 'contact'
    }]
  return (
    <div className="App">
      <div className="topbar">
      <div className="topbar-container">
        <div className="logo">
          <a href="#accueil">
            <img src={logo2} alt="logo" className="logo-pic" />
          </a>
        </div>
        <Navbar navHeader={navHeader}/>
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
              <div>
                <li>
                  <FontAwesomeIcon
                  icon={faXmark}
                  className='faXmark'
                  />
                </li>
              </div>
              <div className="menu-items">
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
                      ? "active-sidebar-menu-item sidebar-menu-item quiSommesNous"
                      : "sidebar-menu-item quiSommesNous"
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
                      ? "active-sidebar-menu-item sidebar-menu-item partenaires"
                      : "sidebar-menu-item partenaires"
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
                      ? "active-sidebar-menu-item sidebar-menu-item contact"
                      : "sidebar-menu-item contact"
                  }
                  href="#contact"
                >
                  Contact
                </a>
              </li>
              </div>
            </ul>
          </div>
        </div>
        </div>
      </div>   
       <div id="accueil" ref={sectionAccueil}>
        <Accueil />      
      </div>
      <div id="Apropos" ref={sectionApropos}>
        <Apropos />
      </div>
      <div id="produits" ref={sectionProduits}>
        <Produits />
      </div>
       <div id="quisommesnous" ref={sectionQuiSommesNous}>
        <QuiSommesNous />
      </div>  
      <div id="partenaires" ref={sectionPartenaires}>
        <Partenaires />
      </div>
      <div id="contact" ref={sectionContact}>
        <Contact />
      </div> 
      <Footer />
    </div>
  );
}
export default App;
