import {NextIntlClientProvider} from 'next-intl';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from "antd";
import {getMessages} from 'next-intl/server';
import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Providers from '../_utils/providers';

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Doculet",
  description: "Doculet stands as your beacon of authenticity. We're not just verifying documents; we're validating dreams, securing futures, and building a foundation of trust for the digital age",
  keywords: [
    "Document", "Verification", 
  ],
  authors: [
    { name: "Doculet" },
    { name: "Doculet", url: "https://doculet.vercel.app" },
  ],
  creator: "Doculet",
  publisher: "Doculet",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://doculet.vercel.app"),
  openGraph: {
    title: "Doculet",
    description: "Doculet stands as your beacon of authenticity. We're not just verifying documents; we're validating dreams, securing futures, and building a foundation of trust for the digital age",
    url: "https://doculet.vercel.app/en",

    siteName: "Doculet",
    images: [
      {
        url: "/Doculet.webp",
        width: 1200,
        height: 630,
        alt: "Doculet-homepage-featured-image",

      },
      {
        url: "/Doculet.webp",
        width: 1200,
        height: 1600,
        alt: "Doculet-homepage-featured-image",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Doculet",
      description: "Doculet stands as your beacon of authenticity. We're not just verifying documents; we're validating dreams, securing futures, and building a foundation of trust for the digital age",
    // siteId: '1467726470533754880',
    creator: "@doculet",
    // creatorId: '1467726470533754880',
    images: [
      "https://doculet.vercel.app/en/Doculet.webp",
      "https://doculet.vercel.app/Doculet.webp",
    ],
  },
};


export default async function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
        <Providers>
          <AntdRegistry>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#4DAE37",
                  colorLink: "#4DAE37",
                  fontFamily: "var(--font-cabinet)",
                },
                components: { 
                  Segmented: {
                    fontWeightStrong: 900
                }},
              }}
              
            >
          {children}
          </ConfigProvider>
          </AntdRegistry>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
