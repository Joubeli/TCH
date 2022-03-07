import React, { useEffect } from "react";
import "../../App.css";
import "./Contact.css";
import Aos from "aos";
import "aos/dist/aos.css";
import email from "../../images/Contact/email.png";
import location from "../../images/Contact/location.png";
import phone from "../../images/Contact/phone.png";
import { Form } from "react-bootstrap";
import GMap from "./GMap";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="sec-contact" id="contact">
      <h2 data-aos="fade-up" className="section-title">
        Contact
      </h2>
      <p data-aos="fade-up" className="sec-sub-title contact-sub-title">
        Contactez-Nous Pour Plus D'information
      </p>
      <div className="content-contact">
        <section data-aos="fade-up" className="coord sec">
          <div className="contact-coord">
            <div className="sub-sec location">
              <img
                className="location_icon"
                src={location}
                alt="location icon"
                width="32px"
                height="32px"
              />
              <div className="desc">
                <h6 className="subtitle">Adresse : </h6>
                <p className="desc-sub country">Tunisie</p>
                <p className="desc-para">
                  Rue de parc
                  <br /> 2036 La Soukra
                </p>
              </div>
            </div>
            <div className="sub-sec">
              <img
                className="svg_icons"
                alt="email icon"
                width="30px"
                height="30px"
                src={email}
              />
              <div className="desc">
                <h6 className="subtitle">Email : </h6>
                <p className="desc-para">info@tchindustries.com</p>
              </div>
            </div>
            <div className="sub-sec">
              <img
                className="svg_icons"
                alt="phone icon"
                width="30px"
                height="30px"
                src={phone}
              />
              <div className="desc">
                <h6 className="subtitle">Appelez : </h6>
                <p className="desc-para">
                  +216 29 25 88 86
                  <br />
                  +216 28 54 49 79
                </p>
              </div>
            </div>            
          </div>
          <div className="map">
            <GMap/>
          </div>
            
        </section>
        <section data-aos="fade-up" className="form sec">
          <Form>
            <div className="form_line_1">
              <Form.Group className="form_group_1">
                <Form.Label className="sec-sub-title sub-title-form">
                  Votre Nom :{" "}
                </Form.Label>
                <Form.Control className="input_group_1" type="text" />
              </Form.Group>
              <Form.Group className="form_group_1 email_group">
                <Form.Label className="sec-sub-title sub-title-form">
                  Votre Email :{" "}
                </Form.Label>
                <Form.Control className="input_group_1" type="email" />
              </Form.Group>
            </div>
            <Form.Group className="form_group">
              <Form.Label className="sec-sub-title sub-title-form">
                Sujet :{" "}
              </Form.Label>
              <Form.Control className="input_group" type="text" />
            </Form.Group>
            <Form.Group className="form_group">
              <Form.Label className="sec-sub-title sub-title-form">
                Message :{" "}
              </Form.Label>
              <Form.Control as="textarea" rows={13} className="input_group" />
            </Form.Group>
          </Form>
          <button type="submit" className="button form_button" role="button">
            Envoyer
          </button>
        </section>
      </div>
      
    </section>
  );
};
export default Contact
