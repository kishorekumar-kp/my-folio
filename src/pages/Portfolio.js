import React from "react";
import "../pages/portfolio.css";
import Progressbar from "../components/progressbar.js";
import Slideshow from "../components/Slide";


function Portfolio() {
  return (
    <div className="port_folio">
      <div className="first-half">
        <div
          style={{
            textDecoration: "underline",
            textAlign: "center",
            fontWeight: 600,
            fontSize: "x-large",
            paddingTop: "20px",
          }}
        >
          My Skills
        </div>
        <div className="container">
          <Progressbar score={80} tittle={"HTML & CSS"} />
          <Progressbar score={50} tittle={"JAVASCRIPT"} />
          <Progressbar score={55} tittle={"REACT.JS"} />
          <Progressbar score={30} tittle={"NODE.JS"} />
          <Progressbar score={30} tittle={"EXPRESS.JS"} />
          <Progressbar score={65} tittle={"MYSQL & MONGODB"} />
        </div>
      </div>
      <div className="second-half">
        <Slideshow/>
      </div>
    </div>
  );
}

export default Portfolio;
