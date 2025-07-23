import { useLocation } from 'react-router-dom';
import SchoolRegistrationForm from "./SchoolRegistrationForm";
import TeamRegistrationCard from "./TeamRegistrationCard";
import TeamRegistrationForm from '../Team/TeamChekckPointCard';
import Footer from '../../../components/Footer';
import TabbedRegistrationView from '../TabbedRegistrationView';
import StepperForm from '../../../components/Regcomponents/StepperForm';
import { Helmet } from "react-helmet";




export default function SchoolRegistrationPage() {
  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>Register Now – Bharat Teck League 2025 by Teckybot</title>
        <meta
          name="description"
          content="Secure your spot in Bharat Teck League 2025! Fill out the registration form and take the first step toward innovation. Limited slots available!"
        />
      </Helmet>
      <div className="min-h-screen bg-blue-50 flex flex-col items-center px-4 pt-24 pb-16">
        {/* Desktop Title */}
        <h1 className="hidden md:block text-4xl lg:text-6xl font-normal uppercase text-center md:text-left w-full px-4 md:px-0 md:pl-[280px] bg-gradient-schoolReg bg-clip-text text-transparent mb-5">
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
        
        {/* Blinking Tooltip (desktop only) */}
        <div
          className="hidden md:block absolute top-32 right-20 -translate-x-1/2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg z-50 animate-blink"
        >
          Click here to Register your teams!

          {/* Arrow */}
          <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-blue-600"></div>
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
