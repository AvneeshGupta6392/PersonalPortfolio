import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
// import { FaceIcon, ImageIcon, SunIcon } from '@radix-ui/react-icons';

import './App.css'
import Header from "./component/Header"
import Home from "./component/Home"
import About from "./component/About"
import Skill from "./component/Skill"
import Project from "./component/Project"
import Contact from "./component/Contact"
import Footer from "./component/Footer"


function App() {
  return (
    <>
   <Header/>
   <Home/>
   <About/>
   <Skill/>
   <Project/>
   <Contact/>
   <Footer/>
   </>
  )
}

export default App
