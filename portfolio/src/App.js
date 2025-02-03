import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ParticlesBackground from './components/ParticlesBackground';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import './styles/App.css';

function App() {
   const [isDarkMode, setIsDarkMode] = useState(false);

  // Función para alternar el modo oscuro
  const toggleColorMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <Router>
       <NavBar isDarkMode={isDarkMode} toggleColorMode={toggleColorMode} />
<ParticlesBackground isDarkMode={isDarkMode} id="tsparticles" />
        <div className="d-flex justify-content-center align-items-center full-height">
        <div className="d-flex flex-column justify-content-center align-items-center w-50 p-2">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;