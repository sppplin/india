import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Award, ShieldAlert } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      alert("Please fill in Name and Message text boxes.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', companyName: '', message: '' });
    }, 1000);
  };

  return (
    <div className="bg-[#F8F9F8] font-sans text-sm animate-fadeIn">
      
      {/* Contact Hero Banner */}
      <div className="relative w-full bg-gradient-to-r from-[#14361E] via-[#1E4D2B] to-[#2F6A3D] py-12 md:py-16 text-white text-center border-b border-custom">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-3">
          <span className="text-[10px] uppercase font-bold tracking-widest text-green-300">Instant Customer Response</span>
          <h2 className="font-heading font-extrabold text-2xl md:text-4xl text-white">
            Connect With Our Diagnostic Sales Team
          </h2>
          <p className="text-xs md:text-sm text-gray-200 font-light max-w-lg mx-auto">
            Get instant solutions tailored to laboratory specifications. We provide wholesale custom instrumentation quotes in 4 hours.
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Info (Phone, Email, Address) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-custom space-y-6">
              
              <div className="border-b border-gray-100 pb-3">
                <h3 className="font-heading font-bold text-lg text-gray-900">Direct Contacts</h3>
                <p className="text-xs text-gray-400 mt-0.5">Reach our central sales, billing, and distribution representatives.</p>
              </div>

              {/* Phone item */}
              <div className="flex items-start space-x-3.5">
                <div className="bg-[#1E4D2B] text-white rounded p-3 shrink-0">
                  <Phone className="w-5 h-5 text-green-300" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-[#1A1A1A] uppercase text-xs tracking-wider">Direct Hotline</h4>
                  <a href="tel:+918447512326" className="text-base font-extrabold text-primary block mt-1 hover:underline">
                    +91 8447512326
                  </a>
                  <p className="text-[11px] text-gray-400 mt-1">Mon - Sat: 10:00 AM to 07:00 PM IST</p>
                </div>
              </div>

              {/* Email item */}
              <div className="flex items-start space-x-3.5">
                <div className="bg-[#1E4D2B] text-white rounded p-3 shrink-0">
                  <Mail className="w-5 h-5 text-green-300" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-[#1A1A1A] uppercase text-xs tracking-wider">Sales Inbox</h4>
                  <a href="mailto:yukonindia45@gmail.com" className="text-sm font-bold text-gray-800 block mt-1 hover:underline">
                    yukonindia45@gmail.com
                  </a>
                  <p className="text-[11px] text-gray-400 mt-1">Send your purchase list for a custom proforma invoice.</p>
                </div>
              </div>

              {/* Address item */}
              <div className="flex items-start space-x-3.5">
                <div className="bg-[#1E4D2B] text-white rounded p-3 shrink-0">
                  <MapPin className="w-5 h-5 text-green-300" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-[#1A1A1A] uppercase text-xs tracking-wider">Storage Facility Address</h4>
                  <p className="text-xs text-gray-700 font-semibold leading-relaxed mt-1">
                    264, Gali No-5, Raghunathpuri, Baghu, Ghaziabad, Uttar Pradesh – 201001
                  </p>
                  <p className="text-[11px] text-gray-400 mt-1">Direct institutional transport loading deck on Gali No-5.</p>
                </div>
              </div>

            </div>

            {/* Serving Laboratories Across India Card */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-custom space-y-4 shadow-sm">
              <div className="border-b border-gray-100 pb-2">
                <h3 className="font-heading font-extrabold text-sm md:text-base text-gray-900">
                  Serving Laboratories Across India
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Whether you need <span className="font-semibold text-emerald-800">borosilicate glassware in Delhi</span>, <span className="font-semibold text-emerald-800">analytical instruments in Mumbai</span>, <span className="font-semibold text-emerald-800">lab chemicals in Chennai</span>, or <span className="font-semibold text-emerald-800">educational lab supplies in Noida</span> — we have you covered. Call us or fill out the form, and our regional coordination team will respond within 24 hours with accurate product availability, lead times, and proforma tax pricing.
              </p>
              
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Active Transit Hubs & Served Cities</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["Noida", "Ghaziabad", "Delhi", "New Delhi", "Gurugram", "Faridabad", "Mumbai", "Navi Mumbai", "Pune", "Chennai", "Bengaluru", "Hyderabad", "Kolkata", "Ahmedabad", "Jaipur", "Lucknow", "Chandigarh", "Bhopal", "Patna", "Surat", "Nashik", "Coimbatore"].map((city) => (
                    <span 
                      key={city}
                      className="bg-gray-50 hover:bg-emerald-50 text-gray-600 hover:text-[#1E4D2B] border border-gray-200 hover:border-[#1E4D2B] rounded-full px-2.5 py-1 text-[10px] font-heading font-semibold transition-all cursor-default"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-lg border border-gray-200 p-6 shadow-custom">
            <div className="border-b border-gray-100 pb-3 mb-6">
              <h3 className="font-heading font-bold text-lg text-gray-900">Send an Inquiry Message</h3>
              <p className="text-xs text-gray-400 mt-0.5">Submit custom configurations, volume prerequisites, or supply SLAs.</p>
            </div>

            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-12 h-12 bg-emerald-100 text-[#1E4D2B] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-heading font-bold text-lg text-gray-900">Inquiry Sent Successfully!</h4>
                <p className="text-xs text-gray-500 max-w-md mx-auto">
                  Thank you for writing to Yukon India Corporation. Our regional diagnostic executive will respond to you via email or phone on priority.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-primary uppercase tracking-wider focus:outline-none hover:underline"
                >
                  Write another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name */}
                <div>
                  <label className="block text-gray-700 text-xs font-bold uppercase tracking-wider mb-1.5 align-middle">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full text-xs md:text-sm px-3 h-[42px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-gray-800"
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-gray-700 text-xs font-bold uppercase tracking-wider mb-1.5">
                    Company / Laboratory Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. DU Chemistry Dept / Apex Clinical Diagnostics"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full text-xs md:text-sm px-3 h-[42px] border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-gray-800"
                  />
                </div>

                {/* Message text box */}
                <div>
                  <label className="block text-gray-700 text-xs font-bold uppercase tracking-wider mb-1.5">
                    Your Requirements Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={6}
                    required
                    placeholder="Provide details about the sizes, volumes, quantities or instruments you require..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full text-xs md:text-sm px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-gray-800"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full h-[46px] rounded bg-[#1E4D2B] hover:bg-[#14361E] text-white uppercase font-bold tracking-wider text-xs transition-colors flex items-center justify-center space-x-2 ${
                    loading ? 'bg-[#14361E] opacity-90 cursor-wait' : ''
                  }`}
                >
                  {loading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending messages...
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-green-300 animate-pulse" />
                      <span>Submit Corporate Inquiry</span>
                    </>
                  )}
                </button>

              </form>
            )}
          </div>

        </div>
      </div>

      {/* Interactive Google Map Section for SEO & Live Navigation */}
      <div className="border-t border-gray-200 bg-white py-12">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 space-y-6">
          <div className="border-b border-gray-150 pb-4 max-w-3xl">
            <span className="text-[10px] uppercase font-black tracking-widest text-[#1E4D2B]">Geographical Navigation & Supply SLA</span>
            <h3 className="font-heading font-extrabold text-lg md:text-xl text-gray-900 mt-1">
              Verified Distribution Depot & Factory Location
            </h3>
            <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
              Our central manufacturing warehouse and logistics stack is located in Ghaziabad, Delhi NCR, with direct arterial connections to Noida, Delhi, Gurugram, and pan-India transit corridors. Sourcing institutional clients are welcome to coordinate authorized logistics dispatches or visit our quality-assurance testing rooms.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Map Embed Frame */}
            <div className="lg:col-span-8 bg-gray-50 rounded-lg overflow-hidden border border-gray-200 shadow-xs min-h-[350px] md:min-h-[420px] relative flex flex-col">
              <iframe 
                title="Yukon India Google Map Depot Location"
                src="https://maps.google.com/maps?q=264,+Gali+No-5,+Raghunathpuri,+Baghu,+Ghaziabad,+Uttar+Pradesh+201001&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="flex-1 w-full min-h-[300px] hover:opacity-95 transition-opacity"
              ></iframe>
            </div>

            {/* Quick SEO Directory & Routing directions card */}
            <div className="lg:col-span-4 bg-gray-50 border border-gray-200 rounded-lg p-5 flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                <span className="bg-[#1E4D2B]/10 text-[#1E4D2B] text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider inline-block">
                  SEO Local Authority
                </span>

                <div className="space-y-2">
                  <h4 className="font-bold text-gray-905 text-xs uppercase tracking-wider">Transport & Dispatch Access</h4>
                  <p className="text-[11.5px] text-gray-650 leading-relaxed">
                    Our depot features standard heavy vehicle container access directly off the main Ghaziabad corridor. Sourcing managers and university representatives can map coordinates for prompt bulk vehicle dispatching.
                  </p>
                </div>

                <div className="space-y-1.5 border-t border-gray-200 pt-3">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Global Coordinates</span>
                  <p className="text-xs font-mono text-gray-700 font-medium">Lat 28.6692° N, Lon 77.4538° E</p>
                  <p className="text-[10.5px] text-gray-500">Ghaziabad Sub-Div, National Capital Region (NCR), India</p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <a 
                  href="https://share.google/mDklfuU8BfghRChTy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-11 bg-[#0D5BC6] hover:bg-[#0b4ba5] text-white rounded font-extrabold uppercase tracking-wider text-[11px] transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  <MapPin className="w-4 h-4 pointer-events-none" />
                  <span>Navigate with live Google Map</span>
                </a>
                <p className="text-center text-[10px] text-gray-400 mt-2 font-medium">
                  Click to open direct verified satellite directions pin
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
