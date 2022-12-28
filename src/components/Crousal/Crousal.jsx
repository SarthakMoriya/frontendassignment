import Carousel from "react-bootstrap/Carousel";
import nature1 from "../../assets/nature/nature1.jpg";
import nature2 from "../../assets/nature/nature2.webp";
import nature3 from "../../assets/nature/nature3.jpg";
function Crousal() {
  return (
    <div style={{height:'5vh'}}>
      <Carousel slide={false}>
        <Carousel.Item>
          <img className="d-block w-100" src={nature1} alt="First slide" height='400' />
          <Carousel.Caption>
            <h3>Nature Images</h3>
            <p>Photo by-: Irian.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={nature2} alt="Second slide" height='400' />

          <Carousel.Caption>
            <h3>Nature Images</h3>
            <p>Photo by-: Amir Sheikh.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={nature3} alt="Third slide" height='400'/>

          <Carousel.Caption>
            <h3>Natue Images</h3>
            <p>Photo by-: Jenkins.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Crousal;
