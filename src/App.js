import "./App.css";
import A_propos from "./components/A_propos/A_propos";
import Produits from "./components/Produits/Produits";
import QuiSommesNous from "./components/QuiSommesNous/QuiSommesNous";
import Partenaires from "./components/Partenaires/Partenaires";
import Contact from "./components/Contact/Contact";
import Accueil from "./components/Accueil/Accueil";
import Footer from "./components/Footer/Footer";
import logo from "./images/Header/logo.png";
import arrow from "./images/Header/arrow.png";
import pdf1 from "./pdf/1.pdf";
import pdf2 from "./pdf/2.pdf";


function App() {
  return (
      <div className="App">
      <div className="topbar">
        <div className="logo">
          <a href="#accueil" >
            <img src={logo} alt="logo" height="57px" width="244px" />
          </a>
        </div>
        <nav>
          <ul className="nav">
            <li className="nav-menu">
              <a href="#accueil">Accueil</a>
            </li>
            <li className="nav-menu">
              <a href="#a_propos">A propos</a>
            </li>
            <li className="nav-menu">
              <a href="#produits">Produits</a>
            </li>
            <li className="nav-menu ressources">
              <a href="#">Ressources <span className="arrow">▼</span></a>
              {/* <img className="arrow" alt="arrow icon" src={arrow} /> */}
              <ul className="dropdown">
                <li>
                  <a target="_blank" href={pdf1}>
                    TI Guide
                  </a>
                </li>
                <li>
                  <a target="_blank" href={pdf2}>
                    TCH Line Card
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-menu">
              <a href="#quisommesnous">Qui Sommes Nous</a>
            </li>
            <li className="nav-menu">
              <a href="#partenaires">Partenaires</a>
            </li>
            <li className="nav-menu">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      <div id="accueil"><Accueil /></div>
      <div id="a_propos"><A_propos /></div>
      <div id="produits"><Produits /></div>
      <div id="quisommesnous"><QuiSommesNous /></div>
      <div id="partenaires"><Partenaires /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </div>
  );
}

export default App;
