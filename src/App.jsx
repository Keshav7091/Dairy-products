import react from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'

import Home from '../src/pages/Home'
import Contact from '../src/pages/Contact'
import AboutPage from '../src/pages/AboutPage'
import Recipes from './pages/Recipes';
import Products from './pages/Products';
import Services from './pages/Services';
import ScrollToTop from './components/ScrollToTop';

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
        <Route path='/recipes' element={ <Recipes /> } />
        <Route path='/products' element={ <Products /> } /> 
        <Route path='/services' element={ <Services /> } />
      </Routes>

      {/* Footer is visible on all pages */}
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
