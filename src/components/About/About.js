import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../style.css"; // Make sure to import your CSS styles

function About() {
  return (
    <div id="about" className="container mt-4">
      <Row className="d-flex justify-content-center align-items-center">
        <Col xl={6} lg={6} md={12} sm={12}>
          <h1
            style={{ color: "#099588" }}
            className="text-lg-start text-center"
          >
            Discover Our Services
          </h1>
          <p>
            This name conveys a comprehensive approach to dental care,
            emphasizing a holistic and all-encompassing solution for users. It
            combines the term "dental," which directly relates to the field of
            dentistry, with "360," indicating full-circle or complete coverage.
            It implies that the app provides a 360-degree view of dental health
            and offers a wide range of features and services. The name Dental360
            is straightforward, easy to remember, and represents a modern and
            innovative dental application.
          </p>
        </Col>
        <Col xl={6} lg={6} md={12} sm={12}>
          <img src="./ABOUT1.png" className="img-fluid" alt="About Us" />
        </Col>
      </Row>
    </div>
  );
}

export default About;
