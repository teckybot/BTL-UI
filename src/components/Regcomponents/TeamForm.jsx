import { useState, useEffect, useRef, useContext } from "react";
import api from "../../utils/api";
import EventDropdown from "./EventDropdown";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { Steps, Button, Form, Input, Select, message } from 'antd';
import { TeamDraftContext } from "../../context/TeamDraftContext";
import './TeamFormCustom.css'; // For custom styles (gradient, disabled look)

const { Step } = Steps;

const TeamForm = () => {
  const navigate = useNavigate();
  const { teamNumber } = useParams();
  const location = useLocation();
  const readonly = location.state?.readonly;
  const registeredTeamData = location.state?.teamData;
  const [form] = Form.useForm();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const { draft, updateTeam, clearDraft } = useContext(TeamDraftContext);
  // Add state for teamSize
  const [teamSize, setTeamSize] = useState(formData.teamSize || '');

  // Load draft data for this team on mount
  useEffect(() => {
    if (draft.teams && draft.teams[teamNumber]) {
      setFormData(draft.teams[teamNumber]);
      setSelectedEvent(draft.teams[teamNumber].event);
      form.setFieldsValue(draft.teams[teamNumber]);
      setTeamSize(draft.teams[teamNumber].teamSize);
      }
  }, [draft.teams, teamNumber, form]);

  // If readonly, use registeredTeamData for formData
  useEffect(() => {
    if (readonly && registeredTeamData) {
      form.setFieldsValue({
        ...registeredTeamData,
        members: registeredTeamData.members || []
      });
      setTeamSize(registeredTeamData.teamSize || '');
      setSelectedEvent(registeredTeamData.event || null);
    }
  }, [readonly, registeredTeamData, form]);

  const handleEventChange = (value) => {
    setSelectedEvent(value);
    form.setFieldsValue({ event: value });
    saveFormData({ ...form.getFieldsValue(), event: value });
  };

  const saveFormData = (values) => {
    try {
      const currentFormValues = form.getFieldsValue();
      const newData = {
        ...formData,
        ...currentFormValues,
        ...values,
        members: values.members || currentFormValues.members || formData.members,
        event: values.event || selectedEvent
      };
      setFormData(newData);
      form.setFieldsValue(newData);
    } catch (error) {
      message.error('Failed to save form data');
    }
  };

  const validateForm = async () => {
    try {
      await form.validateFields();
      return true;
    } catch (error) {
      return false;
    }
  };

  const next = async () => {
    const isValid = await validateForm();
    if (isValid) {
      const values = form.getFieldsValue();
      saveFormData(values);
      setCurrentStep(currentStep + 1);
    }
  };

  const prev = () => {
    setCurrentStep(currentStep - 1);
  };

  // Save to draft (context/localStorage)
  const handleSave = async () => {
    // Custom validation for enabled member fields
    const size = parseInt(teamSize);
    const members = form.getFieldValue('members') || [];
    let valid = true;
    for (let i = 0; i < size; i++) {
      const m = members[i] || {};
      if (!m.name || !m.classGrade || !m.gender) {
        valid = false;
        break;
      }
    }
    if (!teamSize || !selectedEvent || !valid) {
      message.error('Please fill all required fields for the selected team size and competition.');
      return;
    }
    setLoading(true);
    try {
      const values = form.getFieldsValue(true);
      updateTeam(teamNumber, { ...values, event: values.event || selectedEvent });
      message.success('Team draft saved!');
    } catch (err) {
      message.error('Failed to save draft.');
    } finally {
      setLoading(false);
    }
  };

  const handleClearDraft = () => {
    updateTeam(teamNumber, undefined);
    form.resetFields();
    setTeamSize('');
    setSelectedEvent(null);
    message.success('Draft cleared!');
  };

  const handleBackToModules = () => {
    navigate('/modules', { state: { schoolRegId: draft.schoolRegId } });
  };

  // Update teamSize state when changed
  const handleTeamSizeChange = (value) => {
    setTeamSize(value);
    const size = parseInt(value);
    const newMembers = Array.from({ length: size }, (_, i) => formData.members && formData.members[i] ? formData.members[i] : { name: '', classGrade: '', gender: '' });
    form.setFieldsValue({ teamSize: value, members: newMembers });
    saveFormData({ teamSize: value, members: newMembers });
  };

  const steps = [
    {
      title: 'Team Details',
      content: (
        <>
          <Form.Item
            name="event"
            label="Event Category"
            rules={[{ required: true, message: 'Please select an event!' }]}
          >
            <EventDropdown 
              schoolRegId={draft.schoolRegId} 
              onChange={handleEventChange}
              value={selectedEvent}
              draftTeams={draft.teams}
              currentTeamNumber={teamNumber}
              currentDraftEvent={formData.event}
            />
          </Form.Item>

          <Form.Item
            name="teamSize"
            label="Team Size"
            rules={[{ required: true, message: 'Please select team size!' }]}
          >
            <Select
              placeholder="Select team size"
              onChange={(value) => {
                const size = parseInt(value);
                const newMembers = Array.from({ length: size }, () => ({
                  name: "",
                  classGrade: "",
                  gender: ""
                }));

                const currentValues = form.getFieldsValue(true);
                form.setFieldsValue({ 
                  ...currentValues,
                  teamSize: value, 
                  members: newMembers 
                });
                saveFormData({ 
                  ...currentValues,
                  teamSize: value, 
                  members: newMembers 
                });
                form.validateFields(['members']);
              }}
            >
              <Select.Option value="2">2 Members</Select.Option>
              <Select.Option value="3">3 Members</Select.Option>
              <Select.Option value="4">4 Members</Select.Option>
            </Select>
          </Form.Item>
        </>
      ),
    },
    {
      title: 'Member Details',
      content: (
        <Form.List
          name="members"
          rules={[{
            validator: async (_, members) => {
              if (!members || members.length < 2) {
                return Promise.reject(new Error('At least 2 team members are required'));
              }
            },
          }]}
        >
          {(fields, { add, remove }) => (
            <div className="space-y-4">
              {fields.map((field, index) => (
                <div key={field.key} className="p-4 border rounded-lg bg-gray-50">
                  <h4 className="font-medium text-gray-700 mb-3">Member {index + 1}</h4>

                  <Form.Item
                    key={`name-${field.key}`}
                    label="Name"
                    name={[field.name, 'name']}
                    fieldKey={[field.fieldKey, 'name']}
                    rules={[{ required: true, message: 'Please input member name!' }]}
                  >
                    <Input placeholder="Enter member name" />
                  </Form.Item>

                  <Form.Item
                    key={`grade-${field.key}`}
                    label="Grade/Class"
                    name={[field.name, 'classGrade']}
                    fieldKey={[field.fieldKey, 'classGrade']}
                    rules={[{ required: true, message: 'Please input grade/class!' }]}
                  >
                    <Select placeholder="Select grade/class">
                      <Select.Option value="6">6</Select.Option>
                      <Select.Option value="7">7</Select.Option>
                      <Select.Option value="8">8</Select.Option>
                      <Select.Option value="9">9</Select.Option>
                      <Select.Option value="9">10</Select.Option>
                    </Select>
                  </Form.Item>

                  <Form.Item
                    key={`gender-${field.key}`}
                    label="Gender"
                    name={[field.name, 'gender']}
                    fieldKey={[field.fieldKey, 'gender']}
                    rules={[{ required: true, message: 'Please select gender!' }]}
                  >
                    <Select placeholder="Select gender">
                      <Select.Option value="Male">Male</Select.Option>
                      <Select.Option value="Female">Female</Select.Option>
                      <Select.Option value="Other">Other</Select.Option>
                    </Select>
                  </Form.Item>
                </div>
              ))}
            </div>
          )}
        </Form.List>
      ),
    },
  ];

  return (
    <div className="max-w-3xl mt-20 md:mt-24 mx-auto bg-white p-8 rounded-2xl shadow-md border border-[#E0E7EF]">
      {readonly && (
        <div className="mb-6 p-4 rounded-lg bg-red-600 text-white text-center font-bold text-lg shadow">
          You can't edit this team. This team has already been submitted.
        </div>
      )}
      <h2 className="text-2xl font-bold text-center mb-8">TEAM {teamNumber}</h2>
      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* Team Size Select */}
        <div>
          <label className="block font-semibold mb-2">Select the Size of Team</label>
          <Select
            value={teamSize}
            onChange={handleTeamSizeChange}
            placeholder="Select the Size of Team"
            className="w-full custom-select"
            disabled={readonly}
          >
            <Select.Option value="2">2</Select.Option>
            <Select.Option value="3">3</Select.Option>
            <Select.Option value="4">4</Select.Option>
          </Select>
        </div>
        {/* Competition Select with Gradient */}
        <div>
          <label className="block font-semibold mb-2">Select the Competition</label>
          <EventDropdown
            schoolRegId={draft.schoolRegId}
            value={selectedEvent}
            onChange={handleEventChange}
            draftTeams={draft.teams}
            currentTeamNumber={teamNumber}
            currentDraftEvent={formData.event}
            className="w-full custom-gradient-select"
            disabled={readonly}
          />
        </div>
      </div>
      {/* Member Fields Grid */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {[0, 1, 2, 3].map((idx) => {
          const enabled = teamSize && idx < parseInt(teamSize);
          return (
            <div key={idx} className={`space-y-2 ${!enabled ? 'opacity-60 pointer-events-none' : ''}`}>
              <Input
                placeholder="ENTER STUDENT NAME IN CAPITAL LETTERS"
                value={form.getFieldValue(['members', idx, 'name']) || ''}
                onChange={e => {
                  if (enabled && !readonly) {
                    const members = form.getFieldValue('members') || [];
                    members[idx] = { ...members[idx], name: e.target.value };
                    form.setFieldsValue({ members });
                    saveFormData({ members });
                  }
                }}
                disabled={!enabled || readonly}
                className="custom-input"
              />
              <div className="flex gap-2">
                <Select
                  placeholder="Class"
                  value={form.getFieldValue(['members', idx, 'classGrade']) || ''}
                  onChange={val => {
                    if (enabled && !readonly) {
                      const members = form.getFieldValue('members') || [];
                      members[idx] = { ...members[idx], classGrade: val };
                      form.setFieldsValue({ members });
                      saveFormData({ members });
                    }
                  }}
                  disabled={!enabled || readonly}
                  className="w-1/2 custom-select"
                >
                  <Select.Option value="6">6</Select.Option>
                  <Select.Option value="7">7</Select.Option>
                  <Select.Option value="8">8</Select.Option>
                  <Select.Option value="9">9</Select.Option>
                  <Select.Option value="9">10</Select.Option>
                </Select>
                <Select
                  placeholder="Gender"
                  value={form.getFieldValue(['members', idx, 'gender']) || ''}
                  onChange={val => {
                    if (enabled && !readonly) {
                      const members = form.getFieldValue('members') || [];
                      members[idx] = { ...members[idx], gender: val };
                      form.setFieldsValue({ members });
                      saveFormData({ members });
                    }
                  }}
                  disabled={!enabled || readonly}
                  className="w-1/2 custom-select"
                >
                  <Select.Option value="Male">Male</Select.Option>
                  <Select.Option value="Female">Female</Select.Option>
                  <Select.Option value="Other">Other</Select.Option>
                </Select>
              </div>
            </div>
          );
        })}
      </div>
      {/* Buttons */}
      <div className="flex justify-between mt-8">
        <Button onClick={handleBackToModules} className="px-8 py-2 rounded-lg border border-[#2563EB] text-[#2563EB] font-semibold bg-white hover:bg-[#F0F6FF] transition">BACK</Button>
        {!readonly && (
          <div className="flex gap-2">
            <Button danger onClick={handleClearDraft} className="px-8 py-2 rounded-lg border border-red-500 text-red-500 font-semibold bg-white hover:bg-red-50 transition">CLEAR DRAFT</Button>
            <Button type="primary" onClick={handleSave} loading={loading} className="px-8 py-2 rounded-lg bg-gradient-to-r from-[#112481] via-[#2054CC] to-[#307DE3] text-white font-semibold shadow hover:opacity-90 transition">SAVE</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamForm;
