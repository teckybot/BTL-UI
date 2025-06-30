import { useState } from 'react';
import logo from '../data/BTL 2025 Logo PNG (W) 1.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About BTL', href: 'Aboutus' },
    { name: 'Competitions', href: 'Competitions' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact us', href: '#contact', isSpecial: true },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/5 backdrop-blur-[25px] shadow-md font-poppins">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <a href="/">
              <img src={logo} alt="BTL Logo" className="h-12 w-auto" />
            </a>
          </div>

          {/* Navigation links on the right - desktop */}
          <div className="hidden sm:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`
                  px-4 py-2 text-sm font-medium transition-colors duration-200
                  ${item.isSpecial 
                    ? 'bg-[#E7EEFF] rounded-full' 
                    : 'text-[#050728] hover:text-gray-900'}
                `}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - centered and without bg for special item */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="flex flex-col items-center px-2 pt-2 pb-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`
                block w-full text-center px-3 py-2 rounded-md text-base font-medium transition-colors duration-200
                ${item.isSpecial 
                  ? 'text-blue-600 hover:text-blue-800' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}
              `}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}