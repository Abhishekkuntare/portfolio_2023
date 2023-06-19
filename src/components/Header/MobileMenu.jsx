import React from "react";
import { useState } from "react";
import "./Header.css";

const MobileMenu = ({ setOpen, toggleMusic, isMusic, FaPause, FaMusic }) => {
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
      <button className="music" onClick={toggleMusic}>
        {isMusic ? (
          <FaPause size={20} color="white" />
        ) : (
          <FaMusic size={20} color="white" />
        )}
      </button>
      <a href="#start">
        <ul
          style={{ color: start }}
          onClick={() => {
            setColor1();
            setOpen(false);
          }}
        >
          Start <span className="header_options_01">{"/>"}</span>
        </ul>
      </a>
      <a href="#work">
        {" "}
        <ul
          style={{ color: work }}
          onClick={() => {
            setColor2();
            setOpen(false);
          }}
        >
          Work <span className="header_options_01">{"/>"}</span>
        </ul>
      </a>
      <a href="#lab">
        {" "}
        <ul
          style={{ color: lab }}
          onClick={() => {
            setColor3();
            setOpen(false);
          }}
        >
          Lab <span className="header_options_01">{"/>"}</span>
        </ul>
      </a>
      <a href="#about">
        {" "}
        <ul
          style={{ color: about }}
          onClick={() => {
            setColor4();
            setOpen(false);
          }}
        >
          About <span className="header_options_01">{"/>"}</span>
        </ul>
      </a>
      <a href="#contact">
        {" "}
        <ul
          style={{ color: contact }}
          onClick={() => {
            setColor5();
            setOpen(false);
          }}
        >
          Contact <span className="header_options_01">{"/>"}</span>
        </ul>
      </a>
    </div>
  );
};

export default MobileMenu;
