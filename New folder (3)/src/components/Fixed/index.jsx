import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "../../assest/serviceImages/fix1.webp";
import fix1 from "../../assest/serviceImages/fix1.webp";
import fix2 from "../../assest/serviceImages/fix2.webp";

import "./fixed.css";

const Fixed = () => {
  return (
    <>
      <div className="fixed-main">
        <Container>
          <Row
            style={{
              // boxShadow: "0 3px 10px rgb(0 0 0 / 20%)",
              height: "90vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Col
              className="fixed-flex"
              sm={12}
              md={6}
              style={{
                boxShadow: "0 3px 10px rgb(0 0 0 / 20%)",

                padding: "100px 10px 100px 40px",
                background: "#5cdb95",
                height: "80vh",
              }}
            >
              <h3 className="text-white h3 font-weight-bold">
                Build Your Dedicated Teams
              </h3>

              <Row className="text-white ">
                <Col md={8}>
                  <h5 className="h5 font-weight-bold ">
                    Our Team At Your Service
                  </h5>
                  <p>
                    Get your projects fast-tracked with best technical and
                    management talent. Increase quality and efficiency, and
                    retain complete control of teams.
                  </p>
                </Col>

                <Col md={4}>
                  <img src={fix1} width={100} height={100} alt={"fix1"} />
                </Col>
              </Row>

              <h5 className="text-white h5 font-weight-bold">
                Develop Your Team
              </h5>
            </Col>

            <Col
              sm={12}
              md={6}
              className="fixed-flex"
              style={{
                boxShadow: "0 3px 10px rgb(0 0 0 / 20%)",

                background: "white",
                padding: "100px 10px 100px 30px",

                height: "80vh",
              }}
            >
              <h3 className="h3b font-weight-bold">
                Build Your Dedicated Teams
              </h3>

              <Row
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Col md={8}>
                  <h5 className="h5 font-weight-bold">
                    Our Team At Your Service
                  </h5>
                  <p>
                    Get a comprehensive product development experience from
                    design to delivery with reduced development costs.
                  </p>
                </Col>

                <Col md={4}>
                  <img
                    src={fix2}
                    width={100}
                    height={100}
                    alt={"fix1"}
                    style={{ marginLeft: "auto" }}
                  />
                </Col>
              </Row>

              <h5 className="h5 font-weight-bold">Develop Your Project</h5>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Fixed;
