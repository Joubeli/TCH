import React from "react";
import "../../App.css";
import "./Accueil.css";
import ph4 from "../../images/Accueil/ph4.jpg";
import ph5 from "../../images/Accueil/ph5.jpg";
import logo from "../../images/Accueil/logo.png";
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
  return (
    <section className="top-accueil" id="accueil">
      <div className="sec-accueil">
        <div className="titles">
          <h1 className="accueil-title">
            Nous Sommes Une Entreprise Tunisienne Privée
          </h1>
          <h5 className="accueil-subtitle">
            Est une société de commerce international, totalement
            exportatrice opérant depuis 2013, dans le domaine de l’équipement,
            l’outillage, la fourniture industrielle.
            <br />
            De plus, TCH INDUSTRIES, partenaire exclusif d’item en Tunisie,
            conçoit et réalise des sous-ensembles industriels modulaires. 
            <br />
            Dotée d’un magasin et animée par une équipe d’ingénieurs et techniciens et
            technico-commerciales.
          </h5>
        </div>
        <div className="photos">
          <div className="photo4">
            <img className="photo-accueil4" src={ph4} />
          </div>
            <img className="photo-accueil5" src={ph5} />
        </div>
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
