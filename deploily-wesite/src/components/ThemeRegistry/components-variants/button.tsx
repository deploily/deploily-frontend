'use client'
import { Theme } from '@mui/material/styles'

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        primaryBlueContainedButton: true;

    }
}

export const ButtonVariants = (defaultTheme: Theme) => [
    {
        props: { variant: 'primaryBlueContainedButton' },
        style: {
            textTransform: 'none',
            fontWeight: 600,
            fontSize: 16,
            color: "white",
            backgroundColor: defaultTheme.palette.mode === 'light' ? defaultTheme.palette.primary.main : defaultTheme.palette.primary.light,
            height: "40px",
            paddingLeft: "30px",
            paddingRight: "30px",

        }
    },
]