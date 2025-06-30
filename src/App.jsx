import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
import Navbar from './components/Header'; // Make sure this file exists
import Home from './pages/Home'; 
import Aboutus from './pages/Aboutus';
import Competitions from './pages/Competitions';

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/competitions" element={<Competitions />} />
      </Routes>
      <ScrollToTopButton />
    </Router>
  );
}

export default App;
