import React from "react";
import "../../App.css";
import "./Accueil.css";
import ph4 from "../../images/Accueil/ph4.jpg";
import ph5 from "../../images/Accueil/ph5.jpg";

const Accueil = () => {
  return (
    <section className="sec-accueil" id="accueil">
      <div className="titles">
        <h1 className="accueil-title">
          Nous Sommes Une Entreprise Tunisienne Privée
        </h1>
        <h5 className="accueil-subtitle">
          TCH INDUSTRIES, société de commerce international, totalement
          exportatrice opérant depuis 2013, dans le domaine de l’équipement,
          l’outillage, la fourniture industrielle.
          <br />
          De plus, TCH INDUSTRIES, partenaire exclusif d’item en Tunisie,
          conçoit et réalise des sous-ensembles industriels modulaires. 
          <br />
          Dotée d’un magasin et animée par une équipe d’ingénieurs et techniciens et
          technico-commerciales.
        </h5>
      </div>
      <div className="photos">
        <div className="photo4">
          <img className="photo-accueil4" src={ph4} />
        </div>
          <img className="photo-accueil5" src={ph5} />
      </div>
    </section>
  );
};

export default Accueil;
