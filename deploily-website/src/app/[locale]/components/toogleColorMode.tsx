"use client";
import React, {useContext} from "react";
import {Box, Button} from "@mui/material";
import {ThemeProviderContext} from "../../../components/ThemeRegistry/ThemeRegistry";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import ModeNightRoundedIcon from "@mui/icons-material/ModeNightRounded";

export default function ThemeSwitchPage({color}) {
  const {toggleColorMode, mode} = useContext(ThemeProviderContext);

  return (
    <Box sx={{maxWidth: "32px"}}>
      <Button
        onClick={toggleColorMode}
        size="small"
        aria-label="button to toggle theme"
        sx={{minWidth: "32px", height: "32px", p: "4px"}}
      >
        {mode === "dark" ? (
          <WbSunnyRoundedIcon fontSize="small" htmlColor={color} />
        ) : (
          <ModeNightRoundedIcon fontSize="small" htmlColor={color} />
        )}
      </Button>
    </Box>
  );
}
