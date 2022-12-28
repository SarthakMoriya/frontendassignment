import React from "react";
import {
  animal1,
  animal2,
  animal3,
  animal4,
  animal5,
  animal6,
  animal7,
  animal8,
} from "../../assets/animals/index";
import "./AnimalSection.css";
const AnimalSection = () => {
  return (
    <div className="nature-section">
      <div className="nature-section-photos">
        <img src={animal1} alt='animalImage'/>
      </div>
      <div className="nature-section-photos">
        <img src={animal2} alt='animalImage'/>
      </div>
      <div className="nature-section-photos">
        <img src={animal3} alt='animalImage'/>
      </div>
      <div className="nature-section-photos">
        <img src={animal4} alt='animalImage'/>
      </div>
      <div className="nature-section-photos">
        <img src={animal5} alt='animalImage'/>
      </div>
      <div className="nature-section-photos">
        <img src={animal6} alt='animalImage'/>
      </div>
      <div className="nature-section-photos">
        <img src={animal7} alt='animalImage'/>
      </div>
      <div className="nature-section-photos">
        <img src={animal8} alt='animalImage'/>
      </div>
    </div>
  );
};

export default AnimalSection;
