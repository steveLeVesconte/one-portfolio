// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//import './App.css'
import React from "react";
import {BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Portfolio from "./components/Portfolio"
import SocialLinks from "./components/SocialLinks"
import Main from "./components/MainPage"
import PublicAccess from "./components/projects/PublicAccess"
import PublicPayment from "./components/projects/PublicPayment";
import AzureGo from "./components/projects/AzureGo";


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>

    <Routes>
        <Route path="/" exact element={<Main />} />
       {/*  <Route path="/publicaccess" render={routerProps => <Sample {...routerProps} sampleProp={"sample"}/>} /> */}
        <Route path="/publicaccess" element={<PublicAccess />} />
        <Route path="/publicpayment" element={<PublicPayment />} />
        <Route path="/azurego" element={<AzureGo />} />
        <Route path='/default' render={() => <Navigate to= "/" />} />
 {/*        <Route component={NoMatch} /> */}
      </Routes>

 {/*    <NavBar/> */}
{/*     <Main/>
    <PublicAccess/> */}
{/* <Home/>
<About/>
<Portfolio/>
<Experience/>
<Contact/>
<SocialLinks/> */}

  {/*   <h1 className="text-4xl font-bold underline font-signature">
      Hello world! a change, another</h1>
     */}
    </>
  )
}

export default App
