import { useState } from 'react'
import Navbar from './Navbar.jsx'
import Interests from './Interests.jsx';
import Contact from './Contact.jsx'
import Portfolio from './Portfolio.jsx'
import Footer from './Footer.jsx'
import Skills from './Skills.jsx'
import Banner from './banner.jsx'
import About from './About.jsx'
import CubeComponent from './CubeComponent'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

   <div className="content-container">
      <Navbar />
      
      <Banner></Banner>
      <About />
  
      <Skills />
    <Portfolio />
    <Interests/>
    
    <Contact />
        
    <CubeComponent></CubeComponent>
    <Footer />
    </div>
    </>
  )
}

export default App
