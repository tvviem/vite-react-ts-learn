import { useState, createContext } from 'react';

export type AuthUser = {
  name: string;
  email: string;
};
// Step 3: specify the type for our context
type UserContextType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};
// Step 2: create component provides the user context value
type UserContextProviderProps = {
  children: React.ReactNode;
};

// Step 1: create a new context
export const UserContext = createContext({} as UserContextType);
export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
