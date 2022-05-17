import React from "react";
import "../../App.css";
import "./Accueil.css";
import video_icon from "../../images/Accueil/video_icon.png";
import ph4 from "../../images/Accueil/ph4.jpg"

const Accueil = () => {
  return (
    <section className="sec-accueil" id="accueil">
     <div className="titles">
        <h1 className="accueil-title">
          Nous Sommes Une Entreprise Tunisienne Privée
        </h1>
        <h5 className="accueil-subtitle">
          Spécialisée dans les Technologies des Cables et Faisceaux et
          l'outillage AéroSpacial.
          <br />
          Nous sommes Revendeur d'équipements et Fournisseur de Solutions pour
          Industries Électroniques, Électriques et Aérospatiales.
        </h5>
        <a className="video-link" href='https://www.youtube.com/watch?v=n0bUKEuYDG0' target="_blank">
          <p className="watch_video">
            <img
              className="video_icon"
              src={video_icon}
              width="32px"
              height="32px"
              alt="video icon"
            /> 
           Regarder la vidéo
          </p>
        </a>
      </div>
      <div className="photo">
        <img width="80%" src={ph4}  />
      </div> 
      
    </section>
  );
};

export default Accueil;
