// import logo from './logo.svg';
// import Api_Fetch from './Api_Fetch';
// import Api_fetch_using_usereduce from './Api_fetch_using_usereduce';

import './App.css';
import {BrowserRouter as Router,Routes,Route ,Link} from "react-router-dom";
import Contacting from './Components/Contacting';
import Home from './Components/Home';
import Profile from './Components/Profile';
import { useState,createContext } from 'react';


// import Google from './Google';
// import Front from './Front';

// import Context from './Context';
// import Reducing from './Reducing';
// import Bontext_1 from './Bontext_1';


// import Input_box from './Input_box';



// import Array_of_object from './Array_of_object';
// import Color from './Color';
// import Count from './Count';
// import Usage from './Usage';
// import Use_state_1 from './Use_state_1';
// import Word_Count from './Word_Count';
// import Reducerer from './Reducerer';

export const AppContext=createContext()

function App() {

  const[username,setUsername]=useState("Google")
  return(
    <div className='App'>
      <AppContext.Provider value ={{username,setUsername}}>
      <Router>
        <div className='homecoming'>
        <Link to="/Home">HOME</Link>
        <Link to="/Profile">PROFILE</Link>
        <Link to="/Contacting">Contacting</Link>
        </div>
        <Routes>
          <Route path="Home" element={<Home/>}></Route>
          <Route path="Contacting" element={<Contacting/>}></Route>
          <Route path="Profile" element={<Profile username={username} setUsername={setUsername}/>}></Route>
        </Routes>
      </Router>
      </AppContext.Provider> 

    {/* <Reducing/>
    <Context/>
    <Bontext_1/> */}


{/* <Api_fetch_using_usereduce/> */}


  {/* <Color/> */}
  {/* <Count/> */}
  {/* <Word_Count/> */}
  {/* <Usage/> */}
  {/* <Reducerer/> */}
  {/* <Use_state_1/> */}
  {/* <Api_Fetch/> */}
  {/* <Input_box/> */}
  {/* <Google/> */}
  {/* <Front/> */}


  </div>
  )
}

export default App;
