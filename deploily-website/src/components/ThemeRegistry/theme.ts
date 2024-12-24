import {Inter} from "next/font/google";

import {PaletteMode, Theme} from "@mui/material";
import {red} from "@mui/material/colors";
import {
  ThemeOptions,
  alpha,
  ComponentsOverrides,
  createTheme,
  ComponentsVariants,
} from "@mui/material/styles";
import {TypographyVariants} from "./components-variants/typography";
import {ButtonVariants} from "./components-variants/button";

declare module "@mui/material/styles/createPalette" {
  interface ColorRange {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    1000: string;
  }

  interface PaletteColor extends ColorRange {}
}

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export const drawerWidth = 240;

const brand = {
  50: "#99c6f2",
  100: "#6caff0",
  200: "#51a1ed",
  300: "#3a90e0",
  400: "#2c82d4",
  500: "#206fba",
  600: "#115799",
  700: "#0d3861",
  800: "#052645",
  900: "#092138",
  1000: "#0c0d0f",
};
const secondary = {
  50: "#f7ece4",
  100: "#ebd4c5",
  200: "#f2d4bf",
  300: "#fad0b4",
  400: "#f7be97",
  500: "#eda879",
  600: "#ed9a61",
  700: "#e68645",
  800: "#e87d33",
  900: "#e06714",
  1000: "#e05b00",
};

export const gray = {
  50: "#FBFCFE",
  100: "#EAF0F5",
  200: "#D6E2EB",
  300: "#BFCCD9",
  400: "#94A6B8",
  500: "#5B6B7C",
  600: "#4C5967",
  700: "#364049",
  800: "#131B20",
  900: "#090E10",
  1000: "#0f0f0f",
};

export const green = {
  50: "#F6FEF6",
  100: "#E3FBE3",
  200: "#C7F7C7",
  300: "#A1E8A1",
  400: "#51BC51",
  500: "#1F7A1F",
  600: "#136C13",
  700: "#0A470A",
  800: "#042F04",
  900: "#021D02",
};

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: {
      contrastText: brand[100],
      light: brand[300],
      main: brand[400],
      dark: brand[800],
      ...(mode === "light" && {
        light: brand[200],
        main: brand[50],
        dark: brand[800],
        contrastText: brand[50],
      }),
    },
    secondary: {
      light: secondary[400],
      main: secondary[500],
      dark: secondary[900],
      ...(mode === "light" && {
        light: secondary[300],
        main: secondary[500],
        dark: secondary[900],
      }),
    },
    warning: {
      main: "#F7B538",
      dark: "#F79F00",
      ...(mode === "light" && {
        main: "#F7B538",
        dark: "#F79F00",
      }),
    },
    error: {
      light: "#D32F2F",
      main: "#D32F2F",
      dark: "#B22A2A",
      ...(mode === "light" && {
        light: red[50],
        main: red[500],
        dark: red[700],
      }),
    },
    success: {
      light: green[400],
      main: green[500],
      dark: green[700],
      ...(mode === "light" && {
        light: green[300],
        main: green[400],
        dark: green[800],
      }),
    },
    grey: {
      50: gray[50],
      100: gray[100],
      200: gray[200],
      300: gray[300],
      400: gray[400],
      500: gray[500],
      600: gray[600],
      700: gray[700],
      800: gray[800],
      900: gray[900],
      1000: gray[1000],
    },
    blue: {
      1000: brand[1000],
    },
    greylight: {
      light: "#D32F2F",
      main: "#D32F2F",
      dark: "#B22A2A",
      ...(mode === "dark" && {
        main: "#eaebed",
        light: "#eaebed",
        dark: "#eaebed",
      }),
    },
    greymedium: {
      light: "#D32F2F",
      main: "#D32F2F",
      dark: "#B22A2A",
      ...(mode === "dark" && {
        main: "#949cb6",
        light: "#949cb6",
        dark: "#949cb6",
      }),
    },
    divider: mode === "light" ? alpha(gray[300], 0.5) : alpha(gray[600], 0.3),
    background: {
      default: brand[1000],
      paper: brand[900],
      ...(mode === "light" && {
        default: "#fff",
        paper: gray[50],
      }),
    },
    text: {
      primary: "#fff",
      secondary: gray[400],
      ...(mode === "light" && {
        primary: gray[800],
        secondary: gray[600],
      }),
    },
  },
  typography: {
    fontFamily: ['"Inter", "sans-serif"'].join(","),
    h1: {
      fontSize: 60,
      fontWeight: 600,
      lineHeight: 78 / 70,
      letterSpacing: -0.2,
    },
    h2: {
      fontSize: 48,
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: 42,
      lineHeight: 1.2,
    },
    h4: {
      fontSize: 36,
      fontWeight: 500,
      lineHeight: 1.5,
    },
    h5: {
      fontSize: 20,
      fontWeight: 600,
    },
    h6: {
      fontSize: 18,
    },
    subtitle1: {
      fontSize: 18,
    },
    subtitle2: {
      fontSize: 16,
    },
    body1: {
      fontWeight: 400,
      fontSize: 15,
    },
    body2: {
      fontWeight: 400,
      fontSize: 14,
    },
    caption: {
      fontWeight: 400,
      fontSize: 12,
    },
  },
});
export default function getLPTheme(mode: PaletteMode): ThemeOptions {
  const themeOptions = getDesignTokens(mode);

  return {
    ...themeOptions,
    components: {
      MuiTypography: {
        styleOverrides: TypographyVariants(
          createTheme(themeOptions),
        ) as ComponentsOverrides<Theme>["MuiTypography"],
      },
      MuiButton: {
        variants: ButtonVariants(createTheme(themeOptions)) as ComponentsVariants["MuiButton"],
      },
    },
  };
}
