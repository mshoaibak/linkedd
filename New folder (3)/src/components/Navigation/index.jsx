import React, { useState } from "react";
import "./Nav.css";
import Logo from "../../assest/serviceImages/logo.png";
import Logo2 from "../../assest/serviceImages/logo2.png";
import leftImg from "../../assest/serviceImages/leftli.svg";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faBars,
  faCaretDown,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const [subnav, setSubnav] = useState(false);
  const [fixNav, setFixNav] = useState(false);
  const [crossIcon, setCrossIcon] = useState(false);
  console.log(fixNav);
  const showChild = () => {
    setSubnav(!subnav);
  };

  const toggleVisible = () => {
    if (document.documentElement.scrollTop >= 66) {
      setFixNav(true);
    }
    if (document.documentElement.scrollTop <= 20) {
      setFixNav(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <>
      <div
        // className="nav-main"
        className={`nav-main   ${fixNav ? "fixx" : ""} ${
          subnav && "bg-light"
        } `}
        bg={fixNav ? "white" : "transparant"}

        // bg={fixNav ? "white" : "transparant"}
      >
        <div className="logo">
          <img src={Logo2} width={150} height={20} alt="logo" />
        </div>
        <div className="uldiv">
          <ul className={`ul ${!crossIcon && "ulf"}`}>
            <li
              className="listBorder"
              onMouseEnter={() => setSubnav(true)}
              // onMouseLeave={() => setSubnav(false)}
              // className="listBorder hello"
            >
              <Link style={{ color: "#05386b" }} to="/services-page">
                Services
              </Link>
              <FontAwesomeIcon icon={faAngleDown} className="drop-icon" />

              {/* <ul>
                <li>nested 1</li>
                <li>nested 2</li>
                <li>nested 3</li>
                <li>nested 4</li>
                <li>nested 5</li>
              </ul> */}
            </li>
            <li className="listBorder">
              <a>Clients</a>
            </li>
            <li className="listBorder">
              <Link style={{ color: "#05386b" }} to="/company">
                Company
              </Link>
            </li>

            <li className="listBorder more">Resources</li>
          </ul>
        </div>
        {crossIcon ? (
          <FontAwesomeIcon
            onClick={() => setCrossIcon(!crossIcon)}
            color="white"
            className="cross-icon"
            icon={faClose}
            size="lg"
          />
        ) : (
          <FontAwesomeIcon
            onClick={() => setCrossIcon(!crossIcon)}
            className="cross-icon"
            icon={faBars}
            size="lg"
          />
        )}

        <div
          //  className="second-ul"
          onMouseLeave={() => setSubnav(false)}
          className={`second-ul ${subnav ? "blockk" : "nonee"}`}
        >
          <ul className="ul2">
            <li className="li2 green-color">
              nested 1
              <ul className="ul3 text-center">
                <li className="text-center">
                  <img
                    className="mx-auto"
                    src={leftImg}
                    width={200}
                    height={200}
                    alt="list"
                  />
                </li>
                <li>Web App development</li>
                <li>Mobile App Development</li>
              </ul>
            </li>
            <li className="li2">
              Software Development
              <ul className="ul3">
                <li>Custom Software Development</li>
                <li>Web App development</li>
                <li>Mobile App Development</li>
                <li>UI/Ux Design</li>
                <li>QA and Testing </li>
                <li>Embedded Software Development</li>
                <li>Devops</li>
                <li>Discovery Workshop</li>
              </ul>
            </li>
            <li className="li2">
              Solutions
              <ul className="ul3">
                <li>Salesforce</li>
                <li>Service Now</li>
                <li>Mulesoft </li>
                <li>AWX</li>
                <li>Cyber Security</li>
                <li>BPO</li>
                <li>Cloud Migration </li>
                <li>Shopify</li>
              </ul>
            </li>
            <li className="li2">
              Emerging Technology
              <ul className="ul3">
                <li>Data Science and AI</li>
                <li>Blockchain</li>
                <li>Internet of Things</li>
                <li>Ar / VR</li>
                <li>Robotic Process Automation </li>
                <li>E-learning </li>
                <li>Healthcare</li>
              </ul>
            </li>
            <li className="li2 green-color">
              Engagement Models
              <ul className="ul3">
                <li>Build Your Team</li>
                <li>Fixed Price Project</li>
                <li>Internet of Things</li>
                <li>Ar / VR</li>
                <li>Robotic Process Automation </li>
                <li>E-learning </li>
                <li>Healthcare</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navigation;
