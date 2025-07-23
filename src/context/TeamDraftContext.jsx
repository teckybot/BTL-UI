import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

export const TeamDraftContext = createContext();

const getStorageKey = (schoolRegId) => `teamDraftData_${schoolRegId}`;
const LAST_SCHOOL_KEY = 'lastTeamSchoolRegId';

export const TeamDraftProvider = ({ children }) => {
  const [draft, setDraft] = useState({ schoolRegId: "", teams: {}, coordinatorEmail: "" });
  const [filledCount, setFilledCount] = useState(0);

  const loadDraft = useCallback((schoolRegId) => {
    if (!schoolRegId) return { schoolRegId: "", teams: {}, coordinatorEmail: "" };
    try {
      const saved = localStorage.getItem(getStorageKey(schoolRegId));
      return saved ? JSON.parse(saved) : { schoolRegId, teams: {}, coordinatorEmail: "" };
    } catch {
      return { schoolRegId, teams: {}, coordinatorEmail: "" };
    }
  }, []);

  // On mount, try to restore last used schoolRegId if not set
  useEffect(() => {
    if (!draft.schoolRegId) {
      // Try to get last used schoolRegId
      const lastSchoolRegId = localStorage.getItem(LAST_SCHOOL_KEY);
      if (lastSchoolRegId) {
        setDraft(loadDraft(lastSchoolRegId));
        return;
      }
      // Fallback: Find any key starting with "teamDraftData_"
      const lastKey = Object.keys(localStorage).find((k) => k.startsWith("teamDraftData_"));
      if (lastKey) {
        try {
          const saved = JSON.parse(localStorage.getItem(lastKey));
          setDraft(saved);
        } catch {
          // ignore parse errors
        }
      }
    } else {
      // If we already know the school, reload it
      setDraft(loadDraft(draft.schoolRegId));
    }
  }, []); // run once

  // Save draft and last used schoolRegId on change
  useEffect(() => {
    if (draft.schoolRegId) {
      localStorage.setItem(getStorageKey(draft.schoolRegId), JSON.stringify(draft));
      localStorage.setItem(LAST_SCHOOL_KEY, draft.schoolRegId); // <-- persist last used
      setFilledCount(Object.keys(draft.teams || {}).length);
    }
  }, [draft]);

  const updateTeam = (teamNumber, teamData) => {
    setDraft((prev) => ({
      ...prev,
      teams: { ...prev.teams, [teamNumber]: teamData },
    }));
  };

  const removeTeam = (teamNumber) => {
    setDraft((prev) => {
      const newTeams = { ...prev.teams };
      delete newTeams[teamNumber];
      return { ...prev, teams: newTeams };
    });
  };

  const removeTeams = (teamNumbers) => {
    setDraft((prev) => {
      const newTeams = { ...prev.teams };
      teamNumbers.forEach((num) => delete newTeams[num]);
      return { ...prev, teams: newTeams };
    });
  };

  const switchToSchool = (schoolRegId) => {
    setDraft(loadDraft(schoolRegId));
  };

  const setSchoolRegId = (schoolRegId) => {
    setDraft((prev) => ({ ...prev, schoolRegId }));
  };

  const setCoordinatorEmail = (email) => {
    setDraft((prev) => ({ ...prev, coordinatorEmail: email }));
  };

  const clearDraft = () => {
    if (draft.schoolRegId) {
      localStorage.removeItem(getStorageKey(draft.schoolRegId));
    }
    setDraft({ schoolRegId: "", teams: {}, coordinatorEmail: "" });
  };

  return (
    <TeamDraftContext.Provider
      value={{
        draft,
        filledCount,
        updateTeam,
        removeTeam,
        removeTeams,
        setSchoolRegId,
        setCoordinatorEmail,
        clearDraft,
        switchToSchool,
      }}
    >
      {children}
    </TeamDraftContext.Provider>
  );
};

export const useTeamDraft = () => useContext(TeamDraftContext);
