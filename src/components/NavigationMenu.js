import React, { useEffect, useState } from 'react';
import style from './NavigationMenu.module.scss';
import { Link, useParams } from 'react-router-dom';
import { UserAddOutlined, WarningFilled } from '@ant-design/icons';
import { getDocument } from '../firebase/db';
import { users } from '../dbCollections';
import logo  from '../../src/assets/logo.webp';
import { backgroundColor, color } from '../App';

function NavigationMenu(props) {

   const { user, authenticated } = props;

   const whichTab = () => {
    switch(window.location.href.split('/')[window.location.href.split('/').length - 1]){
      case '':
        return 'Home';
      case 'gifts':
        return 'Gifts';
      case 'blog':
        return 'Blog';
      default:
        return 'Home';
    }
   }

    const [ activeInfo, setActiveInfo ] = useState(whichTab());

    const [ dobExists, setDobExists ] = useState(true);

    const _url = window.location.href;
    

    return (
        <div className={style.menu}>
          <Link to="/" 
         style={{color: activeInfo == 'Home' ? '#1a73e8' : '#1a73e8', padding: '2px 15px'}}
          onClick={(e)=>{
            setActiveInfo('Home');
          }}
          >
            <img style={{width: '140px', transform: 'translate(0px, 3px)'}} src={logo}/>
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

          {/* {authenticated === null ? null : <Link to="/dashboard"
          className={ activeInfo == 'Dashboard' ? style['link-selected'] : style.link}
          onClick={(e)=>{
            setActiveInfo('Dashboard');
          }}><span style={{opacity: activeInfo == 'Blog' ? 1 : 0}}> </span>Dashboard</Link>} */}

{<Link to="/gifts" 
          className={ activeInfo == 'Gifts' ? style['link-selected'] : style.link}
          onClick={(e)=>{
            setActiveInfo('Gifts');
          }}><span style={{opacity: activeInfo == 'Gifts' ? 1 : 0}}> </span>Catalogue</Link>}
          
         <Link to="/blog"
          className={ activeInfo == 'Blog' ? style['link-selected'] : style.link}
          onClick={(e)=>{
            setActiveInfo('Blog');
          }}><span style={{opacity: activeInfo == 'Blog' ? 1 : 0}}> </span>Blog</Link>

          {authenticated === null ? null :<Link to="/profile" 
          className={style.link}
          onClick={(e)=>{
            setActiveInfo('Hero');
          }}><img src={user?.photoURL ? user.photoURL : 'https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png'} style={{width: '37px', height: '37px', borderRadius: '50%', marginBottom: '-7px'}}></img></Link> }
          {authenticated !== null || _url.includes('indi') ? null :<Link
          style={{backgroundColor: '#1a73e8',
          color: 'white',
          marginRight: '15px',
          borderRadius: '6px',
          padding: '10px 15px',
          color: backgroundColor,
          backgroundColor: color
        }}
          to="/register-org"  
          onClick={(e)=>{
            setActiveInfo('Hero');
          }}>Register</Link> }
        </div>
    );
}

export default NavigationMenu;