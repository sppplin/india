import React, { useState } from 'react';
import { Download, FlaskConical, CircleChevronRight, Check } from 'lucide-react';

interface GlasswareSectionProps {
  onDownloadSpec: () => void;
}

export default function GlasswareSection({ onDownloadSpec }: GlasswareSectionProps) {
  const [selectedProduct, setSelectedProduct] = useState(0);

  const keyProducts = [
    {
      name: "Beakers",
      capacity: "25ml to 5000ml",
      spec: "Low form & Tall form with double-scale metric graduations and beaded spouts. Borosilicate 3.3.",
      use: "Ideal for mixing, heating, and stirring liquids in rigorous chemical analyses."
    },
    {
      name: "Test Tubes",
      capacity: "10ml to 100ml",
      spec: "With rim or rimless options. High thermal shock resistance. Neutral hard glass.",
      use: "Best suited for biological assays, chemical assays, and qualitative diagnostics."
    },
    {
      name: "Measuring Cylinders",
      capacity: "5ml to 2000ml",
      spec: "Hexagonal base, spout graduated, Class A / Class B tolerance certificates.",
      use: "Used for precise volumetric liquid measurement & analytical dispensing."
    },
    {
      name: "Conical Flasks",
      capacity: "50ml to 3000ml",
      spec: "Erlenmeyer design, narrow neck or wide mouth, uniform glass wall thickness.",
      use: "Highly suitable for titration, liquid storage, culture cultivation, and solution heating."
    },
    {
      name: "Pipettes",
      capacity: "0.1ml to 100ml",
      spec: "Graduated serological pipettes & volumetric transfer pipettes, color-coded bands.",
      use: "Delivers micro-volumes with extreme decimal accuracy in clinical research."
    },
    {
      name: "Reagent Bottles",
      capacity: "30ml to 2000ml",
      spec: "Narrow/Wide mouth, complete with polypropylene blue screw cap and pouring ring.",
      use: "For secure chemical storage, autoclaving, media preparation, and reagent containment."
    }
  ];

  const getProductImage = (name: string) => {
    switch (name) {
      case "Beakers":
        return "https://1l37nwyltkjspogd.public.blob.vercel-storage.com/beakers.png";
      case "Pipettes":
        return "https://1l37nwyltkjspogd.public.blob.vercel-storage.com/pipette.png";
      case "Test Tubes":
        return "https://1l37nwyltkjspogd.public.blob.vercel-storage.com/test-tube.png";
      case "Conical Flasks":
        return "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRyVbnaYactHv20JlkwSFJi0CsY2q2gDtFwgVoFX5YhOTEoDQ5T-ZAmr_7RlLtC4bBT-SFjtWwD2vF6724OL9iHS08Et5ojLQMrDptd--vJaYW5shc2UgYOpw";
      case "Reagent Bottles":
        return "https://static1.industrybuying.com/products/lab-supplies/laboratory-glassware/glass-bottles/LAB.GLA.721884962_1695994032948.webp";
      case "Measuring Cylinders":
        return "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR_OKhNNBeZT08NsZ0DhIfdZ9koZv56kSmP-bL-ThAyI0RRZ4sgI122P84AHpwXL1OhQROsZDSKqd81vFxsg_HrUWgX_OR6lVds8X0nhNvIlFBceH88ZwpphQ";
      default:
        return "/src/assets/images/yukon_glassware_1781842618995.jpg";
    }
  };

  return (
    <section className="py-12 bg-white border-b border-custom" id="laboratory-glassware">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        
        {/* Title */}
        <div className="text-center md:text-left space-y-2 mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1E4D2B]">Precision Borosilicate 3.3</span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900">
            Laboratory Glassware Solutions
          </h2>
          <div className="h-1 w-16 bg-[#1E4D2B] rounded md:mx-0 mx-auto"></div>
        </div>

        {/* Master Plan Style layout: Interactive center grid/showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left selectors / Card Details */}
          <div className="lg:col-span-4 order-2 lg:order-1 space-y-4">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Select Product to View Specs</p>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
              {keyProducts.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedProduct(idx)}
                  className={`p-3.5 text-left rounded border transition-all flex items-center justify-between text-xs md:text-sm font-semibold capitalize ${
                    selectedProduct === idx 
                      ? 'border-[#1E4D2B] bg-[#1E4D2B]/5 text-[#1E4D2B] font-bold shadow-sm' 
                      : 'border-gray-200 text-[#1A1A1A] hover:bg-gray-50'
                  }`}
                >
                  <span className="flex items-center">
                    <span className={`w-1.5 h-1.5 rounded-full mr-2.5 ${selectedProduct === idx ? 'bg-[#1E4D2B]' : 'bg-gray-300'}`}></span>
                    {p.name}
                  </span>
                  <CircleChevronRight className={`w-4 h-4 ml-2 transition-transform duration-200 ${selectedProduct === idx ? 'translate-x-1 text-[#1E4D2B]' : 'text-gray-300'}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Right Product illustration with button underneath */}
          <div className="lg:col-span-8 order-1 lg:order-2 flex flex-col items-center">
            <div className="w-full bg-slate-50 rounded-lg p-6 border border-gray-200 shadow-sm relative overflow-hidden flex flex-col md:flex-row gap-6">
              
              {/* Image side */}
              <div className="w-full md:w-1/2 flex items-center justify-center bg-white rounded-lg p-4 border border-gray-150 relative min-h-[220px]">
                <img 
                  src={getProductImage(keyProducts[selectedProduct].name)} 
                  alt={`${keyProducts[selectedProduct].name} - Premium Borosilicate 3.3 Lab Glassware | Yukon India`} 
                  className="w-full h-full object-contain rounded max-h-[190px] transition-all duration-300"
                  loading="lazy"
                  width="400"
                  height="300"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating stamp */}
                <div className="absolute top-2 right-2 bg-red-600 text-white text-[9px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded">
                  AR Grade Certified
                </div>
              </div>

              {/* Specification layout side */}
              <div className="w-full md:w-1/2 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase font-bold text-[#1E4D2B] bg-[#1E4D2B]/10 px-2 py-0.5 rounded">
                    Selected Product Specs
                  </span>
                  <h3 className="font-heading font-bold text-xl text-[#1A1A1A]">
                    {keyProducts[selectedProduct].name}
                  </h3>
                  <p className="text-xs text-gray-500 font-medium">
                    Available Range: {keyProducts[selectedProduct].capacity}
                  </p>
                  
                  <div className="border-t border-gray-100 my-2 pt-2 text-xs text-gray-600 leading-relaxed font-sans space-y-2">
                    <p className="flex items-start">
                      <span className="text-[#1E4D2B] mr-1.5 font-bold">●</span>
                      <span><strong>Tolerance:</strong> ISO Class A Compliant</span>
                    </p>
                    <p className="flex items-start">
                      <span className="text-[#1E4D2B] mr-1.5 font-bold">●</span>
                      <span>{keyProducts[selectedProduct].spec}</span>
                    </p>
                    <p className="flex items-start text-xs text-gray-500 italic mt-1 font-light">
                      {keyProducts[selectedProduct].use}
                    </p>
                  </div>
                </div>

                <div className="text-xs font-bold text-green-700 bg-green-50 p-2 rounded flex items-center">
                  <Check className="w-4 h-4 mr-1.5 shrink-0 text-[#1E4D2B]" /> Fully Complies with IS-1382 standards. 
                </div>
              </div>

            </div>

            {/* Action button underneath representing the masterplan PDF action exactly */}
            <div className="w-full mt-4 flex justify-center">
              <button
                onClick={onDownloadSpec}
                className="h-[46px] w-full md:w-auto md:px-12 bg-[#1E4D2B] hover:bg-[#14361E] text-white text-xs uppercase tracking-wider font-semibold rounded flex items-center justify-center space-x-2 transition-colors shadow"
              >
                <Download className="w-4 h-4" />
                <span>Download Glassware Schematic & Catalog</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
