import React, { useEffect, useState } from "react";
import "../../App.css";
import "aos/dist/aos.css";
import Aos from "aos";
import "./A_propos.css";

const A_propos = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const[activeClass, setActiveClass] = useState(false)
  const toggleActiveClass = () => {
    setActiveClass(activeClass => !activeClass)
  }
  return (
    <section className="sec-apropos" id="a_propos">
      <h2 data-aos="fade-up" className="section-title">
        A propos
      </h2>
      <div className="sec1">
        <article data-aos="fade-up" className="art">
          <h6 className="sub-title">Notre mission</h6>
          <p className="desc-apropos">
            Notre société est spécialisée dans les technologies câbles et
            faisceaux et outillages et consommables Automobiles et
            Aéronautiques. Nous sommes revendeur d'équipements et un fournisseur
            de solutions pour les industries électroniques, électriques,
            injection plastique, automobile et aérospatiales.
          </p>
        </article>
        <article data-aos="fade-up" className={activeClass ? 'art active' : 'art'}>
          <div className='content'>
            <h6 className="sub-title">Nos Valeurs</h6>  
            <p className="desc-apropos">
              <span className="mini-title"> Poursuivre notre mission </span>
              <br />
              Nous sommes tous motivés par la poursuite d’un objectif commun, une
              mission qui fait partie intégrante de nos valeurs. <br />
              <span className="mini-title">Aller plus loin, plus vite </span>
              <br /> Nous nous engageons dans la voie de l’excellence et de la
              rapidité, sans jamais sacrifier l’une pour l’autre. <br />
              <span className="mini-title">Faire preuve de transparence </span>
              <br />
              Notre produit et notre culture visent à s’assurer que les équipes
              puissent identifier qui fait quoi, pour quand et pourquoi. Elles
              bénéficient ainsi d’une expérience optimale et obtiennent de
              meilleurs résultats. <br />              
              </p>
            </div>
        </article>
        <article data-aos="fade-up" className={activeClass ? 'art active' : 'art'}>
          <div className='content'>
            <h6 className="sub-title">Notre équipe</h6>
            <p className="desc-apropos">
              Performante partage des valeurs communes qui regroupe les valeurs de
              l’excellence, la confiance, l’esprit d’équipe, la qualité, le
              respect, la responsabilité, l’écoute et la satisfaction client.
              Notre équipe performante a un objectif commun clairement défini.
              L’objectif est compris par tous les membres de notre équipe et
              chacun connait sa responsabilité exacte dans l’atteinte de cet
              objectif. La progression vers l’objectif est mesurée à intervalle
              régulier et suit un planning prédéterminé.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default A_propos;
