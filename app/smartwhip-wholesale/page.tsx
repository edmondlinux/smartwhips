import { Metadata } from 'next';
import Link from 'next/link';
import { Zap, ArrowLeft, ChevronRight } from 'lucide-react';
import { getSiteLinks } from '@/lib/links';

export const metadata: Metadata = {
  title: 'SmartWhip Wholesale UK | Cases, Crates & Pallets',
  description: 'Request UK wholesale pricing for SmartWhip cases, crates and pallets. View quantities, product sizes, delivery coverage, lead times and business ordering information.',
  alternates: {
    canonical: 'https://www.smartwhip.org.uk/smartwhip-wholesale',
  },
  openGraph: {
    title: 'SmartWhip Wholesale UK | Cases, Crates & Pallets',
    description: 'Request UK wholesale pricing for SmartWhip cases, crates and pallets. View quantities, product sizes, delivery coverage, lead times and business ordering information.',
    url: 'https://www.smartwhip.org.uk/smartwhip-wholesale',
  },
};

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.smartwhip.org.uk' },
    { '@type': 'ListItem', position: 2, name: 'SmartWhip Wholesale', item: 'https://www.smartwhip.org.uk/smartwhip-wholesale' },
  ],
};

export default async function WholesalePage() {
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
          <nav className="hidden sm:flex items-center gap-6 text-sm font-bold text-gray-500 uppercase tracking-widest">
            <Link href="/smartwhip-canisters" className="hover:text-orange-500 transition-colors">Canisters</Link>
            <Link href="/smartwhip-2kg" className="hover:text-orange-500 transition-colors">2kg</Link>
            <Link href="/delivery" className="hover:text-orange-500 transition-colors">Delivery</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <nav className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-8">
          <Link href="/" className="hover:text-orange-500">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">SmartWhip Wholesale</span>
        </nav>

        <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter leading-tight mb-4">
          SmartWhip Wholesale Cases and Pallets
        </h1>
        <p className="text-lg text-gray-500 font-medium mb-12 max-w-2xl">
          We supply SmartWhip in bulk quantities for businesses, caterers and professional buyers across the UK. Below is the information you need before placing a wholesale order.
        </p>

        {/* Products */}
        <section className="mb-16">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic mb-4">SmartWhip Wholesale Products</h2>
          <p className="text-gray-600 font-medium mb-6">We supply wholesale quantities of the SmartWhip 640g cylinder — the most widely used size for professional catering. The 2kg cylinder is also available for high-volume operations. Wholesale is available for both sizes, with pricing provided on application.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
              <div className="text-3xl font-black text-orange-500 mb-1">640g</div>
              <div className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">SmartWhip Cylinder</div>
              <p className="text-sm text-gray-600 font-medium mb-3">Standard size. Available in cases of 6 and pallets of 84 cases.</p>
              <div className="text-xs text-green-600 font-bold uppercase tracking-widest">In Stock</div>
            </div>
            <div className="bg-gray-900 rounded-2xl p-6 text-white">
              <div className="text-3xl font-black text-orange-500 mb-1">2kg</div>
              <div className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">SmartWhip Cylinder</div>
              <p className="text-sm text-gray-400 font-medium mb-3">High-capacity option. Contact us for wholesale quantities and pricing.</p>
              <div className="text-xs text-green-400 font-bold uppercase tracking-widest">In Stock</div>
            </div>
          </div>
        </section>

        {/* Quantities */}
        <section className="mb-16">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic mb-4">Case, Crate and Pallet Quantities</h2>
          <p className="text-gray-600 font-medium mb-6">SmartWhip wholesale is structured as follows:</p>
          <div className="overflow-x-auto rounded-2xl border border-gray-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-4 text-left font-black text-gray-900 uppercase tracking-widest text-xs">Unit</th>
                  <th className="p-4 text-left font-black text-gray-900 uppercase tracking-widest text-xs">Quantity</th>
                  <th className="p-4 text-left font-black text-gray-900 uppercase tracking-widest text-xs">Availability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                <tr className="bg-white"><td className="p-4 font-bold text-gray-700">Minimum order</td><td className="p-4 text-gray-600">2 units</td><td className="p-4 text-green-600 font-bold">Available</td></tr>
                <tr className="bg-gray-50/50"><td className="p-4 font-bold text-gray-700">Case</td><td className="p-4 text-gray-600">6 cylinders</td><td className="p-4 text-green-600 font-bold">Available</td></tr>
                <tr className="bg-white"><td className="p-4 font-bold text-gray-700">Pallet</td><td className="p-4 text-gray-600">84 cases (504 cylinders)</td><td className="p-4 text-green-600 font-bold">Available</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 font-medium mt-3">Custom quantities between minimum order and full pallet are available. Contact us to discuss your requirements.</p>
        </section>

        {/* Pricing */}
        <section className="mb-16">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic mb-4">Wholesale Price Tiers</h2>
          <p className="text-gray-600 font-medium mb-4">Wholesale prices are tiered based on order quantity. Prices are provided on application as they vary by quantity, product size and delivery location. We do not publish a fixed price list publicly, as orders are discussed and confirmed directly.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm text-center">
              <div className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Single (640g)</div>
              <div className="text-2xl font-black text-gray-900">£30</div>
              <div className="text-xs text-gray-400 font-medium mt-1">Per unit</div>
            </div>
            <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 shadow-sm text-center">
              <div className="text-xs font-black text-orange-500 uppercase tracking-widest mb-2">Case (6x)</div>
              <div className="text-2xl font-black text-orange-500">£130</div>
              <div className="text-xs text-gray-400 font-medium mt-1">~£21.67/unit</div>
            </div>
            <div className="bg-gray-900 rounded-2xl p-6 shadow-sm text-center">
              <div className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Pallet / Bulk</div>
              <div className="text-2xl font-black text-white">POA</div>
              <div className="text-xs text-gray-400 font-medium mt-1">Contact us</div>
            </div>
          </div>
          <p className="text-sm text-gray-500 font-medium">Prices are in GBP. VAT status will be confirmed with your quote.</p>
        </section>

        {/* MOQ */}
        <section className="mb-16">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic mb-4">Minimum Order Quantities</h2>
          <p className="text-gray-600 font-medium">The minimum order quantity is 2 units. There is no upper order limit — full pallet and multi-pallet orders are accommodated. Contact us to discuss very large orders and lead times.</p>
        </section>

        {/* Delivery */}
        <section className="mb-16">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic mb-4">UK Delivery and Lead Times</h2>
          <p className="text-gray-600 font-medium mb-4">Wholesale orders are delivered across the UK. For standard quantities (single units to several cases), delivery typically follows the same fast dispatch as retail orders — most arrive within 25 minutes of order confirmation. For large pallet orders, lead times are discussed at the time of ordering.</p>
          <p className="text-gray-600 font-medium mb-4">Delivery charges for wholesale orders are provided with your quote. Most standard wholesale deliveries qualify for free delivery.</p>
          <Link href="/delivery" className="text-orange-500 font-black text-sm uppercase tracking-widest underline underline-offset-4">
            Check UK delivery coverage →
          </Link>
        </section>

        {/* Business verification */}
        <section className="mb-16">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic mb-4">Business Verification and Responsible Supply</h2>
          <p className="text-gray-600 font-medium mb-4">We supply wholesale quantities to verified business buyers. As part of responsible supply, we may ask for basic business verification before fulfilling large orders. This is in line with our commitment to ensuring our products reach legitimate culinary and catering buyers.</p>
          <p className="text-gray-600 font-medium">We do not supply to buyers we suspect intend to use or supply nitrous oxide for recreational inhalation. See our <Link href="/responsible-use" className="text-orange-500 underline underline-offset-2">responsible use policy</Link> for more information.</p>
        </section>

        {/* VAT */}
        <section className="mb-16">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic mb-4">Invoices, VAT and Payment</h2>
          <p className="text-gray-600 font-medium mb-4">Invoices are provided on request for business orders. VAT status will be confirmed at the time of quoting. Accepted payment methods include:</p>
          <ul className="space-y-2 text-gray-600 font-medium list-disc pl-5 mb-4">
            <li>PayPal (with buyer protection)</li>
            <li>Revolut</li>
            <li>Cryptocurrency</li>
          </ul>
          <p className="text-gray-600 font-medium">Payment is confirmed before dispatch. For regular wholesale customers, payment terms may be discussed separately.</p>
        </section>

        {/* Returns */}
        <section className="mb-16">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic mb-4">Returns and Damaged Goods</h2>
          <p className="text-gray-600 font-medium">Valid returns and refunds are accepted within 48 hours of receipt. If goods arrive damaged, contact us immediately with photographic evidence and we will resolve the issue promptly. See our <Link href="/returns" className="text-orange-500 underline underline-offset-2">returns and refunds policy</Link> for full details.</p>
        </section>

        {/* CTA */}
        <section id="quote" className="mb-16 bg-gray-900 rounded-[2.5rem] p-10 text-white">
          <h2 className="text-2xl font-black uppercase tracking-tighter italic mb-4">How to Request a Wholesale Quote</h2>
          <p className="text-gray-400 font-medium mb-6 max-w-lg">Contact us directly via WhatsApp, Telegram or email. Include the product size (640g or 2kg), your required quantity, and your delivery location. We will respond with a price and confirm availability.</p>
          <div className="flex flex-wrap gap-4">
            {whatsapp && (
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-2xl px-8 py-4 text-sm font-black uppercase tracking-widest transition-colors">
                WhatsApp
              </a>
            )}
            {telegram && (
              <a href={telegram} target="_blank" rel="noopener noreferrer" className="bg-[#0088cc] hover:bg-[#0077b5] text-white rounded-2xl px-8 py-4 text-sm font-black uppercase tracking-widest transition-colors">
                Telegram
              </a>
            )}
            <a href="mailto:apexsmartwhips@gmail.com" className="bg-orange-500 hover:bg-orange-600 text-white rounded-2xl px-8 py-4 text-sm font-black uppercase tracking-widest transition-colors">
              Email
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: 'What is the minimum wholesale order?', a: 'The minimum order is 2 units. There is no requirement to buy a full case.' },
              { q: 'How many units are in a SmartWhip case?', a: 'A standard case contains 6 cylinders.' },
              { q: 'How many cases are on a pallet?', a: 'A full pallet contains 84 cases (504 individual cylinders).' },
              { q: 'Do you provide invoices?', a: 'Yes, invoices are available on request for business orders.' },
              { q: 'Is delivery included in the wholesale price?', a: 'Delivery is free for most UK locations. Specific charges are confirmed at the time of quoting for large or unusual orders.' },
              { q: 'Can I order regularly as a repeat wholesale customer?', a: 'Yes. Contact us to discuss ongoing supply arrangements.' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h3 className="font-black text-gray-900 mb-2 text-sm uppercase tracking-tight">{item.q}</h3>
                <p className="text-gray-500 font-medium text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-gray-100 pt-8 text-sm text-gray-400 font-medium">
          Related pages: <Link href="/smartwhip-canisters" className="text-orange-500 hover:underline">Compare SmartWhip canister sizes</Link> · <Link href="/delivery" className="text-orange-500 hover:underline">Check UK delivery coverage</Link> · <Link href="/contact" className="text-orange-500 hover:underline">Contact us</Link>
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
