import React from 'react';
import { Download, Award, ShieldAlert, GraduationCap, Building, ArrowLeft, ArrowRight } from 'lucide-react';

interface ClientSectionProps {
  onDownloadClientsList: () => void;
}

export default function ClientSection({ onDownloadClientsList }: ClientSectionProps) {
  
  const logoSlides = [
    "https://yukonindia.com/wp-content/uploads/2026/06/9-150x150.png",
    "https://yukonindia.com/wp-content/uploads/2026/06/8-150x150.png",
    "https://yukonindia.com/wp-content/uploads/2026/06/5-150x150.png",
    "https://yukonindia.com/wp-content/uploads/2026/06/4-1-150x150.png",
    "https://yukonindia.com/wp-content/uploads/2026/06/3-1-150x150.png",
    "https://yukonindia.com/wp-content/uploads/2026/06/11-150x150.png",
    "https://yukonindia.com/wp-content/uploads/2026/06/13-150x150.png",
    "https://yukonindia.com/wp-content/uploads/2026/06/10-150x150.png",
  ];

  const clients = [
    { name: "Delhi University (DU)", type: "Academic & Research", location: "New Delhi" },
    { name: "Jawaharlal Nehru University (JNU)", type: "Premium Central University", location: "New Delhi" },
    { name: "Dabur India Ltd.", type: "Pharmaceutical & Ayurvedic R&D", location: "Ghaziabad, UP" },
    { name: "Patanjali Research Foundation", type: "FMCG & Ayurvedic Lab Network", location: "Haridwar, UK" },
    { name: "CSIR Research Laboratories", type: "Central Scientific Research", location: "Pan India" },
    { name: "Amity & Sharda Universities", type: "Private Educational Institutions", location: "Uttar Pradesh" }
  ];

  const marqueeStyle = `
    @keyframes marquee {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee-smooth {
      animation: marquee 25s linear infinite;
    }
  `;

  return (
    <section className="py-12 bg-[#F8F9F8] border-b border-custom font-sans text-sm" id="precious-clients">
      <style dangerouslySetInnerHTML={{ __html: marqueeStyle }} />
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 space-y-10">
        
        {/* 1. Brand Logo Slides Marquee */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-xs space-y-4">
          <div className="text-center space-y-1">
            <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-800">Sourcing Excellence</span>
            <h3 className="font-heading font-black text-gray-900 text-xs sm:text-sm uppercase tracking-wider">
              Approved Brand Partners & Government Reselling Networks
            </h3>
            <p className="text-[11px] text-gray-400">Our instrumentation, borosilicate catalog, and safety products are active across leading scientific institutes.</p>
          </div>

          {/* Marquee viewport with blur edge-fades */}
          <div className="relative w-full overflow-hidden py-4 px-2 bg-gray-50/50 rounded border border-gray-100 flex items-center">
            
            {/* Edge fades */}
            <div className="absolute inset-y-0 left-0 w-8 md:w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-8 md:w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            {/* Loop container */}
            <div className="flex animate-marquee-smooth hover:[animation-play-state:paused] whitespace-nowrap gap-8 transition-all">
              {/* First pass */}
              {logoSlides.concat(logoSlides).map((logo, idx) => (
                <div 
                  key={idx} 
                  className="inline-flex items-center justify-center p-3.5 bg-white border border-gray-150 rounded shadow-[0_1px_3px_rgba(0,0,0,0.05)] w-[120px] h-[75px] shrink-0 transition-transform duration-200 hover:scale-[1.03] select-none"
                >
                  <img 
                    src={logo} 
                    alt={`Yukon Partner Logo ${idx + 1}`} 
                    referrerPolicy="no-referrer"
                    className="max-w-full max-h-full object-contain filter hover:brightness-105"
                  />
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* 2. Client Grid Header row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-t border-gray-200 pt-8">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1E4D2B]">Trusted Nationwide</span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900">
              Our Precious Clients
            </h2>
            <div className="h-1 w-16 bg-[#1E4D2B] rounded"></div>
          </div>
          
          <button
            onClick={onDownloadClientsList}
            className="text-xs md:text-sm font-semibold uppercase tracking-wider text-white bg-[#1E4D2B] hover:bg-[#14361E] px-4 py-2.5 rounded shadow transition-all flex items-center space-x-1.5 cursor-pointer"
          >
            <Download className="w-4 h-4 pointer-events-none" />
            <span>Download Reference List</span>
          </button>
        </div>

        {/* Display grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((c, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col justify-between hover:shadow-md transition-shadow h-[160px] group"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div className="bg-[#1E4D2B]/5 group-hover:bg-[#1E4D2B] rounded p-2.5 transition-colors">
                    {idx < 2 ? (
                      <GraduationCap className="w-5 h-5 text-primary group-hover:text-white pointer-events-none" />
                    ) : (
                      <Building className="w-5 h-5 text-primary group-hover:text-white pointer-events-none" />
                    )}
                  </div>
                  <span className="text-[9px] uppercase tracking-wider text-[#1E4D2B] bg-[#1E4D2B]/10 font-bold px-2 py-0.5 rounded select-none">
                    {c.location}
                  </span>
                </div>
                
                <h3 className="font-heading font-bold text-[#1A1A1A] text-sm group-hover:text-[#1E4D2B] transition-colors leading-snug">
                  {c.name}
                </h3>
              </div>

              <div className="border-t border-gray-100 pt-2 flex items-center justify-between text-[11px] text-[#555555] select-none">
                <span>Type: <strong>{c.type}</strong></span>
                <span className="text-emerald-700 font-bold">Active SLA Contact</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
