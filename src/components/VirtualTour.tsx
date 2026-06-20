import React, { useState } from 'react';
import { Play, Video, ArrowRight, CheckCircle2, X } from 'lucide-react';

interface VirtualTourProps {
  onContactClick: () => void;
}

export default function VirtualTour({ onContactClick }: VirtualTourProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const facilityImg = '/src/assets/images/yukon_facility_tour_1781842648913.jpg';

  return (
    <section className="py-12 bg-white border-b border-custom" id="virtual-facility-tour">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        
        {/* Title */}
        <div className="text-center space-y-2 mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1E4D2B]">Digital Manufacturing Preview</span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900">
            Interactive Facility Tour
          </h2>
          <div className="h-1 w-16 bg-[#1E4D2B] mx-auto rounded"></div>
        </div>

        {/* Video Tour Banner Layout (exactly like Real Estate Virtual Tour screenshot) */}
        <div className="relative rounded-lg overflow-hidden border border-gray-200 shadow-custom group h-[320px] md:h-[400px]">
          
          {/* Background Image of automated lab factory with darkening filter */}
          <img 
            src={facilityImg} 
            alt="Yukon India Automated Glassware Production Line and Laboratory Equipment Infrastructure UP Noida" 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500"
            loading="lazy"
            width="1280"
            height="500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/55 transition-colors"></div>

          {/* Interactive Play widget content */}
          <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-between items-center text-center text-white z-10">
            <div></div> {/* spacer */}

            <div className="space-y-4 max-w-2xl">
              {/* Play Button Icon */}
              <button
                onClick={() => setIsPlaying(true)}
                className="w-16 h-16 rounded-full bg-white text-[#1E4D2B] hover:scale-110 active:scale-95 flex items-center justify-center shadow-lg cursor-pointer mx-auto transition-transform"
                title="Watch Factory Tour"
              >
                <Play className="w-8 h-8 fill-[#1E4D2B] ml-1" />
              </button>

              <h3 className="font-heading font-extrabold text-lg md:text-2xl tracking-normal text-white drop-shadow-md">
                Precision Laboratory Solutions for Modern Science
              </h3>

              <p className="text-xs md:text-sm text-gray-200 font-light leading-relaxed font-sans max-w-lg mx-auto drop-shadow-sm">
                Providing high-quality laboratory glassware, plasticware, and scientific equipment trusted by research institutions, universities, and industries across India.
              </p>
            </div>

            {/* Downloader equivalent but for Contact Us CTA */}
            <div>
              <button
                onClick={onContactClick}
                className="h-[46px] px-8 bg-[#1E4D2B] hover:bg-[#14361E] border border-green-600 text-white text-xs uppercase tracking-wider font-semibold rounded flex items-center space-x-1.5 transition-colors shadow"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="w-4 h-4 text-green-300" />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Embedded Simple Video Modal Mock */}
      {isPlaying && (
        <div className="fixed inset-0 bg-black/85 flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-lg p-5 max-w-xl w-full relative border border-gray-200">
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute -top-10 right-0 text-white hover:text-green-300 font-bold flex items-center text-sm"
            >
              <X className="w-6 h-6 mr-1" /> Close
            </button>

            <div className="space-y-4 font-sans text-center">
              <div className="w-16 h-16 rounded-full bg-green-50 text-[#1E4D2B] flex items-center justify-center mx-auto">
                <Video className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-bold text-gray-900 text-lg">YUKON INDIA Facility Tour</h3>
              <p className="text-xs text-gray-500">
                You are about to launch a 360° tour of our automated glass blowing, furnace tempering, and plasticware molding plant in Ghaziabad.
              </p>
              
              <div className="bg-gray-100 p-4 rounded text-left text-xs space-y-2 border border-gray-205">
                <p className="font-bold text-gray-700 flex items-center">
                  <CheckCircle2 className="w-4 h-4 mr-1.5 text-primary" /> Glass Tempering Core (1,200°C Annealing oven)
                </p>
                <p className="font-bold text-gray-700 flex items-center">
                  <CheckCircle2 className="w-4 h-4 mr-1.5 text-primary" /> Polypropylene Injection Molding Chambers
                </p>
                <p className="font-bold text-gray-700 flex items-center">
                  <CheckCircle2 className="w-4 h-4 mr-1.5 text-primary" /> Class-A Calibration Weight & Volume verification
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setIsPlaying(false)}
                  className="flex-1 py-2 rounded text-xs font-semibold uppercase bg-gray-200 hover:bg-gray-300 text-gray-700 transition"
                >
                  Go Back
                </button>
                <button
                  onClick={() => {
                    setIsPlaying(false);
                    onContactClick();
                  }}
                  className="flex-1 py-2 rounded text-xs font-semibold uppercase bg-[#14361E] hover:bg-primary text-white transition"
                >
                  Get Catalog & Video Link
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
