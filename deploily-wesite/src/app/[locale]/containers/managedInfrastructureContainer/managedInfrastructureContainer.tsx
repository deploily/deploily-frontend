"use client"
import { alpha, Container, Grid, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ManagedInfrastructureContainer() {
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
                        Build Deployment Infrastructure
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
                        Our platform lets you easily build and manage your deployment infrastructure.
                        Whether you are deploying a single app or multiple services, our scalable solutions adapt to your needs.
                        We provide the tools to create a seamless deployment pipeline, ensuring your infrastructure grows with you.
                        From automated scaling to customizable environments, we’ve got everything you need to build a robust and reliable deployment system.


                    </Typography>
                </Grid>

            </Grid>
            <Grid container justifyContent={"center"}
            sx={{margin: "50px"}}>
                {/* <Image
                    src="/images/work_in_progress.jpeg"
                    width={699}
                    height={385}
                    alt="workinprogress"
                    style={{
                        marginRight: "20px"
                    }}
                /> */}
                <Image
                    src="/images/work_inprogress.png"
                    width={1000}
                    height={200}
                    alt="workinprogress"
                    style={{
                        marginRight: "20px"
                    }}
                />

            </Grid>
        </Grid >
    );
}
