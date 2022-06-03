import React, {useEffect} from 'react'
import "./QuiSommesNous.css";
import Aos from "aos";
import "../../App.css";
import "aos/dist/aos.css";
import linkedin_icon from "../../images/QuiSommesNous/linkedin_icon.png";
import email_icon from "../../images/QuiSommesNous/email_icon.png";

const EmployeeIMG = ({ staff }) => {
    
    useEffect(() => {
    Aos.init({ duration: 2000 });
    }, []);

  return (    
    <div className="carte" data-aos="zoom-in">
        <div className="carte-ind-simple">
            <div className="description">
                <div className="carte-top">
                    <h6 className="carte-title">{staff.name}</h6>
                    <p className="carte-sub-title ">{staff.post}</p>
                </div>
                <div className="carte-bottom">
                    <hr className="line" />
                    <div className='icons'>                        
                        <a
                            rel="noopener noreferrer"
                            href={`mailto:` + staff.email}
                            target="_blank"
                        >
                            <img
                            className="email-link"
                            src={email_icon}
                            width="23px"
                            height="23px"
                            alt="email"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>    
  )
}

export default EmployeeIMG