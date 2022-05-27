import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import "../../App.css";
import "./QuiSommesNous.css";
import linkedin_icon from "../../images/QuiSommesNous/linkedin_icon.png";
import email_icon from "../../images/QuiSommesNous/email_icon.png";
import Staff from "../../data"

const QuiSommesNous = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="sec-quisommesnous" id="quisommesnous">
      <h2 data-aos="fade-up" className="section-title">
        Qui Sommes Nous
      </h2>
      <div className="staff">
        <div className="spec_line">          
          <div className="cartes">
            <div className="carte" data-aos="zoom-in">
              <div className="carte-ind">
                <img src={founder} alt="profil" className="profil-photo"/>
                <div className="description">
                  <div className="carte-top">
                    <h6 className="carte-title">Abdessalem BARKIA</h6>
                    <p className="carte-sub-title ">Fondateur</p>
                  </div>
                  <div className="carte-bottom">
                    <hr className="line" />
                    <a
                      rel="noopener noreferrer"
                      href="https://www.linkedin.com/in/abdessalembarkia/"
                      target="_blank"
                    >
                      <img
                        className="linkedin-link"
                        src={linkedin_icon}
                        width="24px"
                        height="24px"
                        alt="linkedin_icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="spec_line">
          
          <div className="cartes">
            <div className="carte last_carte" data-aos="zoom-in">
              <div className="carte-ind ">
                <div className="description">
                  <div className="carte-top">
                    <h6 className="carte-title">Aroua BEN OTHMAN</h6>
                    <p className="carte-sub-title">
                    Administration des vents
                    </p>
                  </div>
                  <div className="carte-bottom">
                    <hr className="line" />
                    <a
                      rel="noopener noreferrer"
                      href={user_mail}
                      target="_blank"
                    >
                      <img
                        className="linkedin-link last-carte-linkedin"
                        src={email_icon}
                        alt="linkedin_icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
            <div className="carte" data-aos="zoom-in">
              <div className="carte-ind">
                <img src={responsable} alt="profil" className="profil-photo" />
                <div className="description">
                  <div className="carte-top">
                    <h6 className="carte-title">Mariem Chbinou</h6>
                    <p className="carte-sub-title">
                      Responsable Administratif et Financier
                    </p>
                  </div>
                  <div className="carte-bottom">
                    <hr className="line" />
                    <a
                      rel="noopener noreferrer"
                      href="https://www.linkedin.com/in/mariem-chbinou-33a1a2148/"
                      target="_blank"
                    >
                      <img
                        className="linkedin-link"
                        src={linkedin_icon}
                        width="24px"
                        height="24px"
                        alt="linkedin_icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default QuiSommesNous;
