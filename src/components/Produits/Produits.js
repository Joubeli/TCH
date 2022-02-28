import React, { useEffect } from "react";
import "../../App.css";
import "aos/dist/aos.css";
import Aos from "aos";
import "./Produits.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Item from './Item'
import { Products } from '../../data'
// import img2 from "../../images/Produits/blue_cable.jpg";
// import img3 from "../../images/Produits/black_orange_cable.jpg";
// import img4 from "../../images/Produits/colorful_mini_cables.jpg";
// import img5 from "../../images/Produits/colorful_mixed_mini_cables.jpg";
// import img6 from "../../images/Produits/electrical_wire.jpg";
// import img7 from "../../images/Produits/orange_electrical_wires.jpg";

const Produits = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1120,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  return (
    <section className="sec-produits" id="produits">
      <h2 data-aos="fade-up" className="section-title">
        Produits
      </h2>
      <div data-aos="fade-up">
        <Slider  {...settings}>         
            {Products.map(product => (
              <Item product={product}/>
            ))}          
        </Slider>
      </div>
    </section>
  );
};

export default Produits;
