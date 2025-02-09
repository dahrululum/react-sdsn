import { useEffect, useState } from 'react'
 

import NavbarComponent from './components/NavbarComponent.jsx'
 
import ContentComponent from './components/ContentComponent.jsx'
import DashboardComponent from './components/DashboardComponent.jsx'
import ExampleApiComponent from './components/ExampleApiComponent.jsx'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <NavbarComponent />
    <ContentComponent />
    {/* <ExampleApiComponent /> */}
    {/* <DashboardComponent /> */}
       
      
    </>
  )
}

export default App
