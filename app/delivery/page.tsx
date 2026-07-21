import { Metadata } from 'next';
import Link from 'next/link';
import { Zap, ArrowLeft, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SmartWhip Delivery Areas | UK Coverage & Times',
  description: 'Check SmartWhip delivery coverage, dispatch times, charges and ordering cutoffs for local courier, same-day and national UK delivery services.',
  alternates: {
    canonical: 'https://www.smartwhip.org.uk/delivery',
  },
  openGraph: {
    title: 'SmartWhip Delivery Areas | UK Coverage & Times',
    description: 'Check SmartWhip delivery coverage, dispatch times, charges and ordering cutoffs for local courier, same-day and national UK delivery services.',
    url: 'https://www.smartwhip.org.uk/delivery',
  },
};

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.smartwhip.org.uk' },
    { '@type': 'ListItem', position: 2, name: 'Delivery', item: 'https://www.smartwhip.org.uk/delivery' },
  ],
};

const cities = [
  { name: 'London', slug: 'london', region: 'England' },
  { name: 'Manchester', slug: 'manchester', region: 'England' },
  { name: 'Birmingham', slug: 'birmingham', region: 'England' },
  { name: 'Nottingham', slug: 'nottingham', region: 'England' },
  { name: 'Glasgow', slug: 'glasgow', region: 'Scotland' },
  { name: 'Liverpool', slug: 'liverpool', region: 'England' },
  { name: 'Bristol', slug: 'bristol', region: 'England' },
  { name: 'Islington', slug: 'islington', region: 'England' },
  { name: 'Leeds', slug: 'leeds', region: 'England' },
  { name: 'Sheffield', slug: 'sheffield', region: 'England' },
  { name: 'Edinburgh', slug: 'edinburgh', region: 'Scotland' },
  { name: 'Newcastle', slug: 'newcastle-upon-tyne', region: 'England' },
  { name: 'Leicester', slug: 'leicester', region: 'England' },
  { name: 'Cardiff', slug: 'cardiff', region: 'Wales' },
  { name: 'Coventry', slug: 'coventry', region: 'England' },
  { name: 'Bradford', slug: 'bradford', region: 'England' },
  { name: 'Southampton', slug: 'southampton', region: 'England' },
  { name: 'Reading', slug: 'reading', region: 'England' },
  { name: 'Derby', slug: 'derby', region: 'England' },
  { name: 'Wolverhampton', slug: 'wolverhampton', region: 'England' },
];

export default function DeliveryPage() {
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
            <Link href="/smartwhip-wholesale" className="hover:text-orange-500 transition-colors">Wholesale</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <nav className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-8">
          <Link href="/" className="hover:text-orange-500">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">Delivery</span>
        </nav>

        <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter leading-tight mb-4">
          SmartWhip UK Delivery Coverage
        </h1>
        <p className="text-lg text-gray-500 font-medium mb-12 max-w-2xl">
          We deliver SmartWhip canisters across the UK. This page explains how our delivery works, how to order, and what to expect after placing an order.
        </p>

        {/* National vs local */}
        <section className="mb-16">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic mb-4">National and Local Delivery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6">
              <div className="font-black text-orange-500 uppercase tracking-widest text-xs mb-3">Local Courier Delivery</div>
              <p className="text-sm text-gray-600 font-medium">Orders in and around major urban areas are dispatched via local courier. Typical delivery time is under 25 minutes from order confirmation.</p>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
              <div className="font-black text-gray-700 uppercase tracking-widest text-xs mb-3">Same-Day Delivery</div>
              <p className="text-sm text-gray-600 font-medium">Same-day delivery is available throughout the UK. Orders confirmed during the day are dispatched and delivered the same day.</p>
            </div>
            <div className="bg-gray-900 rounded-2xl p-6">
              <div className="font-black text-gray-400 uppercase tracking-widest text-xs mb-3">Next-Day National Shipping</div>
              <p className="text-sm text-gray-400 font-medium">For locations where same-day is not possible, next-day national shipping is available. This is confirmed at the time of ordering.</p>
            </div>
          </div>
          <p className="text-gray-600 font-medium">Most deliveries across the UK arrive within 25 minutes of order confirmation. However, delivery times vary by location. Same-day or next-day shipping is used for more remote areas.</p>
        </section>

        {/* Dispatch */}
        <section className="mb-16">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic mb-4">Dispatch Days and Cutoff Times</h2>
          <p className="text-gray-600 font-medium mb-4">We operate 24 hours a day, 7 days a week. Orders can be placed and dispatched at any time. There are no cutoff times for same-day delivery — we dispatch as soon as the order is confirmed.</p>
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="font-black text-gray-900 uppercase tracking-widest text-xs mb-1">Operating Hours</div>
                <div className="text-gray-600 font-medium">24 hours a day, 7 days a week</div>
              </div>
              <div>
                <div className="font-black text-gray-900 uppercase tracking-widest text-xs mb-1">Dispatch</div>
                <div className="text-gray-600 font-medium">Immediate on order confirmation</div>
              </div>
              <div>
                <div className="font-black text-gray-900 uppercase tracking-widest text-xs mb-1">Typical Local Delivery</div>
                <div className="text-gray-600 font-medium">Under 25 minutes</div>
              </div>
              <div>
                <div className="font-black text-gray-900 uppercase tracking-widest text-xs mb-1">National Delivery</div>
                <div className="text-gray-600 font-medium">Same day or next day</div>
              </div>
            </div>
          </div>
        </section>

        {/* Charges */}
        <section className="mb-16">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic mb-4">Delivery Charges</h2>
          <p className="text-gray-600 font-medium mb-4">Delivery is free for most UK locations. For very remote areas or unusually large orders, a delivery charge may apply. This will be confirmed before you are asked to pay.</p>
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="font-black text-gray-900 uppercase tracking-widest text-xs mb-1">Most UK Locations</div>
                <div className="text-green-600 font-bold">Free delivery</div>
              </div>
              <div>
                <div className="font-black text-gray-900 uppercase tracking-widest text-xs mb-1">Remote Areas</div>
                <div className="text-gray-600 font-medium">Charge confirmed before payment</div>
              </div>
            </div>
          </div>
        </section>

        {/* How to order */}
        <section className="mb-16">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic mb-4">How to Place an Order</h2>
          <p className="text-gray-600 font-medium mb-4">Orders are not placed through an online checkout. Instead, contact us directly via one of the following:</p>
          <ul className="space-y-2 text-gray-600 font-medium list-disc pl-5 mb-4">
            <li><strong>WhatsApp</strong> — message us with your location, product size, and quantity</li>
            <li><strong>Telegram</strong> — same as WhatsApp</li>
            <li><strong>Email</strong> — apexsmartwhips@gmail.com</li>
          </ul>
          <p className="text-gray-600 font-medium">Once we confirm your order, payment is arranged and delivery is dispatched immediately.</p>
        </section>

        {/* Verification */}
        <section className="mb-16">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic mb-4">Age, Identity and Business Verification</h2>
          <p className="text-gray-600 font-medium">We supply SmartWhip for legitimate culinary and catering use. We reserve the right to ask for basic verification before fulfilling orders, particularly for wholesale quantities. Products are supplied to adults only. We do not supply for recreational use.</p>
        </section>

        {/* Failed delivery */}
        <section className="mb-16">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic mb-4">Failed or Missed Delivery</h2>
          <p className="text-gray-600 font-medium">If a delivery is unsuccessful, contact us immediately via WhatsApp, Telegram or email and we will arrange redelivery. Please ensure your contact details and delivery address are accurate at the time of ordering.</p>
        </section>

        {/* Tracking */}
        <section className="mb-16">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic mb-4">Order Tracking</h2>
          <p className="text-gray-600 font-medium">For local courier deliveries, tracking is provided where available. For national shipping, a tracking reference is provided once dispatched. Contact us via WhatsApp or Telegram for a live update on your delivery status.</p>
        </section>

        {/* City pages */}
        <section className="mb-16">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic mb-4">Delivery by City</h2>
          <p className="text-gray-600 font-medium mb-6">Find delivery information for your specific city:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/towns/${city.slug}`}
                className="flex items-center gap-2 bg-gray-50 hover:bg-orange-50 border border-gray-100 rounded-2xl p-4 transition-colors group"
              >
                <MapPin className="h-4 w-4 text-orange-500 shrink-0" />
                <div>
                  <div className="font-black text-gray-900 text-sm group-hover:text-orange-500 transition-colors">{city.name}</div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{city.region}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <div className="border-t border-gray-100 pt-8 text-sm text-gray-400 font-medium">
          Related pages: <Link href="/smartwhip-canisters" className="text-orange-500 hover:underline">Compare SmartWhip canister sizes</Link> · <Link href="/smartwhip-wholesale" className="text-orange-500 hover:underline">Request wholesale SmartWhip pricing</Link> · <Link href="/contact" className="text-orange-500 hover:underline">Contact us</Link>
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
