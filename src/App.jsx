// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//import './App.css'

import About from "./components/About"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Portfolio from "./components/Portfolio"
import SocialLinks from "./components/SocialLinks"

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
<Home/>
<About/>
<Portfolio/>
<SocialLinks/>

  {/*   <h1 className="text-4xl font-bold underline font-signature">
      Hello world! a change, another</h1>
     */}
    </>
  )
}

export default App
