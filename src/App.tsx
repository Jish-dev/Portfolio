
import Hero from "./pages/Hero"
import About from "./pages/About"
import Navbar from "./components/NavBar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { myContext } from "./context/context"
import Projects from "./pages/Projects"
import Skills from "./pages/Skill"
import Service from "./pages/Service"
import Contact from "./pages/Contact"

function App() {
  return (
    <myContext.Provider value={""}>
      
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Hero/>}></Route>
          <Route path="About" element={<About />}></Route>
          <Route path="skills" element={<Skills/>}></Route>
          <Route path="projects" element={<Projects/>}></Route>
          <Route path="services" element={<Service/>}></Route>
          <Route path="contact" element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
    </myContext.Provider>
  )
}

export default App
