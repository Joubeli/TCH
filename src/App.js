import { useState } from 'react'
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

  const [activeClass, setActiveClass] = useState(false);

  const switchClass = () => {
    activeClass ? setActiveClass(false) : setActiveClass(true);
  }

  return (
      <div className="App">
      <div className="topbar">
        <div className="logo">
          <a href="#accueil" >
            <img src={logo} alt="logo" height="57px" width="244px" />
          </a>
        </div>
        <nav>
          <a  className="link_topbar active" href="#accueil">Accueil</a>
          <a  className="link_topbar" href="#a_propos">A propos</a>
          <a  className="link_topbar" href="#produits">Produits</a>
          <a  className="link_topbar" href="#">Ressources <span className="arrow">▼</span></a>
          <a  className="link_topbar" href="#quisommesnous">Qui Sommes Nous</a>
          <a  className="link_topbar" href="#partenaires">Partenaires</a>
          <a  className="link_topbar" href="#contact">Contact</a>
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
