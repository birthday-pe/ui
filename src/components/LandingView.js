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
import hpVid  from '../../src/assets/homepageVid.mp4';
import bgGift  from '../../src/assets/bggift.svg';
import { backgroundColor, color } from "../App";

              {/* there is a mobile version too, so make the change there too */}


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

  const [mode, setMode] = useState('left');
  

  return (
    <>
   
      <div
        className={style["para-section"]}
      >
        <div className={style.para} style={{
          height: '100vh'
        }}>
          <div 
              align="center"> 
            <h1
              align="center"
              style={{
                backgroundColor: 'transparent',
                fontWeight: "400",
                fontSize: '33px',
                width: "100vw",
                color: backgroundColor,
                marginLeft: "-15px",
                marginTop: '0px',
                padding: '10px 0px'
              }}
            >
                 Employee birthday gifting with our 5-minute setup solution
            </h1>
    

<h4 className={style.wordCarousel}>
    <div>
        {/* <!-- Use classes 2,3,4, or 5 to match the number of words --> */}
        <ul className={style.flip5}>
            <li>Effortlessly Integrated  🔗</li>
            <li>Efficiently Managed 🌈</li>
            <li>Effortlessly Integrated  🎉</li>
            <li>Efficiently Managed ✨</li>
            <li>Effortlessly Integrated  🎁</li>
            <li>Efficiently Managed 🎂</li>
        </ul>
    </div>
</h4>
          
            
            {/* <span>Scroll &nbsp;&nbsp; <DownCircleFilled className={style['scroll-down-animation']} style={{color: '#1a73e8'}} /></span> */}
          </div>
        </div>
      </div>     
 
        <div
          className={style.para}
          id="2"
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
   <h2
              align="center"
              style={{
                backgroundColor: 'transparent',
                fontWeight: "400",
                fontSize: '33px',
                width: "100vw",
                color: backgroundColor,
                marginLeft: "-15px",
                marginTop: '0px',
                padding: '10px 0px'
              }}
            >
              Here is how it works
            </h2>
            <br/> 
              <Timeline align='left' style={{width: '80%'}} mode={mode}>
                {/* <Timeline.Item  style={{fontSize: '20px'}} label={<span style={{...dateCss}}>Join us</span>}>
                  Register your organisation with an easy two step process
                  <br/> 
                  <Link style={{fontWeight: '400'}}><sub>Register here</sub></Link>
                   <br/>
                   <br/>
                </Timeline.Item> */}
                <Timeline.Item color={backgroundColor} style={{fontSize: '20px', color: 'white'}} label={<span style={{...dateCss}}>Select Gift Items
            
                </span>}>
                After registering your organization with us, you(as an admin) just have to choose the gift items from our riveting catalogue and we will take care of the sourcing and sending of the gifts.
                   <br/> 
                   <br/> 
                   <Link to={'/gifts'} style={{fontWeight: '300', color: backgroundColor}}>Visit Gifts Catalogue</Link> to order free sample gifts
                  
                   
                  <br/> 
                   <br/>
                </Timeline.Item>
                <Timeline.Item color={backgroundColor}  style={{fontSize: '20px', color: 'white'}} label={<span style={{...dateCss}}>Onboard Interested Employees</span>}>
                  We will not ask for any personal details of your employees other than their data of birth
                  <br/>
                  <br/> 
                  Employees will be eligible for receiving BirthdayPe gifts once they verify their work/company email
                  <br/> 
                  <br/> 
                 
                </Timeline.Item>
                <Timeline.Item  color={backgroundColor}  style={{fontSize: '20px', color: 'white'}} label={<span style={{...dateCss}}>Gifts Dispatching</span>}>
                  Before dispatching a gift-pack for any of the employees, we seek confirmation from the employee by contacting them via email, requesting them to update us with their current address.
                   <br/>
                   <br/>
                </Timeline.Item>
                <Timeline.Item color={backgroundColor}  style={{fontSize: '20px', color: 'white'}} label={<span style={{...dateCss}}>Fee</span>}>
                  Pay as low as 3% percentage of total order value per gift dispatched. 
                   <br/>
                   <br/>
                </Timeline.Item>
                {/* <Timeline.Item style={{fontSize: '20px'}} label={<span style={{...dateCss}}>Sit Back</span>}>
                  We deliver, without failure, on the birthday of every employee, as per your gift pack plan
                </Timeline.Item> */}
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
            <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
         {/* <div align="left">
         
          <br/>  
      <video src={hpVid}
      style={{
        width: '40vw',
        height: '16.6vw',
        borderRadius: '9px'
      }} controls></video>
      </div> */}

          {/* <div style={{ fontWeight: "200", width: '98vw'}}>
              <h2 style={{ fontWeight: "500", color: "white" }}>
              Why do most companies <span style={{color: backgroundColor}}>NOT</span> send birthday gifts to employees?
              </h2>
         


              </div>  */}
       
    
           </div>   

        

      <div
            align="left"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around"
              }}
            >
            
              <span style={{ fontWeight: "200", width: '40vw'}}>
              <h1 style={{ fontWeight: "400", color: backgroundColor }}>Gifts!</h1>
              <span style={{ fontWeight: "200", fontSize: '20px', color: 'white'}}>We offer a wide selection of unique and thoughtful items for all age
          groups.
          <br/>
          From personalized gifts to fun and creative ideas, we have
          something for everyone.</span>
          <br/> 
          
              </span>

              <span style={{ fontWeight: "200", width: '40vw'}}>
              <h1 align="right" style={{ fontWeight: "400", color: backgroundColor }}>Visit our blog</h1>
          <div align="right"  style={{ fontWeight: "200", fontSize: '20px', color: 'white'}}>Collection of ideas to make your birthday celebration extra special.
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
                <h1 style={{ fontWeight: "400", color: "silver" }}>
                  Contant us
                </h1>
                <div style={{color: "silver"}}>
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
