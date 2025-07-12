import { useLocation } from 'react-router-dom';
import SchoolRegistrationCard from './SchoolRegistrationCard';
import TeamRegistrationForm from './TeamChekckPointCard';
import Footer from '../../../components/Footer';
import SchoolRegistrationForm from '../School/SchoolRegistrationForm';
import TabbedRegistrationView from '../TabbedRegistrationView';
import TeamForm from '../../../components/Regcomponents/TeamForm'
import CheckpointPage from '../Team/TeamChekckPointCard';

export default function TeamRegistrationPage() {
  const location = useLocation();

  return (
    <>
      <div className="min-h-screen bg-blue-50 flex flex-col items-center px-4 pt-24 pb-16">
        {/* Desktop Title */}
        <h1 className="hidden md:block text-4xl lg:text-6xl font-normal uppercase text-right w-full pr-4 md:pr-32 bg-gradient-schoolReg bg-clip-text text-transparent mb-5">
          Team Registration
        </h1>

        {/* Mobile Title */}
        <h1 className="block md:hidden text-3xl font-bold uppercase text-center w-full bg-gradient-schoolReg bg-clip-text text-transparent mb-5">
          {location.pathname.includes("school") ? "School Registration" : "Team Registration"}
        </h1>

        {/* Desktop layout */}
        <div className="hidden md:flex flex-col md:flex-row gap-10 w-full max-w-6xl justify-center items-start">
          <SchoolRegistrationCard width="w-[500px]" />
          <CheckpointPage/>
        </div>

        {/* Mobile Tabbed Layout */}
        <TabbedRegistrationView
          schoolForm={<SchoolRegistrationForm />}
          teamForm={<CheckpointPage />}
        />
      </div>

      <Footer />
    </>
  );
}
