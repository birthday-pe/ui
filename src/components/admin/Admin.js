import { LoadingOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { getAuth, isSignInWithEmailLink, sendSignInLinkToEmail, signInWithEmailLink } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { backgroundColor, color } from '../../App';
import { orgs } from '../../dbCollections';
import { getDocument } from '../../firebase/db';
import { customActionCodeSettingsAdmin } from '../../firebase/signInEmailConfig';
import { userLoggedInStatusKey, userSignInEmailKey } from '../../sessionStorage';
import { somethingWentWrong } from '../../toasterMessages';
import Loader from '../Loader'; 
import { toaster } from '../toaster';
import style from './../userSignup/Individuals.module.scss';
import AdminDashboard from './Catalogue';

function Admin(props) {


    const auth = getAuth();


    const { org } = useParams(); 

    const [orgData, setOrgData ] = useState(null);
    const [isSignedIn, setIsSignedIn ] = useState(null);
    const [emailSent, setEmailSent] = useState(null);
    const [email, setEmail] = useState(null);

    useEffect(()=>{
        if (isSignInWithEmailLink(auth, window.location.href) && window.localStorage.getItem(userSignInEmailKey) != null) {
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
                 if(localStorage.getItem(userLoggedInStatusKey) !== 'true') toaster(0, 'somethingWentWrong');
                // Some error occurred, you can inspect the code: error.code
                // Common errors could be invalid email and invalid or expired OTPs.
              });
          }
    }, [])


    useEffect(()=>{ 
            getDocument(orgs, org).then( res => {
                setOrgData(res.data());
            setIsSignedIn(true);
            }).catch( err => {
                console.log(isSignedIn);
                if(localStorage.getItem(userLoggedInStatusKey) == 'true'){ toaster(0, err); }
                setIsSignedIn(false);
            });
    }, [])

    return (
        !isSignedIn ? 
        <>
          <div align="center" style={{display: !emailSent ? 'none' : 'block', color: 'white'}}> 
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
            <br/>
            <br/>
            <br/> 
            <br/> 
            <h1 style={{fontWeight: '500', color: backgroundColor}}>Here's to the heart of <span style={{color: 'white'}}>{org}</span>, your employees<br/><br/> Happy Birthday!</h1>
            <br/>
            <br/> 
            <br/>
            <br/>
            <Input
            className={style.inputEmail}
            placeholder='Email address'
            style={{width: '310px'}}
            type='text' value={email} onChange={(e)=>{
                setEmail(e.target.value);
            }}/>
            <br/>
             <button
              style={{ color: color, backgroundColor: "white" }}
              onClick={()=>{
                
                sendSignInLinkToEmail(getAuth(), email, customActionCodeSettingsAdmin(org)).then(res => {
                    setEmailSent(true);
                    localStorage.setItem(userSignInEmailKey, email);
                }).catch((err)=>{
                    toaster(0, err);
                });
              }}
              id="proceed_btn"
              className={style.button}
            >
             Sign in as Admin
              <span id="proceed-btn-loader" style={{ display: "none" }}>
                &nbsp; &nbsp;
                <LoadingOutlined />
              </span>
            </button>
          </div>
          </>
          :
        orgData == null ? <Loader /> :
        <div style={{marginTop: '15vh'}}>
            <AdminDashboard data={orgData} />
        </div>
    );
}

export default Admin;