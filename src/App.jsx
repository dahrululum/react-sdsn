import { useEffect, useState } from 'react'
 

import NavbarComponent from './components/NavbarComponent.jsx'
 
import ContentComponent from './components/ContentComponent.jsx'
import DashboardComponent from './components/DashboardComponent.jsx'
import ExampleApiComponent from './components/ExampleApiComponent.jsx'
import HomeComponents from './components/HomeComponents.jsx'
import FooterComponent from './components/FooterComponent.jsx'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
   
  
  return (
    <>
    <Router>
      <NavbarComponent />
        <Routes>
          <Route path="/" exact  />
          <Route path="/menu" exact   />
          <Route path="/about" exact   />
          <Route path="/contact" exact  />
        </Routes>
        
      </Router>

    
    <HomeComponents />
    <ContentComponent />
    {/* <ExampleApiComponent /> */}
    {/* <DashboardComponent /> */}
     
   
    <FooterComponent />  
    </>
  )
}

export default App
