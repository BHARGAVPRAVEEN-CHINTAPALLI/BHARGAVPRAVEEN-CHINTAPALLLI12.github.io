import React from "react";
import "./CSS/Skill.css";
import { Container, Row, Col } from "react-bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhp } from '@fortawesome/free-brands-svg-icons';
import cIcon from '../icons/c.svg';
import cppIcon from '../icons/cpp.svg';
import vscodeIcon from '../icons/vscode.svg';
import msOfficeIcon from '../icons/msoffice.svg';
import javaicon from '../icons/java.svg';

import mysql from "../image/Skills/mysql.svg";
import Fade from "react-reveal/Fade";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

library.add(fas, fab);

const Skills = () => {

    useEffect(()=>{
        AOS.init();
    })
  return (
    <div className="skills" id="skill">
      <Container>
        <div className="skill-title">
          <Fade top>
            <h2 className="t-color">My Stack</h2>
            <p className="skill-text">
              Always open to learn new technologies and skills
            </p>
          </Fade>
          <Fade left>
            <span className="bottom-line"></span>
          </Fade>
        </div>
        <div className="stack-icon">
          <Row  data-aos="fade-right">
            <Col>
              <FontAwesomeIcon icon={["fab", "html5"]} size="5x" />
              <br />
              <small className="icon-name">HTML</small>
            </Col>

            <Col>
              <FontAwesomeIcon icon={["fab", "css3-alt"]} size="5x" />
              <br />
              <small>CSS</small>
            </Col>

            <Col>
            <FontAwesomeIcon icon={["fab", "js-square"]} size="5x" />
              <br />
              <small>JavaScript</small>
            </Col>
            <Col>
            <FontAwesomeIcon icon={faPhp} size="5x" />
              <br />
              <small>PHPMyAdmin</small>
            </Col>
          </Row>
          <br /> <br />
          <Row>
          <Col>
              <FontAwesomeIcon icon={["fab", "react"]} size="5x" />
              <br />
              <small>React.js</small>
            </Col>
            <Col>
              <img src={javaicon} alt="Java" height="90px" width="110px" />
              <br />
              <small>Java</small>
            </Col>
            <Col>
              <FontAwesomeIcon icon={["fab", "python"]} size="5x" />
              <br />
              <small>Python</small>
            </Col>
            <Col>
              <img src={cIcon} alt="C" height="100px" width="120px" />
              <br />
              <small>C</small>
            </Col>
          </Row>
          <br/> <br/>
          <Row data-aos="fade-left" data-aos-delay="100">
           
            <Col>
              <img src={cppIcon} alt="cppicon" height="100px" width="120px" />
              <br />
              <small>c++</small>
            </Col>
            <Col>
              <img src={vscodeIcon} alt="vscode" height="100px" width="120px" />
              <br />
              <small>VS code</small>
            </Col>
            <Col>
              <img src={msOfficeIcon} alt="msoffice" height="100px" width="120px" />
              <br />
              <small>MS Office Suite</small>
            </Col>
            <Col>
              <img src={mysql} alt="mysql" height="100px" width="120px" />
              <br />
              <small>MySQL</small>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Skills;
