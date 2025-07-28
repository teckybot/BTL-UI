import React, { useState } from 'react';
import api from '../../utils/api';
import { message } from 'antd';

const RegistrationCard = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    school: ''
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // const validEmailDomains = ['@gmail.com', '@yahoo.com', '@yahoo.in', '@outlook.com', '@teckybot.com'];
  // const isValidEmail = (email) => validEmailDomains.some((domain) => email.endsWith(domain));

  // Allow any domain, just check basic email format
  const isValidEmail = (email) => {
    if (!email || typeof email !== 'string') return false;
    email = email.trim().toLowerCase();
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isAllCaps = (text) => text === text?.toUpperCase();

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (!isAllCaps(formData.name)) {
      newErrors.name = 'Name must be in CAPITAL LETTERS';
    }
    if (!formData.contact.trim()) {
      newErrors.contact = 'Contact number is required';
    } else {
      const cleaned = formData.contact.replace(/\D/g, "");
      if (cleaned.length !== 10) {
        newErrors.contact = 'Phone number must be exactly 10 digits';
      } else if (!/^[6-9]\d{9}$/.test(cleaned)) {
        newErrors.contact = 'Enter a valid 10-digit number starting with 6-9';
      }
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address!';
    }

    if (!formData.school.trim()) {
      newErrors.school = 'School name is required';
    } else if (!isAllCaps(formData.school)) {
      newErrors.school = 'School name must be in CAPITAL LETTERS';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setLoading(true);
    setErrors({});
    try {
      // Validate form data with backend
      const validationResponse = await api.post('/ai-workshop/validate', formData);
      if (!validationResponse.data.valid) {
        if (validationResponse.data.errors) setErrors(validationResponse.data.errors);
        message.error(validationResponse.data.message);
        return;
      }
      // Actually register (save) the user
      const registerResponse = await api.post('/ai-workshop/register', formData);
      const { registrationId, errors: regErrors, message: regMessage } = registerResponse.data;
      if (regErrors) {
        setErrors(regErrors);
        message.error(regMessage || 'Registration failed.');
        return;
      }
      if (registrationId) {
        message.info('Registration Pending!');
        window.location.href = `/ai-workshop-pending?regId=${registrationId}`;
      } else {
        message.error('Registration failed. Please try again.');
      }
    } catch (error) {
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors);
        message.error(error.response.data.message || 'Validation failed.');
      } else if (error.response?.data?.message?.includes('Maximum registrations')) {
        message.error('Maximum registrations (300) reached for AI Workshop. Registration is now closed.');
      } else {
        message.error(error.response?.data?.error || error.message || 'Failed to submit form');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-black p-6 pt-6 pb-12 md:p-10 md:pt-12 md:pb-16 rounded-2xl shadow-xl max-w-lg w-full z-20">
      <h2 className="text-[22px] md:text-[26px] font-bold text-center mb-6">
        EXCLUSIVELY FOR TEACHERS
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-[rgba(22,86,95,1)]">NAME</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder='ENTER YOUR NAME IN CAPITAL LETTERS'
            required
            className={`mt-1 block w-full p-3 bg-white text-black border rounded-md shadow-sm focus:ring-black focus:border-black ${errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="contact" className="block text-sm font-bold text-[rgba(22,86,95,1)]">CONTACT NO.</label>
          <input
            type="tel"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
            placeholder="Enter the no. linked to WhatsApp"
            required
            maxLength={10}
            className={`mt-1 block w-full p-3 bg-white text-black border rounded-md shadow-sm focus:ring-black focus:border-black ${errors.contact ? 'border-red-500' : 'border-gray-300'
              }`}
          />
          {errors.contact && <p className="text-red-500 text-xs mt-1">{errors.contact}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-bold text-[rgba(22,86,95,1)]">EMAIL</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder='Enter your email id'
            required
            className={`mt-1 block w-full p-3 bg-white text-black border rounded-md shadow-sm focus:ring-black focus:border-black ${errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="school" className="block text-sm font-bold text-[rgba(22,86,95,1)]">SCHOOL NAME</label>
          <input
            type="text"
            id="school"
            name="school"
            value={formData.school}
            onChange={handleInputChange}
            placeholder='ENTER YOUR SCHOOL NAME IN CAPITAL LETTERS'
            required
            className={`mt-1 block w-full p-3 bg-white text-black border rounded-md shadow-sm focus:ring-black focus:border-black ${errors.school ? 'border-red-500' : 'border-gray-300'
              }`}
          />
          {errors.school && <p className="text-red-500 text-xs mt-1">{errors.school}</p>}
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 px-4 rounded-md shadow-md text-lg font-medium text-white bg-[rgba(22,86,95,1)] hover:bg-[#2d818d] transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Processing...' : 'SUBMIT'}
        </button>
      </form>

      {/* Highlighted Note */}
      <div className="mt-6 p-4 bg-[rgba(22,86,95,0.1)] border-l-4 border-[rgba(22,86,95,1)] rounded-md text-center">
        <p className="text-lg font-semibold text-[rgba(22,86,95,1)]">
          AI Registration Workshop fee – <span className="font-bold text-black">₹299</span>
        </p>
        <p className="text-sm text-gray-700">Inclusive of Hands-on training & Certification.</p>
      </div>
    </div>
  );
};

export default RegistrationCard;