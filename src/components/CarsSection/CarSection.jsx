import React from "react";
import {
  cars1,
  cars2,
  cars3,
  cars4,
  cars5,
  cars6,
  cars7,
  cars8,
} from "../../assets/cars/index";
import "./CarSection.css";
const CarSection = () => {
  return (
    <div className="nature-section">
      <div className="nature-section-photos">
        <img src={cars1} alt='carsimg'/>
      </div>
      <div className="nature-section-photos">
        <img src={cars2} alt='carsimg'/>
      </div>
      <div className="nature-section-photos">
        <img src={cars3} alt='carsimg'/>
      </div>
      <div className="nature-section-photos">
        <img src={cars4} alt='carsimg'/>
      </div>
      <div className="nature-section-photos">
        <img src={cars5} alt='carsimg'/>
      </div>
      <div className="nature-section-photos">
        <img src={cars6} alt='carsimg'/>
      </div>
      <div className="nature-section-photos">
        <img src={cars7} alt='carsimg'/>
      </div>
      <div className="nature-section-photos">
        <img src={cars8} alt='carsimg'/>
      </div>
    </div>
  );
};

export default CarSection;
