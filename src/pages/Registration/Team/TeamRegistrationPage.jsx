import { useNavigate } from 'react-router-dom';
import SchoolRegistrationCard from './SchoolRegistrationCard';
import TeamRegistrationForm from './TeamRegistrationForm';
import Footer from '../../../components/Footer';

export default function TeamRegistrationPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="min-h-screen bg-blue-50 flex flex-col items-center px-4 pt-24 pb-16">
        <h1 className="text-4xl lg:text-6xl font-normal uppercase text-right w-full pr-4 md:pr-32 bg-gradient-schoolReg bg-clip-text text-transparent mb-5">
          Team Registration
        </h1>

        <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl justify-center items-start">
          <SchoolRegistrationCard />
          <TeamRegistrationForm />
        </div>
      </div>

      <Footer />
    </>
  );
} 