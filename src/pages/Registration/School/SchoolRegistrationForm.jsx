import { useState } from "react";

export default function SchoolRegistrationForm() {
    const [mobileFormData, setMobileFormData] = useState({
        schoolName: "",
        principalName: "",
        contactNumber: "",
        email: "",
    });

    return (
        <>
            {/*Desktop View */}
            <div className="hidden md:block bg-white rounded-2xl shadow-xl p-8 sm:p-10 w-[950px]">
                {/* Stepper */}
                {/* Stepper (Desktop) */}
                <div className="hidden md:flex items-center justify-between mb-10">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center flex-1">
                        <span className="text-sm font-bold text-blue-800 mb-2">SCHOOL DETAILS</span>
                        <div className="w-full h-1 bg-blue-700 rounded"></div>
                    </div>
                    <div className="w-4 h-4 bg-blue-300 rounded-full mx-2" />
                    {/* Step 2 */}
                    <div className="flex flex-col items-center flex-1">
                        <span className="text-sm font-semibold text-gray-400 mb-2">COORDINATOR DETAILS</span>
                        <div className="w-full h-1 bg-gray-200 rounded"></div>
                    </div>
                    <div className="w-4 h-4 bg-gray-300 rounded-full mx-2" />
                    {/* Step 3 */}
                    <div className="flex flex-col items-center flex-1">
                        <span className="text-sm font-semibold text-gray-400 mb-2">SCHOOL ADDRESS</span>
                        <div className="w-full h-1 bg-gray-200 rounded"></div>
                    </div>
                </div>


                {/* Form */}
                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">School Name</label>
                        <input
                            type="text"
                            placeholder="ENTER SCHOOL NAME IN CAPITAL LETTERS"
                            className="w-full border border-blue-200 rounded-md px-4 py-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Principal Name</label>
                        <input
                            type="text"
                            placeholder="ENTER PRINCIPAL NAME IN CAPITAL LETTERS"
                            className="w-full border border-blue-200 rounded-md px-4 py-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-1">
                            <label className="block text-sm font-semibold text-gray-700 mb-1">School Contact Number</label>
                            <input
                                type="tel"
                                placeholder="+91 (INDIA)"
                                className="w-full border border-blue-200 rounded-md px-4 py-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-semibold text-gray-700 mb-1">School Email</label>
                            <input
                                type="email"
                                placeholder="Enter valid email of school or principal"
                                className="w-full border border-blue-200 rounded-md px-4 py-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                    </div>
                    <p className="text-sm text-blue-600">
                        This form must be filled only by an{" "}
                        <span className="font-bold text-blue-700">authorized representative</span> of the school
                    </p>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="w-24 py-3 bg-gradient-schoolReg text-white rounded-lg font-semibold text-sm shadow hover:opacity-90 transition"
                        >
                            NEXT
                        </button>
                    </div>
                </form>
            </div>

            {/* Mobile Stepper */}
            <div className="block md:hidden bg-white rounded-2xl shadow-xl p-6 w-full mb-4">
                <div className="flex justify-between items-center mb-2">
                    <div className="flex-1 text-xs text-blue-800 font-bold text-center">SCHOOL</div>
                    <div className="flex-1 text-xs text-gray-400 font-semibold text-center">COORDINATOR</div>
                    <div className="flex-1 text-xs text-gray-400 font-semibold text-center">ADDRESS</div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="w-4 h-4 bg-blue-700 rounded-full"></div>
                    <div className="flex-1 h-1 bg-blue-300 mx-1 rounded"></div>
                    <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                    <div className="flex-1 h-1 bg-gray-200 mx-1 rounded"></div>
                    <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                </div>
            </div>


            {/* Mobile View Form */}
            <div className="block md:hidden bg-white rounded-2xl shadow-xl p-6 w-full">
                <form className="space-y-5">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">School Name</label>
                        <input
                            type="text"
                            placeholder="School Name"
                            className="w-full border border-blue-200 rounded-md px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={mobileFormData.schoolName}
                            onChange={(e) => setMobileFormData({ ...mobileFormData, schoolName: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Principal Name</label>
                        <input
                            type="text"
                            placeholder="Principal Name"
                            className="w-full border border-blue-200 rounded-md px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={mobileFormData.principalName}
                            onChange={(e) => setMobileFormData({ ...mobileFormData, principalName: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">School Contact</label>
                        <input
                            type="tel"
                            placeholder="+91"
                            className="w-full border border-blue-200 rounded-md px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={mobileFormData.contactNumber}
                            onChange={(e) => setMobileFormData({ ...mobileFormData, contactNumber: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">School Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full border border-blue-200 rounded-md px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={mobileFormData.email}
                            onChange={(e) => setMobileFormData({ ...mobileFormData, email: e.target.value })}
                        />
                    </div>
                    <p className="text-sm text-blue-600">
                        This form must be filled only by an{" "}
                        <span className="font-bold text-blue-700">authorized representative</span> of the school
                    </p>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="w-24 py-2 bg-gradient-schoolReg text-white rounded-lg font-semibold text-sm shadow hover:opacity-90 transition"
                        >
                            NEXT
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
