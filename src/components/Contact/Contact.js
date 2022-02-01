import React, { useEffect } from 'react';
import '../../App.css'
import './Contact.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import map from '../../images/map.png'
import { Form } from 'react-bootstrap'


const Contact = () => {


    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    

    return (
      <section className='sec-contact' id='contact'>
          <h2 data-aos='fade-up'  className='section-title'>Contact</h2>          
          <p data-aos='fade-up'  className='sec-sub-title contact-sub-title'>Contactez-Nous Pour Plus D'information</p>
          <div className='content-contact'>
            <section data-aos='fade-up' className='coord sec'>    
              <div className="sub-sec" style={{marginTop:'20px'}}>
                <svg style={{marginTop:'25px',marginLeft:'8%'}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#459baa" d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>  
                <div className='desc'>
                  <h6 className="subtitle">Location : </h6>
                  <p className='desc-sub' style={{marginBottom:'-3%'}}>Tunisie</p>
                  <p className='desc-para' >Rue de parc<br/> 2036 La Soukra</p>
                </div>
              </div> 
              <div className="sub-sec">
                <svg style={{marginTop:'20px',marginLeft:'8%'}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill='#459baa' d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z"/></svg> 
                <div className='desc'>
                  <h6 className="subtitle">Email : </h6>
                  <p className='desc-para' >info@tchindustries.com</p>
                </div>
              </div>    
              <div className="sub-sec">
                <svg style={{marginTop:'20px',marginLeft:'8%'}}  xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill='#459baa' d="M18.48 22.926l-1.193.658c-6.979 3.621-19.082-17.494-12.279-21.484l1.145-.637 3.714 6.467-1.139.632c-2.067 1.245 2.76 9.707 4.879 8.545l1.162-.642 3.711 6.461zm-9.808-22.926l-1.68.975 3.714 6.466 1.681-.975-3.715-6.466zm8.613 14.997l-1.68.975 3.714 6.467 1.681-.975-3.715-6.467z"/></svg>
                <div className='desc'>
                  <h6 className="subtitle">Appelez : </h6>
                  <p className='desc-para' >
                    +216 29 25 88 86<br/>
                    +216 28 54 49 79
                  </p>
                </div>
              </div> 
              <img className='map-sec' src={map} />            
            </section>
            <section data-aos='fade-up' className='form sec'> 
              <Form>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                <Form.Group style={{textAlign:'left'}}> 
                  <Form.Label className='sec-sub-title sub-title-form'>Votre Nom :  </Form.Label>
                  <Form.Control type="text" style={{width:'260px'}} />
                </Form.Group>
                <Form.Group style={{textAlign:'left'}}>
                  <Form.Label className='sec-sub-title sub-title-form'>Votre Email : </Form.Label>
                  <Form.Control type="email" style={{width:'260px'}} />
                </Form.Group>
                </div>
                <Form.Group style={{textAlign:'left', marginTop:'20px'}}> 
                  <Form.Label className='sec-sub-title sub-title-form'>Sujet :  </Form.Label>
                  <Form.Control type="text" style={{width:'540px'}} />
                </Form.Group>
                <Form.Group style={{textAlign:'left', marginTop:'20px'}}> 
                  <Form.Label className='sec-sub-title sub-title-form'>Message :  </Form.Label>
                  <Form.Control as="textarea" rows={13} style={{width:'540px'}} />
                </Form.Group>
              </Form>  
              <button style={{marginTop:'20px', marginBottom:'-10px'}} type='submit' class="button" role="button">Envoyer</button>
            </section>
          </div>
      </section>
    )    
  };
  
  export default Contact;