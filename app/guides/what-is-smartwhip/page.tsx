import { Metadata } from 'next';
import Link from 'next/link';
import { Zap, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'What Is SmartWhip? Culinary Uses, Sizes & Safety Guide',
  description: 'Learn what SmartWhip is, its legitimate culinary uses, available cylinder sizes, required equipment, storage guidance and important UK safety information.',
  alternates: {
    canonical: 'https://www.smartwhip.org.uk/guides/what-is-smartwhip',
  },
  openGraph: {
    title: 'What Is SmartWhip? Culinary Uses, Sizes & Safety Guide',
    description: 'Learn what SmartWhip is, its legitimate culinary uses, available cylinder sizes, required equipment, storage guidance and important UK safety information.',
    url: 'https://www.smartwhip.org.uk/guides/what-is-smartwhip',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What Is SmartWhip? Culinary Uses, Sizes & Safety Guide',
  description: 'Learn what SmartWhip is, its legitimate culinary uses, available cylinder sizes, required equipment, storage guidance and important UK safety information.',
  url: 'https://www.smartwhip.org.uk/guides/what-is-smartwhip',
  publisher: {
    '@type': 'Organization',
    name: 'SmartWhip UK',
    url: 'https://www.smartwhip.org.uk',
  },
  mainEntityOfPage: 'https://www.smartwhip.org.uk/guides/what-is-smartwhip',
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is SmartWhip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SmartWhip is a brand of large-capacity nitrous oxide cylinders designed for legitimate culinary applications, including use with compatible cream-whipping equipment. Cylinders are available in 640g and 2kg capacities.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is SmartWhip used for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SmartWhip is used in professional kitchens and catering for whipping cream, creating culinary foams, espumas, and other applications that require nitrous oxide dispensing equipment.',
      },
    },
    {
      '@type': 'Question',
      name: 'What sizes does SmartWhip come in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SmartWhip is available in 640g and 2kg cylinder sizes. The 640g is the most common option; the 2kg suits high-volume commercial use.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is SmartWhip legal in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SmartWhip cylinders are sold for legitimate culinary and catering use. The Psychoactive Substances Act 2023 made it illegal to supply nitrous oxide for recreational inhalation in the UK. Using nitrous oxide recreationally carries serious health risks and is illegal to purchase for that purpose.',
      },
    },
  ],
};

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.smartwhip.org.uk' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://www.smartwhip.org.uk/guides' },
    { '@type': 'ListItem', position: 3, name: 'What Is SmartWhip?', item: 'https://www.smartwhip.org.uk/guides/what-is-smartwhip' },
  ],
};

export default function WhatIsSmartWhipPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
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

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <nav className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-8">
          <Link href="/" className="hover:text-orange-500">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-500">Guides</span>
          <span className="mx-2">/</span>
          <span className="text-gray-700">What Is SmartWhip?</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter leading-tight mb-6">
          What Is SmartWhip?
        </h1>

        {/* Opening answer */}
        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 mb-10">
          <p className="text-gray-700 font-medium leading-relaxed">
            SmartWhip is a brand of large-capacity nitrous oxide cylinders designed for legitimate culinary applications, including use with compatible cream-whipping equipment. Cylinders are available in different capacities, including 640g and 2kg options, for professional kitchens, caterers and appropriate domestic culinary use.
          </p>
        </div>

        {/* What it's used for */}
        <section className="mb-10">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic mb-4">What is SmartWhip Used For?</h2>
          <p className="text-gray-600 font-medium leading-relaxed mb-4">
            SmartWhip is used primarily in professional and commercial food preparation. Nitrous oxide is used as a propellant in cream whippers and culinary dispensing systems. Common culinary applications include:
          </p>
          <ul className="space-y-2 text-gray-600 font-medium list-disc pl-5 mb-4">
            <li>Whipping fresh cream for desserts and beverages</li>
            <li>Creating culinary foams and espumas for plating</li>
            <li>Infusing liquids and oils using the gas-pressure technique</li>
            <li>Carbonating beverages in commercial settings</li>
          </ul>
          <p className="text-gray-600 font-medium">
            SmartWhip cylinders are designed to be connected to compatible dispensing equipment using a pressure regulator or the included nozzle. They offer a larger volume per cylinder compared to standard 8g chargers, making them more practical for high-volume kitchens.
          </p>
        </section>

        {/* What's inside */}
        <section className="mb-10">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic mb-4">What is Inside a SmartWhip Cylinder?</h2>
          <p className="text-gray-600 font-medium leading-relaxed mb-4">
            SmartWhip cylinders contain food-grade nitrous oxide (N2O). Nitrous oxide is a colourless, non-flammable gas approved for use in food preparation under the food additive designation E942. It is the same gas used in standard single-use cream chargers, but delivered in a much larger cylinder for practical high-volume use.
          </p>
          <p className="text-gray-600 font-medium">
            The cylinders are manufactured from steel, sealed with a valve, and filled with N2O under pressure. Each cylinder is shipped in its original sealed condition.
          </p>
        </section>

        {/* Sizes */}
        <section className="mb-10">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic mb-4">What SmartWhip Sizes Are Available?</h2>
          <p className="text-gray-600 font-medium mb-4">
            SmartWhip is available in two sizes in the UK:
          </p>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 text-center">
              <div className="text-3xl font-black text-orange-500 mb-1">640g</div>
              <div className="text-xs font-black text-gray-400 uppercase tracking-widest">Standard option</div>
            </div>
            <div className="bg-gray-900 rounded-2xl p-5 text-center">
              <div className="text-3xl font-black text-orange-500 mb-1">2kg</div>
              <div className="text-xs font-black text-gray-400 uppercase tracking-widest">Commercial option</div>
            </div>
          </div>
          <p className="text-gray-600 font-medium">
            The 640g is the most widely used size and is suitable for professional kitchens and appropriate domestic culinary use. The 2kg offers a higher capacity for commercial and high-volume operations.
          </p>
        </section>

        {/* 640g vs 2kg */}
        <section className="mb-10">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic mb-4">640g vs 2kg SmartWhip</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-4 text-left font-black text-gray-900 uppercase tracking-widest text-xs">Feature</th>
                  <th className="p-4 text-left font-black text-orange-500 uppercase tracking-widest text-xs">640g</th>
                  <th className="p-4 text-left font-black text-gray-600 uppercase tracking-widest text-xs">2kg</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                <tr><td className="p-4 font-bold text-gray-700">N2O content</td><td className="p-4 text-gray-600">640g</td><td className="p-4 text-gray-600">2,000g</td></tr>
                <tr className="bg-gray-50/50"><td className="p-4 font-bold text-gray-700">Best suited for</td><td className="p-4 text-gray-600">Professional kitchens, caterers</td><td className="p-4 text-gray-600">High-volume commercial operations</td></tr>
                <tr><td className="p-4 font-bold text-gray-700">Portability</td><td className="p-4 text-gray-600">More portable</td><td className="p-4 text-gray-600">Heavier, less portable</td></tr>
                <tr className="bg-gray-50/50"><td className="p-4 font-bold text-gray-700">Price</td><td className="p-4 font-black text-gray-900">£30</td><td className="p-4 font-black text-gray-900">POA</td></tr>
                <tr><td className="p-4 font-bold text-gray-700">Nozzle included</td><td className="p-4 text-green-600 font-bold">Yes</td><td className="p-4 text-green-600 font-bold">Yes</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 font-medium">
            <Link href="/smartwhip-canisters" className="text-orange-500 underline underline-offset-2">Compare SmartWhip canister sizes in detail →</Link>
          </p>
        </section>

        {/* Equipment */}
        <section className="mb-10">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic mb-4">What Equipment is Required?</h2>
          <p className="text-gray-600 font-medium leading-relaxed mb-4">
            For standard culinary use, no additional equipment is needed — a compatible nozzle is included with every order. For more controlled or specialised dispensing, SmartWhip cylinders work with compatible N2O pressure regulators. The nozzle and regulator compatibility depends on the equipment specification, so verify this with your equipment supplier if you are using industrial dispensing systems.
          </p>
          <p className="text-gray-600 font-medium">
            The cylinders are designed to be used with SmartWhip-compatible cream whippers and dispensers common in professional kitchens.
          </p>
        </section>

        {/* Storage */}
        <section className="mb-10">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic mb-4">How Should Cylinders Be Stored?</h2>
          <p className="text-gray-600 font-medium leading-relaxed mb-4">
            Store SmartWhip cylinders in a cool, dry, well-ventilated location away from direct sunlight and heat sources. Do not store in temperatures exceeding 50°C. Cylinders should be kept upright and away from open flames. Keep out of reach of children.
          </p>
          <p className="text-gray-600 font-medium mb-4">
            Cylinders are pressurised — do not puncture, crush, or expose to extreme heat. For transport, ensure cylinders are secured and cannot roll or fall. Dispose of empty cylinders at your local metal recycling facility.
          </p>
        </section>

        {/* Recreational use and UK law */}
        <section className="mb-10 bg-red-50 border border-red-100 rounded-2xl p-8">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic mb-4">Responsible and Lawful Use in the UK</h2>
          <p className="text-gray-700 font-medium leading-relaxed mb-4">
            In the UK, nitrous oxide is classified as a Class C controlled substance under the Misuse of Drugs Act as amended by the Psychoactive Substances Act 2023. It is illegal to possess nitrous oxide with intent to inhale it recreationally, and illegal to supply it for recreational purposes.
          </p>
          <p className="text-gray-700 font-medium leading-relaxed mb-4">
            Recreational inhalation of nitrous oxide ("laughing gas") — typically inhaled from balloons — carries serious health risks, including:
          </p>
          <ul className="space-y-2 text-gray-700 font-medium list-disc pl-5 mb-4">
            <li>Sudden death from oxygen deprivation or cardiac events</li>
            <li>Vitamin B12 depletion, leading to irreversible nerve damage with repeated use</li>
            <li>Burns from the cold gas escaping at pressure</li>
            <li>Loss of consciousness and associated injury risk</li>
            <li>Psychological dependency with regular use</li>
          </ul>
          <p className="text-gray-700 font-medium leading-relaxed mb-4">
            SmartWhip cylinders are sold exclusively for legitimate culinary and catering use. We do not supply these products for recreational inhalation.
          </p>
          <p className="text-sm text-gray-500 font-medium">
            Reference: <a href="https://www.gov.uk/government/publications/nitrous-oxide-ban/nitrous-oxide-ban-guidance" target="_blank" rel="noopener noreferrer" className="text-orange-500 underline underline-offset-2">GOV.UK — Nitrous oxide ban guidance</a>
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: 'What is the meaning of SmartWhip?', a: 'SmartWhip is a brand name for large-capacity culinary N2O (nitrous oxide) cylinders used in professional food preparation and cream whipping.' },
              { q: 'What is in a SmartWhip?', a: 'SmartWhip cylinders contain food-grade nitrous oxide (N2O), the same gas used in standard cream chargers but in a much larger cylinder.' },
              { q: 'How does SmartWhip work?', a: 'The cylinder connects to a compatible nozzle or pressure regulator, which releases controlled amounts of N2O into a cream whipper or dispensing device. The gas pressurises and aerates the contents, producing whipped cream or culinary foams.' },
              { q: 'Are SmartWhips the same as laughing gas?', a: 'SmartWhip cylinders contain nitrous oxide, which is the same compound. However, these cylinders are intended for culinary use only. Recreational inhalation of nitrous oxide is illegal in the UK and carries serious health risks.' },
              { q: 'What are SmartWhips used for recreationally and what does it feel like?', a: 'Recreationally, nitrous oxide is inhaled from balloons and causes brief euphoria, dizziness and disorientation. It is illegal to purchase for this purpose in the UK. Health risks include nerve damage from B12 depletion, loss of consciousness, and in severe cases, cardiac arrest. We do not supply these products for recreational use.' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h3 className="font-black text-gray-900 mb-2 text-sm uppercase tracking-tight">{item.q}</h3>
                <p className="text-gray-500 font-medium text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-gray-100 pt-8 text-sm text-gray-400 font-medium">
          Related pages: <Link href="/smartwhip-canisters" className="text-orange-500 hover:underline">Compare SmartWhip canister sizes</Link> · <Link href="/smartwhip-2kg" className="text-orange-500 hover:underline">View the 2kg SmartWhip</Link> · <Link href="/delivery" className="text-orange-500 hover:underline">Check UK delivery coverage</Link>
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
