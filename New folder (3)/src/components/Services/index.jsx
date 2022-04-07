import { ServicesData } from "../../assest/ServicesData";
import { Card, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faBars,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import "./services.css";
const Services = () => {
  return (
    <>
      <div className="services-main" id="services">
        <h1 className="text-center mb-5 mt-5 font-weight-bold  ">Services</h1>

        <Container>
          {/* <Row style={{ width: "100%", margin: "0 auto" }} className="mx-auto">
            {ServicesData.slice(0, 3).map((val) => {
              return (
                <Col xs={12} sm={6} md={4} className="service-card ">
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
          </Row> */}

          <Row>
            {ServicesData.slice(0, 3).map((val) => {
              return (
                <Col md={4} className="coll">
                  <span className="span12 spanned" style={{ height: "35vh" }}>
                    <img
                      src={val.icon}
                      alt="service"
                      width={30}
                      height={30}
                      style={{ marginLeft: "20px", marginTop: "20px" }}
                    />
                    <Card.Body className="font-color">
                      <h2 className=" font-weight-bold">{val.title}</h2>
                      <h6 className="font-weight-bold">{val.text}</h6>
                    </Card.Body>
                  </span>
                  <span
                    className="span22 spanned"
                    style={{ height: "35vh" }}
                  ></span>
                  <span
                    className="span32 spanned"
                    style={{ height: "35vh" }}
                  ></span>
                  <span
                    className="span42 spanned"
                    style={{ height: "35vh" }}
                  ></span>
                </Col>
              );
            })}
          </Row>
          <Row>
            {ServicesData.slice(3, 6).map((val) => {
              return (
                <Col md={4} className="coll">
                  <span className="span1 spanned" style={{ height: "35vh" }}>
                    <img
                      src={val.icon}
                      alt="service"
                      width={30}
                      height={30}
                      style={{ marginLeft: "20px", marginTop: "20px" }}
                    />
                    <Card.Body className="font-color">
                      <h2 className=" font-weight-bold">{val.title}</h2>
                      <h6 className="font-weight-bold">{val.text}</h6>
                    </Card.Body>
                  </span>
                  <span
                    className="span2 spanned"
                    style={{ height: "35vh" }}
                  ></span>
                  <span
                    className="span3 spanned"
                    style={{ height: "35vh" }}
                  ></span>
                  <span
                    className="span4 spanned"
                    style={{ height: "35vh" }}
                  ></span>
                </Col>
              );
            })}
          </Row>
        </Container>
        <div className="services-btn  text-center">
          <button>
            <Link to="/services-page">Our more Services</Link>
            <FontAwesomeIcon
              className="arrow-icon"
              size="lg "
              color="#05386b"
              icon={faArrowRight}
            />
          </button>
        </div>
      </div>
    </>
  );
};
export default Services;
