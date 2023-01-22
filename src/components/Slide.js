import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import portfolio from '../image/portfolio.png'
import expence from '../image/expence.png'
import quizz from '../image/quizz.png'
import '../components/Slide.css'
// import { Link } from "react-router-dom";


function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#faad92" }}
      onClick={onClick}
    />
  );
}

let PrevArrow=(props)=> {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#faad92" }}
      onClick={onClick}
    />
  );
}

function Slideshow(){

  const backstyle0={
    background:`linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${quizz})`,
    backgroundSize:"cover",
    height:"300px",
    width:"600px",
    margin:"0 0 0 175px"

    }
    const backstyle1={
      background:`linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${portfolio})`,
      backgroundSize:"cover",
      height:"300px",
      width:"600px",
      margin:"0 0 0 175px"
  
      }
      const backstyle2={
        background:`linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${quizz})`,
        backgroundSize:"cover",
        height:"300px",
        width:"600px",
        margin:"0 0 0 175px"
    
        }
        const backstyle3={
          background:`linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${expence})`,
          backgroundSize:"cover",
          height:"300px",
          width:"600px",
          margin:"0 0 0 175px"
      
          }

    let settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
      <div style={{width:"90%" ,marginLeft:"50px"}}>
        <h2 style={{textAlign:"center", marginTop:0 ,color:"#404969",textDecoration:"underline"}}>Small Projects</h2>
        <Slider {...settings}>
          <div  >
          <div style={backstyle0}  >
            <div className="bg-con">
              <span>Quiz Application</span>
              <div>
              <a href="https://www.google.com" target={0} preventdefault >Source code</a>
              <a href="https://www.google.com">preview</a>
              </div> 
            </div>

            </div>
          </div>
          <div>
            <div style={backstyle1}  >
            <div className="bg-con">
              <span>Portfolio</span>
              <div>
              <a href="www.google.com" target={0} preventdefault >Source code</a>
              <a href="www.google.com">preview</a>
              </div> 
            </div>
            </div>
          </div>
          <div>
          <div style={backstyle2}  >
          <div className="bg-con">
              <span>Quiz App</span>
              <div>
              <a href="www.google.com" target={0} preventdefault >Source code</a>
              <a href="www.google.com">preview</a>
              </div> 
            </div>
            </div>
          </div>
          <div>
          <div style={backstyle3}  >
          <div className="bg-con">
              <span>Expence Calculator</span>
              <div>
              <a href="www.google.com" target={0} preventdefault >Source code</a>
              <a href="www.google.com">preview</a>
              </div> 
            </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
  export default Slideshow;