import React, { useEffect } from "react";
import "../../App.css";
import "aos/dist/aos.css";
import Aos from "aos";
import "./Produits.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Item from "./Item";
import { Products } from "../../data";
import next from "../../images/Produits/next.png";
import prev from "../../images/Produits/prev.png";
const Produits = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <img alt="arrow" className="nextArrow" src={next} />,
    prevArrow: <img alt="arrow" className="prevArrow" src={prev} />,
    responsive: [
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="sec-produits" id="produits">
      <h2 data-aos="fade-up" className="section-title">
        Produits
      </h2>
      <div className="Slider-container" data-aos="fade-up">
        <Slider className="slider" {...settings}>
          {Products.map((product) => (
            <Item product={product} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Produits;
