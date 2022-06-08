import React, { useEffect } from 'react'
import "../../App.css";
import "./Produits.css";
import Aos from "aos";
import prod1 from '../../images/TopProduits/prod1.png'
import prod2 from '../../images/TopProduits/prod2.jpg'
import prod3 from '../../images/TopProduits/prod3.png'
import prod4 from '../../images/TopProduits/prod4.png'
import prod5 from '../../images/TopProduits/prod5.jpg'
import prod6 from '../../images/TopProduits/prod6.png'
import prod7 from '../../images/TopProduits/prod7.jpg'
import prod8 from '../../images/TopProduits/prod8.png'
import prod9 from '../../images/TopProduits/prod9.png'
import prod10 from '../../images/TopProduits/prod10.jpg'
import part1 from '../../images/TopProduits/part1.png'
import part2 from '../../images/TopProduits/part2.png'
import part3 from '../../images/TopProduits/part3.png'
import part4 from '../../images/TopProduits/part4.png'
import part5 from '../../images/TopProduits/part5.png'
import part6 from '../../images/TopProduits/part6.png'

const PPV = () => {
    useEffect(() => {
      Aos.init({ duration: 2000 });
    }, []);
  return (
    <section className='sec-ppv'>
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
                    <img className='prod-part' src={part5} />
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
                    <img className='prod-part' src={part3} />
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
                    <img className='prod-part' src={part3} />
                </div>
            </div>
            <div className='prod'>
                <img src={prod10} alt='produit' />
                <div className='prodHovered' >
                    <img className='prod-part' src={part2} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default PPV