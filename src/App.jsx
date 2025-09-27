import react from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'

import Home from '../src/pages/Home'
import Contact from '../src/pages/Contact'
import AboutPage from '../src/pages/AboutPage'

function App() {

  return (
    <div className="font-sans">
      {/* Navbar is visible on all pages */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      {/* Footer is visible on all pages */}
      <Footer />
    </div>
  )
}

export default App
