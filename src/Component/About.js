import React from "react";
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import "./CSS/About.css";
import Fade from "react-reveal/Fade";
// import Reveal from "react-reveal/Reveal";
import me from "../image/me.jpg";
import Slide from 'react-reveal/Slide';


const About = () => {
  return (
    <div className="about" id="about">
      <Container>
        <Row>
          <Col xs sm={12} lg md={7}>
            <div className="about-header">
              <Fade bottom>
                <h2 className="t-color">About Me</h2>
              </Fade>
              <Fade bottom>
                <h6 className="text-job">Student</h6>
              </Fade>
            </div>
            <div className="about-text">
              <Tabs
                defaultActiveKey="about"
                id="uncontrolled-tab-example"
                className="mb-3 about-tab"
              >
                <Tab eventKey="about" title="About" className="about-link">
                <Slide bottom>
                  <p className="mt-10">
                    I am Bhargav Praveen Chintapalli from Visakhapatnam,
                    Andhra pradesh. I am currently pursuing my Bachelor of 
                    Technology major in computer science from Gitam university.
                    <br />
                    <br />
                    From childhood I'm a very enthusiastic kid and 
                    has a zeal to learn new things. I'm a quick learner, self confident,
                    hardworking and have a positive mindset who is ready to work an 
                    organization that offers me a consistently positive atmosphere
                    to learn new technologies and implement them for the betterment
                    of business.
                    <br /> <br />I'm intrested in Frontend Development and had done projects on this feild.
                  </p>
                  </Slide>
                </Tab>
                <Tab
                  eventKey="education"
                  title="Education"
                  className="about-link"
                >
                <Slide bottom>
                  <div>
                    <h2>B.Tech. in Computer Science and Engineering.</h2>
                    <h4>Gitam University, Visakhapatnam</h4>
                    <p>GPA: 7.12</p>
                    <small>Acadamic Year: 2021-2025</small>
                  </div>
                  <div>
                    <h2>Intermediate Board</h2>
                    <h4>Ascent Junior College</h4>
                    <p>GPA: 7.86</p>
                    <small>Passed Year: 2021</small>
                  </div>
                  </Slide>
                </Tab>
                <Tab
                  eventKey="certification"
                  title="Certification"
                  className="about-link"
                >
                <Slide bottom>
                  <div>
                    <a href="https://coursera.org/share/e0094a521c057c3b3556c21b6fbc0404">
                      <h4>Foundations of User Experience (UX) Design</h4>
                    </a>
                    <small>Coursera</small>
                  </div>
                  <br />
                  <div>
                    <a href="https://coursera.org/share/e0d5b6d279738d9e54b446c99e0324bf">
                      <h4>Tools of the Trade: Linux and SQL</h4>
                    </a>
                    <small>Coursera</small>
                  </div>
                  </Slide>
                </Tab>
              </Tabs>
            </div>
            <div className="hire-cv-button">
            <Fade left>
              <a href="https://drive.google.com/file/d/1GcDrOqeLNtz9Y6mVrtUZkzOzjHgXKipb/view?usp=sharing">
                <button className="theme-fill-btn"> Download CV </button>
              </a>
              </Fade>
            </div>
          </Col>
          <Col xs sm={12} lg md={5} className="my-photo">
          <Fade right>
          <img src={me} alt="my" />
          </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
