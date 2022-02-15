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

  const [activeClass, setActiveClass] = useState('accueil');

  return (
      <div className="App">
      <div className="topbar">
        <div className="logo">
          <a href="#accueil" >
            <img src={logo} alt="logo" height="57px" width="244px" />
          </a>
        </div>
        <nav>
          <a onClick={() => { setActiveClass('accueil') }}  className={activeClass == 'accueil' ? 'active_link_menu link_topbar' : 'link_topbar'} href="#accueil">Accueil</a>
          <a onClick={() => { setActiveClass('apropos') }}  className={activeClass == 'apropos' ? 'active_link_menu link_topbar' : 'link_topbar'} href="#a_propos">A propos</a>
          <a onClick={() => { setActiveClass('produits') }}  className={activeClass == 'produits' ? 'active_link_menu link_topbar' : 'link_topbar'} href="#produits">Produits</a>
          <a id="ressources" onClick={() => { setActiveClass('ressources_active') }}  className={activeClass == 'ressources_active' ? 'active_link_menu link_topbar ressources' : 'link_topbar ressources'} href="#!">Ressources<img src={arrow} alt='arrow' className="arrow"/>
            <ul className="dropdown">
              <li>
                <a className='dropdown_link' target="_blank" href={pdf1}>
                  TI Guide
                </a>
              </li>
              <li>
                <a className='dropdown_link' target="_blank" href={pdf2}>
                  TCH Line Card
                </a>
              </li>
            </ul>
          </a>
          <a onClick={() => { setActiveClass('quisommesnous') }}  className={activeClass == 'quisommesnous' ? 'active_link_menu link_topbar' : 'link_topbar'} href="#quisommesnous">Qui Sommes Nous</a>
          <a onClick={() => { setActiveClass('partenaires') }}  className={activeClass == 'partenaires' ? 'active_link_menu link_topbar' : 'link_topbar'} href="#partenaires">Partenaires</a>
          <a onClick={() => { setActiveClass('contact') }}  className={activeClass == 'contact' ? 'active_link_menu link_topbar' : 'link_topbar'} href="#contact">Contact</a>
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
