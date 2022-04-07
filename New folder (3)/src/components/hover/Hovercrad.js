import React from "react";
import "./hovercard.css";
import Navigation from "../Navigation/index";

export default function Hovercrad() {
  return (
    <>
      <div className="hovercard-wrapper">
        <div className="hovercard-mainheader">
          <div className="hovercard-header-txt">
            <h1>TRUST</h1>
            <h1> Softwere Engenering</h1>
            <h1>
              <span> And its Counsolting </span>
            </h1>
            <h1>Company</h1>
          </div>
          <div className="header-img">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZJ_9aQxMQKglJUmxuqtncHDlSbInS780TB__Tgdw4jFd1Rr4nVCgdbBWIYpECDgDUI1M&usqp=CAU"
              alt=""
            />
          </div>
        </div>

        <div className="hovercad-main">
          <div className="hover-card1">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <h6>Custom software development</h6>
            <img
              className="hover-card-imge-1"
              src="https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg?size=338&ext=jpg&ga=GA1.1.448468139.1648539110"
              alt=""
            />
            <div className="hover-card-txt">
              <ul>
                <li> Solutions tailored to specific business needs</li>
                <li> Solutions tailored to specific business needs</li>
                <li> Solutions tailored to specific business needs</li>
                <li> Solutions tailored to specific business needs</li>
                <li> Solutions tailored to specific business needs</li>
              </ul>
            </div>
          </div>
          <div className="hover-card1">
            <h6>Development team augmentation</h6>
            <img
              className="hover-card-imge-1"
              src="https://img.freepik.com/free-psd/metal-sign-logo-mockup_1389-1345.jpg?size=626&ext=jpg&ga=GA1.1.448468139.1648539110"
              alt=""
            />
            <div className="hover-card-txt">
              <ul>
                <li>Offsite and onsite team staffing and ramping up</li>
                <li>Talent nurturing and retention policy</li>
                <li>Distributed team management</li>
                <li>Performance management</li>
                <li>Corporate culture match</li>
              </ul>
            </div>
          </div>
          <div className="hover-card1">
            <h6>IT consulting and digital advisory</h6>
            <img
              className="hover-card-imge-1"
              src="https://img.freepik.com/free-vector/golden-elegant-logo-with-frame_52683-13462.jpg?size=338&ext=jpg&ga=GA1.2.448468139.1648539110"
              alt=""
            />
            <div className="hover-card-txt">
              <ul>
                <li> Architecture assessment</li>
                <li> Technical feasibility audit</li>
                <li> Development process audit</li>
                <li> Solution design</li>
                <li> PoC development</li>
                <li> Development strategy</li>
              </ul>
            </div>
          </div>
          <div className="hover-card1">
            <h6>Software reengineering and support</h6>
            <img
              className="hover-card-imge-1"
              src="https://img.freepik.com/free-psd/logo-mockup-grey-wall_35913-2122.jpg?size=626&ext=jpg&ga=GA1.1.448468139.1648539110"
              alt=""
            />
            <div className="hover-card-txt">
              <ul>
                <li>Functionality extension</li>
                <li> Legacy modernization</li>
                <li> Infrastructure optimization</li>
                <li> Third-party integrations</li>
                <li> Regulations compliance</li>
                <li> 24/7 incident and problem management</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
