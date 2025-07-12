import { motion } from "framer-motion";
import orbit from '../../../data/All/Orbit_background.png';
import rocket from '../../../data/icons/rocket.png';
import group from '../../../data/icons/group.png';
import robot from '../../../data/icons/robot.png';
import calendar from '../../../data/icons/calendar.png';
import champion from '../../../data/icons/champion.png';
import puzzle from '../../../data/icons/puzzle.png';
import { useNavigate } from 'react-router-dom';

const icons = [
    { src: calendar, label: "Calendar", top: 255, left: 52 },
    { src: robot, label: "Robot", top: 200, left: 83 },
    { src: puzzle, label: "Puzzle", top: 318, left: 110 },
    { src: group, label: "Team", top: 170, left: 160 },
    { src: rocket, label: "Rocket", top: 65, left: 96 },
    { src: champion, label: "Champion", top: 415, left: 120 },
];

export default function TeamRegistrationCard() {
    const rowStartTop = 130;
    const rowStartLeftBase = 30;
    const iconSpacing = 40;
    const navigate = useNavigate();

    return (
        <div className="relative w-[460px] h-[560px] -mt-10 bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#004AAD] to-[#2684FC] text-white font-bold  text-center py-3 rounded-t-[24px] text-sm tracking-wide">
                TEAM REGISTRATION
            </div>

            {/* Background Text */}
            <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none">
                <span className="absolute left-0 top-[4rem] text-[5.5rem] font-extrabold uppercase tracking-widest bg-gradient-form bg-clip-text text-transparent leading-none w-full text-left" style={{ letterSpacing: '0.08em' }}>BHARA</span>
                <span className="absolute left-0 top-[10.5rem] text-[5.5rem] font-extrabold uppercase tracking-widest bg-gradient-form bg-clip-text text-transparent leading-none w-full text-left" style={{ letterSpacing: '0.08em' }}>&nbsp;&nbsp;RATEC</span>
                <span className="absolute left-0 top-[16.5rem] text-[5.5rem] font-extrabold uppercase tracking-widest bg-gradient-form bg-clip-text text-transparent leading-none w-full text-left" style={{ letterSpacing: '0.08em' }}>TE&nbsp;CKL</span>
                <span className="absolute left-0 top-[23.5rem] text-[5.5rem] font-extrabold uppercase tracking-widest bg-gradient-form bg-clip-text text-transparent leading-none w-full text-left" style={{ letterSpacing: '0.08em' }}>EAGUE</span>
                <span className="absolute left-0 top-[30.3rem] text-[5.5rem] font-extrabold uppercase tracking-widest bg-gradient-form bg-clip-text text-transparent leading-none w-full text-left" style={{ letterSpacing: '0.08em' }}>AT&nbsp;TEC</span>
            </div>

            {/* Orbit Image */}
            <img
                src={orbit}
                alt="orbit"
                className="absolute left-[-65px] top-[20%] w-[400px] h-[400px] object-contain opacity-90 z-10 pointer-events-none"
                draggable={false}
            />

            {/* Icons with spring bounce animation */}
            <div className="absolute left-[-32px] top-[48px] w-[290px] h-[290px] z-20">
                {icons.map((icon, idx) => {
                    const startLeft = rowStartLeftBase + idx * iconSpacing;
                    return (
                        <motion.div
                            key={idx}
                            title={icon.label}
                            initial={{ top: rowStartTop, left: startLeft, opacity: 0 }}
                            animate={{ top: icon.top, left: icon.left, opacity: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 80,
                                damping: 8,
                                delay: 0.2 + idx * 0.1
                            }}
                            className="absolute w-8 h-8 rounded-full border border-blue-500 bg-white flex items-center justify-center hover:scale-110 hover:shadow-md transition-transform"
                        >
                            <img src={icon.src} alt={icon.label} className="w-4 h-4" draggable={false} />
                        </motion.div>
                    );
                })}
            </div>

            {/* CTA Button */}
            <button
                className="absolute bottom-6 right-6 bg-gradient-to-br from-blue-700 to-blue-400 rounded-full w-12 h-12 flex items-center justify-center shadow-lg z-30 hover:scale-105 transition"
                onClick={() => navigate('/registration/team')}
            >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
}
