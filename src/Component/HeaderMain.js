import React from "react";
import "./CSS/HeaderMain.css";
import { Parallax } from "react-parallax";
import banner from "../image/background.png";
import Fade from "react-reveal/Fade";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas, fab);

const HeaderMain = () => {
  return (
    <div className="header" id="header">
      <Parallax
        className="header bgimg"
        blur={5}
        bgImage={banner}
        bgImageAlt="banner"
        strength={500}
      >
        <div className="banner-content">
          <Fade top>
            <div className="fadeInUp">
              <h5>HELLO</h5>
              <h2>Bhargav Praveen Chintapalli</h2>
              <h4>Student</h4>
            </div>
          </Fade>
          <Fade left cascade>
          <div className="social-media">
            <a href="https://www.linkedin.com/in/bhargavchintapalli/">
              <FontAwesomeIcon icon={["fab", "linkedin"]} className="icon" />
            </a>
            <a href="https://github.com/BHARGAVPRAVEEN-CHINTAPALLI/">
              <FontAwesomeIcon icon={["fab", "github"]}  className="icon" />
            </a>
            <a href=" https://wa.me/+917386236095">
              <FontAwesomeIcon icon={["fab", "whatsapp"]}  className="icon" />
            </a>
            <a href="mailto:chintapallibhargavpraveen@gmail.com">
              <FontAwesomeIcon icon={["fas", "envelope"]} className="icon" />
            </a>
          </div>
          </Fade>
        </div>
      </Parallax>
    </div>
  );
};

export default HeaderMain;
