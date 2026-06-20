import React from 'react';
import { 
  Download, 
  FlaskConical, 
  Layers, 
  Settings, 
  ShoppingBag, 
  GraduationCap, 
  Shield, 
  Atom, 
  ArrowRight 
} from 'lucide-react';
import { ActiveView } from '../types';

interface SpecializationsPageProps {
  onNavigateToCategory: (categoryId: string) => void;
  onDownloadCatalog: () => void;
  onContactClick: () => void;
}

export default function SpecializationsPage({ 
  onNavigateToCategory, 
  onDownloadCatalog, 
  onContactClick 
}: SpecializationsPageProps) {
  
  const specializations = [
    { 
      id: "glassware", 
      label: "Laboratory Glassware", 
      desc: "Ultra durable borosilicate 3.3 heat & acid-resistant laboratory containers.", 
      keys: "Beakers, Flasks & Volumetrics",
      icon: FlaskConical
    },
    { 
      id: "plasticware", 
      label: "Laboratory Plasticware", 
      desc: "Chemically inert, shatterproof microcentrifuges, containers and wash bottles.", 
      keys: "PP, HDPE & LDPE Products",
      icon: Layers
    },
    { 
      id: "instruments", 
      label: "Scientific Instruments", 
      desc: "Analytically precise tools, calipers, microscopes & temperature-controlled stirrers.", 
      keys: "Measurement & Observation",
      icon: Settings
    },
    { 
      id: "consumables", 
      label: "Laboratory Consumables", 
      desc: "Complete daily inventory of high-grade syringe filters and protective masks.", 
      keys: "Daily Biotech Essentials",
      icon: ShoppingBag
    },
    { 
      id: "educational", 
      label: "Educational Laboratory Supplies", 
      desc: "Robust CBSE & ICSE curriculum teaching aids and starter laboratory packages.", 
      keys: "School & Grad College Kits",
      icon: GraduationCap
    },
    { 
      id: "safety", 
      label: "Safety Products Range", 
      desc: "Regulatory protective goggles, fiberglass splash curtains and critical kits.", 
      keys: "Lab Risk Reducers",
      icon: Shield
    }
  ];

  return (
    <div className="bg-[#FAFBF9] font-sans text-sm animate-fadeIn pb-16">
      
      {/* Mini Hero Banner */}
      <div className="relative w-full bg-gradient-to-r from-emerald-950 via-[#1E4D2B] to-[#14361E] py-12 md:py-16 text-white text-center border-b border-gray-200">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-3">
          <span className="text-[10px] uppercase font-extrabold tracking-widest text-[#FCD34D] bg-emerald-950/40 border border-emerald-800 px-3 py-1 rounded-full inline-block">
            Scientific & Industrial Catalogue
          </span>
          <h2 className="font-heading font-extrabold text-2xl md:text-4xl text-white uppercase tracking-tight">
            Corporate Category Specializations
          </h2>
          <p className="text-xs md:text-sm text-gray-200 font-light max-w-xl mx-auto leading-relaxed">
            Explore our specialized chemical-resistant glass test cylinders, disposable polymers, precise instrumentation, and curriculum kits compiled below.
          </p>
          
          <div className="pt-2">
            <button
              onClick={onDownloadCatalog}
              className="px-6 py-2.5 bg-[#FAFBF9] hover:bg-white text-[#1E4D2B] text-xs font-extrabold uppercase tracking-wider rounded border border-[#1E4D2B]/20 hover:border-[#1E4D2B] transition-all inline-flex items-center space-x-1.5 shadow-sm cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF Specifications Catalogue</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto px-4 py-8">
        
        {/* Main Section Banner */}
        <div className="mb-8 bg-white border border-gray-200 rounded-lg p-6 shadow-xs">
          <div className="border-b border-gray-150 pb-4 mb-6">
            <span className="text-[10px] text-[#1E4D2B] font-black uppercase tracking-widest block mb-0.5">Premium Direct OEM Hubs</span>
            <h3 className="font-heading font-black text-lg text-gray-950 uppercase tracking-wide">
              Corporate Category Specializations
            </h3>
            <p className="text-xs text-gray-500 mt-1 max-w-2xl font-light">
              YUKON INDIA serves nationwide distribution corridors with high-volume production facilities. Access active specifications, dimensions, and material data by clicking on any specialized sector below.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {specializations.map((spotlight) => {
              const Icon = spotlight.icon;
              return (
                <div 
                  key={spotlight.id} 
                  onClick={() => onNavigateToCategory(spotlight.id)}
                  className="group border border-gray-200 hover:border-[#1E4D2B] hover:bg-emerald-50/20 p-4 rounded flex flex-col justify-between transition-all cursor-pointer shadow-3xs"
                >
                  <div className="space-y-1">
                    <span className="text-[9px] font-black text-[#FC913A] uppercase tracking-wider block">{spotlight.keys}</span>
                    <h4 className="font-black text-gray-950 text-sm uppercase tracking-wide group-hover:text-[#1E4D2B] transition-colors">
                      {spotlight.label}
                    </h4>
                    <p className="text-gray-500 text-[11.5px] leading-relaxed font-light">
                      {spotlight.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-gray-150 mt-4 flex justify-between items-center text-[10.5px] text-gray-400 font-bold">
                    <span>YUKON DIRECT LINK</span>
                    <span className="text-[#1E4D2B] group-hover:translate-x-1 transition-transform font-black text-[11px] flex items-center gap-1">
                      EXPLORE <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Informative Call To Action */}
        <div className="bg-emerald-50/35 border-l-4 border-[#1E4D2B] p-5 rounded-r border border-gray-200/60 shadow-3xs flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="space-y-1">
            <h4 className="font-bold text-gray-950 text-xs uppercase tracking-wide">Need Custom Calibrations or OEM Manufacturing?</h4>
            <p className="text-xs text-gray-500 font-light">Our engineering departments design custom dimensions and high-volume molds to fit specific client laboratory protocols.</p>
          </div>
          <button 
            onClick={onContactClick}
            className="bg-[#1E4D2B] hover:bg-[#14361E] text-white text-[10px] font-black uppercase tracking-wider px-4 py-2 rounded transition-colors whitespace-nowrap cursor-pointer shadow-3xs"
          >
            Submit Custom Blueprints
          </button>
        </div>

      </div>
    </div>
  );
}
