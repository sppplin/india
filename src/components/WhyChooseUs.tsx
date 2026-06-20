import React from 'react';
import { 
  History, 
  Handshake, 
  FlaskConical, 
  ShieldCheck, 
  Briefcase, 
  Users, 
  FileDown 
} from 'lucide-react';

interface WhyChooseUsProps {
  onDownloadBrochure: () => void;
}

export default function WhyChooseUs({ onDownloadBrochure }: WhyChooseUsProps) {
  
  const benefits = [
    {
      title: "35+ Years Experience",
      desc: "Over three decades of core manufacturing capability in scientific laboratory wares across India.",
      icon: History,
      color: "from-emerald-900/90 to-emerald-950/95"
    },
    {
      title: "Trusted By Institutions",
      desc: "Delivering lab assets to leading institutes like Delhi University (DU), JNU, Dabur, Patanjali, and countless government laboratories.",
      icon: Handshake,
      color: "from-[#1E4D2B]/90 to-[#14361E]/95"
    },
    {
      title: "Comprehensive Range",
      desc: "One-stop integration spanning thousands of line items in glassware, plasticware, custom instruments, and chemicals.",
      icon: FlaskConical,
      color: "from-[#2F6A3D]/90 to-[#1E4D2B]/95"
    },
    {
      title: "ISO 9001 Certified",
      desc: "Rigid accreditation ensuring each volumetric cylinder and beaker complies with global weight and volume calibrations.",
      icon: ShieldCheck,
      color: "from-green-900/90 to-[#1E4D2B]/95"
    },
    {
      title: "Affordable & On-Time",
      desc: "Direct manufacturer pricing with a robust supply-chain guaranteeing on-time dispatch inside institutional deadlines.",
      icon: Briefcase,
      color: "from-[#14361E]/90 to-emerald-950/95"
    },
    {
      title: "Customer First Approach",
      desc: "Custom dimension engineering, round-the-clock replacement warranties, and long-term diagnostic partnership values.",
      icon: Users,
      color: "from-[#3B7D4F]/90 to-[#1E4D2B]/95"
    }
  ];

  return (
    <section className="py-12 bg-white border-b border-custom" id="why-choose-us">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        
        {/* Header row with download action exactly matching Godrej screenshot */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1E4D2B]">The Yukon Guarantee</span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900">
              Why Choose YUKON INDIA
            </h2>
            <div className="h-1 w-16 bg-[#1E4D2B] rounded"></div>
          </div>
          
          <button
            onClick={onDownloadBrochure}
            className="text-xs md:text-sm font-semibold uppercase tracking-wider text-white bg-[#1E4D2B] hover:bg-[#14361E] px-4 py-2.5 rounded shadow transition-all flex items-center space-x-1.5"
          >
            <FileDown className="w-4 h-4" />
            <span>Download Credentials Brochure</span>
          </button>
        </div>

        {/* 6-Card Grid mimicking the exact Amenities layout ratio & visual feel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div 
                key={idx}
                className="relative rounded-lg overflow-hidden border border-gray-200 shadow-sm h-[200px] md:h-[220px] group cursor-pointer"
              >
                {/* Background gradient structure acting as abstract modern scientific graphic */}
                <div className={`absolute inset-0 bg-gradient-to-br ${b.color} z-0 transition-transform duration-500 group-hover:scale-105`}></div>
                
                {/* Micro scientific grids inside background */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

                {/* Content Overlay */}
                <div className="absolute inset-0 z-10 p-5 flex flex-col justify-between text-white">
                  <div className="flex items-center justify-between">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2.5">
                      <Icon className="w-6 h-6 text-green-300" />
                    </div>
                    <span className="text-[10px] font-bold text-green-400 bg-white/5 border border-white/20 rounded px-2 py-0.5 tracking-wider uppercase">
                      Prerequisite
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="font-heading font-bold text-base md:text-lg tracking-wide group-hover:text-amber-300 transition-colors">
                      {b.title}
                    </h3>
                    <p className="text-gray-200 text-xs font-light leading-relaxed font-sans line-clamp-3">
                      {b.desc}
                    </p>
                  </div>
                </div>

                {/* Subtle border shine hover effect */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-amber-400 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
