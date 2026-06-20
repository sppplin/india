import React from 'react';
import { MessageSquare, ShieldCheck, Award, Briefcase, Sparkles } from 'lucide-react';

interface AboutYukonIndiaProps {
  onChatClick: () => void;
}

export default function AboutYukonIndia({ onChatClick }: AboutYukonIndiaProps) {
  return (
    <section className="py-12 bg-white border-b border-custom" id="about-yukon-corporation">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        
        {/* Layout mimicking logo and chat button above on Godrej block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b border-gray-150 pb-4 gap-4">
          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 bg-[#1E4D2B] rounded-full flex items-center justify-center text-white font-heading font-extrabold text-lg tracking-wider">
              YI
            </div>
            <div>
              <h2 className="font-heading font-bold text-xl md:text-2xl text-gray-900 leading-tight">
                YUKON INDIA Corporation
              </h2>
              <span className="text-[10px] tracking-widest text-[#555555] font-semibold uppercase">
                Registered OEM Manufacturer • Estd. 1993
              </span>
            </div>
          </div>

          <button
            onClick={onChatClick}
            className="inline-flex items-center space-x-1.5 text-xs font-semibold bg-[#1E4D2B] hover:bg-[#14361E] text-white px-5 h-[38px] rounded transition-colors uppercase tracking-wider"
          >
            <MessageSquare className="w-4 h-4 text-green-300" />
            <span>Chat With Us</span>
          </button>
        </div>

        {/* Narrative bio content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-8 space-y-4 text-sm text-[#555555] leading-relaxed font-sans">
            <p className="font-medium text-[#1A1A1A]">
              Established in 1993, YUKON INDIA Corporation is a trusted manufacturer and supplier of lab wares, plasticware, glassware, instruments, and chemicals.
            </p>
            <p>
              With 30+ years of expertise, ISO-certified quality standards, and a customer-first approach, we deliver reliable solutions to leading research institutes, universities, and industries across India.
            </p>
            <p>
              We are committed to delivering the highest level of dimensional precision and volume tolerance. Our factory is equipped with advanced automated machineries under rigid supervision to guarantee every delivered scientific equipment stands up to international specifications.
            </p>
          </div>

          {/* Institutional Compliance Seal (acts like the RERA barcode block in Godrej Woods) */}
          <div className="lg:col-span-4 bg-[#F8F9F8] border border-gray-200 rounded p-5 space-y-4 shadow-sm">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              Certification & ISO Quality Data
            </h4>
            
            <div className="flex items-start space-x-3">
              <div className="bg-[#1E4D2B]/10 p-2.5 rounded shrink-0">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <div className="text-xs">
                <p className="font-bold text-[#1A1A1A] uppercase tracking-wide">ISO 9001:2015 Registration</p>
                <p className="text-gray-500 font-medium mt-0.5">Cert No: <strong className="text-gray-800">QACS-A-YI-2015-84</strong></p>
                <p className="text-gray-400 font-light mt-0.5">Valid for development, design, and calibration testing of scientific apparatus.</p>
              </div>
            </div>

            <div className="border-t border-dashed border-gray-200 pt-3 flex justify-between items-center text-[10px] text-gray-500 font-medium">
              <span>RERA Compliance Equivalent:</span>
              <span className="text-[#1E4D2B] font-bold">MSME & OEM Certified</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
