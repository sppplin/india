import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Layers, 
  Map, 
  Award, 
  Image as ImageIcon, 
  MapPin, 
  Video, 
  BookOpen, 
  Phone, 
  MessageSquare,
  Menu,
  X,
  PhoneCall,
  CircleHelp
} from 'lucide-react';
import { ActiveView } from '../types';

interface HeaderProps {
  activeView: ActiveView;
  setActiveView: (view: ActiveView) => void;
  onDownloadCatalog: () => void;
  onRequestCallback: () => void;
}

export default function Header({ 
  activeView, 
  setActiveView, 
  onDownloadCatalog, 
  onRequestCallback 
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, view: 'home' as ActiveView },
    { id: 'products', label: 'Products', icon: Layers, view: 'products' as ActiveView },
    { id: 'specializations', label: 'OEM Specializations', icon: Award, view: 'specializations' as ActiveView },
    { id: 'blog', label: 'Scientific Blog', icon: BookOpen, view: 'blog' as ActiveView },
    { id: 'faq', label: 'FAQ', icon: CircleHelp, view: 'faq' as ActiveView },
    { id: 'contact', label: 'Contact Us', icon: MessageSquare, view: 'contact' as ActiveView },
  ];

  // Ancillary anchors for smooth scroll when in Home
  const homeAnchors = [
    { target: 'our-products', label: 'Products', icon: Layers },
    { target: 'laboratory-glassware', label: 'Glassware', icon: BookOpen },
    { target: 'laboratory-plasticware', label: 'Plasticware', icon: Layers },
    { target: 'why-choose-us', label: 'Why Choose Us', icon: Award },
    { target: 'precious-clients', label: 'Clients', icon: ImageIcon },
    { target: 'industries-serve', label: 'Industries', icon: MapPin },
  ];

  const handleNavClick = (view: ActiveView) => {
    setActiveView(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAnchorClick = (targetId: string) => {
    setActiveView('home');
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 90; // Header offset
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[#E2E8F0] shadow-sm font-sans" id="app-header">
      {/* Top B2B Trust Bar - Ultra Slim */}
      <div className="bg-[#14361E] text-white text-[10px] md:text-[11.5px] font-medium py-1.5 px-4 md:px-6 shadow-[inset_0_-1px_0_rgba(255,255,255,0.1)]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 flex justify-between items-center gap-2">
          <div className="flex items-center gap-x-2 sm:gap-x-3 gap-y-1 overflow-hidden">
            <span className="flex items-center gap-1.5 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shrink-0"></span>
              <span className="text-gray-100 uppercase tracking-wider text-[9px] font-bold">Verified Manufacturer & Exporter</span>
            </span>
            <span className="text-white/30 hidden md:inline">|</span>
            <span className="text-gray-300 hidden sm:inline">ISO 9001:2015 Quality Certified</span>
            <span className="text-white/30 hidden md:inline">|</span>
            <span className="text-gray-300 font-semibold text-[#FCD34D] hidden md:inline">30+ Years Scientific Legacy</span>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a href="tel:+918447512326" className="flex items-center text-white hover:text-green-300 transition-colors font-bold tracking-wide">
              <Phone className="w-3 h-3 mr-1 text-green-400" />
              <span className="hidden sm:inline">Direct Sales:&nbsp;</span>+91 8447512326
            </a>
          </div>
        </div>
      </div>

      {/* Main IndiaMART-style Header Area - Ultra Clean & Slim */}
      <div className="border-b border-[#E2E8F0] bg-white">
        <div className="max-w-[1280px] mx-auto px-2 sm:px-4 md:px-6 py-2 md:py-3.5 flex items-center justify-between gap-1.5 xs:gap-3">
          
          {/* Logo, Brand, and Verified Seal (Mobile/Tablet) */}
          <div 
            className="flex lg:hidden items-center gap-2 cursor-pointer group shrink-0" 
            onClick={() => handleNavClick('home')}
          >
            {/* Real Official Image Logo with standardized proportions */}
            <img 
              src="https://1l37nwyltkjspogd.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%2019%2C%202026%2C%2009_36_17%20AM.png" 
              alt="Yukon India - ISO Certified Laboratory Glassware & Plasticware Supplier Noida Delhi NCR" 
              className="h-[48px] xs:h-[52px] sm:h-[56px] md:h-[60px] w-auto object-contain block" 
              width="210"
              height="64"
              fetchPriority="high"
              referrerPolicy="no-referrer"
            />
            {/* Minimal Verified badge alongside logo - sleek and compact */}
            <div className="hidden sm:flex flex-col">
              <span className="inline-flex items-center justify-center gap-0.5 px-1.5 py-0.5 rounded bg-blue-50 text-[#1E4D2B] text-[8px] md:text-[9.5px] font-extrabold uppercase tracking-widest border border-green-200">
                Verified OEM
              </span>
            </div>
          </div>

          {/* Logo, Brand, and Verified Seal (Desktop) - Enhanced, zoomed, left-aligned, no blank margin */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <div 
              className="cursor-pointer group relative overflow-hidden w-[185px] h-[64px]"
              onClick={() => handleNavClick('home')}
            >
              <img 
                src="https://1l37nwyltkjspogd.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%2019%2C%202026%2C%2009_36_17%20AM.png" 
                alt="Yukon India - ISO Certified Laboratory Glassware & Plasticware Supplier Noida Delhi NCR" 
                className="absolute left-[-26px] top-1/2 -translate-y-1/2 min-w-[250px] h-[74px] object-contain block group-hover:scale-[1.03] transition-transform duration-200" 
                width="250"
                height="74"
                fetchPriority="high"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Minimal Verified badge alongside logo - sleek and compact */}
            <div className="hidden lg:flex flex-col shrink-0">
              <span className="inline-flex items-center justify-center gap-0.5 py-1 px-2.5 rounded bg-blue-50 text-[#1E4D2B] text-[10px] font-extrabold uppercase tracking-widest border border-green-200 shadow-sm">
                Verified OEM
              </span>
            </div>
          </div>

          {/* Desktop Search / RFQ Quick Input (Middle) */}
          <div className="hidden lg:flex flex-1 max-w-sm xl:max-w-md mx-4">
            <div 
              onClick={onRequestCallback}
              className="w-full h-10 flex items-center bg-gray-50 border border-gray-300 hover:border-[#1E4D2B] rounded overflow-hidden cursor-pointer shadow-inner transition-colors group/search"
            >
              <div className="flex-1 px-3 text-xs text-gray-500 flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-gray-400 group-hover/search:text-[#1E4D2B] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
                <span className="whitespace-nowrap truncate">Search bulk glassware, plasticware...</span>
              </div>
              <button 
                type="button"
                className="bg-[#1E4D2B] hover:bg-[#14361E] text-white text-[11px] font-extrabold uppercase tracking-wider px-4 h-full flex items-center justify-center transition-colors shrink-0 whitespace-nowrap"
              >
                Inquire
              </button>
            </div>
          </div>

          {/* Right Compact CTA actions & menu controls */}
          <div className="flex items-center gap-2 xs:gap-3 md:gap-4 shrink-0">
            {/* Desktop Direct Callout details */}
            <div className="hidden md:block text-right">
              <p className="text-[9px] text-[#1E4D2B] font-extrabold uppercase tracking-widest leading-none whitespace-nowrap">B2B SALES UNIT</p>
              <a 
                href="tel:+918447512326" 
                className="text-sm xl:text-base font-black text-red-600 hover:text-red-700 mt-1 block flex items-center justify-end gap-1 whitespace-nowrap"
              >
                <PhoneCall className="w-3.5 h-3.5 text-red-500 animate-pulse shrink-0" />
                <span>+91 8447512326</span>
              </a>
            </div>

            {/* Slim WhatsApp CTA Action */}
            <a 
              href="https://wa.me/918447512326?text=Hi!%20I%20am%20interested%20in%20Yukon%20India%20laboratory%20equipment%20sourcing."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-[9.5px] md:text-xs font-bold uppercase tracking-wider px-2 sm:px-3 h-8.5 md:h-10 rounded shadow-sm hover:shadow-md transition-all whitespace-nowrap shrink-0"
              title="Chat on WhatsApp"
            >
              <svg className="w-4 h-4 text-white shrink-0 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.71 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>WhatsApp</span>
            </a>

            {/* Quick call for mobile lead ads conversion */}
            <a 
              href="tel:+918447512326"
              className="hidden xs:flex items-center gap-1 bg-[#1E4D2B] hover:bg-[#14361E] text-white text-[9.5px] sm:text-xs font-bold uppercase tracking-wider px-2 h-8.5 rounded shadow-sm md:hidden shrink-0"
            >
              <Phone className="w-3.5 h-3.5 animate-pulse text-green-300" />
              <span>Call Now</span>
            </a>

            {/* IndiaMART-style "Get Best Price" button for high lead conversion */}
            <button 
              type="button"
              onClick={onRequestCallback}
              className="bg-[#FC913A] hover:bg-orange-600 text-white text-[9.5px] md:text-xs font-black uppercase tracking-wider px-2 sm:px-3.5 md:px-5 h-8.5 md:h-10 rounded shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1 cursor-pointer border border-orange-500/10 whitespace-nowrap shrink-0"
            >
              <span className="hidden sm:inline">Get Best Price</span>
              <span className="sm:hidden">Get Price</span>
            </button>

            {/* Mobile hamburger button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="h-8.5 w-8.5 flex items-center justify-center md:hidden rounded border border-gray-300 bg-gray-50 text-gray-700 hover:text-[#1E4D2B] hover:bg-white transition-all shrink-0"
            >
              {mobileMenuOpen ? <X className="w-4.5 h-4.5" /> : <Menu className="w-4.5 h-4.5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Sub Navigation Bar (Desktop) - Clean & Centered */}
      <div className="hidden lg:block bg-[#F8FAFC] border-b border-[#E2E8F0] py-2.5">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 flex flex-col items-center justify-center gap-2.5">
          {/* Centered Primary Menu Navigation */}
          <nav className="flex items-center justify-center gap-1.5 animate-fadeIn">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeView === item.view;
              return (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => handleNavClick(item.view)}
                  className={`flex items-center px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all shrink-0 ${
                    isActive 
                      ? 'bg-[#1E4D2B] text-white shadow-sm' 
                      : 'text-gray-700 hover:text-[#1E4D2B] hover:bg-white border border-transparent hover:border-gray-200'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 mr-1.5 text-gray-400 shrink-0" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Centered Section for Quick Jump and Catalog */}
          {(activeView === 'home' || onDownloadCatalog) && (
            <div className="flex items-center justify-center gap-4.5 text-[11px] font-semibold text-gray-500 border-t border-gray-100 pt-2 w-full max-w-3xl">
              {activeView === 'home' && (
                <div className="flex items-center gap-2 hover:scale-[1.01] transition-transform">
                  <span className="text-[10px] uppercase tracking-widest font-extrabold text-[#1E4D2B]/85 whitespace-nowrap">Quick Jump:</span>
                  <div className="flex items-center gap-1">
                    {homeAnchors.map((anchor) => (
                      <button
                        type="button"
                        key={anchor.target}
                        onClick={() => handleAnchorClick(anchor.target)}
                        className="px-2.5 py-0.5 text-xs text-gray-700 hover:text-[#1E4D2B] hover:bg-white rounded border border-transparent hover:border-gray-200 transition-all font-semibold whitespace-nowrap shrink-0"
                      >
                        {anchor.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {activeView === 'home' && onDownloadCatalog && (
                <span className="text-gray-300 pointer-events-none">|</span>
              )}
              {onDownloadCatalog && (
                <button 
                  type="button"
                  onClick={onDownloadCatalog}
                  className="text-[#1E4D2B] hover:text-[#14361E] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 whitespace-nowrap shrink-0 hover:scale-[1.02] transition-transform"
                >
                  <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                  </svg>
                  <span>Download PDF Catalog</span>
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Drawer Overlay Backdrop */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-50 bg-[#0F172A]/50 backdrop-blur-[2px] transition-opacity duration-300 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Navigation Drawer Panel */}
      <div 
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-[290px] xs:max-w-[320px] bg-white h-full shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-out md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-4 py-3.5 border-b border-gray-150 bg-slate-50">
          <div className="flex items-center gap-2">
            <img 
              src="https://1l37nwyltkjspogd.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%2019%2C%202026%2C%2009_36_17%20AM.png" 
              alt="Yukon India Logo" 
              className="h-10 w-auto object-contain block" 
              width="130"
              height="40"
              referrerPolicy="no-referrer"
            />
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 hover:bg-red-50 text-gray-500 hover:text-red-600 transition-colors cursor-pointer border border-transparent hover:border-red-100"
            aria-label="Close menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-5">
          {/* Main List Navigation */}
          <div className="space-y-1.5">
            <p className="text-[9px] font-extrabold text-gray-400 uppercase tracking-widest px-2 mb-1.5">Corporate Directories</p>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeView === item.view;
              return (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => handleNavClick(item.view)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg border text-left transition-all ${
                    isActive 
                      ? 'bg-[#1E4D2B] text-white border-[#1E4D2B] font-bold shadow-xs' 
                      : 'border-slate-100 bg-white hover:bg-slate-50 text-gray-800'
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-[#1E4D2B]'}`} />
                  <span className="text-xs uppercase tracking-wider font-bold flex-1">{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>}
                </button>
              );
            })}
          </div>

          {/* Quick Anchor Jumps */}
          <div className="space-y-1.5 bg-slate-50 p-3 rounded-xl border border-gray-150">
            <p className="text-[9px] font-extrabold text-slate-500 uppercase tracking-widest leading-none mb-2">Scientific Range Jump</p>
            <div className="grid grid-cols-2 gap-1.5 text-xs">
              {homeAnchors.map((anchor) => {
                const AnchorIcon = anchor.icon;
                return (
                  <button
                    type="button"
                    key={anchor.target}
                    onClick={() => handleAnchorClick(anchor.target)}
                    className="flex items-center gap-1.5 text-left py-2 px-2 text-gray-700 hover:text-[#1E4D2B] bg-white rounded-md border border-gray-200 transition-all font-semibold text-[10.5px] truncate"
                  >
                    <AnchorIcon className="w-3.5 h-3.5 text-[#1E4D2B]/70 shrink-0" />
                    <span className="truncate">{anchor.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* B2B Legacy Card */}
          <div className="rounded-lg bg-emerald-950 p-3 text-white border border-emerald-900 shadow-sm relative overflow-hidden">
            <div className="absolute right-0 top-0 translate-x-3 -translate-y-3 w-16 h-16 rounded-full bg-white/5 pointer-events-none" />
            <p className="text-[8px] text-gray-300 font-bold uppercase tracking-widest">OEM Quality Certifications</p>
            <h4 className="text-xs font-black text-amber-300 mt-1">30+ Years Trust Legacy</h4>
            <p className="text-[10px] text-gray-200 leading-tight mt-1 font-light">
              Supplying ISO compliance laboratory diagnostics, borosilicate beakers & medical consumables PAN India.
            </p>
          </div>
        </div>

        {/* Drawer Action Desk Footer (sticky/pinned) */}
        <div className="p-4 bg-slate-50 border-t border-gray-150 space-y-2">
          {/* Direct Sales Link */}
          <a
            href="tel:+918447512326"
            className="w-full h-10.5 rounded bg-red-600 hover:bg-red-700 text-white flex items-center justify-center gap-2 text-xs font-black uppercase tracking-wider shadow-sm transition-all text-center"
          >
            <PhoneCall className="w-4 h-4 shrink-0 animate-bounce" />
            <span>Call +91-8447512326</span>
          </a>

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onRequestCallback();
            }}
            className="w-full h-10.5 bg-[#FC913A] hover:bg-orange-600 text-white text-xs font-black rounded uppercase tracking-wider shadow-xs transition-all cursor-pointer border border-transparent"
          >
            Get Best Quote
          </button>

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onDownloadCatalog();
            }}
            className="w-full h-10.5 bg-white border border-gray-300 hover:bg-slate-50 text-gray-700 text-xs font-black rounded uppercase tracking-wider shadow-xs transition-all"
          >
            Download PDF Catalog
          </button>
        </div>
      </div>
    </header>
  );
}
