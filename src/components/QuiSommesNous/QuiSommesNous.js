import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import "../../App.css";
import "./QuiSommesNous.css";
import { Staffs } from "../../data"
import { StaffsIMG } from "../../data"
import EmployeeIMG from "./EmployeeIMG";
import Employee from "./Employee";

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
            {StaffsIMG.map((staff) => (
                <EmployeeIMG staff={staff} />
            ))}
          </div>
        </div>
        <div className="spec_line">          
            <div className="cartes">
                {Staffs.map((staff) => (
                    <Employee staff={staff} />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};
export default QuiSommesNous;
