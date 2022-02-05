import React from "react";
import "../../App.css";
import "./Accueil.css";
import bck1 from '../../images/bck1.png'
import bck2 from '../../images/bck2.png'
import bck3 from '../../images/bck3.png'

const Accueil = () => {
  return (
    <section className="sec-accueil" id="accueil">
      {/* <h1 className='accueil-title'>Because your satisfaction is our top priority</h1>
        <h5 className='accueil-subtitle'>We are focusing on creating strong long-lasting relationships with few leading companies</h5> */}
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
          <p style={{paddingTop:'50px'}}>
            <svg
              style={{ margin: "0 10px 5px 0" }}
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path
                fill="#ffffff"
                d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z"
              />
            </svg>
            Watch video
          </p>
        </a>
      </div>
      <div className="image">
        {/* <img height='200px' src={bck1} alt="" /> */}
        {/* <img src={bck3} alt="" /> */}
      </div>
    </section>
  );
};

export default Accueil;
