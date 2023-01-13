 
import './App.css';
import LandingView from './components/LandingView';
import NavigationMenu from './components/NavigationMenu';
import { HashRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './components/useProfile/Profile';
import {getUserLoggedInStatus} from './sessionStorage';
import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import Blogs from './components/blogs/Blogs';
import Blog from './components/blogs/Blog';

import { Col, Row } from 'antd';
import Individuals from './components/userSignup/Individuals';
import Catalogue from './components/catalogue/Catalogue';
 
function App() {

  //this object will have the auth-data as well as the firestore-document-data for the use
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
 

  const outAuth = () => (<><LandingView /></>);

  return (
    <div className="App">
      <Row>
        <Col md={{span: 24}} xs={{span: 24}}>
          {getUserLoggedInStatus() === 'true' ?
    <>
        <BrowserRouter>
        <NavigationMenu />
        <Routes> 
        <Route exact path="/" element={<>
           <LandingView  />
          </>} /> 
          <Route exact path="/registerCompany" element={<>
           <LandingView  />
          </>} /> 
           <Route path="/:org/indi" element={<>
           <Individuals/>
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
          <Route path="/gifts" element={<>
            <Catalogue />
          </>} />
        </Routes>
      </BrowserRouter>
      </>
    :
    <BrowserRouter>
        <NavigationMenu authenticated={null} />
        <Routes> 
        <Route exact path="/" element={<>
           <LandingView  />
          </>} /> 
           <Route path="/:org/indi" element={<>
           <Individuals/>
          </>} />
          <Route path="/blog" element={<> 
            <Blogs/>
          </>} />
          <Route path="/blog/:id" element={<> 
            <Blog/>
          </>} />
          <Route path="/profile" element={<>
            <Individuals/>
          </>} />
          <Route path="/gifts" element={<>
            <Catalogue />
          </>} />
          </Routes>
      </BrowserRouter>}
        </Col>

        {/* <Col md={{span: 24}} xs={{span: 24}}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
          }}>
            <h3>Mobile version is under construction</h3>
          </div>
        </Col> */}

      </Row>
      </div> 
    
  );
}

export default App;
