
import PageHeaderContent from "../../components/pageHeaderContent";
import React from "react";
import { FaDev, FaDatabase } from "react-icons/fa";
import { DiAndroid, DiApple } from "react-icons/di";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const personalDetails = [
  {
    label: "Name",
    value: "Wan Zulfadhli",
  },
  {
    label: "Age",
    value: "25",
  },
  {
    label: "Address",
    value: "Ampang, Kuala Lumpur",
  },
  {
    label: "Email",
    value: "zulwan2@gmail.com",
  },
  {
    label: "Contact No",
    value: "+601137958915",
  },
];

function About() {
  return (
    <section className="about" id="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3 className="developerContent">Front End Developer</h3>
            <p>
            I am currently working as a software developer with one year of experience in Java programming and the Struts
 framework. I excel in collaborative team environments and have a strong enthusiasm for learning and adapting to
 new technologies.
            </p>
          </Animate>
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(500px)",
            }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3 className="personalContent">Personal Information</h3>
            <ul>
              {personalDetails.map((item) => (
                <li key={item.label}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(500px)",
            }}
            end={{ transform: "translateX(0px)" }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <DiApple color="var(--selected-theme-main-color)" size={60} />
                {/* <p className="service-text">Web Design</p> */}
              </div>
              <div>
                <FaDev color="var(--selected-theme-main-color)" size={60} />
                {/* <p className="service-text">Web Development</p> */}
              </div>
              <div>
                <FaDatabase color="var(--selected-theme-main-color)" size={60} />
                {/* <p className="service-text">Databases</p> */}
              </div>
              <div>
                <DiAndroid color="var(--selected-theme-main-color)" size={60} />
                {/* <p className="service-text">Android Developement</p> */}
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
}

export default About;