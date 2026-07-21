import { Metadata } from 'next';
import Link from 'next/link';
import { Zap, ChevronRight, ArrowLeft } from 'lucide-react';
import { getSiteLinks } from '@/lib/links';

export const metadata: Metadata = {
  title: 'SmartWhip Canisters UK | 640g & 2kg Culinary N2O',
  description: 'Compare genuine SmartWhip 640g and 2kg culinary N2O canisters. Check current UK prices, stock, equipment compatibility, delivery and wholesale options.',
  alternates: {
    canonical: 'https://www.smartwhip.org.uk/smartwhip-canisters',
  },
  openGraph: {
    title: 'SmartWhip Canisters UK | 640g & 2kg Culinary N2O',
    description: 'Compare genuine SmartWhip 640g and 2kg culinary N2O canisters. Check current UK prices, stock, equipment compatibility, delivery and wholesale options.',
    url: 'https://www.smartwhip.org.uk/smartwhip-canisters',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'SmartWhip Canisters UK',
  url: 'https://www.smartwhip.org.uk/smartwhip-canisters',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Product',
        name: 'SmartWhip 640g Culinary Cream Charger',
        description: 'SmartWhip 640g nitrous oxide cylinder for culinary use. Includes nozzle.',
        brand: { '@type': 'Brand', name: 'SmartWhip' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'GBP',
          price: '30.00',
          availability: 'https://schema.org/InStock',
          itemCondition: 'https://schema.org/NewCondition',
          url: 'https://www.smartwhip.org.uk/smartwhip-canisters',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Product',
        name: 'SmartWhip 2kg Culinary Cream Charger',
        description: 'SmartWhip 2kg nitrous oxide cylinder for high-volume culinary use.',
        brand: { '@type': 'Brand', name: 'SmartWhip' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'GBP',
          availability: 'https://schema.org/InStock',
          itemCondition: 'https://schema.org/NewCondition',
          url: 'https://www.smartwhip.org.uk/smartwhip-2kg',
        },
      },
    },
  ],
};

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.smartwhip.org.uk' },
    { '@type': 'ListItem', position: 2, name: 'SmartWhip Canisters', item: 'https://www.smartwhip.org.uk/smartwhip-canisters' },
  ],
};

export default async function CanistersPage() {
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
            <Link href="/smartwhip-2kg" className="hover:text-orange-500 transition-colors">2kg</Link>
            <Link href="/smartwhip-wholesale" className="hover:text-orange-500 transition-colors">Wholesale</Link>
            <Link href="/delivery" className="hover:text-orange-500 transition-colors">Delivery</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <nav className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-8">
          <Link href="/" className="hover:text-orange-500">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">SmartWhip Canisters</span>
        </nav>

        <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter leading-tight mb-4">
          SmartWhip Canisters: 640g and 2kg Options
        </h1>
        <p className="text-lg text-gray-500 font-medium mb-12 max-w-2xl">
          Buy SmartWhip Smart Whip canisters in two sizes for culinary and catering use. Both options are in stock and available for UK-wide delivery.
        </p>

        {/* Available sizes */}
        <section className="mb-16">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic mb-6">Available SmartWhip Canister Sizes</h2>
          <p className="text-gray-600 font-medium mb-6">
            SmartWhip cylinders are available in two capacities. The 640g option is the most widely used, suited to both professional kitchens and appropriate domestic culinary use. The 2kg cylinder offers a larger capacity for higher-volume commercial operations. Both include a compatible nozzle — no separate equipment purchase is needed for standard use.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 border border-gray-100 rounded-[2rem] p-8">
              <div className="text-4xl font-black text-orange-500 mb-1">640g</div>
              <div className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">SmartWhip Cylinder</div>
              <div className="text-3xl font-black text-gray-900 mb-1">£30</div>
              <div className="text-xs text-green-600 font-bold uppercase tracking-widest mb-4">In Stock</div>
              <p className="text-sm text-gray-500 font-medium mb-6">Standard canister for professional kitchens and catering. Nozzle included. Compatible with most standard pressure regulators.</p>
              <Link href="/smartwhip-canisters#order" className="inline-flex items-center gap-2 text-orange-500 font-black text-sm uppercase tracking-widest hover:gap-3 transition-all">
                Order 640g <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="bg-gray-900 rounded-[2rem] p-8 text-white">
              <div className="text-4xl font-black text-orange-500 mb-1">2kg</div>
              <div className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">SmartWhip Cylinder</div>
              <div className="text-3xl font-black text-white mb-1">POA</div>
              <div className="text-xs text-green-400 font-bold uppercase tracking-widest mb-4">In Stock</div>
              <p className="text-sm text-gray-400 font-medium mb-6">High-capacity option for commercial catering operations. Larger volume per cylinder reduces changeover frequency in busy kitchens.</p>
              <Link href="/smartwhip-2kg" className="inline-flex items-center gap-2 text-orange-400 font-black text-sm uppercase tracking-widest hover:gap-3 transition-all">
                View 2kg SmartWhip <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Compare */}
        <section className="mb-16">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic mb-6">Compare 640g and 2kg Cylinders</h2>
          <div className="overflow-x-auto rounded-[2rem] border border-gray-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-4 text-left font-black text-gray-900 uppercase tracking-widest text-xs">Feature</th>
                  <th className="p-4 text-left font-black text-orange-500 uppercase tracking-widest text-xs">640g</th>
                  <th className="p-4 text-left font-black text-gray-400 uppercase tracking-widest text-xs">2kg</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                <tr className="bg-white">
                  <td className="p-4 font-bold text-gray-700">Net weight</td>
                  <td className="p-4 font-medium text-gray-600">640g N2O</td>
                  <td className="p-4 font-medium text-gray-600">2000g N2O</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="p-4 font-bold text-gray-700">Price</td>
                  <td className="p-4 font-black text-gray-900">£30 per unit</td>
                  <td className="p-4 font-black text-gray-900">POA</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-4 font-bold text-gray-700">Nozzle included</td>
                  <td className="p-4 text-green-600 font-bold">Yes</td>
                  <td className="p-4 text-green-600 font-bold">Yes</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="p-4 font-bold text-gray-700">Typical use</td>
                  <td className="p-4 font-medium text-gray-600">Professional kitchens, caterers, culinary use</td>
                  <td className="p-4 font-medium text-gray-600">High-volume commercial catering</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-4 font-bold text-gray-700">Recreational balloons (approx.)</td>
                  <td className="p-4 font-medium text-gray-600">Approx. 50–60 standard balloons</td>
                  <td className="p-4 font-medium text-gray-600">Approx. 160–200 standard balloons</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="p-4 font-bold text-gray-700">Availability</td>
                  <td className="p-4 text-green-600 font-bold">In Stock</td>
                  <td className="p-4 text-green-600 font-bold">In Stock</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-4 font-bold text-gray-700">Wholesale available</td>
                  <td className="p-4 text-green-600 font-bold">Yes (cases of 6)</td>
                  <td className="p-4 text-green-600 font-bold">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* What's included */}
        <section className="mb-16">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic mb-4">What is Included with Your Order?</h2>
          <p className="text-gray-600 font-medium mb-4">Every SmartWhip order includes the cylinder and a compatible nozzle. No additional equipment is required for standard culinary use. If you are using SmartWhip with specialised dispensing equipment, check the regulator compatibility with your specific model before ordering.</p>
          <ul className="space-y-2 text-sm text-gray-600 font-medium list-disc pl-5">
            <li>SmartWhip cylinder (640g or 2kg)</li>
            <li>Compatible nozzle</li>
            <li>Delivery to your UK address</li>
          </ul>
        </section>

        {/* Equipment compatibility */}
        <section className="mb-16">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic mb-4">Equipment and Regulator Compatibility</h2>
          <p className="text-gray-600 font-medium mb-4">SmartWhip cylinders are compatible with most standard N2O pressure regulators used in the UK. The included nozzle suits the majority of cream whippers and dispensing equipment. For commercial or industrial applications, verify the maximum working pressure of your regulator against the SmartWhip product specification.</p>
          <p className="text-gray-600 font-medium">If you are unsure whether your existing equipment is compatible, contact us before ordering and we will advise.</p>
        </section>

        {/* Specifications */}
        <section className="mb-16">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic mb-4">Product Specifications and Certification</h2>
          <p className="text-gray-600 font-medium mb-4">SmartWhip cylinders contain food-grade nitrous oxide (N2O). The cylinders are manufactured to international food-industry standards for safety and purity. Cylinders are steel, valve-sealed, and shipped in their original manufacturer packaging.</p>
          <div className="bg-gray-50 rounded-[2rem] p-6 border border-gray-100">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="font-black text-gray-900 uppercase tracking-widest text-xs mb-1">Gas</div>
                <div className="text-gray-600 font-medium">Nitrous Oxide (N2O)</div>
              </div>
              <div>
                <div className="font-black text-gray-900 uppercase tracking-widest text-xs mb-1">Grade</div>
                <div className="text-gray-600 font-medium">Food-grade</div>
              </div>
              <div>
                <div className="font-black text-gray-900 uppercase tracking-widest text-xs mb-1">Brand</div>
                <div className="text-gray-600 font-medium">SmartWhip</div>
              </div>
              <div>
                <div className="font-black text-gray-900 uppercase tracking-widest text-xs mb-1">Condition</div>
                <div className="text-gray-600 font-medium">New</div>
              </div>
            </div>
          </div>
        </section>

        {/* Prices */}
        <section className="mb-16">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic mb-4">Current Prices and Availability</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm text-center">
              <div className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Single 640g</div>
              <div className="text-3xl font-black text-gray-900">£30</div>
              <div className="text-xs text-green-600 font-bold mt-1">In Stock</div>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm text-center">
              <div className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Case (6x 640g)</div>
              <div className="text-3xl font-black text-orange-500">£130</div>
              <div className="text-xs text-green-600 font-bold mt-1">In Stock</div>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm text-center">
              <div className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">2kg Cylinder</div>
              <div className="text-3xl font-black text-gray-900">POA</div>
              <div className="text-xs text-green-600 font-bold mt-1">In Stock</div>
            </div>
          </div>
          <p className="text-sm text-gray-500 font-medium">Prices shown are per unit. Wholesale pricing is available for bulk orders. <Link href="/smartwhip-wholesale" className="text-orange-500 underline underline-offset-2">Request wholesale SmartWhip pricing here</Link>.</p>
        </section>

        {/* Delivery */}
        <section className="mb-16">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic mb-4">Delivery and Collection</h2>
          <p className="text-gray-600 font-medium mb-4">Orders are placed via WhatsApp, email or Telegram. After your order is confirmed, it is dispatched immediately. Most deliveries across the UK arrive within 25 minutes. Delivery is free for most UK locations.</p>
          <Link href="/delivery" className="text-orange-500 font-black text-sm uppercase tracking-widest underline underline-offset-4">
            Check UK delivery coverage →
          </Link>
        </section>

        {/* Wholesale */}
        <section className="mb-16">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic mb-4">Wholesale Cases and Pallets</h2>
          <p className="text-gray-600 font-medium mb-4">SmartWhip canisters are available in cases of 6. Full pallet orders (84 cases) are available for high-volume buyers. Minimum order quantity is 2 units.</p>
          <Link href="/smartwhip-wholesale" className="inline-flex items-center gap-2 bg-gray-900 text-white rounded-2xl px-6 py-3 text-sm font-black uppercase tracking-widest hover:bg-orange-600 transition-colors">
            View Wholesale Options <ChevronRight className="h-4 w-4" />
          </Link>
        </section>

        {/* Storage */}
        <section className="mb-16">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic mb-4">Storage and Safety Information</h2>
          <p className="text-gray-600 font-medium mb-4">Store SmartWhip cylinders upright in a cool, dry location away from direct sunlight and heat sources. Do not store near open flames or in areas exceeding 50°C. Keep out of reach of children. Cylinders are under pressure — do not puncture, crush or expose to extreme heat.</p>
          <p className="text-gray-600 font-medium mb-4">Dispose of empty cylinders responsibly via your local metal recycling facility. Do not attempt to refill cylinders.</p>
          <p className="text-gray-600 font-medium">For full safety guidance, refer to the manufacturer's product documentation.</p>
        </section>

        {/* Order CTA */}
        <section id="order" className="mb-16 bg-gray-900 rounded-[2.5rem] p-10 text-center text-white">
          <h2 className="text-2xl font-black uppercase tracking-tighter italic mb-4">Place Your Order</h2>
          <p className="text-gray-400 font-medium mb-6 max-w-md mx-auto">Contact us via WhatsApp, email or Telegram to order. Include your location, the size you need, and the quantity. We will confirm and dispatch promptly.</p>
          <div className="flex flex-wrap justify-center gap-4">
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
              Email Us
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: 'What is the difference between the 640g and 2kg SmartWhip?', a: 'The 640g cylinder contains 640g of N2O and suits most professional kitchen and catering applications. The 2kg option holds significantly more gas and is better suited to high-volume commercial operations where frequent cylinder changes would be inconvenient.' },
              { q: 'Is the nozzle included?', a: 'Yes. A compatible nozzle is included with every order, for both the 640g and 2kg cylinders.' },
              { q: 'How many balloons does a 640g SmartWhip fill?', a: 'A single 640g cylinder fills approximately 50–60 standard balloons. This is an approximate figure and depends on fill level and balloon size.' },
              { q: 'Are SmartWhip canisters legal in the UK?', a: 'SmartWhip cylinders contain food-grade nitrous oxide and are sold for legitimate culinary use. UK law prohibits the supply of nitrous oxide for recreational inhalation purposes. We supply these products for culinary and catering use only.' },
              { q: 'Can I collect in person?', a: 'Please contact us to discuss collection arrangements.' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h3 className="font-black text-gray-900 mb-2 text-sm uppercase tracking-tight">{item.q}</h3>
                <p className="text-gray-500 font-medium text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-gray-100 pt-8 text-sm text-gray-400 font-medium">
          Related pages: <Link href="/smartwhip-2kg" className="text-orange-500 hover:underline">View the 2kg SmartWhip</Link> · <Link href="/smartwhip-wholesale" className="text-orange-500 hover:underline">Request wholesale SmartWhip pricing</Link> · <Link href="/delivery" className="text-orange-500 hover:underline">Check UK delivery coverage</Link> · <Link href="/guides/what-is-smartwhip" className="text-orange-500 hover:underline">What is SmartWhip?</Link>
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
