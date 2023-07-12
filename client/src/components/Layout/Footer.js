import React from "react";
import { Link } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";
import "../../styles/footer.css";
const Footer = () => {
  return (
    // <div className="footer">
    //   <h1 className="text-center">All Right Reserved &copy; Techinfoyt</h1>
    //   <p className="text-center mt-3">
    //     <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
    //     <Link to="/policy">Privacy Policy</Link>
    //   </p>
    // </div>

    <>
      <div>
        <div className="footer-main  py-5">
          <Container>
            <Row>
              <Col md={3}>
                <div className="footer-pic  ">
                  {" "}
                  <a href="/" className="Logo-head">
                    {/* <img src="images/harvestlogo.png " className="w-100" /> */}
                    Brick Links
                  </a>
                </div>
                <div className="fs-16  fw-400 pt-2  cl-white">
                  Brick Links is an online platform for online selling and purchasing of bricks.
                
                </div>
              </Col>
              <Col md={3}>
                <div className="fs-24  fw-400 f-magesta cl-yellow column-head">
                  Quick Links
                </div>
                <ul className="footer-link pt-2">
                  <li className="fs-16 fw-400 cl-white pt-1 ">About Us</li>
                  <li className="fs-16 fw-400 cl-white pt-1">Events</li>
                  <li className="fs-16 fw-400 cl-white pt-1">Programs</li>
                  <li className="fs-16 fw-400 cl-white pt-1">Client Stories</li>
                </ul>
              </Col>
              <Col md={3}>
                {" "}
                <div className="fs-24  fw-400 f-magesta cl-yellow  column-head">
                  Social Links
                </div>
                <ul className="footer-link pt-2">
                  <li className="fs-16 fw-400 cl-white pt-1 ">Facebook</li>
                  <li className="fs-16 fw-400 cl-white pt-1">Twitter</li>
                  <li className="fs-16 fw-400 cl-white pt-1">Instagram</li>
                </ul>
              </Col>
              <Col md={3}>
                {" "}
                <div className="fs-24  fw-400 cl-yellow cl-yellow  column-head">
                  Contact Us
                </div>
                <ul className="footer-link pt-2">
                  <li className="fs-16 fw-400 cl-white pt-1  ">Contact Us</li>
                  <li className="fs-16 fw-400 cl-white pt-1">
                    bricklinks@gmail.com
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="footer-bottom">
          <Container>
            <div className="d-flex justify-content-between">
              <div>
                <a className="footer-bottom-links">COPYRIGHT 2023</a>
              </div>
              <div>
                <a className="footer-bottom-links">Terms&Conditions </a>
                <a className="footer-bottom-links">Privacy Policy</a>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Footer;
