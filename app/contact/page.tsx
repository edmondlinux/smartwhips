import { Metadata } from 'next';
import Link from 'next/link';
import { Zap, ArrowLeft, MessageCircle, Send, Mail } from 'lucide-react';
import { getSiteLinks } from '@/lib/links';

export const metadata: Metadata = {
  title: 'Contact SmartWhip UK | WhatsApp, Telegram & Email',
  description: 'Contact SmartWhip UK to place an order, request a wholesale quote, or ask a question. Reach us via WhatsApp, Telegram or email.',
  alternates: {
    canonical: 'https://www.smartwhip.org.uk/contact',
  },
};

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.smartwhip.org.uk' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://www.smartwhip.org.uk/contact' },
  ],
};

export default async function ContactPage() {
  const { whatsapp, telegram } = await getSiteLinks();

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
          <span className="text-gray-700">Contact</span>
        </nav>

        <h1 className="text-4xl font-black text-gray-900 tracking-tighter leading-tight mb-4">Contact Us</h1>
        <p className="text-lg text-gray-500 font-medium mb-12">
          To place an order, request a wholesale quote or ask a question, reach us via any of the channels below. We respond promptly — 24 hours a day, 7 days a week.
        </p>

        <div className="space-y-4 mb-12">
          {whatsapp && (
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/20 rounded-2xl p-6 transition-colors group"
            >
              <div className="bg-[#25D366] p-3 rounded-xl">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="font-black text-gray-900 uppercase tracking-widest text-sm">WhatsApp</div>
                <div className="text-gray-500 font-medium text-sm mt-0.5">Best for quick orders and questions</div>
              </div>
            </a>
          )}
          {telegram && (
            <a
              href={telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 bg-[#0088cc]/10 hover:bg-[#0088cc]/20 border border-[#0088cc]/20 rounded-2xl p-6 transition-colors group"
            >
              <div className="bg-[#0088cc] p-3 rounded-xl">
                <Send className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="font-black text-gray-900 uppercase tracking-widest text-sm">Telegram</div>
                <div className="text-gray-500 font-medium text-sm mt-0.5">Alternative messaging channel</div>
              </div>
            </a>
          )}
          <a
            href="mailto:apexsmartwhips@gmail.com"
            className="flex items-center gap-5 bg-orange-50 hover:bg-orange-100 border border-orange-100 rounded-2xl p-6 transition-colors"
          >
            <div className="bg-orange-500 p-3 rounded-xl">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="font-black text-gray-900 uppercase tracking-widest text-sm">Email</div>
              <div className="text-gray-500 font-medium text-sm mt-0.5">apexsmartwhips@gmail.com</div>
            </div>
          </a>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-8">
          <h2 className="font-black text-gray-900 uppercase tracking-tighter italic text-lg mb-4">When Contacting Us</h2>
          <p className="text-gray-600 font-medium text-sm mb-3">To help us respond quickly, include the following in your message:</p>
          <ul className="space-y-2 text-sm text-gray-600 font-medium list-disc pl-5">
            <li>Your delivery location or postcode</li>
            <li>The product you need (640g SmartWhip, 2kg, FastGas, Cream Deluxe)</li>
            <li>The quantity you require</li>
            <li>Whether this is a retail or wholesale order</li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
          <h2 className="font-black text-gray-900 uppercase tracking-tighter italic text-lg mb-4">Business Details</h2>
          <dl className="space-y-3 text-sm">
            <div className="grid grid-cols-[130px_1fr] gap-2">
              <dt className="font-black text-gray-500 uppercase tracking-widest text-xs">Trading as</dt>
              <dd className="text-gray-700 font-medium">SmartWhip UK</dd>
            </div>
            <div className="grid grid-cols-[130px_1fr] gap-2">
              <dt className="font-black text-gray-500 uppercase tracking-widest text-xs">Parent company</dt>
              <dd className="text-gray-700 font-medium"><a href="https://apexwhips.com" className="text-orange-500 hover:underline">ApexWhips</a></dd>
            </div>
            <div className="grid grid-cols-[130px_1fr] gap-2">
              <dt className="font-black text-gray-500 uppercase tracking-widest text-xs">Email</dt>
              <dd className="text-gray-700 font-medium">apexsmartwhips@gmail.com</dd>
            </div>
            <div className="grid grid-cols-[130px_1fr] gap-2">
              <dt className="font-black text-gray-500 uppercase tracking-widest text-xs">Hours</dt>
              <dd className="text-gray-700 font-medium">24 hours a day, 7 days a week</dd>
            </div>
          </dl>
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
