
// import './App.css'

import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Services from "./pages/Services"
import Login from "./pages/Login"


function App() {
  return(
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="login" element={<Login />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
