import { FloatingActionButtons } from '@/components/FloatingActionButtons';
import { BottomSheet } from '@/components/BottomSheet';
import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';

const baseUrl = 'https://www.smartwhip.org.uk';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: '/',
  },
  title: 'SmartWhip UK | 640g & 2kg Culinary Cream Chargers',
  description: 'Shop genuine SmartWhip 640g and 2kg culinary cream chargers in the UK. View current prices, wholesale options, delivery coverage and product information.',
  keywords: [
    'SmartWhip UK',
    'SmartWhip',
    'smart whip',
    'Buy SmartWhip',
    'SmartWhip 640g',
    'SmartWhip 2kg',
    'FastGas cylinders',
    'Cream Deluxe chargers',
    'SmartWhip wholesale',
    'SmartWhip canister',
    'SmartWhip canisters UK',
    'culinary cream chargers UK',
  ],
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon.ico' }
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'manifest', url: '/favicon/site.webmanifest' }
    ]
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'SmartWhip UK | 640g & 2kg Culinary Cream Chargers',
    description: 'Shop genuine SmartWhip 640g and 2kg culinary cream chargers in the UK. View current prices, wholesale options, delivery coverage and product information.',
    type: 'website',
    url: baseUrl,
    images: [
      {
        url: '/og_image/og_image.jpeg',
        width: 1200,
        height: 630,
        alt: 'SmartWhip Culinary Cream Chargers UK',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SmartWhip UK | 640g & 2kg Culinary Cream Chargers',
    description: 'Shop genuine SmartWhip 640g and 2kg culinary cream chargers in the UK. View current prices, wholesale options, delivery coverage and product information.',
    images: ['/og_image/og_image.jpeg'],
  }
};

export const viewport: Viewport = {
  maximumScale: 1
};

const manrope = Manrope({ subsets: ['latin'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`bg-white text-black ${manrope.className}`}
    >
      <body className="min-h-[100dvh] bg-gray-50">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SVEFLWNMY3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-SVEFLWNMY3');
          `}
        </Script>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": `${baseUrl}/#organization`,
                  "name": "SmartWhip UK",
                  "url": baseUrl,
                  "logo": `${baseUrl}/logo/logo.jpeg`,
                  "description": "Genuine SmartWhip 640g and 2kg culinary cream chargers supplied across the UK. Part of ApexWhips.",
                  "parentOrganization": {
                    "@type": "Organization",
                    "name": "ApexWhips",
                    "url": "https://apexwhips.com"
                  },
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "email": "apexsmartwhips@gmail.com",
                    "contactType": "customer service",
                    "availableLanguage": "English",
                    "hoursAvailable": "Mo-Su 00:00-24:00"
                  },
                  "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "GB"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": `${baseUrl}/#website`,
                  "url": baseUrl,
                  "name": "SmartWhip UK",
                  "publisher": {
                    "@id": `${baseUrl}/#organization`
                  }
                }
              ]
            })
          }}
        />
        <FloatingActionButtons />
        <BottomSheet />
        <Analytics />
      </body>
    </html>
  );
}
