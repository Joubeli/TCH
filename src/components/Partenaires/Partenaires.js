import React, { useEffect } from 'react';
import '../../App.css'
import 'aos/dist/aos.css'
import Aos from 'aos'
import './Partenaires.css'
import Artos from '../../images/Partenaires/artos.png'
import TechS from '../../images/Partenaires/TechS.png'
import Kortho from '../../images/Partenaires/kortho.png'
import Sumake from '../../images/Partenaires/sumake.png'
import aos from '../../images/Partenaires/aos.png'
import hk from '../../images/Partenaires/hk.png'


const Partenaires = () => {
  
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (      
      <section className='sec-part' id='partenaires'>
          <h2 data-aos='fade-up' className='section-title'>Nos Partenaires</h2>
          <p data-aos='fade-up'  className='sec-sub-title'>Nous Sommes les Représenatnt Officiels de :</p>

          <div className='partners-row' data-aos='fade-up' >

            <div className='partners'>
              <a href='#'><img className='grayscale artos' src={Artos} alt="artos-logo" /></a>
            </div>

            <div className='partners'>
              <a href='#'><img className='grayscale techS' src={TechS} alt="techsonic-logo" /></a>
            </div>
          
            <div className='partners '>
              <a href='#'>
                <img className='grayscale kortho' src={Kortho} alt="kortho-logo" />
              </a>
            </div>

        </div>

        <div className='partners-row' data-aos='fade-up' >

          <div className='partners '>
            <a href='#'>
              <img className='grayscale sumake' src={Sumake} alt="sumake-logo" />
            </a>
          </div>

          <div className='partners '>
            <a href='#'>
              <img className='grayscale aos' src={aos} alt="aos-logo" />
            </a>
          </div>

          <div className='partners '>
            <a href='#'>
              <img className='grayscale hk' src={hk} alt="aos-logo" />
            </a>
          </div>

        </div>
      </section>
    )    
  };
  
  export default Partenaires;