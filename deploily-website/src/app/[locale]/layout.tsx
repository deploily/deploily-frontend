import React, { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { locales } from "../../config";
import StoreProvider from "../storeProvider";
import MainLayoutContent from "../mainLayoutContent";
import { getMessages } from "next-intl/server";
import { GoogleAnalytics } from '@next/third-parties/google'

export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  // Resolve the params Promise to access the locale
  const { locale } = await params;

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body suppressHydrationWarning={true}>
        <GoogleAnalytics gaId="G-JFDSDGDFG" />
        <StoreProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <MainLayoutContent>{children}</MainLayoutContent>
          </NextIntlClientProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
