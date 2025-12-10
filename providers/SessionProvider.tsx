import React, { createContext, useContext, useMemo, useState } from 'react';

import { Project, User } from '@/api/types';

type SessionContextValue = {
  user?: User;
  projects: Project[];
  hasProject: boolean;
  setUser: (user?: User) => void;
  setProjects: (projects: Project[]) => void;
  setHasProject: (hasProject: boolean) => void;
  clearSession: () => void;
};

const SessionContext = createContext<SessionContextValue | undefined>(undefined);

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [projects, setProjects] = useState<Project[]>([]);
  const [hasProject, setHasProject] = useState(false);

  const value = useMemo(
    () => ({
      user,
      projects,
      hasProject,
      setUser,
      setProjects,
      setHasProject,
      clearSession: () => {
        setUser(undefined);
        setProjects([]);
        setHasProject(false);
      },
    }),
    [user, projects, hasProject],
  );

  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>;
}

export function useSession() {
  const ctx = useContext(SessionContext);
  if (!ctx) {
    throw new Error('useSession must be used within SessionProvider');
  }
  return ctx;
}
