import React from "react";
import "../../App.css";
import "./Apropos.css";

const Apropos = () => {
  return (
    <div className="container" id="apropos">
      <h2 className="section-title">A propos</h2>
      <section>
        <article className="art">
          <h6 className="sub-title">Notre mission</h6>
          <p>
            Est de pouvoir offrir un service de haute qualité de bout en bout
            aux clients de la région. Pour réaliser cela, nous nous concentrons
            sur la création de relations solides et durables avec quelques
            entreprises leaders.
          </p>
        </article>
        <article className="art">
          <h6 className="sub-title">Nos compétences</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
            sodales tortor. Nunc vitae magna vel magna fringilla condimentum.
            Sed interdum augue sit amet lorem elementum, id commodo ipsum
            auctor. Praesent non ultricies libero. Praesent augue felis, auctor
            non tempus eget, auctor at ante.
          </p>
        </article>
        <article className="art">
          <h6 className="sub-title">Notre équipe</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
            sodales tortor. Nunc vitae magna vel magna fringilla condimentum.
            Sed interdum augue sit amet lorem elementum, id commodo ipsum
            auctor. Praesent non ultricies libero. Praesent augue felis.
          </p>
        </article>
      </section>
    </div>
  );
};

export default Apropos;
