import { Metadata } from 'next';
import HomePageClient from './_components/HomePageClient';

export const metadata: Metadata = {
  title: 'SmartWhip UK | 640g & 2kg Culinary Cream Chargers',
  description: 'Shop genuine SmartWhip 640g and 2kg culinary cream chargers in the UK. View current prices, wholesale options, delivery coverage and product information.',
  alternates: {
    canonical: 'https://www.smartwhip.org.uk/',
  },
  openGraph: {
    title: 'SmartWhip UK | 640g & 2kg Culinary Cream Chargers',
    description: 'Shop genuine SmartWhip 640g and 2kg culinary cream chargers in the UK. View current prices, wholesale options, delivery coverage and product information.',
    url: 'https://www.smartwhip.org.uk/',
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
