import React, { useEffect } from 'react'
import "../../App.css";
import "./Produits.css";
import Aos from "aos";

const PPV = () => {
    useEffect(() => {
      Aos.init({ duration: 2000 });
    }, []);
  return (
    <div>
        <h2 data-aos="fade-up" className="section-title">
           Nos Top Produits
        </h2>
        <div className='top-prod'>

        </div>
    </div>
  )
}

export default PPV