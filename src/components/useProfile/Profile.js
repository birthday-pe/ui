import React, { useEffect } from 'react';
import { logout } from '../../firebase/logout';
import Loader from '../Loader';
import style from './Profile.module.scss';

function Profile(props) {

    const {user} = props;

    return (
        user ?
        <div className={style.flexbox}>
            <h2 className={style.nameHead}>{user.displayName}<br/><sub>We hope you're enjoying your stay</sub></h2>
             
            <div style={{cursor: 'pointer'}} onClick={()=>{
                logout();
            }}>Log out</div>
        </div> 
        :
        <Loader />
    );
}

export default Profile;