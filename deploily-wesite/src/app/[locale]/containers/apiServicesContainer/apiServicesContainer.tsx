"use client"
import { alpha, Container, Grid, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
export default function ApiServiceContainer() {
    const theme = useTheme();

    return (
        <Grid sx={{
            paddingTop: "60px",
            backgroundImage:
                theme.palette.mode === 'light'
                    ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
                    : `linear-gradient(transparentOrange.main, ${alpha('#090E10', 0.0)})`,
        }}>

                <Grid
                    container
                    sx={{
                        width: '100%',
                        alignItems: "center", justifyContent: "center",
                        padding: { xs: "20px", md: "40px" },
                        marginTop: "50px"
                    }}
                    direction="column"
                >
                    <Grid item sx={{ padding: { xs: "5px", md: "10px" } }}>
                        <Typography
                            sx={{
                                justifyContent: "center",
                                typography: { xs: 'h4', sm: 'h3', md: 'h2' },
                                background: theme.palette.mode === 'light' ? "#ba5814"
                                    : "#dce9f5",
                                backgroundClip: 'text',
                                color: 'transparent',
                                marginBottom: { xs: "20px", md: "30px" },
                                padding: { xs: "3px", md: "5px" }
                            }}
                        >
                            API Services

                        </Typography>
                    </Grid>

                    <Grid item sx={{ padding: { xs: "5px", md: "10px" } }}>

                        <Typography
                            width="90%"
                            sx={{
                                paddingTop: { xs: "20px", sm: "30px" },
                                textAlign: "center",
                            }}
                            variant="sectionContent"
                        >
                            Our API service provides easy-to-use,
                            powerful endpoints that let you integrate advanced features like authentication,
                            databases, and real-time data into your applications. Whether you are building a prototype,
                            a startup, or a full-scale project, our APIs handle the backend complexity, so you can focus on building your app quickly and efficiently. No server setup, no hassle—just seamless integration for faster development.
                        </Typography>
                    </Grid>

                </Grid>

        </Grid >
    );
}
