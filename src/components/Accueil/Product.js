import React, { useEffect }  from 'react'
import Aos from "aos";
import './Accueil.css'

const Product = ({prod}) => {
  useEffect(() => {
  Aos.init({ duration: 3000 });
}, []);
  return (
    <>
        <div data-aos="fade-up" className='prod'>
            <img src={prod.image1} alt='produit' />
            <a href={prod.partLink} rel="noopener noreferrer" target="_blank">
              <div className='prodHovered' >
                  <img className='prod-part' src={prod.image2} alt='partner logo' />
              </div>
            </a>
        </div>
    </>
  )
}

export default Product