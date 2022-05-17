import React, { useEffect } from 'react'
import "../../App.css";
import "./Produits.css";
import Aos from "aos";
import prod1 from '../../images/Produits/prod1.jpg'
import prod2 from '../../images/Produits/prod2.jpg'
import prod3 from '../../images/Produits/prod3.jpg'
import prod4 from '../../images/Produits/prod4.jpg'
import prod5 from '../../images/Produits/prod5.jpg'

const PPV = () => {
    useEffect(() => {
      Aos.init({ duration: 2000 });
    }, []);
  return (
    <section className='sec-ppv'>
        <h2 data-aos="fade-up" className="section-title">
           Nos Top Produits
        </h2>
        <div className='top-prod' data-aos="fade-up">
            <div className='prod'>
                <img src={prod1} height='180px' alt='produit' />
                <div className='prodHovered' >
                    
                </div>
            </div>
            <div className='prod'>
                <img src={prod2} height='180px' alt='produit' />
                <div className='prodHovered' ></div>

            </div>
            <div className='prod'>
                <img src={prod3} height='180px' alt='produit' />
                <div className='prodHovered' ></div>

            </div>
            <div className='prod'>
                <img src={prod4} height='180px' alt='produit' />
                <div className='prodHovered' ></div>
            </div>
            <div className='prod'>
                <img src={prod5} height='180px' alt='produit' />
                <div className='prodHovered' ></div>
            </div>
        </div>
    </section>
  )
}

export default PPV