import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AwardsData } from "../../assest/AwardsData";

import "./Awards.css";
const Awards = () => {
  return (
    <>
      <div className="awards-main">
        <Container>
          <Row>
            <h1 className="text-center mt-5 mb-5 font-weight-bold text-dark ">
              Acheivements and Awards
            </h1>
            {AwardsData.map((val) => {
              return (
                <Col sm={12} md={3} className="text-center award-hover  mb-5">
                  <img
                    width={150}
                    height={150}
                    src={val.icon}
                    alt="award"
                    className=" mx-auto"
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Awards;
