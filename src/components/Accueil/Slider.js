import React from 'react'

const Slider = () => {
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
        speed: 8000,
        autoplaySpeed: 1000,
      };
  return (
     
    <Slider className="slider-acceuil" {...settings}>
    <div className="container">
      {/* <div className="center"> */}
        <img className="image-slider" src={image1} alt='accueil'/>
        <h1 className="message-accueil message-1">Un système de câblage automobile et aéronautique est le coeur de notre activité.</h1>
      {/* </div> */}
    </div>
    <div className="container">
      {/* <div className="center"> */}
        <img className="image-slider" src={image2} alt='accueil'/>
        <h1 className="message-accueil message-2">Nous importons des produits autant que nous exportons, et ce toujours en temps record.</h1>
      {/* </div> */}
    </div>
    <div className="container">
      {/* <div className="center"> */}
        <img className="image-slider" src={image3} alt='accueil'/>
        <h1 className="message-accueil message-3" >Un personnel de très haut calibre à votre disposition.</h1>
      {/* </div> */}
    </div>
  </Slider>
  )
}

export default Slider