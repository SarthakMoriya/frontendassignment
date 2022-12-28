import React from "react";
import {
  nature1,
  nature2,
  nature3,
  nature4,
  nature5,
  nature6,
  nature7,
  nature8,
} from "../../assets/abstract/index";
import "./AbstractSection.css";
const AbstractSection = () => {
  return (
    <div className="nature-section">
      <div className="nature-section-photos">
        <img src={nature1} alt='abstractImg'/>
      </div>
      <div className="nature-section-photos">
        <img src={nature2} alt='abstractImg'/>
      </div>
      <div className="nature-section-photos">
        <img src={nature3} alt='abstractImg'/>
      </div>
      <div className="nature-section-photos">
        <img src={nature4} alt='abstractImg'/>
      </div>
      <div className="nature-section-photos">
        <img src={nature5} alt='abstractImg'/>
      </div>
      <div className="nature-section-photos">
        <img src={nature6} alt='abstractImg'/>
      </div>
      <div className="nature-section-photos">
        <img src={nature7} alt='abstractImg'/>
      </div>
      <div className="nature-section-photos">
        <img src={nature8} alt='abstractImg'/>
      </div>
    </div>
  );
};

export default AbstractSection;
