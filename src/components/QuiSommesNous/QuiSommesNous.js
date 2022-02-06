import React, { useEffect } from 'react';
import 'aos/dist/aos.css'
import Aos from 'aos'
import '../../App.css'

const QuiSommesNous = () => {
  
    useEffect(() => {
      Aos.init({ duration: 2000 })
    }, [])

    return (
      <section className='sec-quisommesnous' id='quisommesnous' style={{height:'500px', paddingTop:'90px'}}>
          <h2 data-aos='fade-up'  className='section-title'>Qui Sommes Nous</h2>
      </section>
    )    
  };
  
  export default QuiSommesNous;