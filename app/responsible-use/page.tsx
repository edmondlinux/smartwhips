import { Metadata } from 'next';
import Link from 'next/link';
import { Zap, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Responsible Sale & Lawful Use Policy | SmartWhip UK',
  description: 'SmartWhip UK responsible sale and lawful use policy. We supply culinary N2O for legitimate food-preparation use only.',
  alternates: {
    canonical: 'https://www.smartwhip.org.uk/responsible-use',
  },
};

export default function ResponsibleUsePage() {
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
          <span className="text-gray-700">Responsible Use</span>
        </nav>

        <h1 className="text-4xl font-black text-gray-900 tracking-tighter leading-tight mb-4">Responsible Sale and Lawful Use Policy</h1>
        <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-10">Last updated: July 2026</p>

        <div className="space-y-8 text-gray-600 font-medium leading-relaxed">
          <section>
            <h2 className="text-xl font-black text-gray-900 uppercase tracking-tighter italic mb-3">Intended Use</h2>
            <p>SmartWhip UK supplies nitrous oxide cylinders (SmartWhip, FastGas, Cream Deluxe) exclusively for legitimate culinary and catering applications. This includes cream whipping, culinary foam preparation, and related professional food-service use. We do not supply for recreational inhalation or any other non-culinary purpose.</p>
          </section>

          <section className="bg-red-50 border border-red-100 rounded-2xl p-6">
            <h2 className="text-xl font-black text-gray-900 uppercase tracking-tighter italic mb-3">UK Legal Position</h2>
            <p className="mb-3">Under the <strong>Psychoactive Substances Act 2023</strong>, it is illegal in the United Kingdom to:</p>
            <ul className="list-disc pl-5 space-y-2 mb-3">
              <li>Supply nitrous oxide for recreational inhalation purposes</li>
              <li>Purchase or possess nitrous oxide with intent to inhale it recreationally</li>
            </ul>
            <p>Nitrous oxide is classified as a Class C controlled substance for recreational use purposes. Penalties for supply include up to 14 years imprisonment.</p>
            <p className="mt-3 text-sm">
              Reference: <a href="https://www.gov.uk/government/publications/nitrous-oxide-ban/nitrous-oxide-ban-guidance" target="_blank" rel="noopener noreferrer" className="text-orange-500 underline underline-offset-2">GOV.UK — Nitrous oxide ban guidance</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 uppercase tracking-tighter italic mb-3">Our Verification Process</h2>
            <p className="mb-3">We operate responsible-supply practices, including:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>We supply to adults only (18+)</li>
              <li>We may request basic buyer verification for large or wholesale orders</li>
              <li>We reserve the right to decline any order where we have reasonable grounds to believe the product will not be used for its intended culinary purpose</li>
              <li>We do not knowingly supply to individuals who state or imply recreational use intent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 uppercase tracking-tighter italic mb-3">Health Risks of Recreational Inhalation</h2>
            <p className="mb-3">Recreational inhalation of nitrous oxide carries serious health risks, including:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-gray-900">Nerve damage</strong> — repeated use depletes Vitamin B12, causing potentially irreversible nerve damage (subacute combined degeneration of the spinal cord)</li>
              <li><strong className="text-gray-900">Sudden death</strong> — from oxygen deprivation or cardiac events</li>
              <li><strong className="text-gray-900">Burns</strong> — cold gas escaping from cylinders under pressure can cause frostbite and burns</li>
              <li><strong className="text-gray-900">Loss of consciousness</strong> — leading to injury from falls</li>
              <li><strong className="text-gray-900">Psychological dependency</strong> — with regular use</li>
            </ul>
            <p className="mt-3">If you or someone you know is struggling with nitrous oxide use, contact <a href="https://www.talktofrank.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 underline underline-offset-2">FRANK</a> (0300 123 6600) for confidential advice.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 uppercase tracking-tighter italic mb-3">Reporting Concerns</h2>
            <p>If you have concerns about how our products are being used or if you believe you have been supplied by us under false pretences, contact us at <a href="mailto:apexsmartwhips@gmail.com" className="text-orange-500 underline underline-offset-2">apexsmartwhips@gmail.com</a>.</p>
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
