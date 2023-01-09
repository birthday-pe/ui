import {
  FacebookFilled,
  FacebookOutlined,
  InstagramFilled,
  InstagramOutlined,
  PhoneFilled,
  PhoneOutlined,
  RightCircleFilled, TwitterOutlined, WhatsAppOutlined,
} from "@ant-design/icons";
import { Timeline, Radio, Input } from "antd";
import React, { useState } from "react";
import { steps } from "../assets";
import style from "./LandingView.module.scss";
import "./css/common.scss";
import { toaster } from "./toaster";
import { messageEmpty, messageSent, somethingWentWrong } from "../toasterMessages";

const rightSideBtnCss = {
  transform: "translate(0, 6px)",
  marginRight: "25px",
  fontSize: "35px",
  marginLeft: "20px",
  color: "#18A558",
};

const dateCss = {
  color: '#0BDA51', fontWeight: '400', backgroundColor: 'grey', color: 'white', padding: '5px 16px', borderRadius: '5px'
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
  const onChange = (e) => {
    setMode(e.target.value);
  };

  return (
    <>
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
              align="center"
          
          style={{ transform: "translate(0px, -70px)" }}>
            <br />
            <br />
            <br />
            <div
              align="center"
              style={{
                backgroundColor: "#1a73e8",
                fontWeight: "300",
                fontSize: '27px',
                width: "100vw",
                padding: "15px 0px",
                color: "white",
                marginLeft: "-15px",
              }}
            >
              Managing virtual birthday celebrations for teams that prefer
              working remotely.
            </div>
            <br />
           
                       <br />    
                       
            <div
              align="center"
              style={{
                // backgroundColor: "black",

                fontWeight: "100",
                fontSize: '20px',
                width: "100vw",
                color: "black",
                marginLeft: "-15px",
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center'
              }}
            >
               <img src="https://images.pexels.com/photos/793522/pexels-photo-793522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                         style={{width: '33%', borderRadius: '10px', transform: 'translate(170px, 0px)', zIndex: '99'}}></img>
                       
                       <div align="left" className={style.neonm} style={{fontFamily: 'Roboto', width: '50vw', fontWeight: '100', zIndex: '9999'}}> 
                               

                            From selecting personalized gifts to helping you schedule and organize virtual celebrations, we have the resources to help you celebrate your employees in style. 
                          
                          </div>
            </div>


            {/* <span>Scroll &nbsp;&nbsp; <DownCircleFilled className={style['scroll-down-animation']} style={{color: '#1a73e8'}} /></span> */}
          </div>
        </div>
      </div>
      <div
        className={style["para-section"]}
        onClick={(e) => {
          onParaClick(e.target.id);
        }}
        onScroll={(e) => {
          document.getElementById("3").scrollIntoView({
            behavior: "smooth",
          });
          e.target.style.height = "auto";
        }}
      >
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
              color: "rgb(105,105,105)",
              fontSize: "25px",
              fontWeight: "300",
            }}
          >
            <h3 style={{ fontWeight: "500", color: "#1a73e8" }}>
              How Does It Work?
            </h3>
            <>
              <div>Suppose one of your employees, Joe, has his birthday on <span style={{...dateCss, backgroundColor: '#1a73e8'}}>9th September</span></div><br/><br/>
              <Timeline align='left' style={{width: '80%'}} mode={mode}>
                <Timeline.Item  style={{fontSize: '20px'}} label={<span style={{...dateCss}}>2nd September</span>}>
                  A week before Joe's birthday, we notify Joe's manager/team-leader via an automated phone call
                  <br/><br/>
                   On the automated phone call, we ask you if you want to schedule a meeting by pressing a single button on the phone!
                   <br/>
                </Timeline.Item>
                <Timeline.Item style={{fontSize: '20px'}} label={<span style={{...dateCss}}>3rd September - 8th September</span>}>
                  We notify Joe that a virtual birthday party has been scheduled for him.
                  <br/><br/>
                  A virtual celebration party link is generated and is shared with the manager/team-leader who can further share it with the team, even before the birthday date, so that the team members can plan gifts/wishes for Joe on BirthdayPe
                </Timeline.Item> 
                <Timeline.Item style={{fontSize: '20px'}} label={<span style={{...dateCss}}>9th September</span>}>
                  The team joins the virtual party
                  <br/><br/>
                  Experience an engaging, full of fun, virtual celebration on the scheduled date with
            events/games/gifts and make memories!
                </Timeline.Item>
              </Timeline>
            </> 
            <br/><br/>
           
          </div>

          {/* <br />A virtual birthday party can be fun and a memorable way to come
          together from anywhere to sing happy birthday, play funny games and
          share memories in the joy of another year well lived. */}
        </div>
      </div>
      

      <div
            align="left"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
            
              <span style={{ fontWeight: "200", width: '40vw'}}>
              <h1 style={{ fontWeight: "500", color: "#1a73e8" }}>Gifts!</h1>
              <span style={{ fontWeight: "200", fontSize: '20px'}}>We offer a wide selection of unique and thoughtful items for all age
          groups. From personalized gifts to fun and creative ideas, we have
          something for everyone</span>
          <br/> 
          
              </span>

              <span style={{ fontWeight: "200", width: '40vw'}}>
              <h1 style={{ fontWeight: "500", color: "#1a73e8" }}>Visit our blog</h1>
          <span style={{ fontWeight: "200", fontSize: '20px'}}>Looking for ideas to make your birthday celebration extra special?
          <br /> Our blog is a great resource for inspiration and tips on how to
          plan the perfect virtual or in-person party</span>
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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
       
    </>
  );
}

export default LandingView;
