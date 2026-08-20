import './App.css'
import React, {useState} from 'react'
import {Route,Routes} from 'react-router-dom';
import Login from '../src/pages/Login.jsx';

function App() {
  // const [Login,setLogin] = useState();s

  return (<>
      <Routes>
        <Route path="/" element={<Login/>}/>
        {/* <Route path="/login" element={login}/> */}
      </Routes>
    
  </>)
}

export default App;

