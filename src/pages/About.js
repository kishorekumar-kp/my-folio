import React from "react";
import "../pages/About.css";
import contact from "../image/casual-man.png";
import { FaInstagram ,FaFacebookSquare,FaLinkedin,FaGithub} from "react-icons/fa";


function About() {
  return (
    <>
      <div className="about">
        <div className="img-container">
          <img
            src={contact}
            alt=""
            width={500}
            height={400}
            style={{ filter: "drop-shadow(5px 5px 10px #000)" }}
          />
          <button className="con_btn">View CV/Resume</button>
        </div>
        <div className="icons">
          <strong style={{ fontSize: "x-large" }}>Contact Me</strong>
          <br />
          <br />
          <span className="text">
            Get In Touch with:{" "}
            <a href="kpkishorekumar26@gmail.com" target="_blank" style={{textDecoration:"none",color:"#404969"}}>
              kpkishorekumar26@gmail.com
            </a>
          </span>
          <br />
          <br />
          <span className="text">Mobile No: +91 7339629143</span>
          <br />
          <br />
          <span className="text">or find me on</span>
          <br />
          <br />
          <a
            className="icon"
            href="https://www.linkedin.com/in/kishorekumar-k-b9aa58192/"
            target="blank"
          >
            <FaFacebookSquare />
          </a>
          <a
            className="icon"
            href="https://www.instagram.com/small_boy_kicha_/"
            target="blank"
          >
            <FaInstagram />
          </a>
          <a
            className="icon"
            href="https://www.linkedin.com/in/kishorekumar-k-b9aa58192/"
            target="blank"
          >
            <FaLinkedin />
          </a>
          <a
            className="icon"
            href="https://github.com/kishorekumar-kp"
            target="blank"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </>
  );
}

export default About;
