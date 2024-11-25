"use client"
import { alpha, Container, Grid, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
export default function HeroContainer() {
    const theme = useTheme();
    const t = useTranslations("hero");

    const [imageLoaded, setImageLoaded] = useState(false);
    const [open, setOpen] = React.useState(false);



    const scrollToSection = (sectionId: string) => {
        const sectionElement = document.getElementById(sectionId);
        const offset = 128;
        if (sectionElement) {
            const targetScroll = sectionElement.offsetTop - offset;
            sectionElement.scrollIntoView({ behavior: 'smooth' });
            window.scrollTo({
                top: targetScroll,
                behavior: 'smooth',
            });
            setOpen(false);
        }
    };
    useEffect(() => {
        setImageLoaded(true);
    }, []);
    return (
        <Grid sx={{
            paddingTop: "60px",
            backgroundImage:
                theme.palette.mode === 'light'
                    ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
                    : `linear-gradient(transparentOrange.main, ${alpha('#090E10', 0.0)})`,
        }}>
            <Container maxWidth={false} style={{ padding: "0px", maxWidth: "1280px" }} >

                <Grid
                    container
                    sx={{
                        width: '100%',
                        // justifyContent: "center",
                        alignItems: "center",
                        textAlign: { xs: "center", md: "left" },
                        padding: { xs: "20px", md: "40px" },
                        marginTop: "50px"
                    }}
                    direction="row"
                >
                    <Grid item xs={12} md={8}>
                        <Grid container direction="column" >
                            <Grid item sx={{ padding: { xs: "5px", md: "10px" } }}>
                                <Typography
                                    sx={{
                                        typography: { xs: 'h4', sm: 'h3', md: 'h2' },
                                        background: theme.palette.mode === 'light' ? "#ba5814"
                                            : "#dce9f5",
                                        backgroundClip: 'text',
                                        color: 'transparent',
                                        marginBottom: { xs: "20px", md: "30px" },
                                        padding: { xs: "3px", md: "5px" }
                                    }}
                                >
                                    From Development to Deployment—Made Easy.
                                </Typography>
                                <Typography
                                    width="90%"
                                    sx={{
                                        paddingTop: { xs: "20px", sm: "30px" },
                                        textAlign: "start",
                                        fontSize: {
                                            xs: 'clamp(0.75rem, 3vw, 1rem)',  
                                            sm: 'clamp(1rem, 3vw, 1.25rem)',  
                                            md: 'clamp(1.25rem, 3vw, 1.5rem)'  }                                       
                                    }}
                                    variant="heroText"
                                >
                                    Deploy your projects with ease—no DevOps skills needed.
                                    We offer free APIs and powerful deployment infrastructure to make your life easier.
                                    Focus on what you do best, while we handle the deployment for you.
                                </Typography>
                            </Grid>
                           
                        </Grid>
                    </Grid>
                 
                </Grid>
            </Container>

        </Grid>
    );
}
