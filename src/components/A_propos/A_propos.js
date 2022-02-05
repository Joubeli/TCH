import React, { useEffect } from "react";
import "../../App.css";
import "aos/dist/aos.css";
import Aos from "aos";
import "./A_propos.css";
const Apropos = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section
      className="sec-apropos"
      id="apropos"
    >
      <h2 data-aos="fade-up" className="section-title">
        A propos
      </h2>
      <div className="sec1">
        <article data-aos="fade-up" className="art">
          <h6 className="sub-title">Notre mission</h6>
          <div className="desc-apropos">
            <p>
              Est de pouvoir offrir un service de haute qualité de bout en bout
              aux clients de la région. Pour réaliser cela, nous nous
              concentrons sur la création de relations solides et durables avec
              quelques entreprises leaders.
            </p>
          </div>
        </article>
        <article data-aos="fade-up" className="art">
          <h6 className="sub-title">Nos compétences</h6>
          <p className="desc-apropos">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
            sodales tortor. Nunc vitae magna vel magna fringilla condimentum.
            Sed interdum augue sit amet lorem elementum, id commodo ipsum
            auctor. Praesent non ultricies libero. Praesent augue felis, auctor
            non tempus eget, auctor at ante.
          </p>
        </article>
        <article data-aos="fade-up" className="art">
          <h6 className="sub-title">Notre équipe</h6>
          <p className="desc-apropos">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
            sodales tortor. Nunc vitae magna vel magna fringilla condimentum.
            Sed interdum augue sit amet lorem elementum, id commodo ipsum
            auctor. Praesent non ultricies libero. Praesent augue felis.
          </p>
        </article>
      </div>
    </section>
  );
};
export default Apropos;
