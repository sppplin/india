import React from 'react';
import { Network, Ship, Clock, Globe, ArrowRight, ShieldCheck } from 'lucide-react';

interface IndustriesSectionProps {
  onGetDirections: () => void;
}

export default function IndustriesSection({ onGetDirections }: IndustriesSectionProps) {
  
  const sectors = [
    {
      industry: "Academic & Research Institutes",
      supplies: "General lab glassware, tutorial test kits, standard chemicals.",
      timeline: "24-48 Hours"
    },
    {
      industry: "Pharmaceuticals & Healthcare",
      supplies: "USP Type I borosilicate glassware, certified volumetric flasks.",
      timeline: "Same Day Dispatch"
    },
    {
      industry: "Biotechnology Companies",
      supplies: "Sterile petri dishes, microcentrifuge tubes, disposable loops.",
      timeline: "Same Day Dispatch"
    },
    {
      industry: "Food & Chemical Industries",
      supplies: "Custom distillation units, reflux condensers, reagent bottles.",
      timeline: "24 Hours"
    },
    {
      industry: "Government & Private R&D Labs",
      supplies: "Class A certified measuring glassware, customized apparatus.",
      timeline: "Within 48 Hours"
    },
    {
      industry: "Environmental Testing Labs",
      supplies: "Water testing tubes, filtration flask, Nessler cylinders.",
      timeline: "24 Hours"
    }
  ];

  return (
    <section className="py-12 bg-white border-b border-custom" id="industries-serve">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        
        {/* Title and Top Action button representing the Get Directions button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1E4D2B]">Logistics & Coverage</span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900">
              Industries We Serve
            </h2>
            <div className="h-1 w-16 bg-[#1E4D2B] rounded"></div>
          </div>
          
          <button
            onClick={onGetDirections}
            className="text-xs md:text-sm font-semibold uppercase tracking-wider text-white bg-[#1E4D2B] hover:bg-[#14361E] px-4 py-2.5 rounded shadow transition-all flex items-center space-x-1.5"
          >
            <Network className="w-4 h-4 text-green-300" />
            <span>Check Regional Network</span>
          </button>
        </div>

        {/* Layout mimicking map on left and table on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Interactive map/vector equivalent (represents map pin graphic) */}
          <div className="lg:col-span-6 bg-slate-50 border border-gray-200 rounded-lg p-6 flex flex-col justify-between relative overflow-hidden min-h-[300px]">
            {/* Visual background decorations represent geographical map routes */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#1E4D2B_1px,transparent_1px)] [background-size:24px_24px]"></div>
            <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-green-200/40 rounded-full blur-2xl"></div>
            
            <div className="relative z-10 space-y-4">
              <span className="text-[10px] uppercase font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/50">
                Logistics Logistics & Dispatch Hub
              </span>
              <h3 className="font-heading font-extrabold text-[#1A1A1A] text-lg leading-snug">
                Schenker Integrated Delivery Network (Ghaziabad Hub)
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed font-sans max-w-md">
                Our central production & packing facility located in Uttar Pradesh connects directly with leading transport corridors, enabling rapid dispatch of fragile glass material and chemical orders to Delhi NCR, Haryana, Punjab, Uttarakhand, and pan-India locations.
              </p>
            </div>

            {/* Network properties pins mock representation */}
            <div className="relative z-10 grid grid-cols-2 gap-3 pt-6 border-t border-gray-200 text-xs">
              <div>
                <span className="text-gray-400 block tracking-wide uppercase text-[9px] font-bold">Courier partners</span>
                <span className="text-gray-900 font-semibold block">DTDC, BlueDart, Professional</span>
              </div>
              <div>
                <span className="text-gray-400 block tracking-wide uppercase text-[9px] font-bold">Fragile assurance</span>
                <span className="text-[#1E4D2B] font-semibold block">Double-Ply Cushioned Packing</span>
              </div>
            </div>
          </div>

          {/* Right: List showing industries with timing block corresponding to travel distance chart */}
          <div className="lg:col-span-6 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm flex flex-col justify-between">
            <div className="divide-y divide-gray-150">
              {sectors.map((sec, idx) => (
                <div 
                  key={idx} 
                  className="p-4 hover:bg-gray-50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="flex items-start space-x-3">
                    <span className="mt-1 flex items-center justify-center w-2 h-2 rounded-full bg-[#1E4D2B] shrink-0"></span>
                    <div>
                      <p className="font-bold text-sm text-[#1A1A1A] leading-tight">{sec.industry}</p>
                      <p className="text-[11px] text-gray-500 font-light mt-0.5">{sec.supplies}</p>
                    </div>
                  </div>
                  <div className="sm:text-right shrink-0 flex items-center">
                    <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-gray-900 bg-gray-100 px-2.5 py-1 rounded">
                      <Clock className="w-3.5 h-3.5 text-[#1E4D2B]" />
                      <span>{sec.timeline}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
