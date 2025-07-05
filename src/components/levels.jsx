import level from '../data/levelbg.jpg'
import globe from '../data/world-globe.png'
import rocket from '../data/rocket.png'
import space from '../data/space.png'
import orbit from '../data/orbit.png'
import blob from '../data/blob.png';

export default function leveles() {
  return (
    <div
        className="relative text-center text-black py-[140px] px-4 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${level})`,
        }}
      >
        {/* Large background LEVEL text */}
        <h1
          className="
    absolute
    select-none
    pointer-events-none
    font-poppins
    font-[800]
    text-left
    leading-none
    tracking-[0%]
    uppercase
    text-[#A8C8F4]/10
    text-[230px] md:text-[300px] lg:text-[500px]
    mt-[10px]
    whitespace-pre sm:whitespace-normal
    left-0 sm:left-1/2 sm:transform sm:-translate-x-1/2
    pl-4
    filter blur-[10px]  /* 👈 Blur effect */
  "
        >
          <span className="block sm:hidden">L{'\n'}E{'\n'}V{'\n'}E{'\n'}L</span>
          <span className="hidden sm:inline">LEVEL</span>
        </h1>




        <h2
          className="relative z-10 mt-[-20px] text-[40px] md:text-[86px] font-extrabold tracking-wide mb-16 uppercase text-center"
          style={{
            background: 'linear-gradient(180deg, #93AFC2 18.27%, #FFFFFF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text', // for Safari support
          }}
        >
          Levels of Participation
        </h2>




        <div className="relative z-10 mt-[140px] flex flex-col lg:flex-row items-center justify-center gap-[150px] md:gap-[250px] max-w-6xl mx-auto">

          {/* Qualifier Card */}

          <div
            className="rounded-3xl pt-24 p-[50px] w-[330px] md:w-[400px] shadow-xl text-left relative"
            style={{
              background: 'linear-gradient(200deg,rgba(0, 114, 185, 0.74) 10.27%,rgb(255, 255, 255) 100%)',
            }}
          >


            <img
              src={globe}
              alt="Rocket"
              className="absolute top-6 left-6 w-8 h-8"
            />

            {/* badge – top‑right */}
            <span
              className="absolute top-5 right-6 bg-[#1939A3] text-white
               text-sm px-3 py-1 rounded-full font-semibold"
            >
              Online
            </span>

            <div className="relative z-10 mt-6 ml-2 -top-6">
              <p className="text-base text-gray-900 mb-1">Level</p>
              <h3 className="text-2xl font-bold mb-3">Qualifier</h3>
              <p className="text-sm text-gray-900 leading-relaxed">
                Each team must submit a 1-minute video showcasing their tech model and the skills relevant to their chosen competition category, aligned with the given problem statement.
              </p>
            </div>

            {/* faint space outline */}
            <img
              src={space}
              alt=""
              className="absolute bottom-2 right-1 w-20 pointer-events-none select-none"
            />

            {/* number badge */}
            <div className="absolute bottom-[-1px] left-[-3px] w-14 h-14 rounded-full bg-[#1A3EAD] text-white font-bold flex items-center justify-center text-xl shadow-lg">
              1
            </div>
          </div>


          {/* Finale Card */}
          <div
            className="rounded-3xl pt-24 p-[50px] w-[330px] md:w-[400px] shadow-xl text-left relative"
            style={{
              background: 'linear-gradient(200deg,rgba(0, 114, 185, 0.74) 10.27%,rgb(255, 255, 255) 100%)',
            }}
          >
            <img
              src={rocket}
              alt="Rocket"
              className="absolute top-6 left-6 w-8 h-8"
            />

            {/* badge – top‑right */}
            <span
              className="absolute top-5 right-6 bg-[#1939A3] text-white
               text-sm px-3 py-1 rounded-full font-semibold"
            >
              Offline
            </span>

            <div className="relative z-10 mt-6 ml-2 -top-6">
              <p className="text-base text-gray-900 mb-1">Level</p>
              <h3 className="text-2xl font-bold mb-3">Finale</h3>
              <p className="text-sm text-gray-900 leading-relaxed">
                Selected teams from the Qualifier Round will participate in the on-site finale. They will compete or demonstrate their models in alignment with the given problem statement.
              </p>
            </div>

            {/* faint orbit outline */}
            <img
              src={orbit}
              alt=""
              className="absolute bottom-2 right-1 w-20 pointer-events-none select-none"
            />

            {/* number badge */}
            <div className="absolute bottom-[-1px] left-[-3px] w-14 h-14 rounded-full bg-[#1A3EAD] text-white font-bold flex items-center justify-center text-xl shadow-lg">
              2
            </div>
          </div>
        </div>
      </div>
  );
}       
 