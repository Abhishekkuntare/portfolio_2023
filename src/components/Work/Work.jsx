import React from "react";
import Tilt from "react-tilt";
import "./Work.css";
import projects from "../../constants/index";
import mobile from "../../constants/mobile";

const ProjectCard = ({ img, id, name, link }) => {
  return (
    <div className="project_card">
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
      >
        <a target="_blank" href={link}>
          <div className="project_card_data">
            <h3 className="project_card_name">{name}</h3>
            <div className="project_card_border" />
            <h1 style={{ color: "white" }}>0{id}</h1>
          </div>
          <div>
            <img src={img} alt="project_image" className="project_card_img" />
          </div>
        </a>
      </Tilt>
    </div>
  );
};
const MobileCard = ({ img, id, name, link }) => {
  return (
    <div className="mobile_card">
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
      >
        <a href={link} target="_blank">
          {" "}
          <div className="project_card_data">
            <h3 className="project_card_name">{name}</h3>
            <div className="project_card_border" />
            <h1 style={{ color: "gray" }}>0{id}</h1>
          </div>
          <div>
            <img src={img} alt="project_image" className="mobile_img" />
          </div>
        </a>
      </Tilt>
    </div>
  );
};

const Works = () => {
  return (
    <>
      {/* web */}
      <div className="work">
        <div className="work_vl_box">
          <div className="work_vl" />
          <div className="work_circle" />
          <div className="work_vl" />
          <div className="work_vl" />
          <div className="work_vl" />
          <div className="work_vl" />
          <div className="work_vl" />
        </div>
        <div className="work_box">
          <div id="web" />
          <p className="work_name">
            Work <span>{"/>"}</span>
          </p>
          <h2 className="work_h2">Selected web, mobile, video projects....</h2>
          <div className="work_projects">
            {projects.map((project, index) => (
              <ProjectCard
                key={`project-${index}`}
                index={index}
                {...project}
              />
            ))}
          </div>
        </div>
      </div>

      {/* app */}
      <div className="work">
        <div className="work_vl_box">
          <div className="work_vl" />
          <div className="work_circle" />
          <div className="work_vl" />
          <div className="work_vl" />
          <div className="work_vl" />
          <div className="work_vl_mobile" />
          <div className="work_vl_mobile" />
        </div>
        <div className="work_box">
          <div id="mobile" />
          <p className="work_name">
            Mobile <span>{"/>"}</span>
          </p>
          <h2 className="work_h2">Check my mobile work projects....</h2>
          <div className="work_projects">
            {mobile.map((project, index) => (
              <MobileCard key={`project-${index}`} index={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
