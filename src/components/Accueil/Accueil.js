import React, { useEffect } from "react";
import "../../App.css";
import { Prod } from "../../data";
import Product from "./Product";
import Aos from "aos";
import Slide from "./Slide";

const Accueil = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="sec-accueil" id="accueil">
      <Slide/>
      <div className="sec-ppv">
        <h2 data-aos="fade-up" className="section-title">
          Les Produits les plus vendus 
        </h2>
        <div className='top-prod' data-aos="fade-up">            
            {Prod.map((prod) => (
                <Product prod={prod} />
            ))}                
        </div>
      </div>
    </section>
  );
};

export default Accueil;
