import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assest/serviceImages/logo.png";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faBars, faL } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faDiscord,
  faInstagram,
  faReddit,
  faSnapchat,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <>
      <div className="footer-main" id="footer">
        <h1 className="ml-5 mb-5 mt-5 text-dark font-weight-bold">
          <img
            height={100}
            width={100}
            src={Logo}
            alt="logo"
            className="ml-5"
          />
        </h1>
        <Container className="mb-5 mt-5">
          <Row>
            <Col sm={6} md={4} className="mb-5">
              <h5 className="font-weight-bold">Contact Us</h5>
              <h6 className="font-weight-bold">+99999999999</h6>
              <h6 className="font-weight-bold">dummy@ema.com</h6>
            </Col>
            <Col sm={6} md={4} className="mb-5">
              <h5 className="font-weight-bold">Information</h5>
              <h6 className="font-weight-bold">About Us</h6>
              <h6 className="font-weight-bold">More Research</h6>
            </Col>
            <Col sm={6} md={4} className="mb-5">
              <h5 className="font-weight-bold">Products</h5>
              <h6 className="font-weight-bold">Pitch Deck</h6>
              <h6 className="font-weight-bold">Ventures</h6>
              <h6 className="font-weight-bold">Advisors</h6>
            </Col>
          </Row>
        </Container>
        <Container className="mb-5 mt-5">
          <Row>
            <Col sm={6} md={4} className="mb-5">
              <h5 className="font-weight-bold">Services</h5>
              <h6 className="font-weight-bold">Faq</h6>
              <h6 className="font-weight-bold">Dedicated Teams</h6>
              <h6 className="font-weight-bold">custom software Development</h6>
              <h6 className="font-weight-bold">Wep App Development</h6>
              <h6 className="font-weight-bold">Mobile App Development</h6>
              <h6 className="font-weight-bold">UI/UX Design</h6>
              <h6 className="font-weight-bold">QA Testing</h6>
              <h6 className="font-weight-bold">Devops</h6>
              <h6 className="font-weight-bold">Discovery workshop</h6>
            </Col>
            <Col sm={6} md={4} className="mb-5">
              <h5 className="font-weight-bold">Solutions</h5>
              <h6 className="font-weight-bold">Service Now</h6>
              <h6 className="font-weight-bold">Salesforce</h6>
              <h6 className="font-weight-bold">BPO</h6>
              <h6 className="font-weight-bold">Mulesoft</h6>
              <h6 className="font-weight-bold">AWS</h6>
              <h6 className="font-weight-bold">Cyber Security</h6>
              <h6 className="font-weight-bold">Shopify</h6>
            </Col>
            <Col sm={6} md={4} className="mb-5">
              <h5 className="font-weight-bold">Emerging Technologies</h5>
              <h6 className="font-weight-bold">Data Science and AI</h6>
              <h6 className="font-weight-bold">Internet of Things</h6>
              <h6 className="font-weight-bold">AR/VR</h6>
              <h6 className="font-weight-bold">Blockchain</h6>
              <h6 className="font-weight-bold">Robotic Process Automation</h6>
              <h6 className="font-weight-bold">E-learning</h6>
              <h6 className="font-weight-bold">Learning</h6>
            </Col>
          </Row>
          <Row
            style={{
              borderTop: "1px solid white",
              // background: "red",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              padding: "20px ",
              // marginTop: "auto",
              position: "absolute",
              left: 0,
              width: "100%",
              color: "white",
            }}
          >
            {/* <Col md={6}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#05386b",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                }}
              >
                <h6 style={{ fontWeight: "bold" }}>copyrights © 2022</h6>
              </div>
            </Col> */}

            <Col md={4}>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <FontAwesomeIcon icon={faFacebook} color="#05386b" size="lg" />
                <FontAwesomeIcon icon={faTwitter} color="#1DA1F2" size="lg" />

                <FontAwesomeIcon icon={faDiscord} color="#5865F2" size="lg" />
                <FontAwesomeIcon icon={faInstagram} color="#E1306C" size="lg" />
                <FontAwesomeIcon icon={faReddit} color="red" size="lg" />

                <FontAwesomeIcon icon={faLinkedin} color="blue" size="lg" />
                <FontAwesomeIcon icon={faSnapchat} color="yellow" size="lg" />

                <FontAwesomeIcon icon={faYoutube} color="red" size="lg" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Footer;
