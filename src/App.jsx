import { useEffect, useState } from 'react'
 

import NavbarComponent from './components/NavbarComponent.jsx'

import DashboardComponent from './components/DashboardComponent.jsx'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <NavbarComponent />
    <DashboardComponent />
      <div>
       
        
        {/* <ul>
          {records.map((list,index) => (
            <li key={index}>{list.title}</li> 
          ))}
        </ul> */}
        
      </div>
      
    </>
  )
}

export default App
