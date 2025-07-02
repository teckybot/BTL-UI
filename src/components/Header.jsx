import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import logo from '../data/BTL 2025 Logo PNG (W) 1.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isAboutus = location.pathname.toLowerCase() === '/aboutus';
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isAboutus) return;
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isAboutus]);

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'About BTL', to: '/aboutus' },
    { name: 'Competitions', to: '/competitions' },
    {name:'Registration', to:'/registration/school'},
    { name: 'Gallery', to: '#gallery' },
    { name: 'Contact us', to: '/contactus', isSpecial: true },
  ];

  //navbar style
  let navClass = 'fixed w-full top-0 z-50 font-poppins';
  if (isAboutus) {
    navClass += scrolled
      ? ' bg-white/5 backdrop-blur-[25px] shadow-md'
      : ' bg-transparent shadow-none backdrop-blur-none';
  } else {
    navClass += ' bg-white/5 backdrop-blur-[25px]';
  }

  return (
    <nav className={navClass}>
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
              item.to.startsWith('#') ? (
                <a
                  key={item.name}
                  href={item.to}
                  className={
                    `px-4 py-2 text-sm font-medium transition-colors duration-200 ` +
                    (item.isSpecial
                      ? (isAboutus ? 'bg-white rounded-full text-gray' : 'bg-[#E7EEFF] rounded-full')
                      : (isAboutus ? 'text-white hover:text-gray-200' : 'text-[#050728] hover:text-gray-900'))
                  }
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.to}
                  className={
                    `px-4 py-2 text-sm font-medium transition-colors duration-200 ` +
                    (item.isSpecial
                      ? (isAboutus ? 'bg-white rounded-full text-gray' : 'bg-[#E7EEFF] rounded-full')
                      : (isAboutus ? 'text-white hover:text-gray-200' : 'text-[#050728] hover:text-gray-900'))
                  }
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${isAboutus ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-gray-900'} hover:bg-gray-100 focus:outline-none`}
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
            item.to.startsWith('#') ? (
              <a
                key={item.name}
                href={item.to}
                className={
                  `block w-full text-center px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ` +
                  (item.isSpecial
                    ? (isAboutus ? 'text-white' : 'text-blue-600 hover:text-blue-800')
                    : (isAboutus ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'))
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                to={item.to}
                className={
                  `block w-full text-center px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ` +
                  (item.isSpecial
                    ? (isAboutus ? 'text-white' : 'text-blue-600 hover:text-blue-800')
                    : (isAboutus ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'))
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            )
          ))}
        </div>
      </div>
    </nav>
  );
}