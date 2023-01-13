import {
  BorderBottomOutlined,
  InstagramOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Timeline, Radio, Input } from "antd";
import React, { useState } from "react"; 
import style from "./LandingView.module.scss";
import "./css/common.scss";
import { Link } from "react-router-dom";

const rightSideBtnCss = {
  transform: "translate(0, 6px)",
  marginRight: "25px",
  fontSize: "35px",
  marginLeft: "20px",
  color: "#18A558",
};

const dateCss = {
  color: '#0BDA51', fontWeight: '400', backgroundColor: '#8D93A0', color: 'white', padding: '5px 16px', borderRadius: '5px'
}

function LandingView(props) {
  const onParaClick = (id) => {
    if (id != 5) {
      document.getElementById(`${parseInt(id) + 1}`).scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const [mode, setMode] = useState('left');
  

  return (
    <>
    <h1 align="left" style={{fontWeight: '400'}} className={style.heading}>BirthdayPe</h1>
      <div
        className={style["para-section"]}
        onClick={(e) => {
          onParaClick(e.target.id);
        }}
        onScroll={(e) => {
          document.getElementById("2").scrollIntoView({
            behavior: "smooth",
          });
          e.target.style.height = "auto";
        }}
      >
        <div className={style.para} id="1">
          <div 
              align="center">
            <h1
              align="center"
              style={{
                backgroundColor: "#1a73e8",
                fontWeight: "400",
                fontSize: '27px',
                width: "100vw",
                color: "white",
                marginLeft: "-15px",
                marginTop: '0px',
                padding: '10px 0px'
              }}
            >
              We manage birthday celebrations for your employees
            </h1>
          
            
            {/* <span>Scroll &nbsp;&nbsp; <DownCircleFilled className={style['scroll-down-animation']} style={{color: '#1a73e8'}} /></span> */}
          </div>
        </div>
      </div> 

      <br/>


        <div
          className={style.para}
          id="2"
          onClick={(e) => {
            onParaClick(e.target.id);
          }}
        >
          <div
          align="center"
            style={{
              color: "silver",
              fontSize: "25px",
              fontWeight: "200",
            }}
          > 
            <>
            <br/>

             <br/>
              <Timeline align='left' style={{width: '80%'}} mode={mode}>
                <Timeline.Item  style={{fontSize: '20px'}} label={<span style={{...dateCss}}>Join us</span>}>
                  Register your organisation with an easy two step process
                  <br/> 
                  <Link style={{fontWeight: '400'}}><sub>Register here</sub></Link>
                   <br/>
                   <br/>
                </Timeline.Item>
                <Timeline.Item style={{fontSize: '20px'}} label={<span style={{...dateCss}}>Set up a Birthday Plan</span>}>
                Setting up a plan is a one time process. Choose items from our riveting catalogue to add to the birthday plan for your employees, we take care of the smooth delivery, easy!!
                   <br/>
                   <br/>
                   A birthday plan may include 
                   <ul>
                    <li>Scheduling Automatic Birthday Wishes</li>
                    <li>Premium Gift Kits</li>
                    <li>eGift Cards</li>
                    <li>Product/Service Membership Plans</li>
                    <li>Virtual Birthday Party</li> 
                   </ul>  
<br/>  
                </Timeline.Item>
                
                <Timeline.Item style={{fontSize: '20px'}} label={<span style={{...dateCss}}>Sit Back</span>}>
                  We deliver, without failure, on the birthday of every employee, as per your plan
                </Timeline.Item>
              </Timeline>
            </>  
           
          </div>

          {/* <br />A virtual birthday party can be fun and a memorable way to come
          together from anywhere to sing happy birthday, play funny games and
          share memories in the joy of another year well lived. */}
        </div> 

        <br/>
     
      
            <br/> 
            
            <br/> 
        

      <div
            align="left"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around"
              }}
            >
            
              <span style={{ fontWeight: "200", width: '40vw'}}>
              <h1 style={{ fontWeight: "500", color: "#1a73e8" }}>Gifts!</h1>
              <span style={{ fontWeight: "200", fontSize: '20px'}}>We offer a wide selection of unique and thoughtful items for all age
          groups.
          <br/>
          From personalized gifts to fun and creative ideas, we have
          something for everyone.</span>
          <br/> 
          
              </span>

              <span style={{ fontWeight: "200", width: '40vw'}}>
              <h1 align="right" style={{ fontWeight: "500", color: "#1a73e8" }}>Visit our blog</h1>
          <div align="right"  style={{ fontWeight: "200", fontSize: '20px'}}>Collection of ideas to make your birthday celebration extra special.
          <br /> Our blogs are a great resource for inspiration and tips on how to
          plan the perfect virtual or in-person party.</div>
          <br />  
          
              </span> 
            </div>
            <br/> 
            <br/> 
            
            <br/> 
            <div
            align="left"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
            
              <span style={{ width: '40vw'}}>
                <h1 style={{ fontWeight: "500", color: "#1a73e8" }}>
                  Contant us
                </h1>
                <div style={{color: 'grey'}}>
                  <PhoneOutlined /> +91 8126153920
                  <br/>
                  <InstagramOutlined /> &nbsp; bithday.pe
                  
                </div>
                <br/>
                <br/>
              </span>
              <span style={{ fontWeight: "200", width: '40vw'}}></span>
              {/* <img src={steps} style={{ width: "400px" }}></img> */}
            </div>
      

      {/* <div
        className={style.para}
        id="5"
        onClick={(e) => {
          onParaClick(e.target.id);
        }}
      >
        <span style={{ fontWeight: "500", color: '#1a73e8' }}>
          Want to do something unique this birthday!
        </span> 
        Donate as low as 0.5% of your birthday party budget to make a difference
        in the lives of hunger and poverty striken children.
      </div> */}
      <br/>
       
    </>
  );
}

export default LandingView;
