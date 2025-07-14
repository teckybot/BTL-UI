import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import logo from "../data/All/BTL2025_logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isAboutus = location.pathname.toLowerCase() === '/aboutus';
  const isHome = location.pathname.toLowerCase() === '/';
  const isRegistration = location.pathname.toLowerCase() === '/registration';
  const isMaintenance = location.pathname.toLowerCase() === '/gallery';
  const isContactus = location.pathname.toLowerCase() === '/contactus';
  const [scrolled, setScrolled] = useState(false);
  const [inAndhraSection, setInAndhraSection] = useState(false);
  const [inEventTimelineSection, setInEventTimelineSection] = useState(false);

  useEffect(() => {
    if (!isAboutus && !isHome && !isRegistration) return;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 10);
      
      // Check if we're in the Andhra Tech League section (only for About Us page)
      if (isAboutus) {
        const andhraSection = document.querySelector('h2');
        if (andhraSection && andhraSection.textContent.includes('ANDHRA TECK LEAGUE 2023')) {
          const sectionTop = andhraSection.offsetTop - 100; // Offset for navbar height
          setInAndhraSection(scrollY >= sectionTop);
        }
      }
      // Check if we're in the Event Timelines section (only for Home page)
      if (isHome) {
        const eventTimelineSection = document.getElementById('event-timelines');
        if (eventTimelineSection) {
          const sectionTop = eventTimelineSection.offsetTop - 100; // Offset for navbar height
          setInEventTimelineSection(scrollY >= sectionTop);
        } else {
          // Fallback: try to find by text content if ID is not found
          const h2Elements = document.querySelectorAll('h2');
          const eventTimelineH2 = Array.from(h2Elements).find(h2 => 
            h2.textContent.toLowerCase().includes('events timeline') || 
            h2.textContent.toLowerCase().includes('event timeline')
          );
          if (eventTimelineH2) {
            const sectionTop = eventTimelineH2.offsetTop - 100;
            setInEventTimelineSection(scrollY >= sectionTop);
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isAboutus, isHome, isRegistration]);

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'About BTL', to: '/aboutus' },
    { name: 'Competitions', to: '/competitions' },
    { name: 'Registration', to: '/registration' },
    { name: 'Gallery', to: '/gallery' },
    { name: 'Contact us', to: '/contactus', isSpecial: true },
  ];

  // Navbar style logic for different pages
  let navClass = 'fixed w-full top-0 z-50 font-poppins transition-all duration-300';
  let textColor = '';
  let mobileButtonClass = '';
  
  if (isMaintenance || isContactus) {
    navClass += 'bg-white/10 backdrop-blur-[25px]';
    textColor = 'text-white';
    mobileButtonClass = 'text-white hover:text-gray-300 hover:bg-white/20';
  } else if (isAboutus) {
    if (!scrolled) {
      // At rest: no glass effect, white text
      navClass += 'bg-white/10 backdrop-blur-[15px] shadow-md';
      textColor = 'text-white';
      mobileButtonClass = 'text-white hover:text-gray-300 hover:bg-white/20';
    } else if (scrolled && !inAndhraSection) {
      // Scrolled but not in Andhra section: white text with glass effect
      navClass += ' bg-white/10 backdrop-blur-[25px] shadow-md';
      textColor = 'text-white';
      mobileButtonClass = 'text-white hover:text-gray-300 hover:bg-white/20';
    } else {
      // In Andhra section or beyond: gray text with glass effect
      navClass += 'bg-white/10 backdrop-blur-[25px] shadow-md';
      textColor = 'text-gray-700';
      mobileButtonClass = 'text-gray-700 hover:text-gray-900 hover:bg-white/80';
    }
  } else if (isHome || isRegistration) {
    if (!scrolled) {
      // At rest: no glass effect, white text
      navClass += 'bg-white/10 backdrop-blur-[15px] shadow-md';
      textColor = 'text-white';
      mobileButtonClass = isHome ? 'text-white  rounded-md' : 'text-white hover:text-gray-300 hover:bg-white/20';
    } else {
      // Scrolled: check if in Event Timelines section
      navClass += ' bg-white/10 backdrop-blur-[25px] shadow-md';
      if (isHome && inEventTimelineSection) {
        // In Event Timelines section: gray text
        textColor = 'text-gray-700';
        mobileButtonClass = 'text-gray-700 bg-white/10 backdrop-blur-[25px] rounded-md';
      } else {
        // Scrolled but not in Event Timelines: white text
        textColor = 'text-white';
        mobileButtonClass = isHome ? 'text-white bg-white/10 backdrop-blur-[25px] rounded-md' : 'text-white hover:text-gray-300 hover:bg-white/20';
      }
    }
  } else {
    // Other pages: default styling
    navClass += ' bg-white/5 backdrop-blur-[25px]';
    textColor = 'text-[#050728]';
    mobileButtonClass = 'text-gray-700 hover:text-gray-900 hover:bg-gray-100';
  }

  return (
    <nav className={navClass}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <a href="/">
              <img src={logo} alt="BTL Logo" className="h-20 w-auto" />
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
                    ((isMaintenance || isContactus)
                      ? (item.isSpecial
                        ? 'bg-white rounded-full text-gray-700'
                        : `${textColor} hover:text-gray-200`)
                      : (item.isSpecial
                        ? ((isAboutus && !inAndhraSection) || isHome || isRegistration ? 'bg-white rounded-full text-gray-700' : 'bg-[#E7EEFF] rounded-full text-gray-700')
                        : ((isAboutus || isHome || isRegistration) ? `${textColor} hover:text-gray-200` : 'text-[#050728] hover:text-gray-900')))
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
                    ((isMaintenance || isContactus)
                      ? (item.isSpecial
                        ? 'bg-white rounded-full text-gray-700'
                        : `${textColor} hover:text-gray-200`)
                      : (item.isSpecial
                        ? ((isAboutus && !inAndhraSection) || isHome || isRegistration ? 'bg-white rounded-full text-gray-700' : 'bg-[#E7EEFF] rounded-full text-gray-700')
                        : ((isAboutus || isHome || isRegistration) ? `${textColor} hover:text-gray-200` : 'text-[#050728] hover:text-gray-900')))
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
              className={`inline-flex items-center justify-center p-2 rounded-md transition-all duration-200 ${mobileButtonClass} focus:outline-none`}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" stroke={isMaintenance || isContactus ? 'white' : 'currentColor'} />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" stroke={isMaintenance || isContactus ? 'white' : 'currentColor'} />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - centered and with backdrop */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden bg-white/10 backdrop-blur-[25px] shadow-md`}>
        <div className="flex flex-col items-center px-2 pt-2 pb-4 space-y-2">
          {navItems.filter(item => !item.isSpecial).map((item) => (
            item.to.startsWith('#') ? (
              <a
                key={item.name}
                href={item.to}
                className={`block w-full text-center px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  (isAboutus || isHome || isRegistration || isMaintenance || isContactus)
                    ? `${textColor} hover:bg-white/20 hover:text-gray-200`
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                to={item.to}
                className={`block w-full text-center px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  (isAboutus || isHome || isRegistration || isMaintenance || isContactus)
                    ? `${textColor} hover:bg-white/20 hover:text-gray-200`
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            )
          ))}
          {/* Contact us button always at the bottom, full-width, pill-shaped */}
          <Link
            to={navItems.find(item => item.isSpecial).to}
            className="mt-4 mb-2 w-full block text-center px-3 py-3 rounded-full text-base font-semibold transition-colors duration-200 bg-white text-gray-700 shadow-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact us
          </Link>
        </div>
      </div>

    </nav>
  );
}