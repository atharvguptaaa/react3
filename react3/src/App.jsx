import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Button.jsx'
import Navbar from './Navbar.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar title="Atharv" home="made" features="this" pricing="reusable" disabled="Navbar"/>
     
     <Button>click me</Button>
     <Button>click me again</Button>
     <Button>click me once more</Button>
    
     

    </>

  )

  
}

export default App
