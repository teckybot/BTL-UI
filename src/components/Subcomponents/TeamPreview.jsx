import React from "react";
import { Button } from "antd";

const TeamPreview = ({ team, onNext, onPrev }) => {
    const descriptionItems = [
        { label: "Team ID", value: team.teamRegId },
        { label: "Event", value: team.event },
        { label: "Team Size", value: team.teamSize },
        { label: "State", value: team.state },
        { label: "School ID", value: team.schoolRegId },
        ...team.members.map((member, index) => ({
            label: `Member ${index + 1}`,
            value: `${member.name} | ${member.classGrade} | ${member.gender}`,
        })),
    ];

    return (
        <div className="p-6 rounded-lg shadow-sm">
            <div className="bg-white rounded-md border border-[#f0f8ff] text-center">
                <div
                    className="px-4 py-2 text-lg text-white font-semibold border-b border-[#f0f8ff]"
                    style={{
                        background:
                            "linear-gradient(93.58deg, #112481 0%, #2054CC 70%, #307DE3 100%)",
                    }}
                >
                    Team Details Preview
                </div>

                <div className="p-4">
                    <div className="border border-gray-300 rounded-md overflow-hidden">
                        {descriptionItems.map((item, index) => {
                            const rowBgColor =
                                index % 2 === 0 ? "bg-white" : "bg-[#f0f8ff]";
                            return (
                                <div
                                    key={index}
                                    className={`grid grid-cols-2 border-t border-gray-300 ${rowBgColor}`}
                                >
                                    <div className="px-4 py-2 font-medium text-black border-r border-gray-300">
                                        {item.label}
                                    </div>
                                    <div className="text-gray-800 font-base px-4 py-2">
                                        {item.value}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="flex justify-end mt-6">
                        <Button onClick={onPrev} className="mr-2">
                            Back
                        </Button>
                        <Button type="primary" onClick={onNext}>
                            Next
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamPreview;
