import React, { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { locales } from "../../config";
import StoreProvider from "../storeProvider";
import MainLayoutContent from "../mainLayoutContent";
import { getMessages } from "next-intl/server";
import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata } from 'next'

export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
});
export const metadata: Metadata = {
  metadataBase: new URL("https://deploily.cloud"),
  title: "Deploily",
  description: `Open-source cloud proxy solution, 
                offers local alternatives to foreign APIs,
                and ensures compliance with Algerian data protection regulations.`,
  keywords: "Cloud Proxy Solution, Application Deployment, Open Source Platform, Algerian Data Protection, Local Cloud Hosting, Local API Alternatives",
  openGraph: {
    type: "website",
    url: "https://deploily.cloud",
    title: "Deploily",
    siteName: "Deploily",
    description: `Open-source cloud proxy solution,
                  offers local alternatives to foreign APIs,
                  and ensures compliance with Algerian data protection regulations.`,
    images: [{
      url: "https://deploily.cloud/_next/image?url=%2Fimages%2Flogo_name.png&w=256&q=75",
    }],
    locale: "en_US"
  },
};

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
        <GoogleAnalytics gaId="G-N5HBREFEE3" />
        <StoreProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <MainLayoutContent>{children}</MainLayoutContent>
          </NextIntlClientProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
