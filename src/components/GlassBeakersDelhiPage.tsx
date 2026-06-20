import React, { useState } from 'react';
import { Phone, CheckCircle2, ArrowRight, ArrowLeft, Send, Sparkles, AlertCircle, FileText } from 'lucide-react';
import { ActiveView } from '../types';

interface GlassBeakersDelhiPageProps {
  onNavigateToPage: (view: ActiveView) => void;
  onContactClick: () => void;
}

export default function GlassBeakersDelhiPage({ onNavigateToPage, onContactClick }: GlassBeakersDelhiPageProps) {
  // Local form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    institution: '',
    specifications: 'Borosilicate Glass Beakers (Low-Form) - Assorted Sizes',
    quantity: '100 pcs',
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
      // Log for tracking
      console.log('Delhi Beaker Form Inquiry Submitted:', formData);
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
            Delhi Regional Hub Dispatch
          </span>
          <h1 className="font-heading font-black text-2xl md:text-3.5xl text-gray-900 leading-tight">
            Glass Beaker Supplier in Delhi — Premium Borosilicate 3.3
          </h1>
          <p className="text-[#FC913A] font-extrabold text-xs tracking-widest uppercase font-mono">
            Direct-from-Manufacturer 24 to 48 Hours Dispatch Belts
          </p>
        </div>

        {/* FIRST PARAGRAPH */}
        <div className="prose max-w-none text-slate-800 text-sm md:text-base leading-relaxed font-sans font-light">
          <p>
            <strong>Yukon India Corporation</strong> supplies borosilicate glass beakers to laboratories, colleges, and pharmaceutical companies across Delhi. Operating from our manufacturing and dispatch facility in Ghaziabad, NCR, we’re positioned to deliver to Delhi addresses within 24-48 hours of order confirmation — without the freight delays that come with sourcing from glassware hubs further afield.
          </p>
        </div>

        {/* HIGH-CONVERTING CUSTOM B2B FORM - placed immediately after the first paragraph as requested */}
        <div className="bg-slate-50 border-2 border-emerald-800 p-5 md:p-6 rounded-xl shadow-md space-y-4">
          <div className="pb-3 border-b border-gray-200">
            <span className="text-[9px] uppercase tracking-widest font-black text-amber-600 flex items-center gap-1">
              <Sparkles className="w-3 h-3 fill-amber-500 text-amber-500 animate-pulse" />
              Direct Factory Quote Form - Delhi region priority
            </span>
            <h3 className="font-heading font-bold text-gray-900 text-sm md:text-base mt-1 uppercase">
              Download Specifications & Get Bulk Beaker Pricing
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
                Thank you! Our Ghaziabad NCR distribution line matches are compiled. Our regional sales engineer will transmit your official bulk beaker quotation to <strong>{formData.phone}</strong> in under 15 minutes.
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
                  placeholder="e.g. Prof. R. K. Sharma"
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
                  placeholder="e.g. +91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 h-[40px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-gray-800 bg-white"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold uppercase tracking-wider mb-1 text-[10px]">
                  College / Biotech / Diagnostics Corporate Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. IIT Delhi / Dabur Research Lab"
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  className="w-full px-3 h-[40px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-gray-800 bg-white"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold uppercase tracking-wider mb-1 text-[10px]">
                  Required Quantity / Size Mix <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 50 pcs (250ml) & 100 pcs (500ml)"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="w-full px-3 h-[40px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-gray-800 bg-white placeholder-slate-400 font-semibold"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-gray-700 font-bold uppercase tracking-wider mb-1 text-[10px]">
                  Technical Glass Specifications
                </label>
                <textarea
                  rows={2}
                  placeholder="Borosilicate Glass 3.3, Class-A graduated, high heat chemical shock limits etc."
                  value={formData.specifications}
                  onChange={(e) => setFormData({ ...formData, specifications: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-gray-800 bg-white font-light text-xs"
                />
              </div>

              <div className="sm:col-span-2 bg-white border border-gray-150 p-2.5 rounded text-[10.5px] text-gray-500 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                <span>
                  Our NCR central hub stock is fully locked. Submitting guarantees standard transit coverage insurance and price freeze indexation for 30 calendar days.
                </span>
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full h-11 bg-[#1E4D2B] hover:bg-[#14361E] text-white uppercase tracking-wider font-extrabold rounded flex items-center justify-center gap-2 cursor-pointer shadow hover:shadow-md transition-all text-xs border border-transparent"
                >
                  <Send className="w-4 h-4 text-green-300" />
                  <span>{submitting ? 'Transmitting Delhi Hub Rates...' : 'Get Bulk Beaker Quote'}</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* REST OF CONTENT SKELETON */}
        <div className="space-y-6 pt-4 font-sans border-t border-gray-100">
          
          {/* Segment 1: Why Source */}
          <div className="space-y-3">
            <h2 className="font-heading font-black text-lg md:text-xl text-gray-950 uppercase tracking-tight flex items-center gap-2 border-b border-gray-100 pb-2">
              <span className="w-1.5 h-5 bg-[#1E4D2B] rounded-full inline-block shrink-0"></span>
              Why Delhi Labs Source Beakers From Yukon India
            </h2>
            <div className="text-gray-700 text-xs md:text-sm leading-relaxed space-y-3 font-light">
              <p>
                Delhi's research institutions, diagnostic labs, and university science departments need a beaker supplier who can handle both one-off bulk orders and recurring annual procurement cycles. Because our facility sits just across the NCR border in Ghaziabad, Delhi-based buyers avoid the inter-state freight charges and multi-day transit times typical of suppliers based in Mumbai, Ahmedabad, or other glassware-manufacturing regions.
              </p>
              <p>
                We supply low-form and tall-form borosilicate beakers in capacities from 50ml to 2000ml, manufactured to IS 4861 specifications with printed graduation markings for accurate volume reading. Stock is held at our facility year-round, so Delhi institutions restocking before academic sessions or audit cycles aren’t left waiting on production lead times.
              </p>
            </div>
          </div>

          {/* Segment 2: Who We Supply */}
          <div className="space-y-3 bg-slate-50 border border-slate-100 p-5 rounded-xl">
            <h2 className="font-heading font-black text-sm md:text-base text-gray-950 uppercase tracking-widest flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded bg-emerald-700 inline-block"></span>
              Who We Supply in Delhi
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-800">
              <li className="flex items-center gap-2 bg-white px-3 py-2 rounded border border-gray-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                <span>University & College Science Labs (Academic Resets)</span>
              </li>
              <li className="flex items-center gap-2 bg-white px-3 py-2 rounded border border-gray-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                <span>Diagnostics & Pathology centers (NABL test compliances)</span>
              </li>
              <li className="flex items-center gap-2 bg-white px-3 py-2 rounded border border-gray-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                <span>Pharma QC Units (certified batch-traceability)</span>
              </li>
              <li className="flex items-center gap-2 bg-white px-3 py-2 rounded border border-gray-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                <span>Government & Corporate R&D centers (Tenders/Annual contracts)</span>
              </li>
            </ul>
          </div>

          {/* Segment 3: Delivery to Delhi */}
          <div className="space-y-3">
            <h2 className="font-heading font-black text-lg md:text-xl text-gray-950 uppercase tracking-tight flex items-center gap-2 border-b border-gray-100 pb-2">
              <span className="w-1.5 h-5 bg-[#1E4D2B] rounded-full inline-block shrink-0"></span>
              Delivery to Delhi Areas
            </h2>
            <p className="text-gray-700 text-xs md:text-sm leading-relaxed font-light">
              Standard orders dispatched to Delhi addresses (including NCR zones like Dwarka, Rohini, Lajpat Nagar, and Connaught Place-area institutions) typically arrive within 1-2 working days via our regular logistics partners. Bulk institutional orders can be scheduled with advance notice to align with your procurement timeline.
            </p>
          </div>

          {/* Segment 4: Get a Quote */}
          <div className="bg-emerald-950 text-white rounded-xl p-5 md:p-6 space-y-4">
            <div className="space-y-1">
              <span className="text-[9px] uppercase tracking-widest text-[#FCD34D] font-extrabold block">B2B Sales Portal</span>
              <h2 className="font-heading font-black text-sm md:text-base uppercase tracking-wider text-white">Get Your Same-day Quotation</h2>
              <p className="text-xs text-gray-300 font-light">
                Share your required beaker sizes and quantities with our team for standard dealer and OEM pricing structures.
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
                <span>View Full Laboratory Glassware Range →</span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#1E4D2B] transform group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => {
                  onNavigateToPage('glass-beaker-manufacturer-india');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center justify-between text-left px-3.5 py-3 text-xs font-semibold rounded bg-slate-100 hover:bg-emerald-50 border border-slate-200 hover:border-[#1E4D2B] text-gray-850 hover:text-[#1E4D2B] transition-all group cursor-pointer"
              >
                <span>India Glass Beaker Manufacturer</span>
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

              <button
                onClick={() => {
                  onNavigateToPage('specializations');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center justify-between text-left px-3.5 py-3 text-xs font-semibold rounded bg-slate-100 hover:bg-[#1E4D2B]/5 border border-slate-200 hover:border-[#1E4D2B] text-gray-850 hover:text-[#1E4D2B] transition-all group cursor-pointer"
              >
                <span>Explore Technical Specializations</span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#1E4D2B] transform group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
