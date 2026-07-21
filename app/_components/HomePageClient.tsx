'use client';

import { useState, useEffect, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, MapPin, Search, ChevronRight, Loader2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import gbData from '@/data/gb.json';
import { searchTownsAction } from '../actions';

const TOWNS_PER_PAGE = 12;

export default function HomePageClient() {
  const [visibleTowns, setVisibleTowns] = useState(TOWNS_PER_PAGE);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [showNavSearch, setShowNavSearch] = useState(false);
  const [scrollRotation, setScrollRotation] = useState(0);
  const [dynamicRecommendations, setDynamicRecommendations] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const towns = useMemo(() => {
    return gbData.map(t => ({
      id: t.city.toLowerCase().replace(/\s+/g, '-'),
      name: t.city,
      admin: t.admin_name
    }));
  }, []);

  const filteredTowns = useMemo(() => {
    return towns.filter(town =>
      town.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, towns]);

  useEffect(() => {
    const fetchDynamic = async () => {
      if (searchQuery.length < 3) {
        setDynamicRecommendations([]);
        return;
      }
      setIsSearching(true);
      try {
        const results = await searchTownsAction(searchQuery);
        const uniqueResults = results.filter(res =>
          !towns.some(t => t.name.toLowerCase() === res.name.toLowerCase())
        );
        setDynamicRecommendations(uniqueResults);
      } catch (e) {
        console.error(e);
      } finally {
        setIsSearching(false);
      }
    };
    const timer = setTimeout(fetchDynamic, 300);
    return () => clearTimeout(timer);
  }, [searchQuery, towns]);

  const recommendations = useMemo(() => {
    if (!searchQuery) return [];
    const internalRecs = towns
      .filter(town => town.name.toLowerCase().startsWith(searchQuery.toLowerCase()))
      .slice(0, 5);
    const combined = [...internalRecs, ...dynamicRecommendations];
    const seen = new Set();
    const unique = combined.filter(item => {
      if (seen.has(item.id)) return false;
      seen.add(item.id);
      return true;
    });
    return unique.slice(0, 8);
  }, [searchQuery, towns, dynamicRecommendations]);

  useEffect(() => {
    let rafId: number;
    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        const rotation = (window.scrollY / 5) % 360;
        setScrollRotation(rotation);
      });
      if (
        window.innerHeight + document.documentElement.scrollTop + 200 >=
        document.documentElement.offsetHeight
      ) {
        if (visibleTowns < filteredTowns.length && !loading) {
          setLoading(true);
          setTimeout(() => {
            setVisibleTowns(prev => prev + TOWNS_PER_PAGE);
            setLoading(false);
          }, 400);
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [visibleTowns, loading, filteredTowns.length]);

  const displayedTowns = filteredTowns.slice(0, visibleTowns);

  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-orange-100 selection:text-orange-900">
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          <div className="flex items-center group cursor-pointer">
            <div className="bg-orange-500 p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className="ml-3 text-2xl font-black text-gray-900 tracking-tighter uppercase italic">SmartWhip</span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <Link href="/smartwhip-canisters" className="hidden sm:block text-sm font-bold text-gray-500 hover:text-orange-500 transition-colors uppercase tracking-widest">Canisters</Link>
            <Link href="/smartwhip-wholesale" className="hidden sm:block text-sm font-bold text-gray-500 hover:text-orange-500 transition-colors uppercase tracking-widest">Wholesale</Link>
            <Link href="/delivery" className="hidden sm:block text-sm font-bold text-gray-500 hover:text-orange-500 transition-colors uppercase tracking-widest">Delivery</Link>

            <div className="relative flex items-center">
              <button
                onClick={() => setShowNavSearch(!showNavSearch)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-orange-500"
              >
                <Search className="h-5 w-5" />
              </button>

              {showNavSearch && (
                <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 z-50">
                  <div className="relative">
                    <input
                      autoFocus
                      type="text"
                      placeholder="Search your town..."
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setShowRecommendations(true);
                      }}
                      onBlur={() => {
                        setTimeout(() => setShowRecommendations(false), 200);
                      }}
                      onFocus={() => setShowRecommendations(true)}
                      className="w-full bg-gray-50 border-none h-10 pl-4 pr-10 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-orange-500/20 outline-none"
                    />
                    {isSearching && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        <Loader2 className="h-4 w-4 animate-spin text-orange-500" />
                      </div>
                    )}
                    {showRecommendations && recommendations.length > 0 && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50 max-h-60 overflow-y-auto">
                        {recommendations.map((rec) => (
                          <Link
                            key={rec.id}
                            href={`/towns/${rec.id}`}
                            onClick={() => setShowNavSearch(false)}
                            className="flex items-center gap-3 px-4 py-3 hover:bg-orange-50 transition-colors border-b border-gray-50 last:border-0"
                          >
                            <MapPin className={`h-4 w-4 ${'isDynamic' in rec ? 'text-blue-500' : 'text-orange-500'}`} />
                            <div>
                              <div className="font-bold text-gray-900 text-xs">{rec.name}</div>
                              <div className="text-[8px] font-black text-gray-400 uppercase tracking-widest">{rec.admin}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="hidden sm:flex flex-col items-end">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Current Pricing</span>
              <div className="flex items-center gap-3">
                <span className="text-sm font-black text-gray-900">£30 <span className="text-gray-400 font-medium">Single</span></span>
                <div className="w-1 h-1 rounded-full bg-gray-200" />
                <span className="text-sm font-black text-orange-500">£130 <span className="text-orange-400 font-medium italic">Case</span></span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative pt-24 pb-20 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-40">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-200 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-100 blur-[100px] rounded-full" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-8 shadow-2xl shadow-orange-200">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                UK-Wide Dispatch Active
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight leading-[0.9] mb-6">
                <div className="flex justify-center mb-8">
                  <div
                    style={{
                      transform: `rotateY(${scrollRotation}deg) rotateX(${scrollRotation / 2}deg)`,
                      willChange: 'transform'
                    }}
                    className="transition-transform duration-75 ease-out"
                  >
                    <Image
                      src="/logo/logo.jpeg"
                      alt="SmartWhip culinary cream chargers UK"
                      width={200}
                      height={200}
                      className="rounded-3xl shadow-2xl"
                      priority
                    />
                  </div>
                </div>
                SmartWhip<br />
                <span className="text-orange-500 italic">Cream Chargers in the UK</span>
              </h1>
              <p className="text-lg text-gray-600 font-medium leading-relaxed mb-8 max-w-2xl mx-auto">
                SmartWhip.org.uk supplies genuine SmartWhip 640g and 2kg nitrous oxide cylinders for legitimate culinary and catering use across the UK. Orders are placed via WhatsApp, email or Telegram and delivered directly — most deliveries arrive within 25 minutes. Browse our <Link href="/smartwhip-canisters" className="text-orange-500 underline underline-offset-2">canister options</Link> or enquire about <Link href="/smartwhip-wholesale" className="text-orange-500 underline underline-offset-2">wholesale pricing</Link>.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/smartwhip-canisters">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-2xl h-14 px-8 text-sm font-black uppercase tracking-widest">
                    Compare SmartWhip Canister Sizes
                  </Button>
                </Link>
                <Link href="/guides/what-is-smartwhip">
                  <Button variant="outline" className="rounded-2xl h-14 px-8 text-sm font-black uppercase tracking-widest border-2">
                    What is SmartWhip?
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Shop by Size */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-gray-900 tracking-tighter uppercase italic mb-3 text-center">Shop by Size</h2>
            <p className="text-gray-500 text-center mb-12 font-medium">Choose the right SmartWhip cylinder for your needs</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <Link href="/smartwhip-canisters" className="group">
                <div className="bg-gray-50 border border-gray-100 rounded-[2.5rem] p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-center">
                  <div className="text-5xl font-black text-orange-500 mb-2">640g</div>
                  <div className="text-sm font-black text-gray-400 uppercase tracking-widest mb-4">SmartWhip Cylinder</div>
                  <div className="text-3xl font-black text-gray-900 mb-2">£30</div>
                  <div className="text-xs text-green-600 font-bold uppercase tracking-widest mb-6">In Stock</div>
                  <p className="text-sm text-gray-500 font-medium mb-6">Suitable for professional kitchens and catering. Includes compatible nozzle. Most popular size.</p>
                  <div className="flex items-center justify-center gap-2 text-orange-500 font-black text-sm uppercase tracking-widest group-hover:gap-3 transition-all">
                    View 640g Canister <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
              <Link href="/smartwhip-2kg" className="group">
                <div className="bg-gray-900 rounded-[2.5rem] p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-center">
                  <div className="text-5xl font-black text-orange-500 mb-2">2kg</div>
                  <div className="text-sm font-black text-gray-400 uppercase tracking-widest mb-4">SmartWhip Cylinder</div>
                  <div className="text-3xl font-black text-white mb-2">POA</div>
                  <div className="text-xs text-green-400 font-bold uppercase tracking-widest mb-6">In Stock</div>
                  <p className="text-sm text-gray-400 font-medium mb-6">Ideal for high-volume commercial catering. Larger capacity for professional operations.</p>
                  <div className="flex items-center justify-center gap-2 text-orange-400 font-black text-sm uppercase tracking-widest group-hover:gap-3 transition-all">
                    View 2kg SmartWhip <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Professional Catering */}
        <section className="py-20 bg-gray-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-black text-gray-900 tracking-tighter uppercase italic mb-6">SmartWhip for Professional Catering</h2>
                <div className="text-gray-600 font-medium space-y-4">
                  <p>SmartWhip cylinders are designed for legitimate culinary applications. They are widely used in professional kitchens, restaurants, and catering operations for cream whipping, culinary foams, and espuma preparation.</p>
                  <p>Each cylinder connects to a compatible pressure regulator, allowing precise, controlled dispensing of food-grade nitrous oxide. Nozzles are included with every order — no additional equipment purchase required.</p>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Food-grade nitrous oxide (N2O)</li>
                    <li>Available in 640g and 2kg options</li>
                    <li>Nozzles included with every order</li>
                    <li>Suitable for professional and domestic culinary use</li>
                  </ul>
                </div>
                <div className="mt-6">
                  <Link href="/guides/what-is-smartwhip" className="text-orange-500 font-black text-sm underline underline-offset-4 uppercase tracking-widest">
                    New to the product? Read our guide: What is SmartWhip? →
                  </Link>
                </div>
              </div>
              <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
                <h3 className="text-xl font-black text-gray-900 mb-4 uppercase tracking-tighter italic">Also Available</h3>
                <p className="text-gray-600 mb-6 font-medium">We also stock FastGas and Cream Deluxe cylinders. View our brand pages for specifications, pricing and availability.</p>
                <div className="flex flex-col gap-3">
                  <Link href="/brands/fastgas" className="flex items-center justify-between bg-gray-50 p-4 rounded-2xl hover:bg-orange-50 transition-colors">
                    <span className="font-black text-gray-900">FastGas</span>
                    <ChevronRight className="h-4 w-4 text-orange-500" />
                  </Link>
                  <Link href="/brands/cream-deluxe" className="flex items-center justify-between bg-gray-50 p-4 rounded-2xl hover:bg-orange-50 transition-colors">
                    <span className="font-black text-gray-900">Cream Deluxe</span>
                    <ChevronRight className="h-4 w-4 text-orange-500" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wholesale */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-900 rounded-[3rem] p-12 md:p-16 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 blur-[150px] rounded-full opacity-10 -mr-48 -mt-48" />
              <div className="max-w-2xl relative">
                <h2 className="text-3xl font-black tracking-tighter uppercase italic mb-4">Wholesale Cases and Pallets</h2>
                <p className="text-gray-400 font-medium mb-6">We supply SmartWhip in bulk quantities to businesses and professional buyers. Cases contain 6 units. Pallet orders of 84 cases are available for high-volume requirements. Minimum order is 2 units.</p>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-white/10 rounded-2xl p-4 text-center">
                    <div className="text-2xl font-black text-orange-400">6x</div>
                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">Per Case</div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-4 text-center">
                    <div className="text-2xl font-black text-orange-400">84x</div>
                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">Cases / Pallet</div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-4 text-center">
                    <div className="text-2xl font-black text-orange-400">2x</div>
                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">Min Order</div>
                  </div>
                </div>
                <Link href="/smartwhip-wholesale">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-2xl h-14 px-8 text-sm font-black uppercase tracking-widest">
                    Request Wholesale SmartWhip Pricing →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Delivery */}
        <section className="py-20 bg-gray-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-black text-gray-900 tracking-tighter uppercase italic mb-4">UK Delivery Coverage</h2>
                <p className="text-gray-600 font-medium mb-4">Orders are placed via WhatsApp, email or Telegram. Once your order is confirmed, it is dispatched immediately. Most deliveries across the UK arrive within 25 minutes.</p>
                <p className="text-gray-600 font-medium mb-6">Delivery is free for most UK locations. Search your town below to check local availability, or visit our full <Link href="/delivery" className="text-orange-500 underline underline-offset-2 font-bold">delivery coverage page</Link>.</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-5 rounded-2xl border border-gray-100">
                    <div className="text-2xl font-black text-orange-500">25 min</div>
                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">Typical Delivery</div>
                  </div>
                  <div className="bg-white p-5 rounded-2xl border border-gray-100">
                    <div className="text-2xl font-black text-gray-900">Free</div>
                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">Most Locations</div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-black text-gray-900 uppercase tracking-tighter italic mb-4 text-lg">Buying Information</h3>
                <div className="space-y-3 text-sm text-gray-600 font-medium">
                  <div className="flex gap-3 items-start bg-white p-4 rounded-2xl border border-gray-100">
                    <span className="font-black text-orange-500 uppercase text-xs tracking-widest min-w-[80px]">Payment</span>
                    <span>PayPal (buyer protection), Revolut, Crypto accepted</span>
                  </div>
                  <div className="flex gap-3 items-start bg-white p-4 rounded-2xl border border-gray-100">
                    <span className="font-black text-orange-500 uppercase text-xs tracking-widest min-w-[80px]">Delivery</span>
                    <span>Free delivery for most UK locations</span>
                  </div>
                  <div className="flex gap-3 items-start bg-white p-4 rounded-2xl border border-gray-100">
                    <span className="font-black text-orange-500 uppercase text-xs tracking-widest min-w-[80px]">Returns</span>
                    <span>Valid returns and refunds accepted within 48 hours</span>
                  </div>
                  <div className="flex gap-3 items-start bg-white p-4 rounded-2xl border border-gray-100">
                    <span className="font-black text-orange-500 uppercase text-xs tracking-widest min-w-[80px]">Contact</span>
                    <span>apexsmartwhips@gmail.com | Part of ApexWhips</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-gray-900 tracking-tighter uppercase italic mb-10 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: 'What SmartWhip sizes are available?',
                  a: 'We stock SmartWhip in 640g and 2kg cylinder sizes. The 640g is the most popular option for both professional and domestic culinary use. The 2kg is better suited to high-volume commercial catering operations.'
                },
                {
                  q: 'Do you sell individual cylinders and cases?',
                  a: 'Yes. You can purchase individual cylinders or order by the case (6 units). Wholesale pallet pricing is also available — see our wholesale page for details.'
                },
                {
                  q: 'Where do you deliver?',
                  a: 'We deliver across the UK. Most deliveries arrive within 25 minutes of order confirmation. Visit our delivery page to check coverage for your specific area.'
                },
                {
                  q: 'Is wholesale pricing available?',
                  a: 'Yes. We supply cases, crates and full pallets to businesses and professional buyers. Contact us via WhatsApp, email or Telegram to request a wholesale quote.'
                },
                {
                  q: 'What equipment is required to use SmartWhip?',
                  a: 'No additional equipment is required for most orders — compatible nozzles are included with every order. For higher-output applications, a compatible pressure regulator may be needed.'
                },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h3 className="font-black text-gray-900 mb-2 uppercase tracking-tight text-sm">{item.q}</h3>
                  <p className="text-gray-500 font-medium text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Town Grid */}
        <section className="py-24 bg-gray-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <h2 className="text-4xl font-black text-gray-900 tracking-tighter uppercase italic">Check Your Area</h2>
                <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mt-2">SmartWhip Delivery Locations</p>
              </div>
              <Link href="/delivery" className="text-sm font-black text-orange-500 uppercase tracking-widest hover:underline">
                Check UK delivery coverage →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {displayedTowns.map((town) => (
                <Link href={`/towns/${town.id}`} key={town.id} className="group">
                  <Card className="h-full overflow-hidden border-none shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 rounded-[2.5rem] bg-white relative">
                    <div className="aspect-[4/5] relative overflow-hidden">
                      <Image
                        src="/IMG_1867.jpeg"
                        alt={`SmartWhip delivery in ${town.name}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-gray-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                      <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                        In Stock
                      </div>
                      <div className="absolute bottom-8 left-8 right-8 text-white">
                        <div className="flex items-center gap-2 text-orange-400 mb-2">
                          <MapPin className="h-4 w-4 fill-current" />
                          <span className="text-[10px] font-black uppercase tracking-[0.3em]">{town.admin}</span>
                        </div>
                        <h3 className="text-3xl font-black italic uppercase tracking-tighter leading-none mb-4">{town.name}</h3>
                      </div>
                    </div>
                    <CardContent className="p-8">
                      <div className="flex flex-col gap-1 mb-6">
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Single Canister</span>
                          <span className="text-xl font-black text-gray-900">£30</span>
                        </div>
                        <div className="h-px bg-gray-100 my-2" />
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] font-black text-orange-400 uppercase tracking-widest">Case Pack (6x)</span>
                          <span className="text-xl font-black text-orange-500">£130</span>
                        </div>
                      </div>
                      <Button className="w-full bg-gray-900 hover:bg-orange-600 text-white rounded-2xl h-14 text-sm font-black uppercase tracking-widest transition-colors flex items-center justify-center gap-2">
                        Order Now
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {loading && (
              <div className="mt-20 text-center">
                <div className="inline-flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-orange-500 animate-bounce" />
                  <div className="w-3 h-3 rounded-full bg-orange-500 animate-bounce [animation-delay:-.3s]" />
                  <div className="w-3 h-3 rounded-full bg-orange-500 animate-bounce [animation-delay:-.5s]" />
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-orange-500 p-2 rounded-xl">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <span className="ml-3 text-xl font-black tracking-tighter uppercase italic">SmartWhip UK</span>
              </div>
              <p className="text-gray-400 font-medium text-sm">
                Genuine SmartWhip 640g and 2kg culinary cream chargers supplied across the UK. Part of <a href="https://apexwhips.com" className="text-orange-400 hover:underline">ApexWhips</a>.
              </p>
            </div>
            <div>
              <h4 className="font-black uppercase tracking-widest text-xs text-gray-400 mb-4">Products</h4>
              <ul className="space-y-2 text-sm font-medium text-gray-400">
                <li><Link href="/smartwhip-canisters" className="hover:text-white transition-colors">SmartWhip Canisters</Link></li>
                <li><Link href="/smartwhip-2kg" className="hover:text-white transition-colors">2kg SmartWhip</Link></li>
                <li><Link href="/smartwhip-wholesale" className="hover:text-white transition-colors">Wholesale</Link></li>
                <li><Link href="/brands/fastgas" className="hover:text-white transition-colors">FastGas</Link></li>
                <li><Link href="/brands/cream-deluxe" className="hover:text-white transition-colors">Cream Deluxe</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black uppercase tracking-widest text-xs text-gray-400 mb-4">Information</h4>
              <ul className="space-y-2 text-sm font-medium text-gray-400">
                <li><Link href="/guides/what-is-smartwhip" className="hover:text-white transition-colors">What is SmartWhip?</Link></li>
                <li><Link href="/delivery" className="hover:text-white transition-colors">Delivery Coverage</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/responsible-use" className="hover:text-white transition-colors">Responsible Use</Link></li>
                <li><Link href="/returns" className="hover:text-white transition-colors">Returns & Refunds</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs font-bold uppercase tracking-[0.2em]">
            <p>© 2026 SmartWhip UK — Part of ApexWhips</p>
            <p>Contact: apexsmartwhips@gmail.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
