import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import Services from './pages/services/services';
import Gallery from './pages/gallery/Gallery';
import Contact from './pages/contact/contact';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Reviews from './pages/reviews/Reviews'
import './App.css'; // Global Styles

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/gallery' element={<Gallery />}/>
        <Route path='/reviews' element={<Reviews />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;