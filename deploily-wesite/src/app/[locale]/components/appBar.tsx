"use client"
import * as React from 'react';
import Image from "next/image";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslations } from 'next-intl';
import { Container, Grid, Link, Typography, alpha, } from '@mui/material';
import LocaleSwitcher from '../../../components/locale/localeSwitcher';
import { useTheme } from "@mui/material";
import ToggleColorMode from './toogleColorMode';
import { useEffect, useRef, useState } from 'react';

function AppAppBar() {

    const t = useTranslations("appBar");
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

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
    const theme = useTheme();

    const [width, setWidth] = useState(0);

    const observedDiv = useRef(null);

    useEffect(() => {
        if (!observedDiv.current) {
            return;
        }
        const resizeObserver = new ResizeObserver(() => {
            if (observedDiv.current.offsetWidth !== width) {
                setWidth(observedDiv.current.offsetWidth);
            }
        });
        resizeObserver.observe(observedDiv.current);
        return function cleanup() {
            resizeObserver.disconnect();
        }
    },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [observedDiv.current])

    const appBarColor =
        theme.palette.mode == "dark" ? theme.palette.primary.main : theme.palette.secondary.main;

    
    return (
        <>
            <AppBar
                ref={observedDiv}
                enableColorOnDark
                sx={{
                    boxShadow: 10,
                    bgcolor: theme.palette.mode == "dark" ? alpha("#0c0d0f", 0.9) : alpha("#FFFFFF", 0.7),
                    backgroundImage: 'none',
                }}
            > 
            <Toolbar>
                    <Container maxWidth={false} style={{ padding: "0px", maxWidth: "1280px" }} >

                    <Grid container direction="row" spacing={8} sx={{ display: "flex", justifyContent: "space-between", }} alignItems="center" >
                        <Grid item>
                            <Grid container alignItems={"center"} marginLeft={"10px"} >
                                <Image
                                    src="/images/logo_name.png"
                                    width={180}
                                    height={70}
                                    alt="logo-deploily"
                                    style={{
                                        marginRight: "20px"
                                    }}
                                />
                              
                            </Grid>
                        </Grid>
                        <Grid item
                            display={width < 905 ? "none" : 'block'}
                            sx={{
                                alignItems: "center",
                            }}>
                                <Grid container spacing="20px" sx={{ alignItems: "center" }} display={{ sm: "flex", md: "flex", xs: "none" }}>
                                    <Grid item >
                                        <LocaleSwitcher color={appBarColor} />
                                    </Grid>
                                </Grid> 
                            <Grid display={{ sm: "none", md: "none", xs: "flex" }}>
                                <LocaleSwitcher color={appBarColor} />
                                <Button
                                    variant="text"
                                    color="primary"
                                    aria-label="menu"
                                    onClick={toggleDrawer(true)}
                                    sx={{ minWidth: '30px', p: '0px' }}
                                >
                                    <MenuIcon sx={{ color: 'white' }} />
                                </Button>

                            </Grid>
                        </Grid>
                    </Grid>
                        {/* <ToggleColorMode color={appBarColor} /> */}
                    </Container>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default AppAppBar;