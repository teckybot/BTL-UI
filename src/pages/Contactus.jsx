
import orbit from '../data/Orbit_c.png';
import ellipse_left from '../data/Ellipse_left.png';
import Ellipse_right from '../data/Ellipse_right.png';

const ContactCard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50 px-4 py-12">
      <div className="relative bg-white rounded-2xl shadow-2xl p-10 sm:p-14 w-full max-w-4xl overflow-hidden">
   
        <h2 className="text-4xl font-normal text-blue-800 mb-10 lg:pl-24">Get in Touch With Us...</h2>

        {/* Coordinator 1 */}
        <div className="mb-10 lg:pl-24">
          <p className="text-base text-gray-800">coordinator</p>
          <p className="text-xl font-bold text-blue-700 mb-3">M. SRIPOUSHYA</p>
          <a
            href="tel:+918886122889"
            className="inline-block bg-blue-600 text-white text-base px-8 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            +91 88861 22889
          </a>
        </div>

        {/* Coordinator 2 */}
        <div className='lg:pl-24'>
          <p className="text-base text-gray-800">coordinator</p>
          <p className="text-xl font-bold text-blue-700 mb-3">CH. JOSHINI</p>
          <a
            href="tel:+919000555885"
            className="inline-block bg-blue-600 text-white text-base px-8 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            +91 90005 55885
          </a>
        </div>

        <img
          src={Ellipse_right}
          alt="Ellipse Right"
          className="absolute top-0 right-28 w-24 sm:w-32 lg:w-40 opacity-80 pointer-events-none"
        />

        <img
          src={orbit}
          alt="Orbit"
          className="absolute bottom-32 right-24 w-56 sm:w-64 lg:w-80 translate-x-1/3 translate-y-1/3 opacity-90 pointer-events-none"
        />

        <img
          src={ellipse_left}
          alt="Ellipse Left"
          className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-20 sm:w-28 opacity-90 pointer-events-none"
        />
      </div>
    </div>
  );
};

export default ContactCard;
