
import { useNavigate } from 'react-router-dom';
import exclamation from '../../../data/exclamation.png'
import plus from '../../../data/Plus.png'

export default function SchoolRegistrationSuccess() {
  const navigate = useNavigate();
  const registrationId = 'APGNT001';

  return (
    <div className="min-h-screen pt-12 flex flex-col items-center justify-center bg-school-reg-radial relative overflow-hidden">

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl px-4">
        <h1 className="text-3xl md:text-4xl font-normal bg-gradient-schoolReg bg-clip-text text-transparent text-center mt-12 mb-2">School Registration Successful</h1>
        <p className="text-lg text-blue-700 text-center mb-8">Your school has been successfully registered for Bharat Teck League 2025.</p>

        {/* Registration ID Card */}
        <div className="bg-white rounded-3xl shadow-xl max-w-4xl w-full mx-auto flex flex-col items-center p-0 overflow-hidden mb-10">
          <img
            src={plus}
            alt="plus icon"
            className="absolute top-12 -right-32 w-12 h-12 hover:scale-110 transition-transform cursor-pointer"
          />
          <img
            src={plus}
            alt="plus icon"
            className="absolute -left-6 bottom-12 w-12 h-12 hover:scale-110 transition-transform cursor-pointer"
          />

          <div className="w-full flex items-center ">
            <div className="flex-1 px-8 py-6 pl-32 relative">
              <h2 className="text-4xl font-medium bg-gradient-schoolReg bg-clip-text text-transparent mb-2">Registration ID</h2>
              <div className="absolute bottom-5 left-24 w-80 h-[3px] bg-gradient-to-r from-transparent via-blue-700 to-transparent" />
            </div>
            <div className="relative w-[450px] h-[80px]">
              {/* Polygon Background */}
              <div
                className="absolute -top-2 right-0 w-full h-full bg-blue-700"
                style={{
                  clipPath: 'polygon(0% 0, 100% 0, 100% 100%, 30% 100%)',
                  borderBottomLeftRadius: '1rem',
                }}
              ></div>

              {/* Registration ID Text (on top of polygon) */}
              <div
                className="absolute top-9 right-12 -translate-y-1/2 text-white text-3xl font-bold tracking-widest z-10"
                style={{
                  letterSpacing: '0.2em',
                }}
              >
                {registrationId}
              </div>
            </div>

          </div>
          <div className="px-8 py-6 w-full">
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-blue-900 text-base">
                <img src={exclamation} alt="!" className="w-4 h-5 mt-1" />
                A confirmation has been sent to your registered email. Please check your inbox or spam folder.
              </li>
              <li className="flex items-start gap-3 text-blue-900 text-base">
                <img src={exclamation} alt="!" className="w-4 h-5 mt-1" />
                This is a one-time registration per school. Please do not attempt to register the same school again.
              </li>
              <li className="flex items-start gap-3 text-blue-900 text-base">
                <img src={exclamation} alt="!" className="w-4 h-5 mt-1" />
                This unique ID will be needed for registering student teams and tracking your school's participation.
              </li>
              <li className="flex items-start gap-3 text-blue-900 text-base">
                <img src={exclamation} alt="!" className="w-4 h-5 mt-1" />
                Stay updated through your registered email for further communication, schedules, and announcements.
              </li>
            </ul>


          </div>
        </div>
        {/* Buttons */}
        <div className="flex flex-row justify-evenly w-full mb-8">
          <button
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-lg shadow transition"
            onClick={() => navigate('/')}
          >
            BACK TO HOME
          </button>
          <button
            className="bg-white border border-blue-700 text-blue-700 font-semibold px-8 py-3 rounded-lg shadow hover:bg-blue-50 transition"
            onClick={() => {/* Download PDF logic here */ }}
          >
            DOWNLOAD PDF
          </button>
        </div>
      </div>
    </div>
  );
} 