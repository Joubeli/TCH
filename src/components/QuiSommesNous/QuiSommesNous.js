import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import "../../App.css";
import "./QuiSommesNous.css";
import founder from "../../images/QuiSommesNous/founder.jpg";
import manager from "../../images/QuiSommesNous/manager.jpg";
import responsable from "../../images/QuiSommesNous/responsable.jpg";
import ingénieur from "../../images/QuiSommesNous/ingénieur.jpg";
import sales from "../../images/QuiSommesNous/sales.jpg";
import technicien from "../../images/QuiSommesNous/technicien.jpg";
import linkedin_icon from "../../images/QuiSommesNous/linkedin_icon.png";

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
          <h6 data-aos="fade-up" className="qsn_subtitles">
            Direction Exécutive
          </h6>
          <div className="cartes">
            <div className="carte" data-aos="zoom-in">
              <div className="carte_ind">
                <img src={founder} alt="profil" className="profil-photo" />
                <div className="description">
                  <div className="carte_top">
                    <h6 className="carte-title">Abdessalem Barkia</h6>
                    <p className="carte-sub-title ">Fondateur</p>
                  </div>
                  <div className="carte_bottom">
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
            <div className="carte" data-aos="zoom-in">
              <div className="carte_ind">
                <img src={manager} alt="profil" className="profil-photo" />
                <div className="description">
                  <div className="carte_top">
                    <h6 className="carte-title">Rajander Thind</h6>
                    <p className="carte-sub-title">Directeur</p>
                  </div>
                  <div className="carte_bottom">
                    <hr className="line" />
                    <a
                      rel="noopener noreferrer"
                      href="https://www.linkedin.com/in/rajander-thind-4822a37b/"
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
            <div className="carte" data-aos="zoom-in">
              <div className="carte_ind">
                <img src={responsable} alt="profil" className="profil-photo" />
                <div className="description">
                  <div className="carte_top">
                    <h6 className="carte-title">Mariem Chbinou</h6>
                    <p className="carte-sub-title">
                      Responsable Administratif et Financier
                    </p>
                  </div>
                  <div className="carte_bottom">
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
        <div className="spec_line">
          <h6 data-aos="fade-up" className="qsn_subtitles">
            Ingénieur / Commercial / Technicien
          </h6>
          <div className="cartes">
            <div className="carte" data-aos="zoom-in">
              <div className="carte_ind">
                <img src={ingénieur} alt="profil" className="profil-photo" />
                <div className="description">
                  <div className="carte_top">
                    <h6 className="carte-title">Hichem Nahali</h6>
                    <p className="carte-sub-title">
                      Ingénieur Technico-commercial
                    </p>
                  </div>
                  <div className="carte_bottom">
                    <hr className="line" />
                    <a
                      rel="noopener noreferrer"
                      href="https://www.linkedin.com/in/hichem-nahali-5ba791124/"
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
            <div className="carte" data-aos="zoom-in">
              <div className="carte_ind">
                <img src={sales} alt="profil photo" className="profil-photo" />
                <div className="description">
                  <div className="carte_top">
                    <h6 className="carte-title">M'Hammed M'saad</h6>
                    <p className="carte-sub-title">Ingénieur Commercial</p>
                  </div>
                  <div className="carte_bottom">
                    <hr className="line" />
                    <a
                      rel="noopener noreferrer"
                      href="https://www.linkedin.com/in/m-hammed-m-saad-813a75154/"
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
            <div className="carte" data-aos="zoom-in">
              <div className="carte_ind">
                <img src={technicien} alt="profil" className="profil-photo" />
                <div className="description">
                  <div className="carte_top">
                    <h6 className="carte-title">Mohamed Houssem Bakir </h6>
                    <p className="carte-sub-title">Technico-commercial</p>
                  </div>
                  <div className="carte_bottom">
                    <hr className="line" />
                    <a
                      rel="noopener noreferrer"
                      href="https://www.linkedin.com/in/mohamed-houssem-bakir-59063a128/"
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
        <div className="spec_line">
          <h6
            data-aos="fade-up"
            className="qsn_subtitles"
          >
            Assistante
          </h6>
          <div className="cartes">
            <div className="carte last_carte" data-aos="zoom-in">
              <div className="carte_ind ">
                <div className="description">
                  <div className="carte_top">
                    <h6 className="carte-title">Jihen Ben Mahmoud</h6>
                    <p className="carte-sub-title">
                      Assistante administrative et financière
                    </p>
                  </div>
                  <div className="carte_bottom">
                    <hr className="line" />
                    <a
                      rel="noopener noreferrer"
                      href="https://www.linkedin.com/in/jihen-ben-mahmoud-8199b921a/"
                      target="_blank"
                    >
                      <img
                        className="linkedin-link last-carte-linkedin"
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
