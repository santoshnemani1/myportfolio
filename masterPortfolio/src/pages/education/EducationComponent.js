import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import EducationImg from "./EducationImg";
import { competitiveSites } from "../../portfolio";
import { certifications } from "../../portfolio";
import "./EducationComponent.css";
import { Fade } from "react-reveal";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main">
        <Header theme={this.props.theme} />
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                {/* <img
									src={require("../../assests/images/education.svg")}
									alt=""
								/> */}
                <EducationImg theme={theme} />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  Education
                </h1>
                {/* <h3 className="heading-sub-text" style={{ color: theme.text }}>
                  Basic Qualification and Certifications
                </h3> */}
                <p>
                  In my pursuit of knowledge and personal growth, I embarked on
                  a fascinating journey that led me to explore the realms of
                  computer science at both undergraduate and graduate levels. I
                  completed my Bachelor's in Computer Science, gaining a solid
                  foundation in programming, algorithms, and systems design.
                  Driven by an insatiable curiosity and a desire to delve deeper
                  into the world of technology, I pursued a Master's in Computer
                  Science from Rivier University. This advanced program allowed
                  me to further develop my expertise in software development,
                  artificial intelligence, and data science. By combining the
                  rigorous analytical skills acquired during my bachelor's with
                  the advanced knowledge gained in my master's, I bring a
                  comprehensive and innovative perspective to the field of
                  computer science, constantly striving for excellence and
                  pushing the boundaries of technology.
                </p>
                <CompetitiveSites logos={competitiveSites.competitiveSites} />
              </div>
            </div>
          </Fade>
          <Educations theme={this.props.theme} />
          {/* {certifications.certifications.length > 0 ? (
            <Certifications theme={this.props.theme} />
          ) : null} */}
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Education;
