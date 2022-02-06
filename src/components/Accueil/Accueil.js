import React from "react";
import "../../App.css";
import "./Accueil.css";
import video_icon from '../../images/Accueil/video_icon.png'

const Accueil = () => {
  return (
    <section className="sec-accueil" id="accueil">
      <div className="titles">
        <h1 className="accueil-title">
          we are a private owned Tunisian company
        </h1>
        <h5 className="accueil-subtitle">
          Specialized in cables and harnesses technologies and Aerospace tooling
          and consumables. We are an equipment dealers and solution provider for
          electronic electric and aerospace industries.
        </h5>
        <a  className="video-link" href="#">
          <p className="watch_video">
            <img
              className='video_icon'
              src={video_icon}
              width="32px"
              height="32px"
              alt="video icon"
            />
            Watch video
          </p>
        </a>
      </div>
      <div className="image">
      </div>
    </section>
  );
};

export default Accueil;
