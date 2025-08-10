import { createContext, useState } from "react";

export const Context = createContext;

export const GlobalContext = ({ children }) => {
  const [registerData, setRegisterDate] = useState(null);
  return (
    <Context.Provider value={{ registerData, setRegisterDate }}>
      {children}
    </Context.Provider>
  );
};
