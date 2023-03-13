import React from 'react';
import {
  Route, Routes, HashRouter
} from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <div>
      <HashRouter>

        <div className='h-screen flex flex-col justify-between px-2
          '>
          <div className=''>
            <Navbar />
          </div>
          <div>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;