import { Metadata } from 'next';
import Link from 'next/link';
import { Zap, ArrowLeft, ChevronRight } from 'lucide-react';
import { getSiteLinks } from '@/lib/links';

export const metadata: Metadata = {
  title: 'FastGas Cylinders UK | Culinary N2O | Prices & Delivery',
  description: 'View FastGas culinary N2O cylinders available in the UK. Check current prices, stock, compatible equipment, delivery options and comparison with SmartWhip.',
  alternates: {
    canonical: 'https://www.smartwhip.org.uk/brands/fastgas',
  },
  openGraph: {
    title: 'FastGas Cylinders UK | Culinary N2O | Prices & Delivery',
    description: 'View FastGas culinary N2O cylinders available in the UK. Check current prices, stock, compatible equipment, delivery options and comparison with SmartWhip.',
    url: 'https://www.smartwhip.org.uk/brands/fastgas',
  },
};

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.smartwhip.org.uk' },
    { '@type': 'ListItem', position: 2, name: 'Brands', item: 'https://www.smartwhip.org.uk/brands' },
    { '@type': 'ListItem', position: 3, name: 'FastGas', item: 'https://www.smartwhip.org.uk/brands/fastgas' },
  ],
};

export default async function FastGasPage() {
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
            <Link href="/smartwhip-canisters" className="hover:text-orange-500 transition-colors">SmartWhip</Link>
            <Link href="/brands/cream-deluxe" className="hover:text-orange-500 transition-colors">Cream Deluxe</Link>
            <Link href="/delivery" className="hover:text-orange-500 transition-colors">Delivery</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <nav className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-8">
          <Link href="/" className="hover:text-orange-500">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-500">Brands</span>
          <span className="mx-2">/</span>
          <span className="text-gray-700">FastGas</span>
        </nav>

        <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter leading-tight mb-4">
          FastGas Culinary N2O Cylinders
        </h1>
        <p className="text-lg text-gray-500 font-medium mb-12 max-w-2xl">
          FastGas cylinders are available from SmartWhip UK alongside our SmartWhip and Cream Deluxe range. Below is the product and ordering information.
        </p>

        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic mb-4">FastGas Product Overview</h2>
          <p className="text-gray-600 font-medium leading-relaxed mb-4">
            FastGas is a brand of culinary-grade nitrous oxide cylinders used in professional kitchens and catering for cream whipping and culinary foam applications. Like SmartWhip, FastGas cylinders are large-capacity N2O cylinders designed for use with compatible dispensing equipment.
          </p>
          <p className="text-gray-600 font-medium leading-relaxed">
            We stock FastGas alongside SmartWhip and Cream Deluxe. Contact us for current availability and pricing.
          </p>
        </section>

        {/* Sizes & availability */}
        <section className="mb-16">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic mb-4">Models and Sizes Available</h2>
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mb-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="font-black text-gray-900 uppercase tracking-widest text-xs mb-1">Brand</div>
                <div className="text-gray-600 font-medium">FastGas</div>
              </div>
              <div>
                <div className="font-black text-gray-900 uppercase tracking-widest text-xs mb-1">Gas</div>
                <div className="text-gray-600 font-medium">Food-grade Nitrous Oxide (N2O)</div>
              </div>
              <div>
                <div className="font-black text-gray-900 uppercase tracking-widest text-xs mb-1">Availability</div>
                <div className="text-green-600 font-bold">In Stock</div>
              </div>
              <div>
                <div className="font-black text-gray-900 uppercase tracking-widest text-xs mb-1">Price</div>
                <div className="text-gray-600 font-medium">Contact us for current pricing</div>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-500 font-medium">Specific sizes and model availability — contact us directly for up-to-date information.</p>
        </section>

        {/* Equipment */}
        <section className="mb-16">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic mb-4">Compatible Equipment</h2>
          <p className="text-gray-600 font-medium leading-relaxed">
            FastGas cylinders are compatible with standard N2O pressure regulators and cream dispensing systems used in UK commercial kitchens. Verify compatibility with your specific equipment before ordering. Contact us if you need guidance on compatibility.
          </p>
        </section>

        {/* Comparison */}
        <section className="mb-16">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic mb-4">FastGas vs SmartWhip</h2>
          <p className="text-gray-600 font-medium mb-4">Both FastGas and SmartWhip contain food-grade nitrous oxide and are used for the same culinary applications. The primary differences are branding and cylinder specifications. SmartWhip is our most popular option with clearly published pricing at £30 per 640g unit. FastGas pricing is available on request.</p>
          <Link href="/smartwhip-canisters" className="inline-flex items-center gap-2 text-orange-500 font-black text-sm uppercase tracking-widest hover:gap-3 transition-all">
            View SmartWhip canisters <ChevronRight className="h-4 w-4" />
          </Link>
        </section>

        {/* Safety */}
        <section className="mb-16">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic mb-4">Safety and Storage</h2>
          <p className="text-gray-600 font-medium leading-relaxed mb-4">
            Store FastGas cylinders upright in a cool, dry, ventilated location. Keep away from heat, flames and direct sunlight. Cylinders are under pressure — do not puncture or expose to high temperatures. Dispose of empty cylinders at a metal recycling facility.
          </p>
          <p className="text-gray-600 font-medium">For further safety information, refer to the FastGas manufacturer documentation or <Link href="/guides/what-is-smartwhip" className="text-orange-500 underline underline-offset-2">our general N2O safety guide</Link>.</p>
        </section>

        {/* Delivery */}
        <section className="mb-16">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic mb-4">Delivery Options</h2>
          <p className="text-gray-600 font-medium mb-4">FastGas orders are delivered using the same service as our SmartWhip orders — most UK deliveries arrive within 25 minutes. Delivery is free for most UK locations.</p>
          <Link href="/delivery" className="text-orange-500 font-black text-sm uppercase tracking-widest underline underline-offset-4">
            Check UK delivery coverage →
          </Link>
        </section>

        {/* CTA */}
        <section className="mb-16 bg-gray-900 rounded-[2.5rem] p-10 text-white">
          <h2 className="text-2xl font-black uppercase tracking-tighter italic mb-4">Order FastGas</h2>
          <p className="text-gray-400 font-medium mb-6 max-w-md">Contact us via WhatsApp, Telegram or email to order FastGas or to ask about current pricing and availability.</p>
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

        <div className="border-t border-gray-100 pt-8 text-sm text-gray-400 font-medium">
          Related pages: <Link href="/smartwhip-canisters" className="text-orange-500 hover:underline">SmartWhip canisters</Link> · <Link href="/brands/cream-deluxe" className="text-orange-500 hover:underline">Cream Deluxe</Link> · <Link href="/delivery" className="text-orange-500 hover:underline">Delivery coverage</Link>
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
