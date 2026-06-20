import React, { useState } from 'react';
import { ActiveView, QuoteFormData, ReviewFormData } from './types';
import Header from './components/Header';
import StickyQuoteForm from './components/StickyQuoteForm';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import GlasswareSection from './components/GlasswareSection';
import PlasticwareSection from './components/PlasticwareSection';
import WhyChooseUs from './components/WhyChooseUs';
import ClientSection from './components/ClientSection';
import IndustriesSection from './components/IndustriesSection';
import VirtualTour from './components/VirtualTour';
import AboutYukonIndia from './components/AboutYukonIndia';
import ContactSection from './components/ContactSection';
import ProductsPage from './components/ProductsPage';
import ContactPage from './components/ContactPage';
import SpecializationsPage from './components/SpecializationsPage';
import BlogPage from './components/BlogPage';
import FaqPage from './components/FaqPage';
import Footer from './components/Footer';
import SEOPageTemplate from './components/SEOPageTemplate';
import ReviewsModal from './components/ReviewsModal';
import GlassBeakersDelhiPage from './components/GlassBeakersDelhiPage';
import GlassBeakersIndiaPage from './components/GlassBeakersIndiaPage';
import GlassBeakersKolkataPage from './components/GlassBeakersKolkataPage';
import PipetteSupplierDelhiPage from './components/PipetteSupplierDelhiPage';
import PipetteSupplierMumbaiPage from './components/PipetteSupplierMumbaiPage';
import TestTubeDelhiPage from './components/TestTubeDelhiPage';
import TestTubeMumbaiPage from './components/TestTubeMumbaiPage';
import TestTubeLowMoqPage from './components/TestTubeLowMoqPage';
import FixedBottomBar from './components/FixedBottomBar';

// Dynamic SEO Infills
import Breadcrumbs from './components/Breadcrumbs';
import FaqSection from './components/FaqSection';
import ServiceAreasSection from './components/ServiceAreasSection';
import EnquiryModal from './components/EnquiryModal';

import { 
  X, 
  CheckCircle, 
  Download, 
  Loader2, 
  PhoneCall, 
  FileCheck,
  User,
  Building,
  Mail,
  Send,
  ShieldCheck
} from 'lucide-react';

export default function App() {
  const [activeView, setActiveView] = useState<ActiveView>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path.includes('/blog/lab-equipment-manufacturer-delhi-ncr') || path.includes('/blog-post-delhi-ncr')) return 'blog-post-delhi-ncr';
      if (path.includes('/blog/low-moq-beakers-bulk-supply') || path.includes('/low-moq-beakers-bulk-supply')) return 'low-moq-beakers-bulk-supply';
      if (path.includes('/blog/pipette-manufacturer-india-moq-500') || path.includes('/pipette-manufacturer-india-moq-500')) return 'pipette-manufacturer-india-moq-500';
      if (path.includes('/blog/blood-collection-tube-supplier-delhi-moq-500') || path.includes('/blood-collection-tube-supplier-delhi-moq-500')) return 'blood-collection-tube-supplier-delhi-moq-500';
      if (path.includes('/blog/surgical-gloves-manufacturer-india-low-moq') || path.includes('/surgical-gloves-manufacturer-india-low-moq')) return 'surgical-gloves-manufacturer-india-low-moq';
      if (path.includes('/blog/gem-vendor-registration-expert-delhi') || path.includes('/gem-vendor-registration-expert-delhi')) return 'gem-vendor-registration-expert-delhi';
      if (path.includes('/blog/gem-vendor-registration-expert-noida') || path.includes('/gem-vendor-registration-expert-noida')) return 'gem-vendor-registration-expert-noida';
      if (path.includes('/blog')) return 'blog';
      if (path.includes('/products')) return 'products';
      if (path.includes('/specializations')) return 'specializations';
      if (path.includes('/contact')) return 'contact';
      if (path.includes('/petri-dish')) return 'petri-dish';
      if (path.includes('/chemistry-lab-equipment')) return 'chemistry-lab-equipment';
      if (path.includes('/laboratory-glassware')) return 'laboratory-glassware';
      if (path.includes('/scientific-instruments')) return 'scientific-instruments';
      if (path.includes('/laboratory-equipment-distributor')) return 'laboratory-equipment-distributor';
      if (path.includes('/laboratory-plasticware')) return 'laboratory-plasticware';
    }
    return 'home';
  });

  const [activeCategory, setActiveCategory] = useState<string | undefined>(undefined);

  const handleSetActiveView = (view: ActiveView) => {
    setActiveView(view);
    if (view !== 'products') {
      setActiveCategory(undefined);
    }
    if (typeof window !== 'undefined') {
      let path = view === 'home' ? '/' : `/${view}`;
      if (view === 'blog-post-delhi-ncr') {
        path = '/blog/lab-equipment-manufacturer-delhi-ncr';
      }
      if (view === 'low-moq-beakers-bulk-supply') {
        path = '/blog/low-moq-beakers-bulk-supply';
      }
      if (view === 'pipette-manufacturer-india-moq-500') {
        path = '/blog/pipette-manufacturer-india-moq-500';
      }
      if (view === 'blood-collection-tube-supplier-delhi-moq-500') {
        path = '/blog/blood-collection-tube-supplier-delhi-moq-500';
      }
      if (view === 'surgical-gloves-manufacturer-india-low-moq') {
        path = '/blog/surgical-gloves-manufacturer-india-low-moq';
      }
      if (view === 'gem-vendor-registration-expert-delhi') {
        path = '/blog/gem-vendor-registration-expert-delhi';
      }
      if (view === 'gem-vendor-registration-expert-noida') {
        path = '/blog/gem-vendor-registration-expert-noida';
      }
      if (window.location.pathname !== path) {
        window.history.pushState(null, '', path);
      }
    }
  };

  const handleNavigateToCategory = (catId: string) => {
    setActiveCategory(catId);
    setActiveView('products');
    if (typeof window !== 'undefined') {
      if (window.location.pathname !== '/products') {
        window.history.pushState(null, '', '/products');
      }
    }
  };
  
    // Modal configurations
  const [modalType, setModalType] = useState<'none' | 'catalog' | 'callback' | 'success' | 'brochure'>('none');
  const [modalTitle, setModalTitle] = useState('');
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [callbackName, setCallbackName] = useState('');
  const [callbackPhone, setCallbackPhone] = useState('');
  const [enquiryProduct, setEnquiryProduct] = useState<{name: string, category: string} | null>(null);

  // Reviews Modal popup state
  const [reviewsModalOpen, setReviewsModalOpen] = useState(false);
  const [reviewsModalProductName, setReviewsModalProductName] = useState('');
  const [reviewsModalRating, setReviewsModalRating] = useState(4.9);
  const [reviewsModalCount, setReviewsModalCount] = useState(58);

  const handleOpenReviewsModal = (productName: string, rating: number, reviewsCount: number) => {
    setReviewsModalProductName(productName);
    setReviewsModalRating(rating);
    setReviewsModalCount(reviewsCount);
    setReviewsModalOpen(true);
  };

  // Brochure form state
  const [brochureName, setBrochureName] = useState('');
  const [brochureCompany, setBrochureCompany] = useState('');
  const [brochurePhone, setBrochurePhone] = useState('');
  const [brochureEmail, setBrochureEmail] = useState('');
  const [brochureCountryCode, setBrochureCountryCode] = useState('+91');

  // Handle various actions
  const handleDownloadCatalog = () => {
    setBrochureName('');
    setBrochureCompany('');
    setBrochurePhone('');
    setBrochureEmail('');
    setModalType('brochure');
  };

  const startCatalogDownloadSimulation = () => {
    setModalType('catalog');
    setDownloadProgress(10);
    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setModalType('success');
            setModalTitle('Corporate Credentials & Catalog Brochure compiled! Download complete. Please check downloaded files.');
            
            // Actually prompt a real downloadable mock file
            try {
              const element = document.createElement("a");
              const file = new Blob(["YUKON INDIA - B2B Corporate Credentials & Products Brochure\nEstablished 1993 - Verified Manufacturer & Exporter\n\nThank you for downloading our brochure. Our representative will contact you shortly."], {type: 'text/plain'});
              element.href = URL.createObjectURL(file);
              element.download = "YUKON_INDIA_B2B_Corporate_Brochure.txt";
              document.body.appendChild(element);
              element.click();
              document.body.removeChild(element);
            } catch (err) {
              console.error("Failed to generate file download", err);
            }

          }, 500);
          return 100;
        }
        return prev + 15;
      });
    }, 150);
  };

  const handleBrochureSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!brochureName || !brochureCompany || !brochurePhone) {
      alert("Please fill in all required fields.");
      return;
    }

    const fullPhone = `${brochureCountryCode} ${brochurePhone}`;
    
    // Construct rich whatsapp message for Credentials Brochure request
    const whatsappMessage = `YUKON INDIA Corporate Brochure Download Request

Full Name: ${brochureName}
Company/Institution: ${brochureCompany}
Contact Number: ${fullPhone}
${brochureEmail ? `Email Address: ${brochureEmail}` : ''}

I am downloading the Yukon India B2B Corporate Directory & Credentials Brochure. Please keep me updated with seasonal pricing, tier discount catalogs, and official OEM updates.`;

    const whatsappUrl = `https://wa.me/918447512326?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    // Proceed to compile and trigger simulated corporate brochure download
    startCatalogDownloadSimulation();
  };

  const handleDownloadCosting = () => {
    setModalType('catalog');
    setDownloadProgress(10);
    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setModalType('success');
            setModalTitle('Costsheet & Quotation List Processed Successfully!');
          }, 450);
          return 100;
        }
        return prev + 20;
      });
    }, 120);
  };

  const handleInstantCallbackRequest = () => {
    setModalType('callback');
    setCallbackName('');
    setCallbackPhone('');
  };

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!callbackName || !callbackPhone) return;
    setModalType('none');
    setTimeout(() => {
      setModalType('success');
      setModalTitle(`Callback Request Confirmed! Our sale consultant will ring ${callbackPhone} shortly.`);
    }, 300);
  };

  const handleStickyQuoteSubmit = (data: QuoteFormData) => {
    console.log("Sticky Quote Received: ", data);
    // StickyQuote handles its own local success animation state
  };

  const handleReviewSubmit = (review: ReviewFormData) => {
    console.log("Client Review logged: ", review);
    // ContactSection handles its own local success message
  };

  return (
    <div className="min-h-screen bg-white text-gray-700 flex flex-col font-sans selection:bg-[#1E4D2B] selection:text-white antialiased pb-16 sm:pb-20">
      
      {/* Universal header navigation banner */}
      <Header 
        activeView={activeView}
        setActiveView={handleSetActiveView}
        onDownloadCatalog={handleDownloadCatalog}
        onRequestCallback={handleInstantCallbackRequest}
      />

      {/* Main body viewport with Dynamic Breadcrumbs */}
      <Breadcrumbs activeView={activeView} setActiveView={handleSetActiveView} />

      <main className="flex-1">
        {activeView === 'home' && (
          <div className="w-full">
            {/* 1. Hero Block spans full width */}
            <HeroSection 
              onContactClick={() => {
                const contactEl = document.getElementById('contact-us-section');
                if (contactEl) {
                  contactEl.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              onCallClick={handleInstantCallbackRequest}
            />

            {/* Direct Stack of Beautiful Full-Bleed Sections */}
            <div className="w-full space-y-0">
              
              {/* 1. Pricing / Product Matrices - FIRST FOR IMMEDIATE SCROLL DISCOVERY */}
              <ProductsSection 
                onContactClick={() => {
                  const el = document.getElementById('contact-us-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                onDownloadCosting={handleDownloadCosting}
                onNavigateToPage={(view) => handleSetActiveView(view)}
                onProductEnquiry={(name, category) => setEnquiryProduct({ name, category })}
                onReviewClick={handleOpenReviewsModal}
              />

              {/* 2. Welcome/About Section */}
              <AboutSection onDownloadCatalog={handleDownloadCatalog} />

              {/* 4. Masterplan / Glassware showcase */}
              <GlasswareSection onDownloadSpec={handleDownloadCatalog} />

              {/* 5. Floorplan / Plasticware specification sheets */}
              <PlasticwareSection onDownloadSpec={handleDownloadCatalog} />

              {/* 6. Amenities / Why Choose Us */}
              <WhyChooseUs onDownloadBrochure={handleDownloadCatalog} />

              {/* 7. Gallery / Client list credentials */}
              <ClientSection onDownloadClientsList={handleDownloadCatalog} />

              {/* 8. Connectivity / Coverage & Industries we serve */}
              <IndustriesSection onGetDirections={() => {
                setModalType('success');
                setModalTitle('All 24 distribution hubs verified across Western India & Delhi NCR.');
              }} />

              {/* 9. Virtual Tour Action */}
              <VirtualTour onContactClick={() => {
                const el = document.getElementById('contact-us-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }} />

              {/* 10. Brand biography / MSME Accreditation */}
              <AboutYukonIndia onChatClick={() => {
                setModalType('success');
                setModalTitle('Redirecting to live scientific sales chat via WhatsApp (+91 8447512326).');
              }} />

              {/* 11. Service Areas Card Grid Section */}
              <ServiceAreasSection setActiveView={handleSetActiveView} />

              {/* 12. FAQ Accordion Grid Section */}
              <FaqSection />

              {/* 13. Combined Split Contact & RFQ Center */}
              <div id="contact-us-section" className="bg-[#F8F9F8] py-14 border-t border-b border-gray-200">
                <div className="max-w-[1280px] mx-auto px-4 md:px-6">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left Column: Direct Address cards and Testimonial Write form */}
                    <div className="lg:col-span-8">
                      <ContactSection onSubmitReview={handleReviewSubmit} />
                    </div>

                    {/* Right Column: Prominent Sticky Quote Form for high lead priority */}
                    <div className="lg:col-span-4 bg-white p-6 rounded-xl border border-gray-200/90 shadow-lg sticky top-28">
                      <div className="pb-3 border-b border-gray-150 mb-5 text-center">
                        <span className="text-[10px] uppercase tracking-widest text-[#1E4D2B] font-bold">Noida HQ Dispatch</span>
                        <h3 className="font-heading font-black text-[#1A1A1A] text-base uppercase mt-1">Get Factory Pricing</h3>
                        <p className="text-[11px] text-gray-400 mt-1">Get custom rates and material spec-sheets inside 15 minutes.</p>
                      </div>
                      <StickyQuoteForm onSubmit={handleStickyQuoteSubmit} title="Direct B2B Quote" buttonText="Request Corporate Quote" />
                    </div>

                  </div>
                </div>
              </div>

            </div>

            {/* Premium Floater Lead Form (Desktop Only) - slides into view in corner without squeezing sections */}
            <div className="hidden xl:block fixed right-6 bottom-6 z-40 w-[310px] bg-white rounded-lg border border-gray-200 shadow-2xl overflow-hidden animate-fadeIn">
              <div className="bg-[#1E4D2B] text-white px-4 py-2.5 text-xs font-black uppercase tracking-wider flex justify-between items-center">
                <span>⚡ Factory Rate RFQ</span>
                <span className="text-[9px] bg-amber-400 text-gray-950 px-1.5 py-0.5 rounded font-black">Direct Sales</span>
              </div>
              <div className="p-4 bg-slate-50 border-b border-gray-100">
                <p className="text-[10px] text-gray-500 font-semibold leading-normal">
                  Inquire wholesale glass, plasticware and diagnostic instruments directly from Delhi NCR yard.
                </p>
              </div>
              <div className="p-4 max-h-[380px] overflow-y-auto">
                <StickyQuoteForm onSubmit={handleStickyQuoteSubmit} title="Get Best Quotation" buttonText="⚡ Submit RFQ Now" />
              </div>
            </div>
          </div>
        )}

        {/* Dedicated Secondary view routes */}
        {activeView === 'products' && (
          <ProductsPage 
            initialCategory={activeCategory}
            onContactClick={() => handleSetActiveView('contact')}
            onDownloadCatalog={handleDownloadCatalog}
            onNavigateToPage={(view) => handleSetActiveView(view)}
            onProductEnquiry={(name, category) => setEnquiryProduct({ name, category })}
            onReviewClick={handleOpenReviewsModal}
          />
        )}

        {activeView === 'specializations' && (
          <SpecializationsPage
            onNavigateToCategory={handleNavigateToCategory}
            onDownloadCatalog={handleDownloadCatalog}
            onContactClick={() => handleSetActiveView('contact')}
          />
        )}

        {activeView === 'contact' && (
          <ContactPage />
        )}

        {activeView === 'faq' && (
          <FaqPage 
            onNavigateToPage={(view) => handleSetActiveView(view)}
            onRequestCallback={handleInstantCallbackRequest}
          />
        )}

        {['blog', 'blog-post-delhi-ncr', 'low-moq-beakers-bulk-supply', 'pipette-manufacturer-india-moq-500', 'blood-collection-tube-supplier-delhi-moq-500', 'surgical-gloves-manufacturer-india-low-moq', 'gem-vendor-registration-expert-delhi', 'gem-vendor-registration-expert-noida'].includes(activeView) && (
          <BlogPage 
            currentView={activeView}
            onNavigateToPage={(view) => handleSetActiveView(view)}
            onContactClick={() => {
              const el = document.getElementById('contact-us-section');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              } else {
                handleSetActiveView('contact');
              }
            }}
          />
        )}

        {['petri-dish', 'chemistry-lab-equipment', 'laboratory-glassware', 'scientific-instruments', 'laboratory-equipment-distributor', 'laboratory-plasticware'].includes(activeView) && (
          <SEOPageTemplate 
            slug={activeView}
            onRequestQuote={() => handleSetActiveView('contact')}
            onRequestCallback={handleInstantCallbackRequest}
            onNavigateToPage={(view) => handleSetActiveView(view)}
          />
        )}

        {activeView === 'glass-beaker-supplier-delhi' && (
          <GlassBeakersDelhiPage 
            onNavigateToPage={(view) => handleSetActiveView(view)}
            onContactClick={() => {
              const el = document.getElementById('contact-us-section');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              } else {
                handleSetActiveView('contact');
              }
            }}
          />
        )}

        {activeView === 'glass-beaker-manufacturer-india' && (
          <GlassBeakersIndiaPage 
            onNavigateToPage={(view) => handleSetActiveView(view)}
            onContactClick={() => {
              const el = document.getElementById('contact-us-section');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              } else {
                handleSetActiveView('contact');
              }
            }}
          />
        )}

        {activeView === 'glass-beaker-supplier-kolkata' && (
          <GlassBeakersKolkataPage 
            onNavigateToPage={(view) => handleSetActiveView(view)}
            onContactClick={() => {
              const el = document.getElementById('contact-us-section');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              } else {
                handleSetActiveView('contact');
              }
            }}
          />
        )}

        {activeView === 'pipette-supplier-delhi' && (
          <PipetteSupplierDelhiPage 
            onNavigateToPage={(view) => handleSetActiveView(view)}
            onContactClick={() => {
              const el = document.getElementById('contact-us-section');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              } else {
                handleSetActiveView('contact');
              }
            }}
          />
        )}

        {activeView === 'pipette-supplier-mumbai' && (
          <PipetteSupplierMumbaiPage 
            onNavigateToPage={(view) => handleSetActiveView(view)}
            onContactClick={() => {
              const el = document.getElementById('contact-us-section');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              } else {
                handleSetActiveView('contact');
              }
            }}
          />
        )}

        {activeView === 'test-tube-manufacturer-delhi' && (
          <TestTubeDelhiPage 
            onNavigateToPage={(view) => handleSetActiveView(view)}
            onContactClick={() => {
              const el = document.getElementById('contact-us-section');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              } else {
                handleSetActiveView('contact');
              }
            }}
          />
        )}

        {activeView === 'test-tube-manufacturer-mumbai' && (
          <TestTubeMumbaiPage 
            onNavigateToPage={(view) => handleSetActiveView(view)}
            onContactClick={() => {
              const el = document.getElementById('contact-us-section');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              } else {
                handleSetActiveView('contact');
              }
            }}
          />
        )}

        {activeView === 'low-moq-test-tube-supplier' && (
          <TestTubeLowMoqPage 
            onNavigateToPage={(view) => handleSetActiveView(view)}
            onContactClick={() => {
              const el = document.getElementById('contact-us-section');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              } else {
                handleSetActiveView('contact');
              }
            }}
          />
        )}
      </main>

      {/* Footer across all tabs */}
      <Footer setActiveView={handleSetActiveView} />

      {/* Modal system (Catalog Loader, Callback popups) */}
      {modalType !== 'none' && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 animate-fadeIn">
          
          {/* Catalog Downloader overlay */}
          {modalType === 'catalog' && (
            <div className="bg-white rounded-lg p-6 max-w-sm w-full border border-gray-150 text-center space-y-4 shadow-xl">
              <div className="w-12 h-12 bg-[#1E4D2B]/10 rounded-full flex items-center justify-center text-[#1E4D2B] mx-auto animate-bounce">
                <Download className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-gray-900 text-base uppercase tracking-wider">
                Compiling Specifications Catalog
              </h3>
              <p className="text-xs text-gray-400 font-light max-w-xs mx-auto">
                Assembling volumetric certs, product numbers, and transport safety datasheets...
              </p>
              
              {/* Progress bar */}
              <div className="space-y-1">
                <div className="w-full bg-gray-100 h-2 rounded overflow-hidden">
                  <div 
                    className="bg-primary h-full rounded transition-all duration-150" 
                    style={{ width: `${downloadProgress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-[11px] text-gray-400 font-bold">
                  <span>Transfer speed: 12MB/s</span>
                  <span>{downloadProgress}%</span>
                </div>
              </div>
            </div>
          )}

          {/* Regular Call back form */}
          {modalType === 'callback' && (
            <div className="bg-white rounded-lg p-6 max-w-sm w-full border border-gray-150 relative shadow-xl">
              <button 
                onClick={() => setModalType('none')}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-900"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center space-y-2 pb-3 mb-4 border-b border-gray-100">
                <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 mx-auto">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-gray-900 text-sm md:text-base uppercase tracking-wide">
                  Request Instant Callback
                </h3>
                <p className="text-[11px] text-gray-400">Our customer support returns calls in under 15 minutes.</p>
              </div>

              <form onSubmit={handleCallbackSubmit} className="space-y-4 text-xs font-sans">
                <div>
                  <label className="block text-gray-700 font-bold uppercase tracking-wider mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Raghav Deshmukh"
                    value={callbackName}
                    onChange={(e) => setCallbackName(e.target.value)}
                    className="w-full px-3 h-10 border border-gray-300 rounded text-xs focus:ring-1 focus:ring-primary focus:border-primary text-gray-800"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold uppercase tracking-wider mb-1">Callback Mobile Number</label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    placeholder="10-digit mobile (e.g. 9876543210)"
                    value={callbackPhone}
                    onChange={(e) => setCallbackPhone(e.target.value)}
                    className="w-full px-3 h-10 border border-gray-300 rounded text-xs focus:ring-1 focus:ring-primary focus:border-primary text-gray-800"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full h-10 bg-amber-600 hover:bg-amber-700 text-white rounded text-xs font-semibold uppercase tracking-wider transition-colors shadow"
                >
                  Call Me Back Now
                </button>
              </form>
            </div>
          )}

          {/* Credentials & Corporate Brochure download form */}
          {modalType === 'brochure' && (
            <div className="bg-white rounded-lg p-6 max-w-sm w-full border border-gray-150 relative shadow-xl">
              <button 
                onClick={() => setModalType('none')}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-905 cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center space-y-2 pb-3 mb-4 border-b border-gray-100">
                <div className="w-10 h-10 bg-[#1E4D2B]/10 rounded-full flex items-center justify-center text-[#1E4D2B] mx-auto animate-pulse">
                  <Download className="w-5 h-5 pointer-events-none" />
                </div>
                <h3 className="font-heading font-black text-gray-900 text-xs sm:text-sm uppercase tracking-wider">
                  Download Credentials Brochure
                </h3>
                <p className="text-[11px] text-gray-400">Please provide your details to retrieve Yukon India's complete B2B directory.</p>
              </div>

              <form onSubmit={handleBrochureSubmit} className="space-y-3.5 text-xs font-sans">
                <div>
                  <label className="block text-gray-700 font-bold uppercase tracking-wider text-[9px] mb-1">
                    Contact Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-2.5 flex items-center text-gray-400 pointer-events-none">
                      <User className="w-3.5 h-3.5" />
                    </span>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Raghav Deshmukh"
                      value={brochureName}
                      onChange={(e) => setBrochureName(e.target.value)}
                      className="w-full pl-8 pr-3 h-[34px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#1E4D2B] focus:border-[#1E4D2B] text-gray-800 text-[11px]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-bold uppercase tracking-wider text-[9px] mb-1">
                    Company / Institution <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-2.5 flex items-center text-gray-400 pointer-events-none">
                      <Building className="w-3.5 h-3.5" />
                    </span>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Diagnostics laboratory / University"
                      value={brochureCompany}
                      onChange={(e) => setBrochureCompany(e.target.value)}
                      className="w-full pl-8 pr-3 h-[34px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#1E4D2B] focus:border-[#1E4D2B] text-gray-800 text-[11px]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-bold uppercase tracking-wider text-[9px] mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex space-x-1">
                    <select
                      value={brochureCountryCode}
                      onChange={(e) => setBrochureCountryCode(e.target.value)}
                      className="w-[60px] border border-gray-300 bg-white h-[34px] rounded text-[10px] px-1 focus:outline-none focus:ring-1 focus:ring-[#1E4D2B] focus:border-[#1E4D2B] text-gray-850"
                    >
                      <option value="+91">+91</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                      <option value="+971">+971</option>
                    </select>
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      placeholder="10-Digit Mobile"
                      value={brochurePhone}
                      onChange={(e) => setBrochurePhone(e.target.value)}
                      className="flex-1 min-w-0 px-2.5 h-[34px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#1E4D2B] focus:border-[#1E4D2B] text-gray-800 text-[11px]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-bold uppercase tracking-wider text-[9px] mb-1">
                    Email Address <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-2.5 flex items-center text-gray-400 pointer-events-none">
                      <Mail className="w-3.5 h-3.5" />
                    </span>
                    <input
                      type="email"
                      placeholder="procurement@organization.com"
                      value={brochureEmail}
                      onChange={(e) => setBrochureEmail(e.target.value)}
                      className="w-full pl-8 pr-3 h-[34px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#1E4D2B] focus:border-[#1E4D2B] text-gray-800 text-[11px]"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full h-10 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded font-extrabold uppercase tracking-wider text-[11px] transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send details & download</span>
                  </button>
                </div>

                <div className="flex items-center justify-center gap-1 text-[9px] text-gray-400 font-medium pt-1 select-none">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Direct WhatsApp B2B Connection. Not recorded online.</span>
                </div>
              </form>
            </div>
          )}

          {/* General success confirmation modal */}
          {modalType === 'success' && (
            <div className="bg-white rounded-lg p-6 max-w-sm w-full border border-gray-150 text-center space-y-4 shadow-xl">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto scale-110">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-gray-900 text-base tracking-wide">
                Operation Successful!
              </h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed max-w-xs mx-auto">
                {modalTitle}
              </p>
              
              <button
                onClick={() => setModalType('none')}
                className="w-full py-2 bg-[#1E4D2B] hover:bg-[#14361E] rounded text-white text-xs uppercase tracking-wider font-semibold transition"
              >
                Close Window
              </button>
            </div>
          )}

        </div>
      )}

      {/* Enquiry Modal with Automated message and Whatsapp redirection */}
      <EnquiryModal 
        isOpen={enquiryProduct !== null}
        onClose={() => setEnquiryProduct(null)}
        productName={enquiryProduct?.name || ''}
        categoryName={enquiryProduct?.category || ''}
      />

      {/* Reviews Modal Popup showcasing real human-written testimonials */}
      <ReviewsModal 
        isOpen={reviewsModalOpen}
        onClose={() => setReviewsModalOpen(false)}
        productName={reviewsModalProductName}
        rating={reviewsModalRating}
        reviewsCount={reviewsModalCount}
      />

      {/* Floating Action Hotline Footer */}
      <FixedBottomBar />

    </div>
  );
}
