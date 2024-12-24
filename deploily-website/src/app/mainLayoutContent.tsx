"use client";
import React from "react";
import {Grid} from "@mui/material";
import {ThemeProvider} from "../components/ThemeRegistry/ThemeRegistry";

export default function MainLayoutContent(props) {
  return (
    <ThemeProvider>
      <Grid
        alignContent="center"
        // sx={{ bgcolor: 'background.main' }}
      >
        <div>{props.children}</div>
      </Grid>
    </ThemeProvider>
  );
}
