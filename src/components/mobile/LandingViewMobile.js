import {
  BorderBottomOutlined,
  InstagramOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Timeline, Radio, Input } from "antd";
import React, { useState } from "react";
import style from "../LandingView.module.scss";
import "../css/common.scss";
import { Link } from "react-router-dom";
import hpVid from "../../assets/homepageVid.mp4";
import bgGift from "../../assets/bggift_mobile.svg";
import { backgroundColor, color } from "../../App";

const rightSideBtnCss = {
  transform: "translate(0, 6px)",
  marginRight: "25px",
  fontSize: "35px",
  marginLeft: "20px",
  color: "#18A558",
};

const dateCss = {
  color: "#0BDA51",
  fontWeight: "400",
  backgroundColor: "#8D93A0",
  color: "white",
  padding: "5px 16px",
  borderRadius: "5px",
};

function LandingViewMobile(props) {
  const [mode, setMode] = useState("left");

  return (
    <>
      <br />
      <br />
      <br /> 
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div align="left">
          {/* <sub style={{color: backgroundColor}}>This is an AI generated video</sub> */}
          <br />
          <video
            src={hpVid}
            style={{
              width: "100vw",
              height: "40.83vw", 
            }}
            autoplay=""
            muted
            controls
          ></video>
        </div>{" "}
      </div>

<br/>
<br/>
<br/>


      <div className={style["para-section"]}>
        <div className={style.para} style={{}}>
          <div align="center">
            <h1
              align="center"
              style={{
                backgroundColor: "transparent",
                fontWeight: "400",
                fontSize: "29px",
                color: backgroundColor,
                marginLeft: "-15px",
                marginTop: "0px",
                padding: "10px 0px",
                width: "90%",
              }}
            >
              Elevate your employee morale with our birthday gift services
            </h1>
            <span style={{ color: "white", fontSize: "20px" }}>
              Efficiently integrated, effortlessly managed.
            </span>
            <br />

            {/* <span>Scroll &nbsp;&nbsp; <DownCircleFilled className={style['scroll-down-animation']} style={{color: '#1a73e8'}} /></span> */}
          </div>
        </div>
      </div>

      <br />

      <br />
      <br />

      <img src={bgGift} style={{width: '250px'}} />
      <br />
      <br />

      <div
        align="left"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          height: "90vh",
        }}
      >
        <span style={{ fontWeight: "200", width: "95vw" }}>
          <h1 style={{ fontWeight: "400", color: backgroundColor }}>Gifts!</h1>
          <span style={{ fontWeight: "200", fontSize: "20px", color: "white" }}>
            We offer a wide selection of unique and thoughtful items for all age
            groups.
            <br /> 
            <Link
              to={"/gifts"}
              style={{ fontWeight: "300", color: backgroundColor }}
            >
              Click here
            </Link>{" "}
            to order free sample gifts
          </span>
          <br />
        </span>

        <span style={{ fontWeight: "200", width: "92vw" }}>
          <h1
            align="right"
            style={{ fontWeight: "400", color: backgroundColor }}
          >
            Delivery
          </h1>
          <div
            align="right"
            style={{ fontWeight: "200", fontSize: "20px", color: "white" }}
          >
            We only dispatch gifts after receiving
            confirmation from the employees by contacting them via email,
            requesting them to update us with their current address.
            <br />
            <br />
            You will be able to see the status of gift deliveries to your
            employees on your BirthdayPe dashboard.
          </div>
          <br />
        </span>
      </div>
      <br />
      <br />

      {/* CLIENTS */}
      {/* <h1 style={{ fontWeight: "400", color: backgroundColor }}>Clients</h1>

              <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                alignItems: 'center', 
                width: '90vw',
              }}
              >
                <div style={{width: '100px'}}>ddd</div>  
                <div style={{width: '100px'}}>ddd</div>  
                <div style={{width: '100px'}}>ddd</div>  
                <div style={{width: '100px'}}>ddd</div>  
                <div style={{width: '100px'}}>ddd</div>  
                <div style={{width: '100px'}}>ddd</div>
              </div> */}
      <div
        align="center"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div>
          <h1 style={{ fontWeight: "400", color: "silver" }}>Contant us</h1>
          <div style={{ color: "silver" }}>
            <PhoneOutlined /> +91 8126153920
            <br />
            <InstagramOutlined /> &nbsp; bithday.pe
          </div>
          <br />
          <br />
        </div>
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
    </>
  );
}

export default LandingViewMobile;
