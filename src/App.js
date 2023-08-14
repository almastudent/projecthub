import React, { useEffect, useState } from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import SIgnup from "./components/Signup/SIgnup";
import { auth } from "./firebase";


function App() {
  
const [userName, setUserName]=useState("")
useEffect(()=>{
 auth.onAuthStateChanged((user)=>{
  if(user){
    setUserName(user.displayName);
  } else setUserName("")
 })



},[])

  return (
    <>
   <Router>
    <Routes>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Signup" element={<SIgnup/>}/>
      <Route path="/" element={<Home name={userName}/>}/>
    </Routes>
   </Router>
    </>
  );
}

export default App;
