import React from "react";
import "../../App.css";
import "./Accueil.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import image1 from '../../images/Accueil/11.jpg'
// import image2 from '../../images/Accueil/22.jpg'
// import image3 from '../../images/Accueil/33.jpg'
import { Prod } from "../../data";
import Product from "./Product";
import Slide from "./Slide";
// import Item from "./Item";



const Accueil = () => {
  
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
