import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./components/Login/Auth"
import Home from "./pages/Home";
import AboutUs from "./components/About-us/AboutUs";
import Courses from "./components/Courses-section/Courses";
import Learn from "./components/student-page/components/Learn";
import School from "./components/School/school";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/learn" element={<Learn />} />
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Auth />} />
     <Route path="/courses" element={<Courses />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
