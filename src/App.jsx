import { useEffect, useState } from 'react'
 

import NavbarComponent from './components/NavbarComponent.jsx'
 
import ContentComponent from './components/ContentComponent.jsx'
import DashboardComponent from './components/DashboardComponent.jsx'
import ExampleApiComponent from './components/ExampleApiComponent.jsx'
import HomeComponents from './components/HomeComponents.jsx'

function App() {
   
  
  return (
    <>
    <NavbarComponent />
    <HomeComponents />
    <ContentComponent />
    {/* <ExampleApiComponent /> */}
    {/* <DashboardComponent /> */}
     
   
      
    </>
  )
}

export default App
