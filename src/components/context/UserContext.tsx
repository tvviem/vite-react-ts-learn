import { useState, createContext } from 'react';

export type AuthUser = {
  name: string;
  email: string;
};

type UserContextType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

// Step 1: create a new context
export const UserContext = createContext({} as UserContextType); //
// Step 2: create component provider
type UserContextProviderProps = {
  children: React.ReactNode;
};
export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
