import React from "react";
import "../../App.css";
import "./Accueil.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image1 from '../../images/Accueil/1.jpg'
import image2 from '../../images/Accueil/2.jpg'
import image3 from '../../images/Accueil/3.jpg'
import prod1 from '../../images/TopProduits/prod1.png'
import prod2 from '../../images/TopProduits/prod2.jpg'
import prod3 from '../../images/TopProduits/prod3.png'
import prod4 from '../../images/TopProduits/prod4.png'
import prod5 from '../../images/TopProduits/prod5.png'
import prod6 from '../../images/TopProduits/prod6.png'
import prod7 from '../../images/TopProduits/prod7.jpg'
import prod8 from '../../images/TopProduits/prod8.png'
import prod9 from '../../images/TopProduits/prod9.jpg'
import prod10 from '../../images/TopProduits/prod10.jpg'
import part1 from '../../images/TopProduits/part1.png'
import part2 from '../../images/TopProduits/part2.png'
import part3 from '../../images/TopProduits/part3.png'
import part4 from '../../images/TopProduits/part4.png'
import part5 from '../../images/TopProduits/part5.png'
import part6 from '../../images/TopProduits/part6.png'

const Accueil = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: false,
    prevArrow: false,
    fade: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <section className="top-accueil" id="accueil">
      <div className="sec-accueil">
        <Slider className="slider-acceuil" {...settings}>
          <div className="container">
            <div className="center">
              <img className="image-slider" src={image1} alt='accueil'/>
              <p className="message-accueil">Un système de câblage automobile / aéronautique. Le coeur de notre activité</p>
            </div>
          </div>
          <div className="container">
              {/* <h1 className="message-accueil">Un système de câblage automobile / aéronautique. Le coeur de notre activité</h1> */}
            {/* <div className="center">
              <img className="image-slider" src={image2} alt='accueil'/>
            </div> */}
          </div>
          <div className="container">
              {/* <h1 className="message-accueil">Un système de câblage automobile / aéronautique. Le coeur de notre activité</h1> */}
            {/* <div className="center">
              <img className="image-slider" src={image3} alt='accueil'/>
            </div> */}
          </div>
        </Slider>        
      </div>
      <div className="sec-ppv">
        <h2 data-aos="fade-up" className="section-title">
          Les Produits les plus vendus 
        </h2>
        <div className='top-prod' data-aos="fade-up">
            <div className='prod' style={{backgroundColor:'white'}}>
                <img src={prod1} alt='produit' />
                <div className='prodHovered' >
                    <img className='prod-part' src={part1} />
                </div>
            </div>
            <div className='prod'>
                <img src={prod2} alt='produit' />
                <div className='prodHovered' >
                    <img className='prod-part' src={part2} />
                </div>
            </div>
            <div className='prod'>
                <img src={prod3} alt='produit' />
                <div className='prodHovered' >
                    <img className='prod-part' src={part6} />
                </div>

            </div>
            <div className='prod'>
                <img src={prod4} alt='produit' />
                <div className='prodHovered' >
                    <img className='prod-part' src={part4} />
                </div>
            </div>
            <div className='prod'>
                <img src={prod5} alt='produit' />
                <div className='prodHovered' >
                    <img className='prod-part' src={part3} />
                </div>
            </div>
            <div className='prod' style={{backgroundColor:'white'}}>
                <img src={prod6} alt='produit' />
                <div className='prodHovered' >
                    <img className='prod-part' src={part1} />
                </div>
            </div>
            <div className='prod' style={{backgroundColor:'#e6e6e6'}}>
                <img src={prod7} alt='produit' />
                <div className='prodHovered' >
                    <img className='prod-part' src={part2} />
                </div>
            </div>
            <div className='prod' style={{backgroundColor:'#e6e6e6'}}>
                <img src={prod8} alt='produit' style={{marginTop:'12%'}}  />
                <div className='prodHovered' >
                    <img className='prod-part' src={part6} />
                </div>
            </div>
            <div className='prod' style={{backgroundColor:'white'}}>
                <img src={prod9} alt='produit' />
                <div className='prodHovered' >
                    <img className='prod-part' src={part5} />
                </div>
            </div>
            <div className='prod'>
                <img src={prod10} alt='produit' />
                <div className='prodHovered' >
                    <img className='prod-part' src={part3} />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Accueil;
