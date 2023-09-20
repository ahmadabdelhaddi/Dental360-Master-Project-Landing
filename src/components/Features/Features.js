import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../style.css"; // Make sure to import your CSS styles

function Features() {
  return (
    <div id="features" className="container mt-5 mb-5">
      <div className="row">
        <div className="col text-center">
          <h1 style={{ color: "#099588" }} className="mt-2">
            Why Dental360 ?
          </h1>
          <p>
            Bean Heaven Shop was chosen to reflect our commitment to providing a
            heavenly coffee experience
          </p>
        </div>
      </div>
      <br />
      <br />
      <div className="row text-center">
        <div className="feature col-12 col-lg-3 col-md-6 col-sm-12">
          <img src="./access_details.png" alt="Access to treatment details" />
          <h4 className="mt-2">Access to treatment details</h4>
          <p>
            Our coffee is made from the finest beans, carefully selected and
            expertly roasted, ensuring a rich and flavorful experience.
          </p>
        </div>
        <div className="feature col-12 col-lg-3 col-md-6 col-sm-12">
          <img src="./support.png" alt="24/7 Support" />
          <h4 className="mt-2">24/7 Support</h4>
          <p>
            Our skilled baristas take pride in preparing each cup with precision
            and care, creating coffee that is a work of art.
          </p>
        </div>
        <div className="feature col-12 col-lg-3 col-md-6 col-sm-12">
          <img
            src="./online_appointment.png"
            alt="Online appointment booking"
          />
          <h4 className="mt-2">Online appointment booking</h4>
          <p>
            Our cozy and inviting atmosphere provides a welcoming space to relax
            and enjoy your coffee in Bean Heaven.
          </p>
        </div>
        <div className="feature col-12 col-lg-3 col-md-6 col-sm-12">
          <img src="./online_appointment.png" alt="Unique Flavors" />
          <h4 className="mt-2">Unique Flavors</h4>
          <p>
            Explore a diverse range of coffee flavors, from bold and robust to
            smooth and creamy, there's something for every taste.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
