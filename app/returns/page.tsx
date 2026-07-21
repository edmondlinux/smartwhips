import { Metadata } from 'next';
import Link from 'next/link';
import { Zap, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Returns & Refunds Policy | SmartWhip UK',
  description: 'SmartWhip UK returns and refunds policy. Valid returns accepted within 48 hours of receipt.',
  alternates: {
    canonical: 'https://www.smartwhip.org.uk/returns',
  },
};

export default function ReturnsPage() {
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
          <span className="text-gray-700">Returns & Refunds</span>
        </nav>

        <h1 className="text-4xl font-black text-gray-900 tracking-tighter leading-tight mb-4">Returns and Refunds Policy</h1>
        <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-10">Last updated: July 2026</p>

        <div className="space-y-8 text-gray-600 font-medium leading-relaxed">
          <section>
            <h2 className="text-xl font-black text-gray-900 uppercase tracking-tighter italic mb-3">Returns Window</h2>
            <p>Valid returns are accepted within <strong className="text-gray-900">48 hours</strong> of receipt of your order. To initiate a return, contact us within this period via WhatsApp, Telegram or email at <a href="mailto:apexsmartwhips@gmail.com" className="text-orange-500 underline underline-offset-2">apexsmartwhips@gmail.com</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 uppercase tracking-tighter italic mb-3">Eligible Returns</h2>
            <p className="mb-3">You may be eligible for a return or refund if:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>The goods arrived damaged or defective</li>
              <li>The wrong product was delivered</li>
              <li>The goods were not as described at the time of order</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 uppercase tracking-tighter italic mb-3">Non-Returnable Items</h2>
            <p className="mb-3">The following are not eligible for return:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Cylinders that have been opened, partially used or tampered with</li>
              <li>Items reported outside the 48-hour returns window without prior agreement</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 uppercase tracking-tighter italic mb-3">Damaged Goods</h2>
            <p>If goods arrive damaged, contact us immediately with photographic evidence of the damage and packaging. We will review your case and arrange a replacement or refund promptly.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 uppercase tracking-tighter italic mb-3">Refund Process</h2>
            <p>Refunds are processed via the same payment method used for the original purchase (PayPal, Revolut or Crypto). Refund timing depends on the payment method used. PayPal refunds typically appear within 3–5 business days.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 uppercase tracking-tighter italic mb-3">How to Initiate a Return</h2>
            <p className="mb-3">Contact us within 48 hours of receiving your order:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Email: <a href="mailto:apexsmartwhips@gmail.com" className="text-orange-500 underline underline-offset-2">apexsmartwhips@gmail.com</a></li>
              <li>WhatsApp or Telegram (see <Link href="/contact" className="text-orange-500 underline underline-offset-2">Contact page</Link>)</li>
            </ul>
            <p className="mt-3">Include your order details, the reason for the return, and any supporting photographs.</p>
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
