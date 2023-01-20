import { createContext } from 'react';
import { theme } from './theme'; // object for context

// Step 1: create a new context
export const ThemeContext = createContext(theme);

// Step 2: create theme context provider
type ThemeContextProviderProps = {
  children: React.ReactNode;
};
export const ThemeContextProvider = ({
  children
}: ThemeContextProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
