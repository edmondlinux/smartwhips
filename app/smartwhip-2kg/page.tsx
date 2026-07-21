import { Metadata } from 'next';
import Link from 'next/link';
import { Zap, ArrowLeft, ChevronRight } from 'lucide-react';
import { getSiteLinks } from '@/lib/links';

export const metadata: Metadata = {
  title: '2kg SmartWhip Culinary Cream Charger | UK Delivery',
  description: 'View the 2kg SmartWhip cylinder, including current price, availability, specifications, compatible equipment, UK delivery and wholesale purchasing options.',
  alternates: {
    canonical: 'https://www.smartwhip.org.uk/smartwhip-2kg',
  },
  openGraph: {
    title: '2kg SmartWhip Culinary Cream Charger | UK Delivery',
    description: 'View the 2kg SmartWhip cylinder, including current price, availability, specifications, compatible equipment, UK delivery and wholesale purchasing options.',
    url: 'https://www.smartwhip.org.uk/smartwhip-2kg',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: '2kg SmartWhip Culinary Cream Charger',
  description: '2kg SmartWhip nitrous oxide cylinder for high-volume culinary and catering use. Includes nozzle. UK delivery available.',
  brand: { '@type': 'Brand', name: 'SmartWhip' },
  url: 'https://www.smartwhip.org.uk/smartwhip-2kg',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'GBP',
    availability: 'https://schema.org/InStock',
    itemCondition: 'https://schema.org/NewCondition',
    url: 'https://www.smartwhip.org.uk/smartwhip-2kg',
  },
};

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.smartwhip.org.uk' },
    { '@type': 'ListItem', position: 2, name: '2kg SmartWhip', item: 'https://www.smartwhip.org.uk/smartwhip-2kg' },
  ],
};

export default async function SmartWhip2kgPage() {
  const { whatsapp, telegram } = await getSiteLinks();

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
            <Link href="/smartwhip-canisters" className="hover:text-orange-500 transition-colors">All Canisters</Link>
            <Link href="/smartwhip-wholesale" className="hover:text-orange-500 transition-colors">Wholesale</Link>
            <Link href="/delivery" className="hover:text-orange-500 transition-colors">Delivery</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <nav className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-8">
          <Link href="/" className="hover:text-orange-500">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/smartwhip-canisters" className="hover:text-orange-500">Canisters</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">2kg SmartWhip</span>
        </nav>

        <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter leading-tight mb-4">
          2kg SmartWhip Culinary Cream Charger
        </h1>
        <p className="text-lg text-gray-500 font-medium mb-12 max-w-2xl">
          The 2kg Smart Whip cylinder offers a high-capacity option for professional and commercial catering operations. In stock and available for UK delivery.
        </p>

        {/* Overview */}
        <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic mb-4">2kg SmartWhip Product Overview</h2>
            <p className="text-gray-600 font-medium leading-relaxed mb-4">
              The 2kg SmartWhip cylinder contains 2,000g of food-grade nitrous oxide — more than three times the capacity of the 640g option. This makes it a practical choice for commercial kitchens, catering companies, and food-service operations where high volumes of whipped cream or culinary foams are required throughout a service.
            </p>
            <p className="text-gray-600 font-medium leading-relaxed">
              A compatible nozzle is included with every order. No additional equipment is required for standard culinary use, although a compatible pressure regulator is recommended for more controlled dispensing in commercial settings.
            </p>
          </div>
          <div className="bg-gray-900 rounded-[2rem] p-8 text-white">
            <div className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">2kg SmartWhip</div>
            <div className="text-5xl font-black text-orange-500 mb-1">2kg</div>
            <div className="text-2xl font-black text-white mb-4">Price on Application</div>
            <div className="text-xs text-green-400 font-bold uppercase tracking-widest mb-6">In Stock</div>
            <div className="space-y-3">
              {whatsapp && (
                <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-2xl px-6 py-3 text-sm font-black uppercase tracking-widest transition-colors w-full">
                  Order via WhatsApp
                </a>
              )}
              {telegram && (
                <a href={telegram} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#0088cc] hover:bg-[#0077b5] text-white rounded-2xl px-6 py-3 text-sm font-black uppercase tracking-widest transition-colors w-full">
                  Order via Telegram
                </a>
              )}
              <a href="mailto:apexsmartwhips@gmail.com" className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl px-6 py-3 text-sm font-black uppercase tracking-widest transition-colors w-full">
                Email for Price
              </a>
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="mb-16">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic mb-4">Who is the 2kg Option Suitable For?</h2>
          <p className="text-gray-600 font-medium leading-relaxed mb-4">
            The 2kg SmartWhip cylinder is best suited to operations where a standard 640g canister would need to be changed too frequently. This includes:
          </p>
          <ul className="space-y-2 text-gray-600 font-medium list-disc pl-5 mb-4">
            <li>Commercial kitchens and restaurants with high cream turnover</li>
            <li>Catering companies running large events</li>
            <li>Dessert bars, cafes and food-service businesses with continuous demand</li>
            <li>Wholesale buyers requiring a high-capacity option</li>
          </ul>
          <p className="text-gray-600 font-medium">
            For lower-volume use or portable setups, the <Link href="/smartwhip-canisters" className="text-orange-500 underline underline-offset-2">640g SmartWhip</Link> is usually more practical.
          </p>
        </section>

        {/* Specifications */}
        <section className="mb-16">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic mb-4">Product Specifications</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-100">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-gray-50">
                <tr className="bg-white"><td className="p-4 font-bold text-gray-700 w-1/2">Gas</td><td className="p-4 text-gray-600">Food-grade Nitrous Oxide (N2O)</td></tr>
                <tr className="bg-gray-50/50"><td className="p-4 font-bold text-gray-700">Net weight</td><td className="p-4 text-gray-600">2,000g N2O</td></tr>
                <tr className="bg-white"><td className="p-4 font-bold text-gray-700">Brand</td><td className="p-4 text-gray-600">SmartWhip</td></tr>
                <tr className="bg-gray-50/50"><td className="p-4 font-bold text-gray-700">Condition</td><td className="p-4 text-gray-600">New, sealed</td></tr>
                <tr className="bg-white"><td className="p-4 font-bold text-gray-700">Nozzle included</td><td className="p-4 text-green-600 font-bold">Yes</td></tr>
                <tr className="bg-gray-50/50"><td className="p-4 font-bold text-gray-700">Availability</td><td className="p-4 text-green-600 font-bold">In Stock</td></tr>
                <tr className="bg-white"><td className="p-4 font-bold text-gray-700">Wholesale available</td><td className="p-4 text-gray-600">Yes — contact us for pricing</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Equipment */}
        <section className="mb-16">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic mb-4">Required Equipment and Compatibility</h2>
          <p className="text-gray-600 font-medium leading-relaxed mb-4">
            The included nozzle is compatible with standard SmartWhip dispensing equipment and most cream whippers. For commercial dispensing systems, verify that your pressure regulator is rated for the maximum working pressure of the 2kg cylinder. If you are unsure, contact us and we will advise before you order.
          </p>
        </section>

        {/* Comparison */}
        <section className="mb-16">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic mb-4">2kg versus 640g SmartWhip</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-4 text-left font-black text-gray-900 uppercase tracking-widest text-xs">Feature</th>
                  <th className="p-4 text-left font-black text-orange-500 uppercase tracking-widest text-xs">2kg</th>
                  <th className="p-4 text-left font-black text-gray-400 uppercase tracking-widest text-xs">640g</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                <tr className="bg-white"><td className="p-4 font-bold text-gray-700">N2O content</td><td className="p-4 text-gray-600">2,000g</td><td className="p-4 text-gray-600">640g</td></tr>
                <tr className="bg-gray-50/50"><td className="p-4 font-bold text-gray-700">Best for</td><td className="p-4 text-gray-600">High-volume commercial</td><td className="p-4 text-gray-600">Professional and domestic culinary</td></tr>
                <tr className="bg-white"><td className="p-4 font-bold text-gray-700">Price</td><td className="p-4 font-black text-gray-900">POA</td><td className="p-4 font-black text-gray-900">£30</td></tr>
                <tr className="bg-gray-50/50"><td className="p-4 font-bold text-gray-700">Portability</td><td className="p-4 text-gray-600">Less portable (heavier)</td><td className="p-4 text-gray-600">More portable</td></tr>
                <tr className="bg-white"><td className="p-4 font-bold text-gray-700">Nozzle included</td><td className="p-4 text-green-600 font-bold">Yes</td><td className="p-4 text-green-600 font-bold">Yes</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 font-medium mt-3">
            <Link href="/smartwhip-canisters" className="text-orange-500 underline underline-offset-2">Compare SmartWhip canister sizes in full →</Link>
          </p>
        </section>

        {/* Purchasing */}
        <section className="mb-16">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic mb-4">Price, Stock and Purchasing Options</h2>
          <p className="text-gray-600 font-medium mb-4">The 2kg SmartWhip is in stock. Pricing is provided on application. Contact us via WhatsApp, email or Telegram with your requirements and location for a quote. Single units and wholesale quantities are both available.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <div className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Single 2kg Cylinder</div>
              <div className="text-2xl font-black text-gray-900">Price on Application</div>
              <div className="text-xs text-green-600 font-bold mt-1">In Stock</div>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <div className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Wholesale (Bulk)</div>
              <div className="text-2xl font-black text-gray-900">Price on Application</div>
              <div className="text-xs text-green-600 font-bold mt-1">Available</div>
            </div>
          </div>
        </section>

        {/* Delivery */}
        <section className="mb-16">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic mb-4">Delivery Information</h2>
          <p className="text-gray-600 font-medium mb-4">Orders are placed via WhatsApp, email or Telegram. After confirmation, orders are dispatched immediately. Most UK deliveries arrive within 25 minutes. Delivery is free for most UK locations.</p>
          <Link href="/delivery" className="text-orange-500 font-black text-sm uppercase tracking-widest underline underline-offset-4">
            Check UK delivery coverage →
          </Link>
        </section>

        {/* Storage */}
        <section className="mb-16">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic mb-4">Storage, Handling and Disposal</h2>
          <p className="text-gray-600 font-medium leading-relaxed mb-4">Store cylinders upright in a cool, dry, ventilated location. Keep away from heat sources, flames, and direct sunlight. Do not exceed 50°C. Cylinders are under pressure — do not puncture or crush. Keep out of reach of children.</p>
          <p className="text-gray-600 font-medium">Dispose of empty cylinders at your local metal recycling centre. Do not attempt to refill.</p>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: 'How do I order the 2kg SmartWhip?', a: 'Contact us via WhatsApp, email or Telegram with your location and quantity required. We will provide a price and confirm availability.' },
              { q: 'Is the 2kg SmartWhip in stock?', a: 'Yes, the 2kg SmartWhip cylinder is currently in stock.' },
              { q: 'Is the nozzle included with the 2kg cylinder?', a: 'Yes, a compatible nozzle is included with every 2kg SmartWhip order.' },
              { q: 'Is wholesale pricing available for the 2kg?', a: 'Yes. Contact us with your required quantities for a wholesale quote.' },
              { q: 'How does the 2kg compare to buying multiple 640g cylinders?', a: 'The 2kg cylinder offers a larger single-cylinder capacity, reducing how often you need to change cylinders. For most high-volume commercial operations, it is more convenient. Contact us to discuss which option suits your requirements.' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h3 className="font-black text-gray-900 mb-2 text-sm uppercase tracking-tight">{item.q}</h3>
                <p className="text-gray-500 font-medium text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-gray-100 pt-8 text-sm text-gray-400 font-medium">
          Related pages: <Link href="/smartwhip-canisters" className="text-orange-500 hover:underline">Compare SmartWhip canister sizes</Link> · <Link href="/smartwhip-wholesale" className="text-orange-500 hover:underline">Request wholesale SmartWhip pricing</Link> · <Link href="/delivery" className="text-orange-500 hover:underline">Check UK delivery coverage</Link>
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
