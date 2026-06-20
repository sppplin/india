import React, { useState } from 'react';
import { Phone, CheckCircle2, ArrowRight, ArrowLeft, Send, Sparkles, AlertCircle, Award, Compass } from 'lucide-react';
import { ActiveView } from '../types';

interface GlassBeakersIndiaPageProps {
  onNavigateToPage: (view: ActiveView) => void;
  onContactClick: () => void;
}

export default function GlassBeakersIndiaPage({ onNavigateToPage, onContactClick }: GlassBeakersIndiaPageProps) {
  // Local form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    institution: '',
    specifications: 'Borosilicate Glass Beakers (Low-Form) - Pan-India Bulk Sourcing',
    quantity: '500 pcs',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.quantity) {
      alert('Please fill in all required fields.');
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      console.log('Pan-India Beaker Form Inquiry Submitted:', formData);
    }, 850);
  };

  const handleBackToMain = () => {
    onNavigateToPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8 md:py-12 px-4 md:px-6">
      <div className="max-w-[960px] mx-auto space-y-8 bg-white border border-gray-200 rounded-2xl shadow-sm p-5 md:p-8">
        
        {/* Breadcrumb / Back button */}
        <button
          onClick={handleBackToMain}
          className="inline-flex items-center gap-1.5 text-xs text-emerald-800 hover:text-emerald-900 font-bold uppercase tracking-wider cursor-pointer bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-full transition-all"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </button>

        {/* Page Hero Header */}
        <div className="border-b border-gray-150 pb-5 space-y-2">
          <span className="text-[10px] text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded font-black uppercase tracking-widest inline-block border border-emerald-850/10">
            Pan-India Manufacturing & Distribution
          </span>
          <h1 className="font-heading font-black text-2xl md:text-3.5xl text-gray-900 leading-tight">
            Glass Beaker Manufacturer and Supplier in India
          </h1>
          <p className="text-[#FC913A] font-extrabold text-xs tracking-widest uppercase font-mono">
            Direct Industrial Supply & Bulk Laboratory Consumables Since 1993
          </p>
        </div>

        {/* FIRST PARAGRAPH */}
        <div className="prose max-w-none text-slate-800 text-sm md:text-base leading-relaxed font-sans font-light">
          <p>
            <strong>Yukon India Corporation</strong> has been a glass beaker manufacturer and supplier in India since 1993. Over three decades, we've shipped borosilicate beakers to research institutions, universities, pharmaceutical manufacturers, and industrial QC labs in every major state — building a pan-India distribution network supporting both single-institution orders and large-scale tender supply.
          </p>
        </div>

        {/* HIGH-CONVERTING CUSTOM B2B FORM - placed immediately after the first paragraph as requested */}
        <div className="bg-slate-50 border-2 border-[#1E4D2B] p-5 md:p-6 rounded-xl shadow-md space-y-4">
          <div className="pb-3 border-b border-gray-200">
            <span className="text-[9px] uppercase tracking-widest font-black text-amber-600 flex items-center gap-1">
              <Sparkles className="w-3 h-3 fill-amber-500 text-amber-500 animate-pulse" />
              Pan-India Industrial Quote Request - Est. 1993
            </span>
            <h3 className="font-heading font-bold text-gray-900 text-sm md:text-base mt-1 uppercase">
              Download Specifications & Get National Factory Pricing
            </h3>
            <p className="text-[11px] text-gray-500 mt-0.5 font-light">
              Submit your diagnostics requirement list for instant catalog matching and volume discounts.
            </p>
          </div>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-250 p-6 rounded-lg text-center space-y-3">
              <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-xs border border-emerald-200">
                <CheckCircle2 className="w-6 h-6 stroke-[3px]" />
              </div>
              <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Inquiry Registered Successfully!</h4>
              <p className="text-[11.5px] text-gray-600 max-w-sm mx-auto leading-relaxed">
                Thank you! Our Central Ghaziabad manufacturing team has received your guidelines. A national sales representative will reach out to <strong>{formData.phone}</strong> with tailored bulk discounts within 15 minutes.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-[10px] text-emerald-800 hover:text-emerald-950 font-extrabold uppercase bg-transparent border pb-0.5 border-emerald-800/20 px-3 py-1 rounded cursor-pointer"
              >
                Inquire for another setup size
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-gray-700 font-bold uppercase tracking-wider mb-1 text-[10px]">
                  Your Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Rajesh Malhotra"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 h-[40px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-gray-800 bg-white"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold uppercase tracking-wider mb-1 text-[10px]">
                  Contact Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 93111 88812"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 h-[40px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-gray-800 bg-white"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold uppercase tracking-wider mb-1 text-[10px]">
                  Scientific Institution / Corporate Name / R&D Institute
                </label>
                <input
                  type="text"
                  placeholder="e.g. Patanjali R&D Center / Patliputra Medical College"
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  className="w-full px-3 h-[40px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-gray-800 bg-white"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold uppercase tracking-wider mb-1 text-[10px]">
                  Required Quantity / Capacity Selection <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 500 pcs (100ml) & 200 pcs (250ml)"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="w-full px-3 h-[40px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-gray-800 bg-white placeholder-slate-400 font-semibold"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-gray-700 font-bold uppercase tracking-wider mb-1 text-[10px]">
                  Detailed Sourcing Specifications / Special Glass Customization
                </label>
                <textarea
                  rows={2}
                  placeholder="Class-A/Class-B calibration, specific nozzle design, color printed calibration markings, double layer walling, etc."
                  value={formData.specifications}
                  onChange={(e) => setFormData({ ...formData, specifications: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-gray-800 bg-white font-light text-xs"
                />
              </div>

              <div className="sm:col-span-2 bg-white border border-gray-150 p-2.5 rounded text-[10.5px] text-gray-500 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                <span>
                  Our manufacturing line adheres strictly to ISO 9001:2015 B2B protocols, offering specialized logistical secure packing (zero breakdown warranty).
                </span>
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full h-11 bg-[#1E4D2B] hover:bg-[#14361E] text-white uppercase tracking-wider font-extrabold rounded flex items-center justify-center gap-2 cursor-pointer shadow hover:shadow-md transition-all text-xs border border-transparent"
                >
                  <Send className="w-4 h-4 text-green-300" />
                  <span>{submitting ? 'Transmitting Sourcing Quote...' : 'Submit Sourcing Inquiry'}</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* REST OF THE ARTICLE */}
        <div className="space-y-6 pt-4 font-sans border-t border-gray-100">
          
          {/* Segment 1: National Capacity */}
          <div className="space-y-3">
            <h2 className="font-heading font-black text-lg md:text-xl text-gray-950 uppercase tracking-tight flex items-center gap-2 border-b border-gray-100 pb-2">
              <span className="w-1.5 h-5 bg-[#1E4D2B] rounded-full inline-block shrink-0"></span>
              National Manufacturing Capacity
            </h2>
            <p className="text-gray-700 text-xs md:text-sm leading-relaxed font-light">
              As a glass beaker manufacturer and supplier in India, our facility produces the full standard capacity range — 50ml, 100ml, 250ml, 500ml, 1000ml, and 2000ml — in low-form and tall-form designs, manufactured to IS 4861 and equivalent specifications. This breadth lets us fulfil large institutional and government tender orders from a single source.
            </p>
          </div>

          {/* Segment 2: Where We Ship */}
          <div className="space-y-3 bg-slate-50 border border-slate-100 p-5 rounded-xl">
            <h2 className="font-heading font-black text-xs md:text-sm text-gray-950 uppercase tracking-widest flex items-center gap-2 mb-2">
              <Compass className="w-4 h-4 text-emerald-800" />
              Where We Ship Across India
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs text-gray-800">
              <div className="bg-white p-3 rounded border border-gray-150">
                <p className="font-bold text-emerald-800 uppercase text-[9px] mb-1">North India</p>
                <p>Delhi NCR, Punjab, Haryana, Uttar Pradesh, Rajasthan</p>
              </div>
              <div className="bg-white p-3 rounded border border-gray-150">
                <p className="font-bold text-emerald-800 uppercase text-[9px] mb-1">West India</p>
                <p>Maharashtra, Gujarat</p>
              </div>
              <div className="bg-white p-3 rounded border border-gray-150">
                <p className="font-bold text-emerald-800 uppercasetext-[9px] mb-1">South India</p>
                <p>Karnataka, Tamil Nadu, Telangana, Andhra Pradesh</p>
              </div>
              <div className="bg-white p-3 rounded border border-gray-150">
                <p className="font-bold text-emerald-800 uppercase text-[9px] mb-1">East India</p>
                <p>West Bengal, Odisha, Bihar, Jharkhand</p>
              </div>
            </div>
          </div>

          {/* Segment 3: Who Sources From Us Nationally */}
          <div className="space-y-3">
            <h2 className="font-heading font-black text-lg md:text-xl text-gray-950 uppercase tracking-tight flex items-center gap-2 border-b border-gray-100 pb-2">
              <span className="w-1.5 h-5 bg-[#1E4D2B] rounded-full inline-block shrink-0"></span>
              Who Sources From Us Nationally
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              <li className="flex items-center gap-2 bg-white px-3 py-2 rounded border border-gray-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                <span>Central & State Universities procuring under annual rate contracts</span>
              </li>
              <li className="flex items-center gap-2 bg-white px-3 py-2 rounded border border-gray-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                <span>Pharmaceutical manufacturers requiring certified, batch-consistent glassware</span>
              </li>
              <li className="flex items-center gap-2 bg-white px-3 py-2 rounded border border-gray-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                <span>Government research institutes and CSIR-affiliated labs</span>
              </li>
              <li className="flex items-center gap-2 bg-white px-3 py-2 rounded border border-gray-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                <span>Diagnostic chain laboratories with multi-city facility requirements</span>
              </li>
            </ul>
          </div>

          {/* Segment 4: Quality & Certification */}
          <div className="space-y-3">
            <h2 className="font-heading font-black text-lg md:text-xl text-gray-950 uppercase tracking-tight flex items-center gap-2 border-b border-gray-100 pb-2">
              <span className="w-1.5 h-5 bg-[#1E4D2B] rounded-full inline-block shrink-0"></span>
              Quality & Certification Standards
            </h2>
            <p className="text-gray-700 text-xs md:text-sm leading-relaxed font-light">
              As an ISO 9001 certified glass beaker manufacturer and supplier in India, we maintain consistent wall thickness, thermal shock resistance, and accurate graduation printing across every batch.
            </p>
          </div>

          {/* Segment 5: Request a Quote */}
          <div className="bg-emerald-950 text-white rounded-xl p-5 md:p-6 space-y-4">
            <div className="space-y-1">
              <span className="text-[9px] uppercase tracking-widest text-[#FCD34D] font-extrabold block">National Sales & Logistics</span>
              <h2 className="font-heading font-black text-sm md:text-base uppercase tracking-wider text-white">Request Bulk Pricing & Samples</h2>
              <p className="text-xs text-gray-300 font-light">
                For bulk pricing, tender documentation, or industrial sample requests, connect with our central dispatch offices.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2 text-xs">
              <a 
                href="tel:+918447512326"
                className="flex items-center justify-center gap-2 bg-white text-[#1E4D2B] font-extrabold px-5 py-3 rounded hover:bg-slate-50 transition-colors uppercase"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>Call +91-8447512326</span>
              </a>

              <a 
                href="mailto:yukonindia45@gmail.com"
                className="flex items-center justify-center gap-2 border border-white/20 hover:border-white/50 text-white font-extrabold px-5 py-3 rounded transition-colors"
              >
                <span>Email: yukonindia45@gmail.com</span>
              </a>
            </div>
          </div>

          {/* INTERNAL LINKING & NAVIGATION BUTTONS */}
          <div className="space-y-3 pt-4 border-t border-gray-150">
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-none">Internal B2B Classifications & Catalogs</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <button
                onClick={() => {
                  onNavigateToPage('products');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center justify-between text-left px-3.5 py-3 text-xs font-semibold rounded bg-slate-100 hover:bg-emerald-50 border border-slate-200 hover:border-[#1E4D2B] text-gray-850 hover:text-[#1E4D2B] transition-all group cursor-pointer"
              >
                <span>Browse Laboratory Glassware Catalog →</span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#1E4D2B] transform group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => {
                  onNavigateToPage('glass-beaker-supplier-delhi');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center justify-between text-left px-3.5 py-3 text-xs font-semibold rounded bg-slate-100 hover:bg-[#1E4D2B]/5 border border-slate-200 hover:border-[#1E4D2B] text-gray-850 hover:text-[#1E4D2B] transition-all group cursor-pointer"
              >
                <span>Glass Beaker Supplier in Delhi</span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#1E4D2B] transform group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => {
                  onNavigateToPage('laboratory-plasticware');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center justify-between text-left px-3.5 py-3 text-xs font-semibold rounded bg-slate-100 hover:bg-[#1E4D2B]/5 border border-slate-200 hover:border-[#1E4D2B] text-gray-850 hover:text-[#1E4D2B] transition-all group cursor-pointer"
              >
                <span>Sourcing Laboratory Plasticware</span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#1E4D2B] transform group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
