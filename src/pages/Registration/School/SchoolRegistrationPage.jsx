import { useLocation } from 'react-router-dom';
import SchoolRegistrationForm from "./SchoolRegistrationForm";
import TeamRegistrationCard from "./TeamRegistrationCard";
import TeamRegistrationForm from '../Team/TeamChekckPointCard';
import Footer from '../../../components/Footer';
import TabbedRegistrationView from '../TabbedRegistrationView';
import StepperForm from '../../../components/Regcomponents/StepperForm';

export default function SchoolRegistrationPage() {
  const location = useLocation();

  return (
    <>
      <div className="min-h-screen bg-blue-50 flex flex-col items-center px-4 pt-24 pb-16">
        {/* Desktop Title */}
        <h1 className="hidden md:block text-4xl lg:text-6xl font-normal uppercase text-center md:text-left w-full px-4 md:px-0 md:pl-32 bg-gradient-schoolReg bg-clip-text text-transparent mb-5">
          School Registration
        </h1>

        {/* Mobile Title */}
        <h1 className="block md:hidden text-3xl font-bold uppercase text-center w-full bg-gradient-schoolReg bg-clip-text text-transparent mb-5">
          {location.pathname.includes("school") ? "School Registration" : "Team Registration"}
        </h1>

        {/* Desktop layout */}
        <div className="hidden md:flex flex-col md:flex-row gap-10 w-full max-w-6xl justify-center items-start">
          <StepperForm />
          <TeamRegistrationCard />
        </div>

        {/* Mobile Tabbed Layout */}
        <TabbedRegistrationView
          schoolForm={<StepperForm />}
          teamForm={<TeamRegistrationForm />}
        />
      </div>

      <Footer />
    </>
  );
}
