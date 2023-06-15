import React, { useState } from "react";
import "./Header.css";
import "../../assets/fonts.css";
import { HiMenuAlt4 } from "react-icons/hi";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [start, setStart] = useState("white");
  const [work, setWork] = useState("white");
  const [lab, setLab] = useState("white");
  const [about, setAbout] = useState("white");
  const [contact, setContact] = useState("white");

  const [open, setOpen] = useState(false);

  const setColor1 = () => {
    setStart("#5918df");
    setWork("white");
    setLab("white");
    setAbout("white");
    setContact("white");
  };

  const setColor2 = () => {
    setWork("#5918df");
    setStart("white");
    setLab("white");
    setAbout("white");
    setContact("white");
  };

  const setColor3 = () => {
    setLab("#5918df");
    setStart("white");
    setWork("white");
    setAbout("white");
    setContact("white");
  };

  const setColor4 = () => {
    setAbout("#5918df");
    setStart("white");
    setWork("white");
    setContact("white");
    setLab("white");
  };
  const setColor5 = () => {
    setContact("#5918df");
    setStart("white");
    setWork("white");
    setLab("white");
    setAbout("white");
  };

  return (
    <>
      <div className="Header">
        <div className="logo">
          <h1 className="logo_0">
            {" "}
            <span className="logo_1">{"<"}</span>{" "}
            <span className="font">A</span>
            bhishe
            <span className="font">K</span>{" "}
            <span className="logo_1">{"/>"}</span>
          </h1>
        </div>

        <div className="header_main">
          <ol className="header_options">
            <a href="#start">
              <ul style={{ color: start }} onClick={() => setColor1()}>
                Start <span className="header_options_01">{"/>"}</span>
              </ul>
            </a>
            <a href="#work">
              <ul style={{ color: work }} onClick={() => setColor2()}>
                Work <span className="header_options_01">{"/>"}</span>
              </ul>
            </a>
            <a href="#lab">
              <ul style={{ color: lab }} onClick={() => setColor3()}>
                Lab <span className="header_options_01">{"/>"}</span>
              </ul>
            </a>
            <a href="#about">
              <ul style={{ color: about }} onClick={() => setColor4()}>
                About <span className="header_options_01">{"/>"}</span>
              </ul>
            </a>
            <a href="#contact">
              <ul style={{ color: contact }} onClick={() => setColor5()}>
                Contact <span className="header_options_01">{"/>"}</span>
              </ul>
            </a>
          </ol>
        </div>
        <div className="header_menu">
          <HiMenuAlt4 color="white" size={35} onClick={() => setOpen(!open)} />
        </div>
      </div>
      {open && <MobileMenu open={open} setOpen={setOpen} />}
    </>
  );
};

export default Header;
