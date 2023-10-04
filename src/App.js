import { BrowserRouter, Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Courses from "./pages/Courses"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"
import 'aos/dist/aos.css'

export default function App() {
  return (
    <div>

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="projects" element={<Projects/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="courses" element={<Courses/>}/>
      </Routes>
      </BrowserRouter>
    </div>

  )
}