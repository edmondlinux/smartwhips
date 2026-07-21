import { Metadata } from 'next';
import Link from 'next/link';
import { Zap, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About SmartWhip UK | Genuine N2O Culinary Supplier',
  description: 'Learn about SmartWhip UK — a genuine supplier of SmartWhip, FastGas and Cream Deluxe culinary N2O cylinders. Part of ApexWhips.',
  alternates: {
    canonical: 'https://www.smartwhip.org.uk/about',
  },
};

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.smartwhip.org.uk' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://www.smartwhip.org.uk/about' },
  ],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          <Link href="/" className="flex items-center group">
            <div className="bg-gray-100 p-2 rounded-xl group-hover:bg-orange-500 transition-colors duration-300">
              <ArrowLeft className="h-5 w-5 text-gray-500 group-hover:text-white" />
            </div>
            <div className="flex items-center ml-4">
              <Zap className="h-6 w-6 text-orange-500" />
              <span className="ml-2 text-xl font-black text-gray-900 uppercase tracking-tighter italic">SmartWhip</span>
            </div>
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <nav className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-8">
          <Link href="/" className="hover:text-orange-500">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">About</span>
        </nav>

        <h1 className="text-4xl font-black text-gray-900 tracking-tighter leading-tight mb-8">About SmartWhip UK</h1>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-600 font-medium leading-relaxed">
          <p>
            SmartWhip UK (smartwhip.org.uk) is a UK-based supplier of genuine SmartWhip, FastGas and Cream Deluxe culinary nitrous oxide cylinders. We operate as part of <a href="https://apexwhips.com" className="text-orange-500 underline underline-offset-2">ApexWhips</a>, supplying professional kitchens, caterers and appropriate buyers across the United Kingdom.
          </p>

          <h2 className="text-xl font-black text-gray-900 uppercase tracking-tighter italic">What We Supply</h2>
          <p>
            We supply large-capacity culinary N2O cylinders for legitimate food-preparation use. Our product range includes:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><Link href="/smartwhip-canisters" className="text-orange-500 underline underline-offset-2">SmartWhip 640g and 2kg cylinders</Link> — our primary product</li>
            <li><Link href="/brands/fastgas" className="text-orange-500 underline underline-offset-2">FastGas cylinders</Link></li>
            <li><Link href="/brands/cream-deluxe" className="text-orange-500 underline underline-offset-2">Cream Deluxe cylinders</Link></li>
          </ul>
          <p>
            All products are sold for legitimate culinary and catering use only. We do not supply for recreational inhalation purposes.
          </p>

          <h2 className="text-xl font-black text-gray-900 uppercase tracking-tighter italic">How We Operate</h2>
          <p>
            Orders are placed directly via WhatsApp, email or Telegram. We do not operate a traditional online checkout. This allows us to confirm orders, verify buyers where appropriate, and dispatch quickly. Most UK deliveries arrive within 25 minutes of order confirmation.
          </p>

          <h2 className="text-xl font-black text-gray-900 uppercase tracking-tighter italic">Business Identity</h2>
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 not-prose">
            <dl className="space-y-3 text-sm">
              <div className="grid grid-cols-[140px_1fr] gap-2">
                <dt className="font-black text-gray-900 uppercase tracking-widest text-xs">Trading as</dt>
                <dd className="text-gray-600 font-medium">SmartWhip UK</dd>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-2">
                <dt className="font-black text-gray-900 uppercase tracking-widest text-xs">Parent company</dt>
                <dd className="text-gray-600 font-medium"><a href="https://apexwhips.com" className="text-orange-500 hover:underline">ApexWhips</a></dd>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-2">
                <dt className="font-black text-gray-900 uppercase tracking-widest text-xs">Email</dt>
                <dd className="text-gray-600 font-medium"><a href="mailto:apexsmartwhips@gmail.com" className="text-orange-500 hover:underline">apexsmartwhips@gmail.com</a></dd>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-2">
                <dt className="font-black text-gray-900 uppercase tracking-widest text-xs">Operating hours</dt>
                <dd className="text-gray-600 font-medium">24 hours a day, 7 days a week</dd>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-2">
                <dt className="font-black text-gray-900 uppercase tracking-widest text-xs">Country</dt>
                <dd className="text-gray-600 font-medium">United Kingdom</dd>
              </div>
            </dl>
          </div>

          <h2 className="text-xl font-black text-gray-900 uppercase tracking-tighter italic">Responsible Supply</h2>
          <p>
            We take responsible supply seriously. We do not create fictional staff profiles, certifications or testimonials. We supply to adults only and reserve the right to decline orders where we have reason to believe products will not be used for their intended culinary purpose.
          </p>
          <p>
            For more information, see our <Link href="/responsible-use" className="text-orange-500 underline underline-offset-2">responsible use policy</Link>.
          </p>
        </div>
      </main>

      <footer className="bg-gray-900 py-12 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-orange-500" />
            <span className="text-sm font-black uppercase tracking-tighter italic">SmartWhip UK</span>
          </Link>
          <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.3em]">© 2026 SmartWhip UK — Part of ApexWhips</p>
        </div>
      </footer>
    </div>
  );
}
