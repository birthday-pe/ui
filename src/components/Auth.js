import React, { useEffect, useRef, useState } from 'react';
import { googleSignInWithPopup } from '../firebase/authProviders/google';
import style from './Auth.module.scss';
import { getAuth } from 'firebase/auth';
import { toaster } from './toaster';
 
const auth = getAuth();

function Auth(props){

    const { out } = props; 
 
    return ( 
        //<div>
<div align="left">
<h2 align="left" className={style.heading}>BirthdayPe</h2> 


         <div align='right' className={out === true ? style['providers-out'] : style.providers}>
         <div onClick={googleSignInWithPopup}  className={style['google-btn']}>
            <div className={style['google-icon-wrapper']}>
                <img className={style['google-icon']} src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
            </div>
            <p className={style['btn-text']}><>Continue with google</></p>
            </div>
         </div>
        </div>
        // {
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

export default Auth;