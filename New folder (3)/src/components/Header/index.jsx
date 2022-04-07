import "./Header.css";
import vid from "../../assest/videos/video.mp4";
import { Player } from "video-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faBars,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import Navigation from "../Navigation";
const Header = () => {
  return (
    <>
      <div className="header-main">
        <Navigation />

        <div className="header-data">
          <h1 className="font-weight-bold">We Engineer Software Solutions</h1>
          <p className="font-weight-bold">
            Enterprises . Growth Companies . Startups
          </p>
          <button className="button1">
            <a href="#footer">Lets Talk</a>
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

export default Header;
