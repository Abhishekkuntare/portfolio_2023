import React from "react";
import { useState } from "react";
import "./Header.css";

const MobileMenu = ({ open, setOpen }) => {
  const [start, setStart] = useState("#ffffff80");
  const [work, setWork] = useState("#ffffff80");
  const [lab, setLab] = useState("#ffffff80");
  const [about, setAbout] = useState("#ffffff80");
  const [contact, setContact] = useState("#ffffff80");

  const setColor1 = () => {
    setStart("white");
    setWork("#ffffff80");
    setLab("#ffffff80");
    setAbout("#ffffff80");
    setContact("#ffffff80");
  };

  const setColor2 = () => {
    setWork("white");
    setStart("#ffffff80");
    setLab("#ffffff80");
    setAbout("#ffffff80");
    setContact("#ffffff80");
  };

  const setColor3 = () => {
    setLab("white");
    setStart("#ffffff80");
    setWork("#ffffff80");
    setAbout("#ffffff80");
    setContact("#ffffff80");
  };

  const setColor4 = () => {
    setAbout("white");
    setStart("#ffffff80");
    setWork("#ffffff80");
    setContact("#ffffff80");
    setLab("#ffffff80");
  };
  const setColor5 = () => {
    setContact("white");
    setStart("#ffffff80");
    setWork("#ffffff80");
    setLab("#ffffff80");
    setAbout("#ffffff80");
  };
  return (
    <div className="mobileMenu">
      <ul style={{ color: start }} onClick={() => setColor1()}>
        Start <span className="header_options_01">{"/>"}</span>
      </ul>
      <ul style={{ color: work }} onClick={() => setColor2()}>
        Work <span className="header_options_01">{"/>"}</span>
      </ul>
      <ul style={{ color: lab }} onClick={() => setColor3()}>
        Lab <span className="header_options_01">{"/>"}</span>
      </ul>
      <ul style={{ color: about }} onClick={() => setColor4()}>
        About <span className="header_options_01">{"/>"}</span>
      </ul>
      <ul style={{ color: contact }} onClick={() => setColor5()}>
        Contact <span className="header_options_01">{"/>"}</span>
      </ul>
    </div>
  );
};

export default MobileMenu;
