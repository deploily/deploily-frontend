"use client"
import { alpha, Button, Container, Grid, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from 'framer-motion';

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
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: { xs: "center", md: "left" },
                        padding: { xs: "20px", md: "40px" },
                        marginTop: "50px"
                    }}
                    direction="row"
                >
                    <Grid item xs={12} md={6}>
                        <Grid container direction="column" alignItems="center" justifyContent="center">
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
                                    {t("title")}
                                </Typography>
                                <Typography
                                    width="90%"
                                    sx={{
                                        paddingTop: { xs: "20px", sm: "30px" },
                                        textAlign: "start",
                                        fontSize: {
                                            xs: 'clamp(0.75rem, 3vw, 1rem)',
                                            sm: 'clamp(1rem, 3vw, 1.25rem)',
                                            md: 'clamp(1.25rem, 3vw, 1.5rem)'
                                        }
                                    }}
                                    variant="heroText"
                                >
                                    {t("subtitle")}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="primaryBlueContainedButton"
                                    sx={{
                                        marginTop: { xs: "30px", md: "50px" },
                                    }}
                                >
                                    {t("buttonHero")}
                                </Button>
                            </Grid>

                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={5} sx={{ justifyContent: 'center', display: 'flex' }} width={{ md: "50%", sm: "100%" }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: imageLoaded ? 1 : 0, scale: imageLoaded ? 1 : 0.9 }}
                            transition={{ duration: 0.5 }}
                            style={{ width: '90%', height: 'auto' }}
                            whileHover={{ scale: 1.1, rotate: 3 }}
                            whileTap={{ scale: 0.8 }}
                        >
                            <Image
                                src="/images/deploy_image.png"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }}
                                alt="deploy"
                            />
                        </motion.div>
                    </Grid>

                </Grid>
            </Container>

        </Grid>
    );
}
