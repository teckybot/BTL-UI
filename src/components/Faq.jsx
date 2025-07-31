import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

// Import your FAQ content organized by sections
const faqData = [
    {
        category: "About the Event",
        questions: [
            {
                number: "01",
                question: "What is Bharat Teck League (BTL) 2025?",
                answer:
                    "BTL 2025 is India’s Largest School Tech Championship for school students, giving young innovators a national platform to showcase their skills in technology, innovation, and problem solving.",
            },
            {
                number: "02",
                question: "What is the theme of BTL 2025?",
                answer:
                    'The theme is “Beyond the Horizon: A Journey Through Space & Innovation”, inspiring students to explore space, technology, and futuristic innovation.',
            },
            {
                number: "03",
                question: "Who is organizing the event?",
                answer:
                    "BTL 2025 is powered by Teckybot in collaboration with Navaras (Theme Partner), Brainfeed (Media Partner), Radius EdTech, Cretile, and Vignan Learning Solutions.",
            },
            {
                number: "04",
                question: "Why is BTL 2025 being conducted?",
                answer:
                    "The championship aims to bridge classroom learning with real world applications, helping students develop problem solving skills, teamwork, and hands on exposure to technology.",
            },
            {
                number: "05",
                question: "Is the event only for schools?",
                answer:
                    "Yes, only schools can register their students to participate in BTL 2025.",
            },
        ],
    },
    {
        category: "Participation & Registration",
        questions: [
            {
                number: "06",
                question: "Who can participate in BTL 2025?",
                answer:
                    "Students from Classes 6–10 can participate in the competitions and the Space Olympiad.",
            },
            {
                number: "07",
                question: "How can a school register for BTL 2025?",
                answer:
                    "Schools must first complete institutional registration on the official website: www.bharatteckleague.com.",
            },
            {
                number: "08",
                question: "Can students register individually?",
                answer:
                    "No, students must be nominated by their schools after the institution registers.",
            },
            {
                number: "09",
                question: "How many teams can each school register?",
                answer: "Each school can register up to 10 student teams.",
            },
            {
                number: "10",
                question: "How many members can each team have?",
                answer:
                    "Each team must have a minimum of 2 members and a maximum of 4 members.",
            },
            {
                number: "11",
                question: "What is the last date for registration?",
                answer:
                    "The final deadline will be confirmed and updated on the official website.",
            },
            {
                number: "12",
                question: "Is there a registration fee?",
                answer:
                    "The fee details for schools and students will be updated soon on the official website.",
            },
            {
                number: "13",
                question: "What happens after registration?",
                answer:
                    "Teams will receive detailed competition guidelines and will participate in the Qualifier Round before advancing to the Final Round in Hyderabad.",
            },
            {
                number: "14",
                question: "How does the registration process work?",
                answer:
                    "Schools must register first and receive a unique School ID. Using this ID, schools can register students for individual competitions.",
            },
            {
                number: "15",
                question: "Is a working model required in the first round?",
                answer:
                    "No. For the first round, only an idea presentation is required. Working models are required only for the final event.",
            },
        ],
    },
    {
        category: "Competition Details",
        questions: [
            {
                number: "16",
                question: "How many competitions are there in BTL 2025?",
                answer:
                    "There are five curated competitions designed around the space theme, focusing on robotics, coding, design, ideation, and innovation.",
            },
            {
                number: "17",
                question: "What are the competition levels?",
                answer:
                    "Qualifier Round: Conducted virtually or at the respective schools. Final Round: Conducted physically in Hyderabad on 14th September 2025.",
            },
            {
                number: "18",
                question: "Will each team participate in all competitions?",
                answer: "Yes, all registered teams will compete across the five competitions.",
            },
            {
                number: "19",
                question: "What is the criteria to qualify for the final round?",
                answer:
                    "Teams that follow all the rules mentioned in the problem statement for their category will be eligible for the final round.",
            },
            {
                number: "20",
                question: "What is the format of the competitions?",
                answer:
                    "Detailed formats and problem statements will be shared with registered schools and teams after registration.",
            },
            {
                number: "21",
                question: "What is the Space-related Olympiad?",
                answer:
                    "It is a special Olympiad for Classes 6–10 focusing on astronomy, space science, and space technology concepts.",
            },
            {
                number: "22",
                question: "Can students participate only in the Olympiad?",
                answer:
                    "Yes, schools can register students exclusively for the Olympiad if they wish.",
            },
            {
                number: "23",
                question: "Will there be prizes or awards?",
                answer:
                    "Yes, winners will receive trophies, certificates, cash prizes, and national recognition.",
            },
        ],
    },
    {
        category: "Event Logistics",
        questions: [
            {
                number: "24",
                question: "Where is the Final Round happening?",
                answer:
                    "The Final Round will be held in Hyderabad on 14th September 2025.",
            },
            {
                number: "25",
                question: "How will the Qualifier Round be conducted?",
                answer:
                    "It will be held virtually or at the registered schools' campuses.",
            },
            {
                number: "26",
                question: "Do students need to travel for the Qualifier Round?",
                answer:
                    "No, the Qualifier Round is conducted online or in school, eliminating the need for travel.",
            },
            {
                number: "27",
                question: "Will schools receive guidelines for hosting the Qualifier Round?",
                answer:
                    "Yes, complete instructions and resources will be shared by the organizing team.",
            },
            {
                number: "28",
                question: "Will accommodation be provided for the Final Round?",
                answer:
                    "Limited accommodation may be arranged for outstation teams; details will be shared with qualifying schools.",
            },
        ],
    },
    {
        category: "Learning & Support",
        questions: [
            {
                number: "29",
                question: "Will students receive certificates?",
                answer:
                    "Yes, all participants will receive national level participation certificates, and winners will receive merit certificates.",
            },
            {
                number: "30",
                question: "Are the competitions beginner-friendly?",
                answer:
                    "Yes, the challenges are designed to be school level friendly, with increasing difficulty for higher grades.",
            },
            {
                number: "31",
                question: "Will students get preparatory resources?",
                answer:
                    "Yes, registered teams will be provided learning resources and toolkits for preparation.",
            },
            {
                number: "32",
                question: "How can teachers support their teams?",
                answer:
                    "Teachers can mentor and guide students through the competition phases and ensure adherence to submission guidelines.",
            },
            {
                number: "33",
                question: "Who can we contact for queries or assistance?",
                answer:
                    "You can email btl@teckybot.com or visit www.bharatteckleague.com. Contact numbers are available on the Contact Us page.",
            },
        ],
    },
];


const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState({});

    const toggleFAQ = (section, index) => {
        setActiveIndex((prev) => ({
            ...prev,
            [section]: prev[section] === index ? null : index,
        }));
    };

    return (
        <div className="w-full px-4 sm:px-8 py-16 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                        <span className="text-[#0E265F]">Frequently Asked Questions</span>
                    </h1>
                    <div className="w-80 h-1.5 bg-gradient-to-r from-[#0E265F] to-[#2A6DC8] mx-auto rounded-full"></div>
                </div>

                {/* FAQ by Category */}
                {faqData.map((section, secIndex) => (
                    <div key={secIndex} className="mb-12">
                        <h2 className="text-2xl sm:text-4xl font-bold text-center text-[#0E265F] mb-8">
                            {section.category}
                        </h2>

                        <div className="space-y-4 sm:space-y-6">
                            {section.questions.map((item, index) => (
                                <div
                                    key={index}
                                    className={`p-6 sm:p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${activeIndex[section.category] === index
                                            ? "bg-gradient-to-br from-[#EEF4FF] to-[#E0EAFF] border-[#2A6DC8] shadow-lg"
                                            : "bg-white border-gray-200 hover:border-[#2A6DC8] hover:shadow-md"
                                        }`}
                                    onClick={() => toggleFAQ(section.category, index)}
                                >
                                    <div className="flex items-start justify-between gap-6">
                                        <div className="flex gap-6 items-start">
                                            <div className="font-bold text-2xl text-[#0c007a] mt-1">
                                                {item.number}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-lg sm:text-xl text-gray-800">
                                                    {item.question}
                                                </h3>
                                                {activeIndex[section.category] === index && (
                                                    <p className="text-base sm:text-lg text-gray-800 mt-4 leading-relaxed">
                                                        {item.answer}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        <FaChevronDown
                                            className={`mt-2 text-lg sm:text-xl flex-shrink-0 transition-transform ${activeIndex[section.category] === index
                                                    ? "rotate-180 text-[#2A6DC8]"
                                                    : "text-gray-500"
                                                }`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQSection;