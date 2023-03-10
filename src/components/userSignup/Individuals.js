import React, { useEffect, useRef, useState } from 'react';
import { googleSignInWithPopup } from '../../firebase/authProviders/google';
import style from './Individuals.module.scss';
import { getAuth, isSignInWithEmailLink, sendSignInLinkToEmail, signInWithEmailLink } from 'firebase/auth';
import { toaster } from '../toaster';
import { getUserLoggedInStatus, userLoggedInStatusKey, userSignInEmailKey } from '../../sessionStorage';
import { getDocument, updateOrCreateDocument } from '../../firebase/db';
import { users } from '../../dbCollections';
import { somethingWentWrong, updatedSuccess } from '../../toasterMessages';
import { Button, Card, DatePicker, Input } from 'antd';
import { DashOutlined, LoadingOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import { customActionCodeSettings } from '../../firebase/signInEmailConfig';
import Loader from '../Loader';
import NavigationMenu from '../NavigationMenu';
import Dashboard from '../../components/DashBoard';
import DashBoard from '../../components/DashBoard';
import { backgroundColor, color } from '../../App';
 
const auth = getAuth();

function Individuals(props){

    const { org } = useParams();
    // if org is not in the database, then show error page

    const { out } = props; 

    const [isUserDobSet, setIsUserDobSet] = useState(null);

    const [emailSent, setEmailSent] = useState(null);

    const [dob, setDob] = useState(null);
    const [email, setEmail] = useState(null);
    const [userEmail, setUserEmail] = useState(null);

    const [ loggedIn, setLoggedIn ] = useState(getUserLoggedInStatus());

    useEffect(()=>{
        if (isSignInWithEmailLink(auth, window.location.href)) {
            // Additional state parameters can also be passed via URL.
            // This can be used to continue the user's intended action before triggering
            // the sign-in operation.
            // Get the email if available. This should be available if the user completes
            // the flow on the same device where they started it.
            let emailForSignIn = window.localStorage.getItem(userSignInEmailKey);
            // The client SDK will parse the code from the link for you.
            signInWithEmailLink(auth, emailForSignIn, window.location.href)
              .then((result) => {
                // Clear email from storage.
                localStorage.setItem(userLoggedInStatusKey, 'true');
                window.location.reload();
                // You can access the new user via result.user
                // Additional user info profile not available via:
                // result.additionalUserInfo.profile == null
                // You can check if the user is new or existing:
                // result.additionalUserInfo.isNewUser
              })
              .catch((error) => {
                // Some error occurred, you can inspect the code: error.code
                // Common errors could be invalid email and invalid or expired OTPs.
              });
          }
    }, [])

    useEffect(() => {
        getAuth().onAuthStateChanged((data) => {
          if(!data){
            setIsUserDobSet(false);
          } else {
            setUserEmail(data.email);
            getDocument(org, data.email).then((res) => {
              console.log(res);
              if (
                  res._document?.data.value.mapValue.fields?.dob
              ) {
                setIsUserDobSet(true);
              } else {
                setIsUserDobSet(false);
              }
            }).catch(()=>{
              setIsUserDobSet(false);
            });
          }
        });
      }, []);


  const proceed = () => {
    if(dob == null) {
      toaster(0, 'Invalid input');
    } else {
    document.getElementById("proceed-btn-loader").style.display =
                  "inline-block";
                updateOrCreateDocument(org, userEmail, { dob: dob, author: window.localStorage.getItem(userSignInEmailKey) })
                  .then((res) => {
                    toaster(1, updatedSuccess);

                    //one second delay for toaster
                    setTimeout(()=>{
                        window.location.reload();
                    }, 1000);
                  })
                  .catch(() => {
                    toaster(0, somethingWentWrong);
                  });
                }
}
 
    return ( 
        //<div> 
        isUserDobSet == null ? <Loader/> :
        isUserDobSet ?
        <div> 
            <DashBoard />
        </div> :
        loggedIn !== 'true'  ?
        <>
          <div align="center" style={{display: !emailSent ? 'none' : 'block', color: 'white'}}>
          <NavigationMenu authenticated={null} />

          <br/>
            <br/>
            <br/>
            <br/>  
            <h2 style={{fontWeight: '500', color: 'white'}}>Email sent at <br/> <span style={{color: backgroundColor}}>{window.localStorage.getItem(userSignInEmailKey)}</span></h2>
            <br/>
            You can close this window now
            <br/>
            <br/>
            <br/>
            <br/>
          </div>

          <div align="center" style={{display: 
                window.localStorage.getItem(userSignInEmailKey) || emailSent ? 'none' : 'block'}}>
            <NavigationMenu authenticated={null} />
            <br/>
            <br/>
            <br/> 
            <br/> 
            <h1 style={{fontWeight: '500', color: backgroundColor}}>Birthday is a special time to celebrate the gift of 'you' to the world </h1>
            <br/>
            <br/> 
            <br/>
            <br/>
            <Input
            className={style.inputEmail}
            placeholder='Enter your work/company email address'
            style={{width: '310px'}}
            type='text' value={email} onChange={(e)=>{
                setEmail(e.target.value);
            }}/>
            <br/>
             <button
              style={{ color: color, backgroundColor: "white" }}
              onClick={()=>{
                
                sendSignInLinkToEmail(getAuth(), email, customActionCodeSettings(org)).then(res => {
                    setEmailSent(true);
                    localStorage.setItem(userSignInEmailKey, email);
                }).catch((err)=>{
                    toaster(0, err);
                });
              }}
              id="proceed_btn"
              className={style.button}
            >
             Sign in
              <span id="proceed-btn-loader" style={{ display: "none" }}>
                &nbsp; &nbsp;
                <LoadingOutlined />
              </span>
            </button>
          </div>
          </>
          :
            <div
          style={{
            marginTop: "25vh",
          }}
        >
          <h1 style={{color: backgroundColor}}>
             When is your birthday?
          </h1>
          <h3 style={{fontWeight: '400', color: 'white'}}>
            We do not ask for the year of birth
          </h3>
          <br />

          <br />
          <DatePicker
            placeholder='Select Date & Month'
            format={"DD MMM"}
            size="large"
            style={{
              outline: "none",
              padding: "5px 10px",
              borderRadius: "6px",
              fontSize: "20px",
              width: '300px'
            }}
            onChange={(e) => {
              if (e != null) {
                const dataArr = e.toString().split(" ");
                setDob(dataArr[1] + " " + dataArr[2] + " " + dataArr[3]);
                document.getElementById("proceed_btn_div").style.display =
                  "block";
              }
            }}
            showToday={false}
          />
          <br />
          <br />
          <br />
          <div id="proceed_btn_div" style={{ display: "block" }}>
            <button
              style={{ color: color, backgroundColor: "white" }}
              onClick={proceed}
              id="proceed_btn"
              className={style.button}
            >
              Proceed
              <span id="proceed-btn-loader" style={{ display: "none" }}>
                &nbsp; &nbsp;
                <LoadingOutlined />
              </span>
            </button>
          </div>
        </div>  
        //  showLogin ? 
        //  <div align='center' className={style.flexbox}>
        //      <input ref={loginInputRef} className={style.input} type="text" placeholder='Email'/>
        //      <input ref={loginPasswordRef} className={style.input} type="text" placeholder='Password'/>
    
       
        //      <button className={style.button} onClick={signup}>Let's go!</button>
        //     &nbsp;
        //     &nbsp;
            //  <span className={style.span} onClick={()=>{
            //      setShowLogin(false); 
            //      loginInputRef.current.value = null;
            //      loginPasswordRef.current.value = null;
            //  }}>sign up</span> 
        // </div> 
         //:
        //  <div align='center' className={style.flexbox}>
        //      <input ref={signupInputRef} className={style.input} type="text" placeholder='Email'/>
        //      <input ref={signupPasswordRef} className={style.input} type="text" placeholder='Create password'/>
       
       
        //      <button className={style.button} onClick={signup}>Sign up</button>
        //     &nbsp;
        //     &nbsp;

        //      <span className={style.span} onClick={()=>{
        //          setShowLogin(true); 
        //          signupInputRef.current.value = null;
        //          signupPasswordRef.current.value = null;
        //      }}>log in</span>
        //  </div> 
   // null
    //}
       // </div>


    );
}

export default Individuals;