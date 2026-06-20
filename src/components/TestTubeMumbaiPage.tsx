import React, { useState } from 'react';
import { Phone, CheckCircle2, ArrowRight, ArrowLeft, Send, Sparkles, AlertCircle, HelpCircle, Building } from 'lucide-react';
import { ActiveView } from '../types';

interface TestTubeMumbaiPageProps {
  onNavigateToPage: (view: ActiveView) => void;
  onContactClick: () => void;
}

export default function TestTubeMumbaiPage({ onNavigateToPage, onContactClick }: TestTubeMumbaiPageProps) {
  // Local form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    institution: '',
    specifications: 'Borosilicate Glass Test Tubes (Plain/Graduated, Rimmed/Rimless with custom batch QA verification) - Mumbai Region',
    quantity: '5000 pcs',
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
      console.log('Mumbai Test Tube Inquiry Submitted:', formData);
    }, 800);
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
            West India Distribution Hub
          </span>
          <h1 className="font-heading font-black text-2xl md:text-3.5xl text-gray-900 leading-tight">
            Test Tube Manufacturer in Mumbai — High-Fidelity Pharma Glassware
          </h1>
          <p className="text-[#FC913A] font-extrabold text-xs tracking-widest uppercase font-mono">
            Supporting Mumbai Biotech, CROs & Pharma Labs with Direct OEM Logistics
          </p>
        </div>

        {/* FIRST PARAGRAPH */}
        <div className="prose max-w-none text-slate-800 text-sm md:text-base leading-relaxed font-sans font-light">
          <p>
            <strong>Yukon India Corporation</strong> is a test tube manufacturer in Mumbai's pharmaceutical and research supply chain, manufacturing borosilicate glass test tubes for pharma companies, contract research organizations, and diagnostic labs. Since 1993, we've supported Mumbai's pharmaceutical manufacturing base with consistent, in-house manufactured glassware — including for buyers who need smaller order quantities than typical bulk-only suppliers.
          </p>
        </div>

        {/* HIGH-CONVERTING CUSTOM B2B FORM - placed immediately after the first paragraph as requested */}
        <div className="bg-slate-50 border-2 border-emerald-800 p-5 md:p-6 rounded-xl shadow-md space-y-4">
          <div className="pb-3 border-b border-gray-200">
            <span className="text-[9px] uppercase tracking-widest font-black text-amber-600 flex items-center gap-1">
              <Sparkles className="w-3 h-3 fill-amber-500 text-amber-500 animate-pulse" />
              West India Priority Dispatch Sourcing Panel
            </span>
            <h3 className="font-heading font-bold text-gray-900 text-sm md:text-base mt-1 uppercase">
              Download Certificate Catalog & Request Wholesale Mumbai Shipping Rates
            </h3>
            <p className="text-[11px] text-gray-500 mt-0.5 font-light">
              Submit your diagnostics requirement list for instant catalog matching, volume discounts, and shockproof pallet delivery rates.
            </p>
          </div>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-250 p-6 rounded-lg text-center space-y-3">
              <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-xs border border-emerald-200">
                <CheckCircle2 className="w-6 h-6 stroke-[3px]" />
              </div>
              <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Mumbai Regional Inquiry Logged!</h4>
              <p className="text-[11.5px] text-gray-600 max-w-sm mx-auto leading-relaxed">
                Thank you! Our West India logistics coordination division is matching your specifications. A comprehensive quotation has been marked for <strong>{formData.phone}</strong>.
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
                  Your Full Name / QC Inspector <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Milind Kulkarni"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 h-[40px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-gray-800 bg-white"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold uppercase tracking-wider mb-1 text-[10px]">
                  Contact Mobile Number / WhatsApp <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98200 11223"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 h-[40px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-gray-800 bg-white"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold uppercase tracking-wider mb-1 text-[10px]">
                  Pharma Manufacturer / CRO / University Name in MH
                </label>
                <input
                  type="text"
                  placeholder="e.g. Abbott QC Lab / Tata Memorial / Haffkine"
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  className="w-full px-3 h-[40px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-gray-800 bg-white"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold uppercase tracking-wider mb-1 text-[10px]">
                  Required Quantity / Packaging Type <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 5000 pcs (12x100mm) / Carton packs"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="w-full px-3 h-[40px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-gray-800 bg-white placeholder-slate-400 font-semibold"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-gray-700 font-bold uppercase tracking-wider mb-1 text-[10px]">
                  Specific Call-out / Calibration requirements (Audit Trails, Glass grades or dimensions)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g., ISO 9001:2015 audit compliant certification sheets, 3.3 borosilicate glass formulation etc."
                  value={formData.specifications}
                  onChange={(e) => setFormData({ ...formData, specifications: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-gray-800 bg-white font-light text-xs"
                />
              </div>

              <div className="sm:col-span-2 bg-white border border-gray-150 p-2.5 rounded text-[10.5px] text-gray-500 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                <span>
                  All dispatches destined for West India are packed in heavy-duty multi-ply shockproof corrugated boxes and reinforced pallet wrapping to sustain highway transits safely.
                </span>
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full h-11 bg-[#1E4D2B] hover:bg-[#14361E] text-white uppercase tracking-wider font-extrabold rounded flex items-center justify-center gap-2 cursor-pointer shadow hover:shadow-md transition-all text-xs border border-transparent"
                >
                  <Send className="w-4 h-4 text-green-300" />
                  <span>{submitting ? 'Connecting with West India Sourcing Desk...' : 'Get Mumbai Test Tube Quote'}</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* REST OF CONTENT */}
        <div className="space-y-6 pt-4 font-sans border-t border-gray-100">
          
          {/* Segment 1: Manufacturing Capability */}
          <div className="space-y-3">
            <h2 className="font-heading font-black text-lg md:text-xl text-gray-950 uppercase tracking-tight flex items-center gap-2 border-b border-gray-100 pb-2">
              <span className="w-1.5 h-5 bg-[#1E4D2B] rounded-full inline-block shrink-0"></span>
              Manufacturing Capability of This Test Tube Manufacturer in Mumbai
            </h2>
            <div className="text-gray-700 text-xs md:text-sm leading-relaxed space-y-3 font-light">
              <p>
                As a test tube manufacturer in Mumbai's supply network, we produce plain and graduated borosilicate test tubes across standard sizes (12mm to 25mm diameter, 75mm to 200mm length), in rimmed and rimless options. Because we manufacture in-house rather than reselling, Mumbai buyers can request smaller trial batches before scaling to full production orders.
              </p>
            </div>
          </div>

          {/* Segment 2: Who We Supply */}
          <div className="space-y-3">
            <h2 className="font-heading font-black text-lg md:text-xl text-gray-950 uppercase tracking-tight flex items-center gap-2 border-b border-gray-100 pb-2">
              <span className="w-1.5 h-5 bg-[#1E4D2B] rounded-full inline-block shrink-0"></span>
              Who We Supply in Mumbai
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              <li className="flex items-center gap-2 bg-white px-3 py-2 rounded border border-gray-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                <span>Pharmaceutical manufacturers and contract research organizations (CROs)</span>
              </li>
              <li className="flex items-center gap-2 bg-white px-3 py-2 rounded border border-gray-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                <span>Diagnostic and pathology laboratory chains</span>
              </li>
              <li className="flex items-center gap-2 bg-white px-3 py-2 rounded border border-gray-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                <span>University and college science departments</span>
              </li>
              <li className="flex items-center gap-2 bg-white px-3 py-2 rounded border border-gray-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                <span>Biotech startups needing smaller initial orders</span>
              </li>
            </ul>
          </div>

          {/* Segment 3: Shipping to Mumbai */}
          <div className="space-y-3">
            <h2 className="font-heading font-black text-lg md:text-xl text-gray-950 uppercase tracking-tight flex items-center gap-2 border-b border-gray-100 pb-2">
              <span className="w-1.5 h-5 bg-[#1E4D2B] rounded-full inline-block shrink-0"></span>
              Shipping to Mumbai Metro
            </h2>
            <p className="text-gray-700 text-xs md:text-sm leading-relaxed font-light">
              As a pan-India test tube manufacturer serving Mumbai, orders are dispatched via established West India freight routes, with typical transit times of 3-5 working days. This includes support for express dispatches when urgent QC audit batches are required.
            </p>
          </div>

          {/* FAQ SECTION */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <h2 className="font-heading font-black text-lg md:text-xl text-gray-950 uppercase tracking-tight flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-emerald-800" />
              Frequently Asked Questions (Mumbai Region)
            </h2>

            <div className="space-y-3.5">
              <div className="bg-slate-50 border border-slate-150 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 text-xs md:text-sm uppercase tracking-wide">
                  Does this test tube manufacturer in Mumbai accept small orders?
                </h4>
                <p className="text-xs text-gray-600 mt-1 font-light leading-relaxed">
                  Yes. Yukon India accepts low minimum order quantities, suitable for CROs, startups, and labs sourcing smaller trial batches.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-150 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 text-xs md:text-sm uppercase tracking-wide">
                  What test tube sizes are supplied to Mumbai buyers?
                </h4>
                <p className="text-xs text-gray-600 mt-1 font-light leading-relaxed">
                  We provide plain and graduated borosilicate test tubes from 12mm to 25mm diameter and 75mm to 200mm length.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-150 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 text-xs md:text-sm uppercase tracking-wide">
                  How long does delivery to Mumbai take?
                </h4>
                <p className="text-xs text-gray-600 mt-1 font-light leading-relaxed">
                  Orders are typically dispatched within 3-5 working days via established West India freight routes from our Ghaziabad facility.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-150 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 text-xs md:text-sm uppercase tracking-wide">
                  Are the test tubes ISO certified?
                </h4>
                <p className="text-xs text-gray-600 mt-1 font-light leading-relaxed">
                  Yes. All test tubes are manufactured under ISO 9001 certified quality processes, important for pharmaceutical buyers requiring audit documentation.
                </p>
              </div>
            </div>
          </div>

          {/* Segment 4: Request a Quote Banner */}
          <div className="bg-emerald-950 text-white rounded-xl p-5 md:p-6 space-y-4">
            <div className="space-y-1">
              <span className="text-[9px] uppercase tracking-widest text-[#FCD34D] font-extrabold block">B2B Mumbai Portal</span>
              <h2 className="font-heading font-black text-sm md:text-base uppercase tracking-wider text-white">Direct Industrial Sourcing Schedulers</h2>
              <p className="text-xs text-gray-300 font-light">
                Call +91 84475 12326 or email yukonindia45@gmail.com with your required sizes and order volume, including small trial orders.
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
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
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
                  onNavigateToPage('test-tube-manufacturer-delhi');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center justify-between text-left px-3.5 py-3 text-xs font-semibold rounded bg-slate-100 hover:bg-[#1E4D2B]/5 border border-slate-200 hover:border-[#1E4D2B] text-gray-850 hover:text-[#1E4D2B] transition-all group cursor-pointer"
              >
                <span>Delhi Test Tube Manufacturer</span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#1E4D2B] transform group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => {
                  onNavigateToPage('low-moq-test-tube-supplier');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center justify-between text-left px-3.5 py-3 text-xs font-semibold rounded bg-slate-100 hover:bg-[#1E4D2B]/5 border border-slate-200 hover:border-[#1E4D2B] text-gray-850 hover:text-[#1E4D2B] transition-all group cursor-pointer"
              >
                <span>Low MOQ Test Tube Sourcing</span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#1E4D2B] transform group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => {
                  onNavigateToPage('pipette-supplier-mumbai');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center justify-between text-left px-3.5 py-3 text-xs font-semibold rounded bg-slate-100 hover:bg-[#1E4D2B]/5 border border-slate-200 hover:border-[#1E4D2B] text-gray-850 hover:text-[#1E4D2B] transition-all group cursor-pointer"
              >
                <span>Pipette Supplier in Mumbai</span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#1E4D2B] transform group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
