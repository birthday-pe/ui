 
import './App.css';
import LandingView from './components/LandingView';
import NavigationMenu from './components/NavigationMenu';
import { HashRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import { db, getDocument } from './firebase/db';
import Auth from './components/Auth';
import Profile from './components/useProfile/Profile';
import {getUserLoggedInStatus} from './sessionStorage';
import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import DashBoard from './components/DashBoard';
import GetDOB from './components/Home';
import { FacebookOutlined, HomeFilled, InstagramOutlined, TwitterOutlined, WarningFilled, WhatsAppOutlined } from '@ant-design/icons';
import Home from './components/Home';
import { users } from './dbCollections';
import { toaster } from './components/toaster';
import Blogs from './components/blogs/Blogs';
import Blog from './components/blogs/Blog';
import { Col, Row } from 'antd';
 
function App() {

  //this object will have the auth-data as well as the firestore-document-data for the user
  const [ user, setUser ] = useState(null);

  const [ userDocUpdated, setUserDocUpdated ] = useState(false);
 
  useEffect(() => {
    // get Current User Information
    if(getUserLoggedInStatus() === 'true'){
      getAuth().onAuthStateChanged((data) =>{
        setUser({...user, ...data});
        console.log(data);
      });
    }
  }, [])

  useEffect(() => {
    if(getUserLoggedInStatus() === 'true'){
      if(user !== null && userDocUpdated === false){
        getDocument(users, user.email).then(data => {
          setUser({ ...user, fireStoreDocumentData: data._document?.data.value.mapValue.fields});
          setUserDocUpdated(true);
        })
      }
    }
  }, [user])

  const outAuth = () => (<><Auth out={true}/><br/><LandingView /></>);

  return (
    <div className="App">
      <Row>
        <Col lg={{span: 24}} xs={{span: 0}}>
          {getUserLoggedInStatus() === 'true' ?
    <>
        <BrowserRouter>
        <Routes> 
           <Route exact path="/" element={<>
            <Home user={user === {} ? null : user}/>
          </>} />
          <Route exact path="/dashboard" element={<>
            <Home user={user === {} ? null : user}/>
          </>} />
          <Route exact path="/auth" element={<>
            <LandingView user={user === {} ? null : user} />
          </>} /> 
          <Route path="/blog" element={<>
            <Blogs/>
          </>} />
          <Route path="/blog/:id" element={<>
            <Blog/>
          </>} />
          <Route path="/profile" element={<>
            <Profile user={user === {} ? null : user} />
          </>} />
        </Routes>
        <NavigationMenu user={user === {} ? null : user} />
      </BrowserRouter>
      </>
    :
    <BrowserRouter>
        <Routes> 
        <Route exact path="/" element={outAuth()} />
        <Route exact path="/dashboard" element={outAuth()} />
          <Route exact path="/auth" element={<>
            <Auth />
          </>} /> 
          <Route path="/blog" element={<>
            <Auth />
          </>} />
          <Route path="/profile" element={<>
            <Auth/>
          </>} />
          </Routes>
      </BrowserRouter>}
        </Col>

        <Col lg={{span: 0}} xs={{span: 24}}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
          }}>
            <h3>Mobile version is under construction</h3>
          </div>
        </Col>

      </Row>
      </div> 
    
  );
}

export default App;
