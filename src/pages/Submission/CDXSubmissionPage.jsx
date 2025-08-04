import React, { useEffect, useState } from "react";
import { Typography, Button, message } from "antd";
import api from "../../utils/api";

const { Title, Paragraph } = Typography;

const CDXSubmissionPage = ({ teamRegId, onPrev, onNext }) => {
  const [teamData, setTeamData] = useState(null);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await api.get(`/team/details/${teamRegId}`);
        setTeamData(res.data.team);
      } catch (err) {
        message.error("Failed to fetch team data.");
      }
    };

    fetchTeam();
  }, [teamRegId]);

  if (!teamData) return null;

  return (
    <div style={{ maxWidth: 700, margin: "40px auto" }}>
      <div style={{ padding: "24px", background: "#fff", borderRadius: "8px" }}>
        <Title level={4}>Important Information</Title>
        <Paragraph>
          CodeX is an online coding competition. It will be conducted on <b>17th August</b>.
          <br /><br />
          <b>No submission is required</b> on this portal.
        </Paragraph>
        <Button style={{ marginRight: 12 }} onClick={onPrev}>
          Back to Preview
        </Button>
        {/* <Button type="primary" onClick={onNext}>
          Finish
        </Button> */}
      </div>
    </div>
  );
};

export default CDXSubmissionPage;
