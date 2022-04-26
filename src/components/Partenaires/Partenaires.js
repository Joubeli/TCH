import React, { useEffect } from "react";
import "../../App.css";
import "aos/dist/aos.css";
import Aos from "aos";
import "./Partenaires.css";
import { Partners } from "../../data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import Item from "./Item"
import part1 from "../../images/Partenaires/HLMT.png";
import part2 from "../../images/Partenaires/TESA.png";
import part3 from "../../images/Partenaires/KIM.png";
import part4 from "../../images/Partenaires/SYLVAC.png";
import part5 from "../../images/Partenaires/KSTOOL.png";
import part6 from "../../images/Partenaires/WESAG.png";
import part7 from "../../images/Partenaires/LAKES.svg";
import part8 from "../../images/Partenaires/VALENTIN.svg";
import part9 from "../../images/Partenaires/MIBOSTAHL.png";
import part10 from "../../images/Partenaires/LISTA.svg";
import part11 from "../../images/Partenaires/BIMOS.png";
import part12 from "../../images/Partenaires/TB.jpg";
import part13 from "../../images/Partenaires/METZNER.png";
import part14 from "../../images/Partenaires/RAMATECH.svg";
import part15 from "../../images/Partenaires/OES.svg";
import part16 from "../../images/Partenaires/ARTOS.png";
import part17 from "../../images/Partenaires/DINO.jpg";
import part18 from "../../images/Partenaires/FACOM.png";
import part19 from "../../images/Partenaires/BOSCH.png";
import part20 from "../../images/Partenaires/MAKITA.png";



const Partenaires = () => {

  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 1000,
    cssEase: 'ease-in-out',
    arrows: false,
    variableWidth: true,
    loop:true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
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
    <section className="sec-part" id="partenaires">
      <h2 data-aos="fade-up" className="section-title">
        Nos Partenaires
      </h2>
      <p data-aos="fade-up" className="sec-sub-title">
        Nous Sommes les Représenatnt Officiels de :
      </p>
      <div className="Partner-Slider-container" data-aos="fade-up">
        <Slider {...settings}  className='slick-slider'>
        {/* {Partners.map((partner) => (
            <Item partner={partner} />
          ))} */}
          <div style={{ width: 520 }}>
            <a target="_blank" href="https://www.hellermanntyton.com/">
              <img style={{paddingTop:'7%'}} src={part1} alt="logo" />
            </a>
          </div>
          <div style={{ width: 430 }}>
            <a target="_blank" href="https://www.tesa.com/fr-fr">
              <img src={part2} alt="logo" />
            </a>
          </div>
          <div style={{ width: 280 }}>
            <a target="_blank" href="https://www.kimberly-clark.com/de-de/germany">
              <img style={{paddingTop:'20%'}} src={part3} alt="logo" />
            </a>
          </div>
          <div style={{ width: 300 }}>
            <a target="_blank" href="https://www.sylvac.ch/">
              <img style={{paddingTop:'11%'}} src={part4} alt="logo" />
            </a>
          </div>
          <div style={{ width: 220 }}>
            <a target="_blank" href="https://www.kstools.fr/">
              <img style={{paddingTop:'15%'}} src={part5} alt="logo" />
            </a>
          </div>
          <div style={{ width: 350 }}>
            <a target="_blank" href="https://www.wezag.de/">
              <img src={part6} alt="logo" />
            </a>
          </div>
          <div style={{ width: 400 }}>
            <a target="_blank" href="https://www.lakesprecision.com/">
              <img style={{paddingTop:'5%', marginRight:'10%'}} src={part7} alt="logo" />
            </a>
          </div>
          <div style={{ width: 380 }}>
            <a target="_blank" href="https://www.carl-valentin.de/startseite/">
              <img style={{paddingTop:'9%', marginRight:'10%'}} src={part8} alt="logo" />
            </a>
          </div>
          <div style={{ width: 450 }}>
            <a target="_blank" href="https://mibostahl.com/fr/">
              <img style={{paddingTop:'7%'}} src={part9} alt="logo" />
            </a>
          </div>
          <div style={{ width: 250}}>
            <a target="_blank" href="https://www.lista.com/fr/">
              <img style={{paddingTop:'25%'}} src={part10} alt="logo" />
            </a>
          </div>
          <div style={{ width: 180 }}>
            <a target="_blank" href="https://www.bimos.com/B/fr-fr/index.php">
              <img style={{paddingTop:'32%'}} src={part11} alt="logo" />
            </a>
          </div>
          <div style={{ width: 460 }}>
            <a target="_blank" href="https://tomasbodero.com/es/">
              <img style={{paddingTop:'8%'}} src={part12} alt="logo" />
            </a>
          </div>
          <div style={{ width: 340 }}>
            <a target="_blank" href="https://metzner.com/index.php/de/">
              <img width='300px' style={{paddingTop:'20%'}} src={part13} alt="logo" />
            </a>
          </div>
          <div style={{ width: 380 }}>
            <a target="_blank" href="https://www.ramatech.ch/index.php/de/">
              <img width='350px' style={{paddingTop:'7%'}} src={part14} alt="logo" />
            </a>
          </div>
          <div style={{ width: 230 }}>
            <a target="_blank" href="https://www.oes-inc.com/">
              <img width='200px' style={{paddingTop:'21%'}} src={part15} alt="logo" />
            </a>
          </div>
          <div style={{ width: 250 }}>
            <a target="_blank" href="https://www.artosengineering.com/">
              <img width='200px' style={{paddingTop:'11%'}} src={part16} alt="logo" />
            </a>
          </div>
          <div style={{ width: 200 }}>
            <a target="_blank" href="https://www.dino-lite.com/">
              <img style={{paddingTop:'17%'}} src={part17} alt="logo" />
            </a>
          </div>
          <div style={{ width: 210 }}>
            <a target="_blank" href="https://www.facom.com/">
              <img style={{paddingTop:'20%'}} src={part18} alt="logo" />
            </a>
          </div>
          <div style={{ width: 320 }}>
            <a target="_blank" href="https://www.bosch.com/">
              <img src={part19} alt="logo" />
            </a>
          </div>
          <div style={{ width: 150 }}>
            <a target="_blank" href="https://www.makitatools.com/">
              <img style={{paddingTop:'25%'}} src={part20} alt="logo" />
            </a>
          </div>
          </Slider>
      </div>      
    </section>
  );
};

export default Partenaires;
