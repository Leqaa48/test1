import React, { useState } from "react";

const ThemeContext = React.createContext();

export function ThemeProvider(Props) {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {Props.children}
    </ThemeContext.Provider>
  );
  }
