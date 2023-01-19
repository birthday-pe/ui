 
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
import NavigationMobile from './components/mobile/NavigationMobile';
import LandingViewMobile from './components/mobile/LandingViewMobile';
import CatalogueMobile from './components/mobile/CatalogueMobile';
import Admin from './components/admin/Admin';
import AdminDashboard from './components/admin/Catalogue';

export const backgroundColor = '#00FFEF';
export const color = '#374151';
 
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
        {/* there is a mobile version too, written in another col below */}
        <Col md={{span: 24}} xs={{span: 0}}>
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
          <Route path="/:org/admin" element={<>
           <Admin/>
          </>} />
          <Route path="/:org/indi" element={<>
           <Individuals/>
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
          <Route path="/:org/admin" element={<>
           <Admin/>
          </>} />
          <Route path="/:org/indi" element={<>
           <Individuals/>
          </>} />
          </Routes>
      </BrowserRouter>}
        </Col>




{/* mobile */}



         <Col md={{span: 0}} xs={{span: 24}}>
         {getUserLoggedInStatus() === 'true' ?
    <>
        <BrowserRouter>
        <NavigationMobile />
        <Routes> 
        <Route exact path="/" element={<>
           <LandingViewMobile  />
          </>} /> 
          <Route exact path="/registerCompany" element={<>
            <LandingViewMobile  />

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
          <br/>
          <br/>
          <br/>
          <br/>
            <AdminDashboard />
          </>} />
          <Route path="/:org/admin" element={<>
           <Admin/>
          </>} />
          <Route path="/:org/indi" element={<>
           <Individuals/>
          </>} />
        </Routes>
      </BrowserRouter>
      </>
    :
    <BrowserRouter>
        <NavigationMobile authenticated={null} />
        <Routes> 
        <Route exact path="/" element={<>
          <LandingViewMobile  />
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
          <br/>
          <br/>
          <br/>
          <br/>
            <AdminDashboard />
          </>} />
          <Route path="/:org/admin" element={<>
           <Admin/>
          </>} />
          <Route path="/:org/indi" element={<>
           <Individuals/>
          </>} />
          </Routes>
      </BrowserRouter>}
        </Col>  

      </Row>
      </div> 
    
  );
}

export default App;
