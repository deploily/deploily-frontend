'use client'
import { Theme } from '@mui/material';
import "@fontsource/inter";

declare module "@mui/material/styles" {
    interface TypographyVariants {
        appBarTitle: React.CSSProperties;
        appBarSubTitle: React.CSSProperties;
        buttonText: React.CSSProperties;
        sectionTitle: React.CSSProperties;
        sectionContent: React.CSSProperties;
        sectionSubTitle: React.CSSProperties;
        heroText: React.CSSProperties;
        mainTitlesTypography: React.CSSProperties;
        pipelineDetailTypography: React.CSSProperties;
        footerTitleTypography: React.CSSProperties;
        footerDetailsTypography: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        appBarTitle?: React.CSSProperties;
        appBarSubTitle?: React.CSSProperties;
        buttonText?: React.CSSProperties;
        sectionTitle?: React.CSSProperties;
        sectionContent?: React.CSSProperties;
        sectionSubTitle?: React.CSSProperties;
        heroText?: React.CSSProperties;
        mainTitlesTypography?: React.CSSProperties;
        pipelineDetailTypography?: React.CSSProperties;
        footerTitleTypography?: React.CSSProperties;
        footerDetailsTypography?: React.CSSProperties;
    }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        appBarTitle: true;
        appBarSubTitle: true;
        buttonText: true;
        sectionTitle: true;
        sectionContent: true;
        sectionSubTitle: true;
        heroText: true;
        mainTitlesTypography: true;
        pipelineDetailTypography: true;
        footerTitleTypography: true;
        footerDetailsTypography: true;
    }
}

export const TypographyVariants = (theme: Theme) => ({
    appBarTitle: {
        fontFamily: "Inter",
        fontSize: "20px",
        fontWeight: 900,
        letterSpacing: "0.2px",
    },
    appBarSubTitle: {
        color: theme.palette.mode == "dark" ? theme.palette.primary.main : theme.palette.secondary.main,
        fontFamily: "Inter",
        fontSize: "17px",
        fontWeight: 600,
        letterSpacing: "0.2px",
    },
    buttonText: {
        fontFamily: "Inter",
        fontSize: "20px",
        fontWeight: 600,
        letterSpacing: "0.2px",
    },
    sectionTitle: {
        fontFamily: "Inter, sans-serif",
        fontSize: "14px",
        color: "text.primary",
        fontWeight: 600,
        letterSpacing: "0.5px",
    },
    sectionContent: {
        fontFamily: "Inter, sans-serif",
        fontSize: "1.1rem",
        fontWeight: 400,
        letterSpacing: "0.1px",
        lineHeight: "1.6",
        color: theme.palette.mode == "light" ? theme.palette.text.secondary : theme.palette.grey[50],
    },
    sectionSubTitle: {
        ffontFamily: "Inter",
        fontSize: "1.18rem",
        letterSpacing: "0.2px",
        lineHeight: 1.6,
        color: theme.palette.mode == "light" ? theme.palette.text.secondary : theme.palette.grey[50],
    },
    heroText: {
        fontFamily: "Inter",
        fontWeight: 600,
        lineHeight: "40px",
        letterSpacing: "0.15px",
        color: theme.palette.mode == "light" ? theme.palette.secondary.dark : theme.palette.grey[400],
        maxWidth: '100%',
    },
 
});





