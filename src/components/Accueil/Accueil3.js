import React from "react";
import "../../App.css";
import "./Accueil2.css";
import fond1 from "../../images/Accueil/fond.jpg";
import fond2 from "../../images/Accueil/fond2.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Accueil = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
  };
  return (
    <section className="sec-accueil" id="accueil">
      {/* <Slider {...settings}>
        <div className="fond1">
          <img src={fond1} />
        </div>
        <div className="fond1">
          <img src={fond2} />
        </div>
      </Slider> */}
    </section>
  );
};
export default Accueil;
