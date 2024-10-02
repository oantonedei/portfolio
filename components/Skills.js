"use client";
export const DesignSkills = () => {
  return (
    <div className="section skills">
      <div className="content">
        <div className="title">
          <div className="title_inner">Software Engineering Skills</div>
        </div>
        <div className="skills">
          <ul>
            <li>
              <div className="name">System Design</div>
              <div className="progress">
                <div className="percentage" style={{ width: "85%" }}>
                  <span className="percent">85%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Backend Development</div>
              <div className="progress">
                <div className="percentage" style={{ width: "90%" }}>
                  <span className="percent">90%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Frontend Development</div>
              <div className="progress">
                <div className="percentage" style={{ width: "80%" }}>
                  <span className="percent">80%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">UI/UX Design</div>
              <div className="progress">
                <div className="percentage" style={{ width: "80%" }}>
                  <span className="percent">80%</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export const LanguagesSkills = () => {
  useEffect(() => {
    glitcheUtils.dotResize();
    setTimeout(glitcheUtils.createSkillsDot(), 1000);
  }, []);

  return (
    <div className="section skills">
      <div className="content">
        <div className="title">
          <div className="title_inner">SDLC Skills</div>
        </div>
        <div className="skills dotted">
          <ul>
            <li>
              <div className="name">Planning & Analysis</div>
              <div className="progress">
                <div className="percentage" style={{ width: "85%" }}>
                  <span className="percent">85%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Design & Implementation</div>
              <div className="progress ">
                <div className="percentage" style={{ width: "90%" }}>
                  <span className="percent">90%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Testing & Deployment</div>
              <div className="progress ">
                <div className="percentage" style={{ width: "90%" }}>
                  <span className="percent">90%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Maintenance</div>
              <div className="progress ">
                <div className="percentage" style={{ width: "85%" }}>
                  <span className="percent">85%</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export const CodingSkills = () => {
  const skills = [
    { id: 1, title: "Java / JavaScript", value: 90 },
    { id: 2, title: "NoSQL / SQL", value: 88 },
    { id: 3, title: "Angular / React ", value: 90 },
    { id: 4, title: "HTML / CSS", value: 95 },
  ];
  return (
    <div className="section skills">
      <div className="content">
        <div className="title">
          <div className="title_inner">Coding Skills</div>
        </div>
        <div className="skills circles">
          <ul>
            {skills.map((skill) => (
              <li key={skill.id}>
                <div className="name">{skill.title}</div>
                <div className={`progress p${skill.value}`}>
                  <div
                    className="percentage"
                    style={{ width: `${skill.value}%` }}
                  >
                    <span className="percent">{skill.value}%</span>
                  </div>
                  <span>{skill.value}%</span>
                  <div className="slice">
                    <div className="bar" />
                    <div className="fill" />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export const Knowledge = () => {
  return (
    <div className="section skills">
      <div className="content">
        <div className="title">
          <div className="title_inner">Knowledge</div>
        </div>
        <div className="skills list">
          <ul>
            <li>
              <div className="name">Website UI/UX design</div>
            </li>
            <li>
              <div className="name">iOS and android apps</div>
            </li>
            <li>
              <div className="name">Logo design</div>
            </li>
            <li>
              <div className="name">App prototype design</div>
            </li>
            <li>
              <div className="name">A/B testing for web applications</div>
            </li>
            <li>
              <div className="name">Business development</div>
            </li>
            <li>
              <div className="name">Graphics design and animations</div>
            </li>
            <li>
              <div className="name">Search engine optimization</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

import { glitcheUtils } from "@/utility";
import { Fragment, useEffect } from "react";
const Skills = ({
  design = true,
  languages = true,
  coding = true,
  knowledge = true,
}) => {
  return (
    <Fragment>
      {design && <DesignSkills />}
      {languages && <LanguagesSkills />}
      {coding && <CodingSkills />}
      {knowledge && <Knowledge />}
    </Fragment>
  );
};
export default Skills;
