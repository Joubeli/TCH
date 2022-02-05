import React, { useEffect } from 'react';
import '../../App.css'
import 'aos/dist/aos.css'
import Aos from 'aos'
import './Produits.css'
import { Carousel } from 'react-bootstrap'
const Produits = () => {
    useEffect(() => {
      Aos.init({ duration: 2000 })
    }, [])  
    return (
      <section className='sec-produits' id='produits'>
          <h2 data-aos='fade-up' className='section-title'>Produits</h2>
          <Carousel  data-aos='fade-up'  variant="dark" style={{height:'500px'}}>
            <Carousel.Item>
              <div class="row row-cols-1 row-cols-md-3 g-4" >
                <div class="col">
                  <div class="card">
                    <img src="https://media.istockphoto.com/photos/group-of-yellow-and-green-earth-cables-picture-id531858082?k=20&m=531858082&s=612x612&w=0&h=B96KTn-6fATaRq-WpBbO0D_Rxty_-PaKZgQyy6tVl9k=" class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">
                        This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.

                      </p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card">
                    <img src="https://media.istockphoto.com/photos/group-of-blue-electric-cables-picture-id533989008?k=20&m=533989008&s=612x612&w=0&h=spaJX4WCzsXLVX5CZlS1KOr5ye3hCRuqEl_xQe9Hf08=" class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">
                        This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card">
                    <img src="https://media.istockphoto.com/photos/stripped-electrical-cable-used-in-electrical-systems-picture-id503071925?k=20&m=503071925&s=612x612&w=0&h=WX7fD1cUhBukqoktFVkpU4knbIljf2L14g48ItfVumU=" class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">
                        This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.

                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                  <div class="card">
                    <img src="https://media.istockphoto.com/photos/corrugated-pipe-with-cables-picture-id499086067?k=20&m=499086067&s=612x612&w=0&h=X3gwD9TJGhMzetFrcJ2DrHCIxO03Hw4AYvpOiYD-mu8=" class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">
                        This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.

                      </p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card">
                    <img src="https://media.istockphoto.com/photos/corrugated-pipe-with-cables-picture-id509292817?k=20&m=509292817&s=612x612&w=0&h=wr8ug7ofT3wj00pttlVtVg0OqUco1VHzl_N9vDmOumw=" class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">
                        This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card">
                    <img src="https://media.istockphoto.com/photos/orange-electrical-wires-with-cable-shield-picture-id529648337?k=20&m=529648337&s=612x612&w=0&h=NfB1BInPyxlLOSeGwPcf103tvPNNZotnIc2gVHRyGEM=" class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">
                        This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                      
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                  <div class="card">
                    <img src="https://media.istockphoto.com/photos/electrical-wire-picture-id182347807?k=20&m=182347807&s=612x612&w=0&h=JzFQTxF9BZXjDgMU4cbQhBXZjQvMsH0Yci-UHHGnkbE=" class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">
                        This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card">
                    <img src="https://media.istockphoto.com/photos/electric-wires-with-terminals-picture-id512361729?k=20&m=512361729&s=612x612&w=0&h=aCui8XTRvlBYKpPIRMBEchqRXLTzVMBsaR2Agdppk-U=" class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">
                        This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card">
                    <img src="https://media.istockphoto.com/photos/joining-electrical-wires-with-twisting-wire-nuts-picture-id1184331655?k=20&m=1184331655&s=612x612&w=0&h=1CmdJvPkikdqqUpjsNehvVsOwD8fVzNR1LE-3ZzZru0=" class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">
                        This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
      </section>
    )    
  };
  
  export default Produits;