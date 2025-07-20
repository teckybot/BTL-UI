import React from 'react';

const RegistrationCard = () => {
  return (
    <div className=" bg-white text-black p-6 pt-6 pb-12 md:p-10 md:pt-12 md:pb-16 rounded-2xl shadow-xl max-w-lg w-full z-20">
      <h2 className=" text-[22px] md:text-[26px] font-bold text-center mb-6">
        EXCLUSIVELY FOR TEACHERS
      </h2>

      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-[rgba(22,86,95,1)]">NAME</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder='Enter your name'
            required
            className="mt-1 block w-full p-3 bg-white text-black border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
          />
        </div>

        <div>
          <label htmlFor="contact" className="block text-sm font-bold text-[rgba(22,86,95,1)]">CONTACT NO.</label>
          <input
            type="tel"
            id="contact"
            name="contact"
            placeholder="Enter the no. linked to WhatsApp"
            required
            className="mt-1 block w-full p-3 bg-white text-black border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-bold text-[rgba(22,86,95,1)]">EMAIL</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Enter your email id'
            required
            className="mt-1 block w-full p-3 bg-white text-black border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
          />
        </div>

        <div>
          <label htmlFor="school" className="block text-sm font-bold text-[rgba(22,86,95,1)]">SCHOOL NAME</label>
          <input
            type="text"
            id="school"
            name="school"
            placeholder='Enter your school name'
            required
            className="mt-1 block w-full p-3 bg-white text-black border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 rounded-md shadow-md text-lg font-medium text-white bg-[rgba(22,86,95,1)] hover:bg-gray-200 transition"
        >
          PROCEED TO PAYMENT
        </button>
      </form>
    </div>
  );
};

export default RegistrationCard;