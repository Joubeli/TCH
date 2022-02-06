import React, { useEffect } from 'react';
import 'aos/dist/aos.css'
import Aos from 'aos'
import '../../App.css'
import './QuiSommesNous.css'
import founder from '../../images/QuiSommesNous/founder.jpg'
import manager from '../../images/QuiSommesNous/manager.jpg'
import responsable from '../../images/QuiSommesNous/responsable.jpg'
import ingénieur from '../../images/QuiSommesNous/ingénieur.jpg'
import sales from '../../images/QuiSommesNous/sales.jpg'
import technicien from '../../images/QuiSommesNous/technicien.jpg'

const QuiSommesNous = () => {
  
    useEffect(() => {
      Aos.init({ duration: 2000 })
    }, [])

    return (
      <section className='sec-quisommesnous' id='quisommesnous'>
          <h2 data-aos='fade-up'  className='section-title'>Qui Sommes Nous</h2>
          <h6 data-aos='fade-up' className='sec-sub-title'style={{marginTop:'1%'}}>Direction Exécutive</h6>
          <div className="cartes "  data-aos='zoom-in'  style={{marginTop:'2%'}}>
            <div className="carte">
              <img src={founder} alt="profil" className="profil-photo" />
              <div className='description'>
                <h6 className='carte-title'>Abdessalem Barkia</h6>
                <p className='carte-sub-title'>Fondateur</p>
                <hr className='line'/>
                <a rel="noopener noreferrer" href='https://www.linkedin.com/in/abdessalembarkia/' target='_blank'><svg className='linkedin-link' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill='#37517e' d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"/></svg></a>
              </div>
            </div>
            <div className="carte">
              <img src={manager} alt="profil" className="profil-photo" />
              <div className='description'>
                <h6 className='carte-title'>Rajander Thind</h6>
                <p className='carte-sub-title'>Directeur</p>
                <hr className='line'/>
                <a rel="noopener noreferrer" href='https://www.linkedin.com/in/rajander-thind-4822a37b/' target='_blank'><svg className='linkedin-link' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill='#37517e' d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"/></svg></a>
              </div>
            </div>
            <div className="carte">
              <img src={responsable} alt="profil" className="profil-photo" />
                <div className='description' style={{marginTop:'-8%'}}>
                  <h6 className='carte-title'>Mariem Chbinou</h6>
                  <p className='carte-sub-title'>Responsable Administratif et Financier</p>
                  <hr className='line'/>
                  <a rel="noopener noreferrer" href='https://www.linkedin.com/in/mariem-chbinou-33a1a2148/' target='_blank'><svg className='linkedin-link' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill='#37517e' d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"/></svg></a>
                </div>
              </div>
            </div>
          <h6 style={{marginTop:'5%'}} data-aos='fade-up' className='sec-sub-title'>Ingénieur / Commercial / Technicien</h6>
          <div className="cartes" style={{marginTop:'2%'}} data-aos='zoom-in'  >
            <div className="carte">
              <img src={ingénieur} alt="profil" className="profil-photo" />
              <div className='description' style={{marginTop:'-8%'}}>
                <h6 className='carte-title'>Hichem Nahali</h6>
                <p className='carte-sub-title'>Ingénieur Technico-commercial</p>
                <hr className='line'/>
                <a rel="noopener noreferrer" href='https://www.linkedin.com/in/hichem-nahali-5ba791124/' target='_blank'><svg className='linkedin-link' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill='#37517e' d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"/></svg></a>
              </div>
            </div>
            <div className="carte">
              <img src={sales} alt="profil" className="profil-photo" />
              <div className='description'>
                <h6 className='carte-title'>M'Hammed M'saad</h6>
                <p className='carte-sub-title'>Ingénieur Commercial</p>
                <hr className='line'/>
                <a rel="noopener noreferrer" href='https://www.linkedin.com/in/m-hammed-m-saad-813a75154/' target='_blank'><svg className='linkedin-link' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill='#37517e' d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"/></svg></a>
              </div>
            </div>
            <div className="carte">
              <img src={technicien} alt="profil" className="profil-photo" />
              <div className='description' style={{marginTop:'-8%'}}>
                <h6 className='carte-title'>Mohamed Houssem Bakir </h6>
                <p className='carte-sub-title'>Technico-commercial</p>
                <hr className='line'/>
                <a rel="noopener noreferrer" href='https://www.linkedin.com/in/mohamed-houssem-bakir-59063a128/' target='_blank'><svg className='linkedin-link' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill='#37517e' d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"/></svg></a>
              </div>
            </div>
          </div>
          <h6 data-aos='fade-up' className='sec-sub-title' style={{marginTop:'3%'}}>Assistante</h6>
          <div className="cartes " style={{marginTop:'2%', marginLeft:'37%'}} data-aos='zoom-in'  >
            <div className="carte">
              <div className='description'>
                <h6 className='carte-title'>Jihen Ben Mahmoud</h6>
                <p className='carte-sub-title'>Assistante administrative et financière</p>
                <hr className='line' style={{marginTop:'15%', marginBottom:'10%', width:'25%'}} />
                <a rel="noopener noreferrer" href='https://www.linkedin.com/in/jihen-ben-mahmoud-8199b921a/' target='_blank'><svg className='linkedin-link' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill='#37517e' d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"/></svg></a>
              </div>
            </div>
          </div>

          
      </section>
    )    
  };
  
  export default QuiSommesNous;