import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
import Navbar from './components/Header';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Competitions from './pages/Competitions';
import Robotics from './pages/competitions/Robotics';
import ThreeDMaker from './pages/competitions/ThreeDMaker';
import SpacePilot from './pages/competitions/SpacePilot';
import Codex from './pages/competitions/Codex';
import Innoverse from './pages/competitions/Innoverse';
import ContactCard from './pages/Contactus';
import SchoolRegistrationPage from './pages/Registration/School/SchoolRegistrationPage';
import TeamRegistrationPage from './pages/Registration/Team/TeamRegistrationPage';
import SchoolRegistrationSuccess from './pages/Registration/School/SchoolRegistrationSuccess'
// import ComingSoon from './components/comingsoon';
import CountdownTimer from './pages/CountdownTimer'
// import ErrorScreen from './components/errorScreen';
import Gallery from './pages/Gallery';
import { TeamDraftProvider } from './context/TeamDraftContext';
import TeamModulesPage from './pages/Registration/TeamModulesPage';
import TeamForm from './components/Regcomponents/TeamForm';
import TeamRegistrationSuccess from './pages/Registration/Team/TeamRegistrationSuccess';
import SchoolRegistrationForm from './pages/Registration/School/SchoolRegistrationForm';

function App() {
  return (
    <Router>
      <TeamDraftProvider>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/competitions/robotics" element={<Robotics />} />
          <Route path="/competitions/3d-maker" element={<ThreeDMaker />} />
          <Route path="/competitions/space-pilot" element={<SpacePilot />} />
          <Route path="/competitions/codex" element={<Codex />} />
          <Route path="/competitions/innoverse" element={<Innoverse />} />
          <Route path="/contactus" element={<ContactCard />} />
          <Route path="/registration/school" element={<SchoolRegistrationPage />} />
          <Route path="/registration/team" element={<TeamRegistrationPage />} />
          <Route path="/registration-success" element={<SchoolRegistrationSuccess />} />
          <Route path="/registration" element={<CountdownTimer />} />
          {/* <Route path="/coming-soon" element={<ComingSoon />} /> */}
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/modules" element={<TeamModulesPage />} />
          <Route path="/team-form/:teamNumber" element={<TeamForm />} />
          <Route path="/teamRegistration-success" element={<TeamRegistrationSuccess />} />
          <Route path="/regform" element={<SchoolRegistrationForm />} />
        </Routes>
        <ScrollToTopButton />
      </TeamDraftProvider>
    </Router>
  );
}
export default App;