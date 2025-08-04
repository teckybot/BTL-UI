import React from "react";
import { Card, Descriptions, Button } from "antd";

// Add 'onPrev' to the props
const TeamPreview = ({ team, onNext, onPrev }) => {
    return (
        <Card title="Team Details Preview" variant='outlined'>
            <Descriptions column={1} bordered size="small">
                <Descriptions.Item label="Team ID">{team.teamRegId}</Descriptions.Item>
                <Descriptions.Item label="Event">{team.event}</Descriptions.Item>
                <Descriptions.Item label="Team Size">{team.teamSize}</Descriptions.Item>
                <Descriptions.Item label="State">{team.state}</Descriptions.Item>
                <Descriptions.Item label="School ID">{team.schoolRegId}</Descriptions.Item>
                {team.members.map((member, index) => (
                    <Descriptions.Item
                        label={`Member ${index + 1}`}
                        key={index}
                    >{`${member.name} | ${member.classGrade} | ${member.gender}`}</Descriptions.Item>
                ))}
            </Descriptions>

            <div style={{ textAlign: "right", marginTop: 24 }}>
                {/* Add a back button */}
                <Button onClick={onPrev} style={{ marginRight: 8 }}>
                    Back
                </Button>
                <Button type="primary" onClick={onNext}>
                    Next
                </Button>
            </div>
        </Card>
    );
};

export default TeamPreview;