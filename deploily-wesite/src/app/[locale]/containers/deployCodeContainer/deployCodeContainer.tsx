"use client"
import { alpha, Container, Grid, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
export default function DeployCodeContainer() {
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
                            Deploy from Git Without DevOps
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
                            Ou Forget about the complexities of traditional DevOps workflows. With our platform,
                            you can deploy your projects directly from Git with just a few clicks.
                            You don’t need any DevOps experience or specialized knowledge—simply connect your repository,
                            configure your settings, and deploy in no time. Streamline your deployment process and get your code live faster,
                            without worrying about the technical hurdles.

                        </Typography>
                    </Grid>

                </Grid>

        </Grid >
    );
}
