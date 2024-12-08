import React, { ReactNode } from "react";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { createTheme, Grid, PaletteMode } from "@mui/material";
import { unstable_setRequestLocale } from "next-intl/server";
import { locales } from "../../config";
import StoreProvider from "../storeProvider";
import getLPTheme from "../../components/ThemeRegistry/theme";
import MainLyoutContent from "../mainLayoutContent";
import MainLayoutContent from "../mainLayoutContent";
import { Metadata } from "next";


// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default function RootLayout({
  children,
  params: { locale }
}: Props) {

  unstable_setRequestLocale(locale);
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body suppressHydrationWarning={true}>
        <StoreProvider>
          <NextIntlClientProvider locale={locale} messages={messages}  >
            <MainLayoutContent >{children}</MainLayoutContent>
          </NextIntlClientProvider></StoreProvider>
      </body>
    </html>


  );
}
