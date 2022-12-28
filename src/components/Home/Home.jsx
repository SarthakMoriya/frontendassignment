import React from "react";
import Crousal from "../Crousal/Crousal";
import AbstractSection from "../AbstractSection/AbstractSection";
import CarSection from "../CarsSection/CarSection";
import AnimalSection from "../AnimalSection/AnimalSection";

import "./Home.css";
import ContactForm from "../ContactForm/ContactForm";

const Home = () => {
  return (
    <div>
      <Crousal />
      <section className="nature" style={{ marginTop: "400px" }}>
        <h1>Abstract</h1>
        <AbstractSection />
        <h1>Cars</h1>
        <CarSection />
        <h1>Animals</h1>
        <AnimalSection />
        <div className="contact-form-box-flex">
          <div className="contact-form-home">
            <h1>Contact US</h1>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
