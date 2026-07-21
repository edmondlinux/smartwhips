import { Metadata } from 'next';
import Link from 'next/link';
import { Zap, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms and Conditions | SmartWhip UK',
  description: 'SmartWhip UK terms and conditions of sale.',
  alternates: {
    canonical: 'https://www.smartwhip.org.uk/terms',
  },
};

export default function TermsPage() {
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
          <span className="text-gray-700">Terms & Conditions</span>
        </nav>

        <h1 className="text-4xl font-black text-gray-900 tracking-tighter leading-tight mb-4">Terms and Conditions</h1>
        <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-10">Last updated: July 2026</p>

        <div className="space-y-8 text-gray-600 font-medium leading-relaxed">
          <section>
            <h2 className="text-xl font-black text-gray-900 uppercase tracking-tighter italic mb-3">1. About Us</h2>
            <p>SmartWhip UK (smartwhip.org.uk) is operated by ApexWhips. Contact: <a href="mailto:apexsmartwhips@gmail.com" className="text-orange-500 underline underline-offset-2">apexsmartwhips@gmail.com</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 uppercase tracking-tighter italic mb-3">2. Products and Intended Use</h2>
            <p>All products sold by SmartWhip UK are intended for legitimate culinary and catering use only. By placing an order, you confirm that you are purchasing for culinary use and are 18 years of age or over. We reserve the right to cancel any order where we have reason to believe otherwise.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 uppercase tracking-tighter italic mb-3">3. Ordering</h2>
            <p>Orders are placed directly via WhatsApp, Telegram or email. An order is confirmed when we have acknowledged it and agreed on a price, quantity and delivery details. We reserve the right to decline any order.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 uppercase tracking-tighter italic mb-3">4. Pricing</h2>
            <p>Prices displayed on this website are in GBP. Pricing is subject to change. The price applicable to your order is the price confirmed at the time of your order. We are not obliged to honour prices that are published in error.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 uppercase tracking-tighter italic mb-3">5. Payment</h2>
            <p>Accepted payment methods are PayPal, Revolut and Cryptocurrency. Payment is required before dispatch. All payments are in GBP.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 uppercase tracking-tighter italic mb-3">6. Delivery</h2>
            <p>We aim to deliver within the timeframes stated on our <Link href="/delivery" className="text-orange-500 underline underline-offset-2">delivery page</Link>. Delivery timeframes are estimates and cannot be guaranteed. We are not liable for delays caused by circumstances outside our control.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 uppercase tracking-tighter italic mb-3">7. Returns and Refunds</h2>
            <p>See our <Link href="/returns" className="text-orange-500 underline underline-offset-2">returns and refunds policy</Link> for full details. Valid returns are accepted within 48 hours of receipt.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 uppercase tracking-tighter italic mb-3">8. Limitation of Liability</h2>
            <p>Our liability is limited to the value of the goods supplied. We are not liable for indirect, consequential or special losses. Nothing in these terms limits liability for death or personal injury caused by our negligence or for fraudulent misrepresentation.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 uppercase tracking-tighter italic mb-3">9. Governing Law</h2>
            <p>These terms are governed by English law. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 uppercase tracking-tighter italic mb-3">10. Contact</h2>
            <p>For any queries relating to these terms, contact us at <a href="mailto:apexsmartwhips@gmail.com" className="text-orange-500 underline underline-offset-2">apexsmartwhips@gmail.com</a>.</p>
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
