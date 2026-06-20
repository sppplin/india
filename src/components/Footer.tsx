import React from 'react';
import { Mail, Phone, MapPin, Heart, ArrowUp } from 'lucide-react';
import { ActiveView } from '../types';

interface FooterProps {
  setActiveView: (view: ActiveView) => void;
}

export default function Footer({ setActiveView }: FooterProps) {
  
  const handleLogoClick = () => {
    setActiveView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = 2026;

  return (
    <footer className="bg-[#14361E] text-gray-300 font-sans text-xs md:text-sm border-t border-emerald-950">
      
      {/* Top Footer Main Grids */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Description */}
        <div className="lg:col-span-3 md:col-span-1 space-y-4">
          <div 
            className="cursor-pointer group inline-block" 
            onClick={handleLogoClick}
          >
            <div className="bg-white p-2.5 rounded-lg shadow-sm border border-emerald-950/20 max-w-[180px] hover:shadow-md transition-all">
              <img 
                src="https://1l37nwyltkjspogd.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%2019%2C%202026%2C%2009_36_17%20AM.png" 
                alt="Yukon India - Premium Laboratory Glassware, Plasticware, and Instruments Manufacturer India" 
                className="h-10 w-auto object-contain block mx-auto"
                width="140"
                height="40"
              />
            </div>
          </div>
          <p className="text-gray-400 leading-relaxed font-light text-xs md:max-w-sm">
            Estd. 1993. A premier manufacturer and wholesale supplier of laboratory consumables, premium borosilicate 3.3 glassware, autocalvable polypropylene labwares, diagnostics reagents, and teaching scientific apparatuses across India.
          </p>
          <div className="flex flex-col gap-1.5 text-[10px] uppercase font-bold text-green-400">
            <span>● ISO 9001 Approved</span>
            <span>● MSME Registered</span>
            <span>● OEM Certified</span>
          </div>
        </div>

        {/* Center: Shop by Category */}
        <div className="lg:col-span-3 md:col-span-1 space-y-3.5">
          <h4 className="font-heading font-bold text-white uppercase text-xs tracking-wider border-b border-white/10 pb-1.5">
            Shop by Category
          </h4>
          <nav className="flex flex-col space-y-2.5 text-gray-400">
            <button 
              onClick={() => { setActiveView('petri-dish'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-left hover:text-white transition-colors text-xs flex items-start gap-2"
            >
              <span className="w-4 text-center shrink-0 text-slate-500">•</span>
              <span>Petri Dishes Range</span>
            </button>
            <button 
              onClick={() => { setActiveView('chemistry-lab-equipment'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-left hover:text-white transition-colors text-xs flex items-start gap-2"
            >
              <span className="w-4 text-center shrink-0 text-slate-500">•</span>
              <span>Chemistry Lab Equipment</span>
            </button>
            <button 
              onClick={() => { setActiveView('laboratory-glassware'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-left hover:text-white transition-colors text-xs flex items-start gap-2"
            >
              <span className="w-4 text-center shrink-0 text-slate-500">•</span>
              <span>Laboratory Glassware</span>
            </button>
            <button 
              onClick={() => { setActiveView('scientific-instruments'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-left hover:text-white transition-colors text-xs flex items-start gap-2"
            >
              <span className="w-4 text-center shrink-0 text-slate-500">•</span>
              <span>Scientific Instruments</span>
            </button>
            <button 
              onClick={() => { setActiveView('laboratory-equipment-distributor'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-left hover:text-white transition-colors text-xs flex items-start gap-2"
            >
              <span className="w-4 text-center shrink-0 text-slate-500">•</span>
              <span>Wholesale & Distribution</span>
            </button>
            <button 
              onClick={() => { setActiveView('laboratory-plasticware'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-left hover:text-white transition-colors text-xs flex items-start gap-2"
            >
              <span className="w-4 text-center shrink-0 text-slate-500">•</span>
              <span>Laboratory Plasticware</span>
            </button>
          </nav>
        </div>

        {/* Center: Quick Links - beautifully expanded to col-span-3 (no narrow squishing) */}
        <div className="lg:col-span-3 md:col-span-1 space-y-3.5">
          <h4 className="font-heading font-bold text-white uppercase text-xs tracking-wider border-b border-white/10 pb-1.5">
            Quick Links
          </h4>
          <nav className="flex flex-col space-y-2.5 text-gray-400">
            <button 
              onClick={() => { setActiveView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-left hover:text-white transition-colors text-xs flex items-start gap-2.5"
            >
              <span className="w-4 text-center shrink-0">🏠</span>
              <span>Home Overview</span>
            </button>
            <button 
              onClick={() => { setActiveView('products'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-left hover:text-white transition-colors text-xs flex items-start gap-2.5"
            >
              <span className="w-4 text-center shrink-0">📦</span>
              <span>Our Products</span>
            </button>
            <button 
              onClick={() => { setActiveView('blog'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-left hover:text-white transition-colors text-xs text-green-300 hover:text-white font-semibold flex items-start gap-2.5"
            >
              <span className="w-4 text-center shrink-0">📰</span>
              <span>Scientific Blog Index</span>
            </button>
            <button 
              onClick={() => { setActiveView('blog-post-delhi-ncr'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-left hover:text-white transition-colors text-xs hover:text-green-300 font-medium flex items-start gap-2.5 (no-wrap)"
            >
              <span className="w-4 text-center shrink-0">📁</span>
              <span>Delhi NCR Manufacturer Guide</span>
            </button>
            <button 
              onClick={() => { setActiveView('low-moq-beakers-bulk-supply'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-left hover:text-white transition-colors text-xs hover:text-green-300 font-medium flex items-start gap-2.5"
            >
              <span className="w-4 text-center shrink-0">📁</span>
              <span>Bulk Beakers Sourcing Guide</span>
            </button>
            <button 
              onClick={() => { setActiveView('pipette-manufacturer-india-moq-500'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-left hover:text-white transition-colors text-xs hover:text-green-300 font-medium flex items-start gap-2.5"
            >
              <span className="w-4 text-center shrink-0">📁</span>
              <span>Bulk Pipettes Sourcing Guide</span>
            </button>
            <button 
              onClick={() => { setActiveView('blood-collection-tube-supplier-delhi-moq-500'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-left hover:text-white transition-colors text-xs hover:text-green-300 font-medium flex items-start gap-2.5"
            >
              <span className="w-4 text-center shrink-0">📁</span>
              <span>Bulk Blood Tubes Sourcing Guide</span>
            </button>
            <button 
              onClick={() => { setActiveView('glass-beaker-supplier-delhi'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-left text-amber-300 hover:text-white transition-colors text-xs font-semibold flex items-start gap-2.5"
            >
              <span className="w-4 text-center shrink-0">🧪</span>
              <span>Glass Beaker Supplier in Delhi</span>
            </button>
            <button 
              onClick={() => { setActiveView('glass-beaker-manufacturer-india'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-left text-amber-300 hover:text-white transition-colors text-xs font-semibold flex items-start gap-2.5"
            >
              <span className="w-4 text-center shrink-0">🇮🇳</span>
              <span>Glass Beaker Manufacturer in India (Est. 1993)</span>
            </button>
            <button 
              onClick={() => { setActiveView('glass-beaker-supplier-kolkata'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-left text-teal-300 hover:text-white transition-colors text-xs font-semibold flex items-start gap-2.5"
            >
              <span className="w-4 text-center shrink-0">🧪</span>
              <span>Glass Beaker Supplier in Kolkata</span>
            </button>
            <button 
              onClick={() => { setActiveView('pipette-supplier-delhi'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-left text-teal-300 hover:text-white transition-colors text-xs font-semibold flex items-start gap-2.5"
            >
              <span className="w-4 text-center shrink-0">🧪</span>
              <span>Pipette Supplier in Delhi</span>
            </button>
            <button 
              onClick={() => { setActiveView('pipette-supplier-mumbai'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-left text-teal-300 hover:text-white transition-colors text-xs font-semibold flex items-start gap-2.5"
            >
              <span className="w-4 text-center shrink-0">🧪</span>
              <span>Pipette Supplier in Mumbai</span>
            </button>
            <button 
              onClick={() => { setActiveView('test-tube-manufacturer-delhi'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-left text-orange-200 hover:text-white transition-colors text-xs font-semibold flex items-start gap-2.5"
            >
              <span className="w-4 text-center shrink-0">🧪</span>
              <span>Test Tube Manufacturer in Delhi</span>
            </button>
            <button 
              onClick={() => { setActiveView('test-tube-manufacturer-mumbai'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-left text-orange-200 hover:text-white transition-colors text-xs font-semibold flex items-start gap-2.5"
            >
              <span className="w-4 text-center shrink-0">🧪</span>
              <span>Test Tube Manufacturer in Mumbai</span>
            </button>
            <button 
              onClick={() => { setActiveView('low-moq-test-tube-supplier'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-left text-orange-200 hover:text-white transition-colors text-xs font-semibold flex items-start gap-2.5"
            >
              <span className="w-4 text-center shrink-0">🧪</span>
              <span>Low MOQ Test Tube Supplier</span>
            </button>
            <button 
              onClick={() => { setActiveView('faq'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-left text-amber-300 hover:text-white transition-colors text-xs font-bold flex items-start gap-2.5"
            >
              <span className="w-4 text-center shrink-0">❓</span>
              <span>Frequently Asked Questions (FAQ)</span>
            </button>
            <button 
              onClick={() => { setActiveView('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-left hover:text-white transition-colors text-xs flex items-start gap-2.5"
            >
              <span className="w-4 text-center shrink-0">✉️</span>
              <span>Contact & Support</span>
            </button>
          </nav>
        </div>

        {/* Right: Contact Coordinates */}
        <div className="lg:col-span-3 md:col-span-1 space-y-3.5">
          <h4 className="font-heading font-bold text-white uppercase text-xs tracking-wider border-b border-white/10 pb-1.5">
            Institutional Office
          </h4>
          <div className="space-y-3 text-gray-400 text-xs leading-relaxed">
            <div className="flex items-start space-x-2.5">
              <Phone className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Call Helpline:</p>
                <a href="tel:+918447512326" className="hover:text-white transition-colors block mt-0.5">
                  +91 8447512326
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-2.5">
              <Mail className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Corporate Support Email:</p>
                <a href="mailto:yukonindia45@gmail.com" className="hover:text-white transition-colors block mt-0.5">
                  yukonindia45@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-2.5">
              <MapPin className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Fulfillment Center Address:</p>
                <p className="font-light text-gray-400 mt-0.5">
                  264, Gali No-5, Raghunathpuri, Baghu, Ghaziabad, Uttar Pradesh – 201001
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Footer Credits block */}
      <div className="bg-[#0b1f11] py-4 px-4 border-t border-emerald-950/25">
        <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row justify-between items-center text-center text-[10px] md:text-xs text-gray-500 gap-2 font-light">
          <p>
            © {currentYear} YUKON INDIA Corporation. All Rights Reserved.
          </p>
        </div>
      </div>
      
    </footer>
  );
}
