import { Metadata } from 'next';
import Link from 'next/link';
import { Zap, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | SmartWhip UK',
  description: 'SmartWhip UK privacy policy — how we collect, use and protect your personal information.',
  alternates: {
    canonical: 'https://www.smartwhip.org.uk/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
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
          <span className="text-gray-700">Privacy Policy</span>
        </nav>

        <h1 className="text-4xl font-black text-gray-900 tracking-tighter leading-tight mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-10">Last updated: July 2026</p>

        <div className="space-y-8 text-gray-600 font-medium leading-relaxed">
          <section>
            <h2 className="text-xl font-black text-gray-900 uppercase tracking-tighter italic mb-3">Who We Are</h2>
            <p>This website is operated by SmartWhip UK, part of ApexWhips (apexwhips.com). Our contact email is <a href="mailto:apexsmartwhips@gmail.com" className="text-orange-500 underline underline-offset-2">apexsmartwhips@gmail.com</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 uppercase tracking-tighter italic mb-3">Information We Collect</h2>
            <p className="mb-3">When you contact us to place an order, we may collect:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Your name</li>
              <li>Your delivery address or postcode</li>
              <li>Your messaging contact (WhatsApp number or Telegram username)</li>
              <li>Your email address (if you contact by email)</li>
              <li>Order details and correspondence</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 uppercase tracking-tighter italic mb-3">How We Use Your Information</h2>
            <p className="mb-3">We use your information to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Process and fulfil your order</li>
              <li>Communicate with you about your delivery</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="mt-3">We do not use your information for unsolicited marketing without your consent.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 uppercase tracking-tighter italic mb-3">Analytics</h2>
            <p>This website uses Google Analytics to understand how visitors use the site. This collects anonymised data including page views, session duration and device type. You can opt out of Google Analytics using the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-orange-500 underline underline-offset-2">Google Analytics opt-out browser add-on</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 uppercase tracking-tighter italic mb-3">Data Sharing</h2>
            <p>We do not sell or share your personal data with third parties for marketing. We may share information with delivery couriers solely for the purpose of fulfilling your order.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 uppercase tracking-tighter italic mb-3">Data Retention</h2>
            <p>Order and contact information is retained for as long as necessary to fulfil our legal and business obligations. You may request deletion of your personal data by contacting us at <a href="mailto:apexsmartwhips@gmail.com" className="text-orange-500 underline underline-offset-2">apexsmartwhips@gmail.com</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 uppercase tracking-tighter italic mb-3">Your Rights</h2>
            <p className="mb-3">Under UK data protection law, you have the right to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, contact us at <a href="mailto:apexsmartwhips@gmail.com" className="text-orange-500 underline underline-offset-2">apexsmartwhips@gmail.com</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 uppercase tracking-tighter italic mb-3">Contact</h2>
            <p>For any privacy-related questions, contact us at <a href="mailto:apexsmartwhips@gmail.com" className="text-orange-500 underline underline-offset-2">apexsmartwhips@gmail.com</a>. If you are unhappy with our response, you have the right to complain to the <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-orange-500 underline underline-offset-2">Information Commissioner's Office (ICO)</a>.</p>
          </section>
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
