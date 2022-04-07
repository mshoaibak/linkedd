import React from "react";
import "./ourcompany.css";
import Image from "../../assest/companyOffice.jpg";
import Bussiness from "../../assest/bussiness.jpg";
import Image3 from "../../assest/image3.jpg";

export default function Ourcompany() {
  return (
    <>
      {/* <div className="ourcompany-wrapper">
        <div className="company-main">
          <div className="company-container">
            <div className="ourcompany">
              <div className="ourcompany-main-img">
                <div className="company-main-img-txt">
                  <div className="row">
                    <div className="col-lg-8 col-md-8 col--8">
                      <h2>
                        <b>OUR </b> Company
                      </h2>
                      <br />
                      <p>
                        RubyGarage is headquartered in Tallinn, Estonia. We have
                        been on the market since 2014. At present, our team
                        includes more than 100 specialists including software
                        engineers, UI/UX designers, project managers, business
                        analysts, quality assurance specialists, and more. We
                        help businesses across the globe create web and mobile
                        applications.
                      </p>
                    </div>
                  
                  </div>
                </div>
              </div>
              <div className="ourcompany-sub-img">
                <div className="ourcompany-img1">
                  <img src={Bussiness} alt="" />
                  <div className="ourcompany-img-txt">
                    <h4>8+</h4>
                    <h6>Year of bussiness Experience</h6>
                  </div>
                </div>
                <div className="ourcompany-img1">
                  <img src={Bussiness} alt="" />
                  <div className="ourcompany-img-txt">
                    <h4>8+</h4>
                    <h6>Year of bussiness Experience</h6>
                  </div>
                </div>
                <div className="ourcompany-img1">
                  <img src={Bussiness} alt="" />
                  <div className="ourcompany-img-txt">
                    <h4>8+</h4>
                    <h6>Year of bussiness Experience</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="ourcompany-wrapper ">
        <div className="company-main container">
          <img src={Image} alt="" />
          <div className="company-txt">
            <h2>
              <b>OUR </b> Company
            </h2>
            <br />
            <p>
              RubyGarage is headquartered in Tallinn, Estonia. We have been on
              the market since 2014. At present, our team includes more than 100
              specialists including software engineers, UI/UX designers, project
              managers, business analysts, quality assurance specialists, and
              more. We help businesses across the globe create web and mobile
              applications.
            </p>
          </div>
        </div>
        <div className="ourcompany-sub-img container">
          <div className="ourcompany-img1">
            <img src={Bussiness} alt="" />
            <div className="ourcompany-img-txt">
              <h4>8+</h4>
              <h6>Year of bussiness Experience</h6>
            </div>
          </div>
          <div className="ourcompany-img1">
            <img src={Image3} alt="" />
            <div className="ourcompany-img-txt">
              <h4>8+</h4>
              <h6>Year of bussiness Experience</h6>
            </div>
          </div>
          <div className="ourcompany-img1">
            <img src={Bussiness} alt="" />
            <div className="ourcompany-img-txt">
              <h4>8+</h4>
              <h6>Year of bussiness Experience</h6>
            </div>
          </div>
        </div>
        <div className="company-btn">
          <button>
            <Link to="/company">Explore More</Link>
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
}
