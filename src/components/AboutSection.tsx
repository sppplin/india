import React, { useState } from 'react';
import { BookOpen, HelpCircle, FileDown, GraduationCap, Building2, FlaskConical } from 'lucide-react';

interface AboutSectionProps {
  onDownloadCatalog: () => void;
}

export default function AboutSection({ onDownloadCatalog }: AboutSectionProps) {
  const [readMore, setReadMore] = useState(false);

  return (
    <section className="py-12 bg-white border-b border-custom" id="about-yukon-overview">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <div className="max-w-3xl space-y-6">
          {/* Section Breadcrumbs / Title */}
          <div className="space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1E4D2B]">About Our Enterprise</span>
            <h2 className="font-heading text-2xl md:text-3.5xl font-bold text-[#1A1A1A]">
              About YUKON INDIA
            </h2>
            <div className="h-1.5 w-16 bg-[#1E4D2B] rounded"></div>
          </div>

          {/* Paragraphs */}
          <div className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed font-sans">
            <p className="font-medium text-[#1A1A1A]">
              YUKON INDIA is a leading manufacturer and supplier of high-quality laboratory consumables specializing in laboratory glassware and plasticware solutions for scientific, industrial, research, educational, and healthcare applications.
            </p>
            <p>
              Backed by advanced manufacturing practices and stringent quality control standards, YUKON INDIA offers a comprehensive range of durable and accurate laboratory products designed to ensure safety, efficiency, and dependable performance.
            </p>
            
            {readMore && (
              <div className="pt-2 space-y-4 border-t border-gray-100 animate-fadeIn">
                <p>
                  Our solutions are trusted by laboratories, research institutions, pharmaceutical companies, educational organizations, and industrial facilities across India.
                </p>
                <p>
                  Every individual product is fabricated using top-tier chemical-resistant and thermal-shockproof raw materials, adhering to critical Indian (IS) and International (ISO) compliance standards.
                </p>
              </div>
            )}
          </div>

          {/* Dynamic Read more Action */}
          <button 
            type="button" 
            onClick={() => setReadMore(!readMore)}
            className="text-xs uppercase tracking-wider font-bold text-[#1E4D2B] hover:text-[#14361E] focus:outline-none flex items-center transition-colors"
          >
            {readMore ? "Read Less" : "Read More ..."}
          </button>

          {/* Target segments grids (Acoustics equivalent) */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-4">
            <div className="p-3 bg-[#F8F9F8] border border-gray-100 rounded flex items-center space-x-2.5">
              <FlaskConical className="w-5 h-5 text-[#1E4D2B]" />
              <span className="text-xs font-semibold text-[#1A1A1A]">Research Labs</span>
            </div>
            <div className="p-3 bg-[#F8F9F8] border border-gray-100 rounded flex items-center space-x-2.5">
              <GraduationCap className="w-5 h-5 text-[#1E4D2B]" />
              <span className="text-xs font-semibold text-[#1A1A1A]">Academic Orgs</span>
            </div>
            <div className="p-3 bg-[#F8F9F8] border border-gray-100 rounded flex items-center space-x-2.5">
              <Building2 className="w-5 h-5 text-[#1E4D2B]" />
              <span className="text-xs font-semibold text-[#1A1A1A]">Pharmaceuticals</span>
            </div>
          </div>

          {/* Downloader matching exactly Godrej Wood's "Download Brochure" */}
          <div className="pt-4">
            <button
              onClick={onDownloadCatalog}
              className="h-[46px] rounded bg-[#1E4D2B] hover:bg-[#14361E] text-white text-xs md:text-sm font-semibold tracking-wider uppercase px-6 inline-flex items-center space-x-2 shadow transition-all duration-300"
            >
              <FileDown className="w-4 h-4 text-white" />
              <span>Download Corporate Brochure</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
