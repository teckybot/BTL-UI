import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
import Navbar from './components/Header'; // Make sure this file exists
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Competitions from './pages/Competitions';
import Robotics from './pages/competitions/Robotics';
import ThreeDMaker from './pages/competitions/ThreeDMaker';
import SpacePilot from './pages/competitions/SpacePilot';
import Codex from './pages/competitions/Codex';
import Innoverse from './pages/competitions/Innoverse';

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/competitions" element={<Competitions />} />
        <Route path="/competitions/robotics" element={<Robotics />} />
        <Route path="/competitions/3d-maker" element={<ThreeDMaker />} />
        <Route path="/competitions/space-pilot" element={<SpacePilot />} />
        <Route path="/competitions/codex" element={<Codex />} />
        <Route path="/competitions/innoverse" element={<Innoverse />} />
      </Routes>
      <ScrollToTopButton />
    </Router>
  );
}

export default App;
