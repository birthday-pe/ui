import React, { useEffect } from 'react';
import { backgroundColor, color } from '../../App';
import { logout } from '../../firebase/logout';
import Loader from '../Loader';
import style from './Profile.module.scss';

function Profile(props) {

    const {user} = props;

    return (
        user ?
        <div className={style.flexbox}>
            <h2 className={style.nameHead} style={{color: color}}>{user.displayName}<br/><sub style={{color: 'white'}}>We hope you're enjoying your stay</sub></h2>
             
            <div style={{cursor: 'pointer', color: 'white'}} onClick={()=>{
                logout();
            }}>Log out</div>
        </div> 
        :
        <Loader />
    );
}

export default Profile;