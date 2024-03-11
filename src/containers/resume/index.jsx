import React from "react";
import {BsInfoCircleFill} from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { data } from "./utils";
import './styles.scss';
import {MdWork} from 'react-icons/md'
import { FaBlackTie } from "react-icons/fa"; 

const Resume = () => {
    return (
      <section id="resume" className="resume">
        <PageHeaderContent
          headerText="My Resume"
          icon={<FaBlackTie size={40} />}
        />
        <div className="timeline">
          <div className="timeline__experience">
            <h3 className="timeline__experience__header-text">Experience</h3>
            <VerticalTimeline layout="1-column" lineColor="var(--selected-theme-main-color)">
              {data.experience.map((item) => (
                <VerticalTimelineElement
                  key={item.title}
                  className="timeline__experience__vertical-timeline-element"
                  contentStyle={{
                    background: "none",
                    color: "var(--selected-theme-sub-text-color)",
                    border: "1.5px solid var(--selected-theme-main-color)",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(33, 150, 243)",
                  }}
                 
                  iconStyle={{ background: "#181818", color: "var(--selected-theme-main-color)" }}
                  icon={<MdWork />}
                  dateClassName="vertical-timeline-element-custom-date"
                >
                  <div className="vertical-timeline-element-title-wrapper">
                    <h3 className="vertical-timeline-element-title">
                      {item.title}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      {item.subTitle}
                    </h4>
                  </div>
                  <p>{item.description}</p>
                  <p>{item.date}</p>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
          <div className="timeline__education">
            <h3 className="timeline__education__header-text">Education</h3>
            <VerticalTimeline layout="1-column" lineColor="var(--selected-theme-main-color)">
              {data.education.map((item) => (
                <VerticalTimelineElement
                  key={item.title}
                  className="timeline__experience__vertical-timeline-element"
                  contentStyle={{
                    background: "none",
                    color: "var(--selected-theme-sub-text-color)",
                    border: "1.5px solid var(--selected-theme-main-color)",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(33, 150, 243)",
                  }}
                  
                  iconStyle={{ background: "#181818", color: "var(--selected-theme-main-color)" }}
                  icon={<MdWork />}
                >
                  <div className="vertical-timeline-element-title-wrapper">
                    <h3 className="vertical-timeline-element-title">
                      {item.title}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      {item.subTitle}
                    </h4>
                  </div>
                  <p>{item.description}</p>
                  <p>{item.date}</p>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </section>
    );
  }
export default Resume;