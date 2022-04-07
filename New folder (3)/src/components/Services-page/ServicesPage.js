import React from "react";
import "./servicespage.css";

import { ServicesData } from "../../assest/ServicesData";
import { Card, Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faBars,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

export default function ServicesPage() {
  return (
    <>
      <div className="servicesss-wrapper services-main">
        <div className="" id="services">
          <h1 className="text-center mb-5 mt-5 font-weight-bold  ">Services</h1>

          <Container style={{ width: "80%", margin: "0 auto" }}>
            <Row
              style={{ width: "100%", margin: "0 auto" }}
              className="mx-auto"
            >
              {ServicesData.map((val) => {
                return (
                  <Col
                    xs={12}
                    sm={6}
                    md={4}
                    // style={{ margin: "15px 40px" }}
                    className="service-card "
                  >
                    <div
                      className="serve mx-auto"
                      style={{
                        width: "90%",
                        borderRadius: "4px",
                      }}
                    >
                      <img
                        src={val.icon}
                        alt="service"
                        width={50}
                        height={50}
                        style={{ marginLeft: "20px", marginTop: "20px" }}
                      />
                      <Card.Body className="font-color">
                        <h2 className=" font-weight-bold">{val.title}</h2>
                        <h6 className="font-weight-bold">{val.text}</h6>
                      </Card.Body>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>

        <div className="service-btn">
          <button>View All Services</button>
        </div>
      </div>
    </>
  );
}
