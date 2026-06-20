import React, { useState } from 'react';
import { Phone, CheckCircle2, ArrowRight, ArrowLeft, Send, Sparkles, AlertCircle, HelpCircle, Compass } from 'lucide-react';
import { ActiveView } from '../types';

interface TestTubeLowMoqPageProps {
  onNavigateToPage: (view: ActiveView) => void;
  onContactClick: () => void;
}

export default function TestTubeLowMoqPage({ onNavigateToPage, onContactClick }: TestTubeLowMoqPageProps) {
  // Local form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    institution: '',
    specifications: 'Low MOQ Borosilicate Glass Test Tubes - Plain / Graduated / Specs Matching',
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
      console.log('Low MOQ Test Tube Sourcing Inquiry Submit:', formData);
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
            Flexible Sourcing Desk
          </span>
          <h1 className="font-heading font-black text-2xl md:text-3.5xl text-gray-900 leading-tight">
            Low MOQ Test Tube Supplier — Flexible Batch Glassware
          </h1>
          <p className="text-[#FC913A] font-extrabold text-xs tracking-widest uppercase font-mono">
            Optimized Production Schedules Accommodating Small and Trial Orders
          </p>
        </div>

        {/* FIRST PARAGRAPH */}
        <div className="prose max-w-none text-slate-800 text-sm md:text-base leading-relaxed font-sans font-light">
          <p>
            <strong>Yukon India Corporation</strong> is a low MOQ test tube supplier, manufacturing borosilicate glass test tubes for buyers who don't need — or can't commit to — the bulk-only minimum order quantities most manufacturers require. If you've been turned away by suppliers demanding large minimum orders, our in-house manufacturing setup is built to accommodate smaller quantities.
          </p>
        </div>

        {/* HIGH-CONVERTING CUSTOM B2B FORM - placed immediately after the first paragraph as requested */}
        <div className="bg-slate-50 border-2 border-emerald-800 p-5 md:p-6 rounded-xl shadow-md space-y-4">
          <div className="pb-3 border-b border-gray-200">
            <span className="text-[9px] uppercase tracking-widest font-black text-amber-600 flex items-center gap-1">
              <Sparkles className="w-3 h-3 fill-amber-500 text-amber-500 animate-pulse" />
              Sourcing Setup - Low MCQ Inquiries Schedulers
            </span>
            <h3 className="font-heading font-bold text-gray-900 text-sm md:text-base mt-1 uppercase">
              Get Straightforward Pricing for Your Exact Custom Quantity
            </h3>
            <p className="text-[11px] text-gray-500 mt-0.5 font-light">
              Submit your bespoke specifications even if they are below traditional industry minimums.
            </p>
          </div>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-250 p-6 rounded-lg text-center space-y-3">
              <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-xs border border-emerald-200">
                <CheckCircle2 className="w-6 h-6 stroke-[3px]" />
              </div>
              <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Small-Batch Inquiry Registered!</h4>
              <p className="text-[11.5px] text-gray-600 max-w-sm mx-auto leading-relaxed">
                Thank you! We've accommodated your inquiry into our upcoming central manufacturing schedule. A rate sheet has been dispatched for <strong>{formData.phone}</strong>.
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
                  Your Name / Sourcing Lead <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priyanjali Sen"
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
                  placeholder="e.g. +91 84475 xxxxx"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 h-[40px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-gray-800 bg-white"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold uppercase tracking-wider mb-1 text-[10px]">
                  Firm / Lab / College / Startup Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. BioCore Innovators / Apex Lab Suppliers"
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  className="w-full px-3 h-[40px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-gray-800 bg-white"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold uppercase tracking-wider mb-1 text-[10px]">
                  Your Bespoke Quantities (even if small) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 200 pcs (12mm) & 100 pcs (20mm)"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="w-full px-3 h-[40px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-gray-800 bg-white placeholder-slate-400 font-semibold"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-gray-700 font-bold uppercase tracking-wider mb-1 text-[10px]">
                  Bespoke Dimensions, Graduations, Rim, or High thermal parameters specified
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g., Rimless Class-B graduated test tubes with white marking patch etc."
                  value={formData.specifications}
                  onChange={(e) => setFormData({ ...formData, specifications: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-gray-800 bg-white font-light text-xs"
                />
              </div>

              <div className="sm:col-span-2 bg-white border border-gray-150 p-2.5 rounded text-[10.5px] text-gray-500 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                <span>
                  By maintaining small-batch specialized molds at our own Ghaziabad facility, we execute smaller runs in parallel with massive tender contracts, maintaining premium ISO standards.
                </span>
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full h-11 bg-[#1E4D2B] hover:bg-[#14361E] text-white uppercase tracking-wider font-extrabold rounded flex items-center justify-center gap-2 cursor-pointer shadow hover:shadow-md transition-all text-xs border border-transparent"
                >
                  <Send className="w-4 h-4 text-green-300" />
                  <span>{submitting ? 'Transmitting Custom Specifications Desk...' : 'Request Small-Batch Quote'}</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* REST OF CONTENT */}
        <div className="space-y-6 pt-4 font-sans border-t border-gray-100">
          
          {/* Segment 1: Why Choose */}
          <div className="space-y-3">
            <h2 className="font-heading font-black text-lg md:text-xl text-gray-950 uppercase tracking-tight flex items-center gap-2 border-b border-gray-100 pb-2">
              <span className="w-1.5 h-5 bg-[#1E4D2B] rounded-full inline-block shrink-0"></span>
              Why Choose a Low MOQ Test Tube Supplier
            </h2>
            <div className="text-gray-700 text-xs md:text-sm leading-relaxed space-y-3 font-light">
              <p>
                Many test tube manufacturers set high minimum order quantities because large production runs are more cost-efficient for them — not because smaller orders aren't technically possible. As a low MOQ test tube supplier, Yukon India structures its production schedule to fit smaller and trial orders alongside bulk institutional runs, without compromising on specification consistency or certification standards.
              </p>
            </div>
          </div>

          {/* Segment 2: Who Needs Low MOQ */}
          <div className="space-y-3">
            <h2 className="font-heading font-black text-lg md:text-xl text-gray-950 uppercase tracking-tight flex items-center gap-2 border-b border-gray-100 pb-2">
              <span className="w-1.5 h-5 bg-[#1E4D2B] rounded-full inline-block shrink-0"></span>
              Who Needs a Low MOQ Test Tube Supplier
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              <li className="flex items-center gap-2 bg-white px-3 py-2 rounded border border-gray-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                <span>Startups and biotech founders validating a product or process before scaling up</span>
              </li>
              <li className="flex items-center gap-2 bg-white px-3 py-2 rounded border border-gray-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                <span>Colleges and schools with limited annual lab budgets</span>
              </li>
              <li className="flex items-center gap-2 bg-white px-3 py-2 rounded border border-gray-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                <span>Distributors and resellers testing a new product line before committing to inventory</span>
              </li>
              <li className="flex items-center gap-2 bg-white px-3 py-2 rounded border border-gray-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                <span>Labs switching suppliers who want a trial batch before placing a full order</span>
              </li>
            </ul>
          </div>

          {/* Segment 3: Product Range */}
          <div className="space-y-3 bg-slate-50 border border-slate-100 p-5 rounded-xl">
            <h2 className="font-heading font-black text-xs md:text-sm text-gray-950 uppercase tracking-widest flex items-center gap-2 mb-2">
              <Compass className="w-4 h-4 text-emerald-800" />
              Product Range Available at Low MOQ
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              <li className="flex items-center gap-2 bg-white px-3 py-2 rounded border border-gray-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                <span>Plain borosilicate test tubes, 12mm to 25mm diameter</span>
              </li>
              <li className="flex items-center gap-2 bg-white px-3 py-2 rounded border border-gray-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                <span>Graduated test tubes with printed volume markings</span>
              </li>
              <li className="flex items-center gap-2 bg-white px-3 py-2 rounded border border-gray-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                <span>Rimmed and rimless options</span>
              </li>
              <li className="flex items-center gap-2 bg-white px-3 py-2 rounded border border-gray-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                <span>Standard lengths from 75mm to 200mm</span>
              </li>
            </ul>
          </div>

          {/* FAQ SECTION */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <h2 className="font-heading font-black text-lg md:text-xl text-gray-950 uppercase tracking-tight flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-emerald-800" />
              Frequently Asked Questions (Sourcing Low MOQ)
            </h2>

            <div className="space-y-3.5">
              <div className="bg-slate-50 border border-slate-150 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 text-xs md:text-sm uppercase tracking-wide">
                  What counts as a low MOQ for test tubes at Yukon India?
                </h4>
                <p className="text-xs text-gray-600 mt-1 font-light leading-relaxed">
                  As a low MOQ test tube supplier, we work with order quantities far below typical bulk manufacturing minimums, accommodating trial orders, small labs, and early-stage buyers. Contact our team directly with your required quantity to confirm what's possible.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-150 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 text-xs md:text-sm uppercase tracking-wide">
                  Why do most test tube manufacturers require bulk orders?
                </h4>
                <p className="text-xs text-gray-600 mt-1 font-light leading-relaxed">
                  Most glass manufacturing involves furnace setup and batch-run costs that make small orders unprofitable for large-scale manufacturers. We structure production runs to accommodate smaller orders that bulk-only manufacturers typically decline.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-150 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 text-xs md:text-sm uppercase tracking-wide">
                  Who typically needs a low MOQ test tube supplier?
                </h4>
                <p className="text-xs text-gray-600 mt-1 font-light leading-relaxed">
                  Startups validating a new product, colleges with limited annual budgets, distributors testing a new SKU, and labs trialing a new supplier before committing to bulk orders.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-150 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 text-xs md:text-sm uppercase tracking-wide">
                  Does low MOQ affect test tube quality or certification?
                </h4>
                <p className="text-xs text-gray-600 mt-1 font-light leading-relaxed">
                  No. All test tubes, regardless of order size, are manufactured under the same ISO 9001 certified quality process.
                </p>
              </div>
            </div>
          </div>

          {/* Segment 4: Request a Quote Banner */}
          <div className="bg-emerald-950 text-white rounded-xl p-5 md:p-6 space-y-4">
            <div className="space-y-1">
              <span className="text-[9px] uppercase tracking-widest text-[#FCD34D] font-extrabold block">Flexible Sourcing Desk</span>
              <h2 className="font-heading font-black text-sm md:text-base uppercase tracking-wider text-white">Request Non-Obligating Quote</h2>
              <p className="text-xs text-gray-300 font-light">
                Tell us your required quantity — even if it's small — for a straightforward quote. Call +91 84475 12326 or email yukonindia45@gmail.com.
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
                <span>Full Laboratory Catalog →</span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#1E4D2B] transform group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => {
                  onNavigateToPage('test-tube-manufacturer-delhi');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center justify-between text-left px-3.5 py-3 text-xs font-semibold rounded bg-slate-100 hover:bg-[#1E4D2B]/5 border border-slate-200 hover:border-[#1E4D2B] text-gray-850 hover:text-[#1E4D2B] transition-all group cursor-pointer"
              >
                <span>Delhi Test Tube Sourcing</span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#1E4D2B] transform group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => {
                  onNavigateToPage('test-tube-manufacturer-mumbai');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center justify-between text-left px-3.5 py-3 text-xs font-semibold rounded bg-slate-100 hover:bg-[#1E4D2B]/5 border border-slate-200 hover:border-[#1E4D2B] text-gray-850 hover:text-[#1E4D2B] transition-all group cursor-pointer"
              >
                <span>Mumbai Test Tube Sourcing</span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#1E4D2B] transform group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => {
                  onNavigateToPage('low-moq-beakers-bulk-supply');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center justify-between text-left px-3.5 py-3 text-xs font-semibold rounded bg-slate-100 hover:bg-[#1E4D2B]/5 border border-slate-200 hover:border-[#1E4D2B] text-gray-850 hover:text-[#1E4D2B] transition-all group cursor-pointer"
              >
                <span>Low MOQ Glass Beakers</span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#1E4D2B] transform group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
