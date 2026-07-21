import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Zap,
  MapPin,
  MessageCircle,
  Send,
  ArrowLeft,
  ShieldCheck,
  Truck,
  Clock,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import gbData from "@/data/gb.json";
import { fetchTownFromOSM } from "@/lib/osm";
import { getSiteLinks } from "@/lib/links";

interface Props {
  params: Promise<{ town: string }>;
}

export async function generateStaticParams() {
  return gbData.map((town) => ({
    town: town.city.toLowerCase().replace(/\s+/g, "-"),
  }));
}

async function getTownData(townParam: string) {
  const localData = gbData.find(
    (t) =>
      t.city.toLowerCase().replace(/\s+/g, "-") === townParam.toLowerCase(),
  );

  if (localData) return localData;

  const nameFromSlug = townParam
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  const osmData = await fetchTownFromOSM(nameFromSlug);
  return osmData;
}

const baseUrl = "https://www.smartwhip.org.uk";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { town } = await params;
  const townData = await getTownData(town);

  if (!townData) return { title: "Town Not Found" };

  const cityName = townData.city;

  return {
    title: `Buy SmartWhip in ${cityName} | 640g & 2kg Culinary Cream Chargers`,
    description: `Order genuine SmartWhip 640g and 2kg culinary cream chargers for delivery in ${cityName}. Also available: FastGas and Cream Deluxe. Free delivery for most ${cityName} locations.`,
    alternates: {
      canonical: `${baseUrl}/towns/${town}`,
    },
    keywords: [
      `SmartWhip ${cityName}`,
      `buy SmartWhip ${cityName}`,
      `SmartWhip delivery ${cityName}`,
      `640g cream chargers ${cityName}`,
      `FastGas ${cityName}`,
      `Cream Deluxe ${cityName}`,
      `N2O cylinders ${cityName}`,
      `SmartWhip wholesale ${cityName}`,
      `smart whip ${cityName}`,
    ],
    openGraph: {
      title: `SmartWhip in ${cityName} | 640g & 2kg Culinary Cream Chargers`,
      description: `Order genuine SmartWhip 640g and 2kg culinary cream chargers for delivery in ${cityName}. Free delivery for most locations.`,
      url: `${baseUrl}/towns/${town}`,
      images: ["/og_image/og_image.jpeg"],
    },
    twitter: {
      card: "summary_large_image",
      images: ["/og_image/og_image.jpeg"],
    },
  };
}

export default async function TownPage({ params }: Props) {
  const { town } = await params;

  const townData = await getTownData(town);

  if (!townData) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `SmartWhip 640g Culinary Cream Charger — ${townData.city} Delivery`,
    description: `Genuine SmartWhip 640g culinary nitrous oxide cylinder available for delivery in ${townData.city}. Also available: 2kg, FastGas and Cream Deluxe.`,
    image: `${baseUrl}/og_image/og_image.jpeg`,
    brand: {
      "@type": "Brand",
      name: "SmartWhip",
    },
    sku: `SW-640G-${townData.city.toUpperCase().replace(/\s+/g, "-")}`,
    offers: {
      "@type": "Offer",
      url: `${baseUrl}/towns/${town}`,
      priceCurrency: "GBP",
      price: "30.00",
      priceValidUntil: "2026-12-31",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "0",
          currency: "GBP",
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "GB",
        },
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "GB",
        returnPolicyCategory:
          "https://schema.org/MerchantReturnFiniteReturnPeriod",
        merchantReturnDays: 2,
        returnMethod: "https://schema.org/ReturnByMail",
        returnFees: "https://schema.org/FreeReturn",
      },
      areaServed: {
        "@type": "City",
        name: townData.city,
      },
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `How fast is SmartWhip delivery in ${townData.city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `We aim to deliver SmartWhip orders in ${townData.city} within 25 minutes of order confirmation. Delivery times may vary depending on location.`,
        },
      },
      {
        "@type": "Question",
        name: "Is SmartWhip food-grade?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. SmartWhip cylinders contain food-grade nitrous oxide (N2O) for legitimate culinary use.",
        },
      },
    ],
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: townData.city, item: `${baseUrl}/towns/${town}` },
    ],
  };

  const products = [
    {
      id: "single",
      name: "SmartWhip 640g",
      subtitle: "Single Culinary N2O Cylinder",
      description: `Genuine SmartWhip 640g nitrous oxide cylinder for professional culinary use. Nozzle included. Fast delivery in ${townData.city}.`,
      price: "£30",
      tag: "In Stock",
    },
    {
      id: "case",
      name: "SmartWhip Case (6×)",
      subtitle: "Wholesale Case",
      description: `Order a full case of 6× SmartWhip 640g cylinders. The most cost-effective option for professional catering use in ${townData.admin_name}.`,
      price: "£130",
      tag: "Best Value",
    },
  ];

  const message = `Hi, I'm interested in ordering SmartWhip. I'm based in ${townData.city}. Can you confirm availability?`;
  const encodedMessage = encodeURIComponent(message);
  const { whatsapp: whatsappBase, telegram: telegramBase } =
    await getSiteLinks();

  const whatsappUrl = whatsappBase
    ? whatsappBase.includes("?")
      ? `${whatsappBase}&text=${encodedMessage}`
      : `${whatsappBase}?text=${encodedMessage}`
    : null;

  const telegramUrl = telegramBase
    ? telegramBase.includes("?")
      ? `${telegramBase}&text=${encodedMessage}`
      : `${telegramBase}?text=${encodedMessage}`
    : null;

  return (
    <div className="min-h-screen bg-white selection:bg-orange-100 selection:text-orange-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          <Link href="/" className="flex items-center group">
            <div className="bg-gray-100 p-2 rounded-xl group-hover:bg-orange-500 transition-colors duration-300">
              <ArrowLeft className="h-5 w-5 text-gray-500 group-hover:text-white" />
            </div>
            <div className="flex items-center ml-4">
              <Zap className="h-6 w-6 text-orange-500" />
              <span className="ml-2 text-xl font-black text-gray-900 uppercase tracking-tighter italic">
                SmartWhip
              </span>
            </div>
          </Link>
          <div className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-2xl shadow-xl shadow-gray-200">
            <MapPin className="h-4 w-4 text-orange-500" />
            <span className="text-xs font-black uppercase tracking-widest">
              {townData.city}
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <nav className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-8">
          <Link href="/" className="hover:text-orange-500">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{townData.city}</span>
        </nav>

        <div className="relative mb-20">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-orange-100 blur-[100px] rounded-full -z-10 opacity-50" />
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter leading-[0.9] mb-6">
              <div className="mb-8">
                <Image
                  src="/logo/logo.jpeg"
                  alt="SmartWhip culinary cream chargers"
                  width={120}
                  height={120}
                  className="rounded-2xl shadow-xl"
                />
              </div>
              SMARTWHIP IN <br />
              <span className="text-orange-500 italic">
                {townData.city.toUpperCase()}
              </span>
            </h1>
            <p className="text-xl text-gray-500 font-medium leading-relaxed">
              Genuine SmartWhip 640g and 2kg culinary cream chargers available
              for delivery in {townData.city} ({townData.admin_name}). Orders
              placed via WhatsApp, Telegram or email — most deliveries arrive
              within 25 minutes.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {products.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden border-none shadow-2xl shadow-gray-200/50 bg-white rounded-[3rem] group"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/IMG_1867.jpeg"
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-gray-900/60 to-transparent" />
                <div className="absolute top-8 left-8">
                  <span className="bg-orange-500 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl">
                    {product.tag}
                  </span>
                </div>
                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end text-white">
                  <div>
                    <h2 className="text-4xl font-black italic uppercase tracking-tighter leading-none">
                      {product.name}
                    </h2>
                    <p className="text-orange-200 font-bold uppercase tracking-widest text-[10px] mt-2">
                      {product.subtitle}
                    </p>
                  </div>
                  <div className="text-5xl font-black tracking-tighter">
                    {product.price}
                  </div>
                </div>
              </div>

              <CardContent className="p-10">
                <p className="text-gray-500 font-medium leading-relaxed mb-10 text-lg">
                  {product.description}
                </p>

                <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="h-px flex-grow bg-gray-200" />
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">
                      Place Your Order
                    </span>
                    <div className="h-px flex-grow bg-gray-200" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {whatsappUrl && (
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white py-6 rounded-2xl text-sm font-black uppercase tracking-widest transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-green-100"
                      >
                        <MessageCircle className="h-5 w-5" />
                        WhatsApp
                      </a>
                    )}
                    {telegramUrl && (
                      <a
                        href={telegramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 bg-[#0088cc] hover:bg-[#0077b5] text-white py-6 rounded-2xl text-sm font-black uppercase tracking-widest transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-blue-100"
                      >
                        <Send className="h-5 w-5" />
                        Telegram
                      </a>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* About section */}
        <section className="bg-gray-50 rounded-[3rem] p-12 md:p-20 mb-20 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black text-gray-900 tracking-tighter uppercase italic mb-6">
                Delivering to {townData.city} & {townData.admin_name}
              </h2>
              <div className="space-y-4 text-gray-600 font-medium leading-relaxed">
                <p>
                  We supply genuine SmartWhip 640g and 2kg culinary cream
                  chargers to buyers in {townData.city} and across{" "}
                  {townData.admin_name}. Orders are placed via WhatsApp, email
                  or Telegram and dispatched promptly.
                </p>
                <p>
                  Whether you are in the centre of {townData.city} or the
                  surrounding area, contact us to check delivery coverage and
                  confirm your order. We also supply FastGas and Cream Deluxe
                  cylinders — ask when you get in touch.
                </p>
              </div>
              <div className="mt-6">
                <Link
                  href="/delivery"
                  className="text-orange-500 font-black text-sm uppercase tracking-widest underline underline-offset-4"
                >
                  Check full UK delivery coverage →
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="text-3xl font-black text-orange-500 mb-1 leading-none">
                  25 min
                </div>
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                  Typical Delivery
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="text-3xl font-black text-gray-900 mb-1 leading-none">
                  24/7
                </div>
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                  Available to Order
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="text-3xl font-black text-gray-900 mb-1 leading-none">
                  Free
                </div>
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                  Delivery Most Areas
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="text-3xl font-black text-orange-500 mb-1 leading-none">
                  UK
                </div>
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                  Nationwide Coverage
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: Truck,
              title: "Fast Dispatch",
              text: `Orders in ${townData.city} are dispatched immediately on confirmation. Most deliveries arrive within 25 minutes.`,
            },
            {
              icon: ShieldCheck,
              title: "Genuine Products",
              text: "We supply 100% genuine SmartWhip cylinders containing food-grade Nitrous Oxide (N2O) for culinary use.",
            },
            {
              icon: Clock,
              title: "24/7 Ordering",
              text: `You can place an order at any time via WhatsApp, Telegram or email. We operate around the clock.`,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm"
            >
              <item.icon className="h-8 w-8 text-orange-500 mb-6" />
              <h3 className="text-lg font-black uppercase tracking-tighter mb-2 italic">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 font-medium leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <section className="py-16 bg-white border-t border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black text-gray-900 tracking-tighter uppercase italic mb-6">
                SmartWhip for Professional Catering
              </h2>
              <div className="text-gray-600 font-medium space-y-4">
                <p>
                  SmartWhip is widely used in professional kitchens and catering
                  for cream whipping and culinary foam preparation. The 640g
                  cylinder is the most popular option, and the 2kg is suited to
                  higher-volume commercial operations.
                </p>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Food-grade Nitrous Oxide (N2O)</li>
                  <li>Compatible with standard pressure regulators</li>
                  <li>Nozzle included with every order</li>
                  <li>Suitable for professional and appropriate domestic culinary use</li>
                </ul>
              </div>
              <div className="mt-6">
                <Link
                  href="/guides/what-is-smartwhip"
                  className="text-orange-500 font-black text-sm uppercase tracking-widest underline underline-offset-4"
                >
                  Learn more: What is SmartWhip? →
                </Link>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100">
              <h3 className="text-2xl font-black text-gray-900 mb-4 uppercase tracking-tighter italic">
                FastGas & Cream Deluxe
              </h3>
              <p className="text-gray-600 mb-6 font-medium">
                We also stock FastGas and Cream Deluxe 640g cylinders. Both are
                available for delivery in {townData.city}. Contact us to check
                current availability and pricing.
              </p>
              <div className="flex gap-4">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex-1 text-center">
                  <span className="block text-2xl font-black text-orange-500">
                    640g
                  </span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    In Stock
                  </span>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex-1 text-center">
                  <span className="block text-2xl font-black text-orange-500">
                    2kg
                  </span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    In Stock
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20 mt-16">
          <h2 className="text-3xl font-black text-gray-900 tracking-tighter uppercase italic mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-[2rem] border border-gray-100">
              <h3 className="font-black uppercase tracking-tight text-gray-900 mb-4 text-lg">
                How do I order SmartWhip in {townData.city}?
              </h3>
              <p className="text-gray-500 font-medium">
                Click the WhatsApp or Telegram button above and send a message
                with your location in {townData.city} and the product you need.
                We will confirm and dispatch promptly.
              </p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] border border-gray-100">
              <h3 className="font-black uppercase tracking-tight text-gray-900 mb-4 text-lg">
                What brands do you stock?
              </h3>
              <p className="text-gray-500 font-medium">
                SmartWhip is our primary brand. We also stock FastGas and Cream
                Deluxe 640g cylinders. All are available for delivery across{" "}
                {townData.admin_name}.
              </p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] border border-gray-100">
              <h3 className="font-black uppercase tracking-tight text-gray-900 mb-4 text-lg">
                Are there any delivery charges?
              </h3>
              <p className="text-gray-500 font-medium">
                Delivery is free for most UK locations including {townData.city}.
                For very remote addresses, a small charge may apply — this will
                be confirmed before you are asked to pay.
              </p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] border border-gray-100">
              <h3 className="font-black uppercase tracking-tight text-gray-900 mb-4 text-lg">
                Is wholesale available?
              </h3>
              <p className="text-gray-500 font-medium">
                Yes, we cater to both retail and wholesale customers. Whether
                you need a single 640g cylinder or a full pallet, contact us to
                discuss your requirements.
              </p>
            </div>
          </div>
        </section>

        <div className="bg-gray-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 blur-[150px] rounded-full opacity-20 -mr-48 -mt-48" />
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase italic mb-6">
            Order SmartWhip in {townData.city}
          </h2>
          <p className="text-gray-400 font-medium max-w-xl mx-auto mb-10">
            Contact us to place your order. Include your location in{" "}
            {townData.city}, the product size and quantity. We respond quickly
            and dispatch immediately on confirmation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {whatsappUrl && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-2xl px-10 h-16 text-sm font-black uppercase tracking-widest transition-all"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            )}
            {telegramUrl && (
              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#0088cc] hover:bg-[#0077b5] text-white rounded-2xl px-10 h-16 text-sm font-black uppercase tracking-widest transition-all"
              >
                <Send className="h-5 w-5" />
                Telegram
              </a>
            )}
            <a
              href="mailto:apexsmartwhips@gmail.com"
              className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl px-10 h-16 text-sm font-black uppercase tracking-widest transition-all"
            >
              Email Us
            </a>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="/" className="flex items-center">
            <Zap className="h-5 w-5 text-orange-500" />
            <span className="ml-2 text-sm font-black text-gray-900 uppercase tracking-tighter italic">
              SmartWhip UK
            </span>
          </Link>
          <nav className="flex gap-6 text-xs font-bold text-gray-400 uppercase tracking-widest">
            <Link href="/smartwhip-canisters" className="hover:text-orange-500">Canisters</Link>
            <Link href="/delivery" className="hover:text-orange-500">Delivery</Link>
            <Link href="/about" className="hover:text-orange-500">About</Link>
            <Link href="/contact" className="hover:text-orange-500">Contact</Link>
          </nav>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">
            © 2026 SmartWhip UK
          </p>
        </div>
      </footer>
    </div>
  );
}
