import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
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
import ErrorScreen from './components/errorScreen';
import Gallery from './pages/Gallery';
import { TeamDraftProvider } from './context/TeamDraftContext';
import TeamModulesPage from './pages/Registration/TeamModulesPage';
import TeamForm from './components/Regcomponents/TeamForm';
import TeamRegistrationSuccess from './pages/Registration/Team/TeamRegistrationSuccess';
import SchoolRegistrationForm from './pages/Registration/School/SchoolRegistrationForm';
import BotExpoPage from './pages/Botexpo';
import AIWorkshopSuccess from './pages/AIWorkshopSuccess';
import TeamCheckoutPage from './pages/Registration/TeamCheckoutPage';
import NasoInfoCard from './pages/Naso';

function ScrollButtonWrapper() {
  const location = useLocation();
  const hideScrollToTopOn = [
    '/registration/team/checkout',
    '/modules',
  ];
  const shouldShowScrollToTop = !hideScrollToTopOn.includes(location.pathname);

  return shouldShowScrollToTop ? <ScrollToTopButton /> : null;
}

function App() {
  useEffect(() => {  
    const handleContextmenu = (e) => {
      e.preventDefault();
    };
    const handleKeydown = (e) => {
      // Prevent F12
      if (e.key === 'F12') {
        e.preventDefault();
      }
      // Prevent Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
      if (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key.toUpperCase())) {
        e.preventDefault();
      }
      // Prevent Ctrl+U (View Source)
      if (e.ctrlKey && e.key.toUpperCase() === 'U') {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextmenu);
    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("contextmenu", handleContextmenu);
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  
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
          {/* <Route path="/registration" element={<CountdownTimer />} /> */}
          {/* <Route path="/coming-soon" element={<ComingSoon />} /> */}
          {/* <Route path="/registration/team" element={<ErrorScreen />} /> */}
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/modules" element={<TeamModulesPage />} />
          <Route path="/team-form/:teamNumber" element={<TeamForm />} />
          <Route path="/teamRegistration-success" element={<TeamRegistrationSuccess />} />
          {/* <Route path="/regform" element={<SchoolRegistrationForm />} /> */}
          <Route path="/Botexpo" element={<BotExpoPage />} />
          <Route path="/ai-workshop-pending" element={<AIWorkshopSuccess />} />
          {/* <Route path="/ai-workshop-dashboard" element={<AIWorkshopDashboard />} /> */}
          <Route path="/registration/team/checkout" element={<TeamCheckoutPage />} />
          <Route path="/naso" element={<NasoInfoCard />} />
        </Routes>
        <ScrollButtonWrapper />
      </TeamDraftProvider>
    </Router>
  );
}
export default App;