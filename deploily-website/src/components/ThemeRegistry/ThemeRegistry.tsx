// app/providers/ThemeProvider.tsx

"use client";

import React, {createContext, useState, useEffect} from "react";
import {ThemeProvider as MuiThemeProvider, createTheme} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {PaletteMode} from "@mui/material";
import getLPTheme from "./theme";

interface ThemeProviderContextProps {
  toggleColorMode: () => void;
  mode: PaletteMode;
}

export const ThemeProviderContext = createContext<ThemeProviderContextProps>({
  toggleColorMode: () => {},
  mode: "dark",
});

export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
  const [mode, setMode] = useState<PaletteMode>("dark");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("themeMode") as PaletteMode;
      if (savedMode) {
        setMode(savedMode);
      }
    }
  }, []);

  const toggleColorMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("themeMode", newMode);
  };

  const LPtheme = createTheme(getLPTheme(mode));

  return (
    <ThemeProviderContext.Provider value={{toggleColorMode, mode}}>
      <MuiThemeProvider theme={LPtheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeProviderContext.Provider>
  );
};
