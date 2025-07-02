import { useNavigate, useLocation } from "react-router-dom";

export default function TabbedRegistrationView({ schoolForm, teamForm }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isSchool = location.pathname.includes("school");

  return (
    <div className="w-full max-w-md mx-auto block md:hidden">
      {/* Mobile Tabs */}
      <div className="flex justify-center gap-2 mb-4">
        <button
          className={`flex-1 py-2 rounded-lg font-semibold text-sm transition ${
            isSchool
              ? "bg-gradient-to-r from-[#004AAD] to-[#2684FC] text-white shadow"
              : "bg-white text-blue-900 border border-blue-200"
          }`}
          onClick={() => navigate("/registration/school")}
        >
          SCHOOL REGISTRATION
        </button>
        <button
          className={`flex-1 py-2 rounded-lg font-semibold text-sm transition ${
            !isSchool
              ? "bg-gradient-to-r from-[#004AAD] to-[#2684FC] text-white shadow"
              : "bg-white text-blue-900 border border-blue-200"
          }`}
          onClick={() => navigate("/registration/team")}
        >
          TEAM REGISTRATION
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-6">
        {isSchool ? schoolForm : teamForm}
      </div>
    </div>
  );
}
