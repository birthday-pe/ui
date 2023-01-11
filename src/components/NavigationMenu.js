import React, { useEffect, useState } from 'react';
import style from './NavigationMenu.module.scss';
import { Link, useParams } from 'react-router-dom';
import { WarningFilled } from '@ant-design/icons';
import { getDocument } from '../firebase/db';
import { users } from '../dbCollections';

function NavigationMenu(props) {

   const { user, authenticated } = props;

   const whichTab = () => {
    switch(window.location.href.split('/')[window.location.href.split('/').length - 1]){
      case '':
        return 'Home';
      case 'gifts':
        return 'Gifts';
      case 'dashboard':
        return 'Dashboard';
      case 'blog':
        return 'Blog';
      default:
        return 'Home';
    }
   }

    const [ activeInfo, setActiveInfo ] = useState(whichTab());

    const [ dobExists, setDobExists ] = useState(true)
    

    return (
        <div className={style.menu}>
          <Link to="/" 
          className={style.link}
         style={{fontSize: '28px', color: activeInfo == 'Home' ? '#1a73e8' : '#1a73e8'}}
          onClick={(e)=>{
            setActiveInfo('Home');
          }}
          >BirthdayPe 
          &nbsp;
          </Link>

 
          <Link></Link>
          <Link></Link>
          <Link></Link>
          <Link></Link>
          <Link></Link>
          <Link></Link>
          <Link></Link>
          <Link></Link>
          <Link></Link>
          <Link></Link>
          <Link></Link>
          <Link></Link>
          <Link></Link>
          <Link></Link>

          {authenticated === null ? null : <Link to="/dashboard"
          className={ activeInfo == 'Dashboard' ? style['link-selected'] : style.link}
          onClick={(e)=>{
            setActiveInfo('Dashboard');
          }}><span style={{opacity: activeInfo == 'Blog' ? 1 : 0}}> </span>Dashboard</Link>}

{authenticated === null ? null :<Link to="/gifts" 
          className={ activeInfo == 'Gifts' ? style['link-selected'] : style.link}
          onClick={(e)=>{
            setActiveInfo('Gifts');
          }}><span style={{opacity: activeInfo == 'Gifts' ? 1 : 0}}> </span>Gifts </Link>}
          
            
          
          {authenticated === null ? null :<Link to="/blog"
          className={ activeInfo == 'Blog' ? style['link-selected'] : style.link}
          onClick={(e)=>{
            setActiveInfo('Blog');
          }}><span style={{opacity: activeInfo == 'Blog' ? 1 : 0}}> </span>Blog</Link>}
          {authenticated === null ? null :<Link to="/profile" 
          className={style.link}
          onClick={(e)=>{
            setActiveInfo('Hero');
          }}><img src={user?.photoURL} style={{width: '40px', height: '40px', borderRadius: '50%', marginBottom: '-7px'}}></img></Link> }
        </div>
    );
}

export default NavigationMenu;