import { BrowserRouter as Router } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import Footer from './components/Footer';

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
          {/* Your content */}
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;