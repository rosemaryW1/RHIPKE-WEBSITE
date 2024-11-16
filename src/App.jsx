import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home'; 

function App() {
  return (
    <Router>
      <div style={{ 
        width: '100%', 
        margin: 0,
        padding: 0,
        overflowX: 'hidden'
      }}>
        <NavbarComponent />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/services" element={<Services />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;