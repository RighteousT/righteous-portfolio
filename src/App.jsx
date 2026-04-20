import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import WorkSamples from "./components/WorkSamples";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import CareerPrep from "./components/CareerPrep";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/work-samples" element={<WorkSamples />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/career-prep" element={<CareerPrep />} />
      </Routes>
    </Router>
  );
}

export default App;