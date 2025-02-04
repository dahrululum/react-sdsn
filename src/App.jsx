import { useState } from 'react'
 

import NavbarComponent from './components/NavbarComponent.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavbarComponent />
      <div>
        <h2>Hello world</h2> 
      </div>
      
    </>
  )
}

export default App
