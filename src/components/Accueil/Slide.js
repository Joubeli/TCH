import React from 'react'
import "./Accueil.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import image1 from '../../images/Accueil/1.jpg'
import image2 from '../../images/Accueil/2.jpg'
import image3 from '../../images/Accueil/3.jpg'
const Slide = () => {
  return (
    <>
      <Carousel>
        <div className='image'>
          <img src={image1} />
          <h1 className="message-accueil message-1">Un système de câblage automobile et aéronautique est le coeur de notre activité.</h1>
        </div>
        <div>
          <img src={image2} />
          <h1 className="message-accueil message-2">Nous importons des produits autant que nous exportons, et ce toujours en temps record.</h1>
        </div>
        <div>
          <img src={image3} />
          <h1 className="message-accueil message-3">Un personnel de très haut calibre à votre disposition.</h1>
        </div>
      </Carousel>
    </>
  )
}
export default Slide