import React from "react";
import "./Profile.css";
import image from "../image/bgimg.png";
import img1 from "../image/archer.png";
// import { useState } from "react";
// import Portfolio from "./Portfolio";

function Profile() {  


  // let para_about =React.createElement("div",{className:"text-component"},
  // React.createElement("h2",{className:"h2"},"My Story"),
  // React.createElement("p",{className:"story"},"As developers, we are constructing new things every day. Each lineof code is another building block. .We might be adding new features or solving bugs every day")
  // )
  // let para_edu =React.createElement("div",{className:"text-component"},
  // React.createElement("h2",{className:"h2"},"Graduate"),
  // React.createElement("p",{className:"story"},"As developers, we are constructing new things every day. Each lineof code is another building block. .We might be adding new features or solving bugs every day")
  // )
  // let para_skill =React.createElement("div",{className:"text-component"},
  // React.createElement("h2",{className:"h2"},"skill"),
  // React.createElement("p",{className:"story"},"As developers, we are constructing new things every day. Each lineof code is another building block. .We might be adding new features or solving bugs every day")
  // )

  // const datas=[para_about,para_edu,para_skill]

// let [active,setActive] = useState("");
//   const [edu,setedu]=useState(datas[0]);

  // let handleclick=()=>{
  //   const abt =datas
  //   setData(abt)
  //   console.log(abt)
  // }

  // const handleclick=(e)=>{
  //  let para_edu =React.createElement("div",{className:"text-component"},
  //  React.createElement("h2",{className:"h2"},"Graduate"),
  //  React.createElement("p",{className:"story"},"As developers, we are constructing new things every day. Each lineof code is another building block. .We might be adding new features or solving bugs every day")
  //  )
  

  // }

  // let handleclick_1=()=>{
  //   const edu1 =datas[1]
  //   setedu(edu1)
  //   console.log(edu1)
  // }

  
  // let handleclick=()=>{
  //   const abt =datas
  //   setData(abt)
  //   console.log(abt)
  // }
  // const Values= ()=>{
//   if(datas===datas[1]){
//     return datas[1]

//   }
//   else if (datas===datas[1]) {
//     return datas[1]
//   }
//   else if (datas===datas[2]) {
//     return datas[2]

//   } else {
//     return datas[2]
//   }
// }
// const Divi=()=>{
// return(<>
//   <div>
//     {/* <h3></h3> */}
//     <p>As developers, we are constructing new things every day. Each line
//             of code is another building block. .We might be adding new features
//             or solving bugs every day.As developers, we are constructing new things every day. Each line
//             of code is another building block. .We might be adding new features
//             or solving bugs every day.</p>
//   </div>
//   </>
// )

// }


  

  return (
    <div className="profile">
      <div className="container">
        <div className="text-container">
          <h1>
            I am Kishorekumar
            <br /> A MERN Stack Developer
          </h1>
          <p className="para">
            As developers, we are constructing new things every day. Each line
            of code is another building block. .We might be adding new features
            or solving bugs every day.
          </p>
          <button className="btn1 btn">Hire Me! ❤️</button>
          <button className="btn2 btn">View my portfolio ➡️</button>
        </div>
        <div className="img-container">
          <img src={image} alt="" width={350} height={350} style={{ filter: "drop-shadow(5px 5px 10px #000)" }}/>
        </div>
      </div>
      <div className="container-2">
        <div className="img1-container">
          <img src={img1} alt="" width={400} height={250} className="img1" />
        </div>
        <div className="text-container2">
          <div className="text-component">
            <h2>About Me</h2>
            <h3>MY STORY</h3>
            <p className="pop"> As developers, we are constructing new things every day. Each line
            of code is another building block. .We might be adding new features
            or solving bugs every day.</p>
            <h3>GRADUATION</h3>
            <p className="pop">I am a undergraduate student with 7.0 CGPA in department of Mechanical Engineering.
               And Enter the practical world in after May-2020 with full of hope and some technical skill </p>
            {/* <button onClick={()=>('first_div')}>ABOUT ME</button> */}
            {/* <button onClick={()=>setActive("second_div")}>EDUCATION</button>
            <button onClick={()=>setActive("third_div")}>SKILLS</button>
          </div><div> */}
            {/* {para_about} */}
          {/* <Divi/> */}
          {/* {active==="first_div" && <Divi tittle="1"/> }
          {active==="second_div" && <Divi tittle="2"/> }
          {active==="third_div" && <Divi tittle="3"/> }
          {/* {active==="second_div" && {para_edu}} */}
          {/* {active==="third_div" && {para_skill}} */}
          {/* */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
