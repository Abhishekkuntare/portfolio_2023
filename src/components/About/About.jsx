import React from "react";
import "./About.css";
import { numbers } from "../../constants/number";

const About = () => {
  return (
    <div className="about">
      <h1 className="about_h1">About {"/>"}</h1>

      <div className="about_box">
        <div className="about_main">
          <div className="about_flex">
            <div className="number_row">
              {numbers.map((elem, i) => (
                <span className="numbers">{elem.id}</span>
              ))}
            </div>
            <div>
              <div className="about_circle" />
              <div className="about_vl" />
            </div>
          </div>

          <div className="aboutdata">
            <div className="row_1">
              <p className="aboutdata_p hover">
                #include{" "}
                <span className="aboutdata_span">
                  {"<"}
                  entire/data++.ak{">"};
                </span>
              </p>
            </div>
            <div className="row_2">
              <p className="aboutdata_p hover">
                using <span className="aboutdata_span asc">experience</span> &{" "}
                <span className="aboutdata_span asc"> time;</span>
              </p>
            </div>
            <div className="row_3">
              <p className="aboutdata_p hover">
                class{" "}
                <span className="aboutdata_span">AbhishekKuntare{"{"}</span>
              </p>
            </div>
            <div className="comment">
              <p className="aboutdata_p comment">
                <span className="dot">....</span>// I can, because I did.{" "}
              </p>
              <p className="aboutdata_p comment">
                <span className="dot">...</span>// My vast variety of skills is
                continuously expanding.
              </p>
            </div>
            <div className="row4">
              <p className="aboutdata_p hover">
                <span className="dot">..</span>constructor{"(){"}{" "}
              </p>
            </div>
            <div className="row5">
              <span className="aboutdata_p  row5_this">
                <span className="dot">....</span>this{" "}
                <span className="row5_name">name</span>
                <span className="row5_this"> = </span>
                <span className="row5_myname">'Abhishek Kuntare';</span>
              </span>
            </div>
            <div className="row6">
              <span className="aboutdata_p  row5_this">
                <span className="dot">....</span>this{" "}
                <span className="row5_name">dayOfBirthTimestamp </span>
                <span className="row5_this"> = </span>
                <span className="row6_dob">0210200202;</span>
              </span>
            </div>
            <div className="row7">
              <span className="aboutdata_p  row5_this">
                <span className="dot">....</span>this{" "}
                <span className="row5_name">email</span>
                <span className="row5_this"> = </span>
                <span className="row5_myname">'abhishek@gmail.com';</span>
              </span>
            </div>
            <div className="row8  ">
              <span className="aboutdata_p">{"}"}</span>
            </div>
            <div className="row9">
              <p className="aboutdata_p hover">
                <span className="dot">..</span>
                <span className="aboutdata_span">workExperience{"(){"} </span>
              </p>
            </div>
            <div className="row10">
              <span className="aboutdata_p hover">
                <span className="dot">.....</span>return
              </span>
            </div>
            <div className="row11">
              <span className="aboutdata_p row5_myname">
                <span className="dot">..... </span> '10/2021'
                <span className="'aboutdata_p row5_myname '">
                  {" "}
                  'Front End Developer || Internship at Fitness Fuel 360',
                </span>
              </span>
            </div>
            <div className="row12">
              <span className="aboutdata_p row5_myname">
                <span className="dot">..... </span> '12/2021'
                <span className="'aboutdata_p row5_myname '">
                  {" "}
                  'Web Developer || Internship at Exposys Data Labs',
                </span>
              </span>
            </div>
            <div className="row13">
              <span className="aboutdata_p row5_myname">
                <span className="dot">..... </span> '01/2022'
                <span className="'aboutdata_p row5_myname '">
                  {" "}
                  'FullStack Developer + React-native || Internship at EDSQUARE
                  PRIVATE lMD,
                </span>
              </span>
            </div>
            <div className="row14">
              <span className="aboutdata_p row5_myname">
                <span className="dot">..... </span> '08/2023'
                <span className="'aboutdata_p row5_myname '">
                  {" "}
                  'FullStack Developer + React-native || Fulltime at ???????
                </span>
              </span>
            </div>
            <div className="row15 ">
              <span className="aboutdata_span">{"}"}</span>
            </div>
            <div className="row16">
              <p className="aboutdata_p hover">
                <span className="dot">..</span>
                <span className="aboutdata_span">education{"(){"} </span>
              </p>
            </div>
            <div className="row17">
              <span className="aboutdata_p hover">
                <span className="dot">.....</span>return
              </span>
            </div>
            <div className="row18">
              <span className="aboutdata_p row5_myname">
                <span className="dot">..... </span> 'JAN-2018'
                <span className="'aboutdata_p row5_myname '">
                  {" "}
                  'SSCE (X) HVPM, SRKV, Amravati.',
                </span>
              </span>
            </div>
            <div className="row19">
              <span className="aboutdata_p row5_myname">
                <span className="dot">..... </span> '2018-2020'
                <span className="'aboutdata_p row5_myname '">
                  {" "}
                  'HSCE (XII) Rural Institute of Technology, Amravati.',
                </span>
              </span>
            </div>
            <div className="row20">
              <span className="aboutdata_p row5_myname">
                <span className="dot">..... </span> '2021-2024'
                <span className="'aboutdata_p row5_myname '">
                  {" "}
                  ' B.Tech (IT), Prof Ram Meghe Institute of Technolgoy,
                  Amravati'
                </span>
              </span>
            </div>
            <div className="row21 ">
              <span className="aboutdata_span">{"}"}</span>
            </div>
            <div className="row23">
              <p className="aboutdata_p hover">
                <span className="dot">..</span>
                <span className="aboutdata_span">skills{"(){"} </span>
              </p>
            </div>
            <div className="row24">
              <span className="aboutdata_p hover">
                <span className="dot">.....</span>return
              </span>
            </div>
            <div className="row25">
              <span className="aboutdata_p row5_myname">
                <span className="'aboutdata_p row5_myname '">
                  " ' HTML5 / CSS/ JS ', 'React.js', ' SCSS ',
                  'Styled-Components', ' Bootstrap'/ 'Tailwind.css',
                  'Chakara-ui', 'Node.js', ' Express.js', 'MongoDB', ' MySQL/SQL
                  ', 'Firebase', ' React-Native ', 'JAVA ', ' C++', 'Python',
                  'Numpy', 'Pandas', ' Postman', 'ThunderClient', 'Github',
                  'Git', 'VS-code', ' Render', ' Vercel ', 'Jupyter ' ' Next.js
                  ' 'Canvas' 'UI/UX' "
                </span>
              </span>
            </div>
            <div className="row26 ">
              <span className="aboutdata_span">{"}"}</span>
            </div>{" "}
            <div className="row27 ">
              <span className="aboutdata_span">{"}"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;