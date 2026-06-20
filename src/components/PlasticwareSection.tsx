import React, { useState } from 'react';
import { Download, Check, HelpCircle, Layers } from 'lucide-react';

interface PlasticwareSectionProps {
  onDownloadSpec: () => void;
}

export default function PlasticwareSection({ onDownloadSpec }: PlasticwareSectionProps) {
  const [selectedTab, setSelectedTab] = useState(0);

  const plasticProducts = [
    {
      name: "Sample Containers",
      sub: "Leakproof PP containers",
      specs: [
        { label: "Material", val: "Polypropylene (PP) / High-Density Polyethylene" },
        { label: "Volume Options", val: "30ml, 50ml, 100ml, 120ml" },
        { label: "Cap Type", val: "Molded leakproof screw closure" },
        { label: "Graduations", val: "Molded-in volumetric graduations" },
        { label: "Autoclavable", val: "Highly autoclavable at 121°C" }
      ],
      description: "Shatterproof medical grade containers equipped with a highly leak-resistant double-thread cap structure."
    },
    {
      name: "Centrifuge Tubes",
      sub: "High speed sedimentation tubes",
      specs: [
        { label: "Material", val: "Ultra-pure Polypropylene" },
        { label: "Volume Options", val: "15ml, 50ml conical bottom" },
        { label: "RCF Max", val: "Up to 12,500 x g" },
        { label: "Cap Style", val: "Leakproof flat top plug caps" },
        { label: "Sterility", val: "Radiation sterilized or non-sterile options" }
      ],
      description: "High speed test tubes with large frosted writing window and standard metric linear markings."
    },
    {
      name: "Wash Bottles",
      sub: "Squeeze dispensing bottles",
      specs: [
        { label: "Material", val: "Low-Density Polyethylene (LDPE) body" },
        { label: "Volume Options", val: "125ml, 250ml, 500ml, 1000ml" },
        { label: "Nozzle", val: "Squeeze-stream with angled tip" },
        { label: "Cap Type", val: "Color-coded safe liquid screw caps" },
        { label: "Closure Size", val: "28mm leak-tight neck closure" }
      ],
      description: "Highly flexible LDPE bottle giving thin directed spray stream by responsive gentle hand compression."
    },
    {
      name: "Storage Bottles",
      sub: "Heavy-duty chemical bottles",
      specs: [
        { label: "Material", val: "Polypropylene (PP) translucent" },
        { label: "Volume Options", val: "100ml to 5000ml" },
        { label: "Mouth", val: "Wide-neck or narrow neck styles" },
        { label: "Chemical resistance", val: "Highly resistant to heavy acids and bases" },
        { label: "Autoclavable", val: "Fully autoclavable with caps off" }
      ],
      description: "Rigid plastic bottles suitable for compounding, chemical transport, buffer storage, and long-term refrigeration of solutions."
    },
    {
      name: "Petri Dishes",
      sub: "Tissue culture plates",
      specs: [
        { label: "Material", val: "Medical-grade Polystyrene (PS)" },
        { label: "Dimensions", val: "35mm, 60mm, 90mm, 150mm" },
        { label: "Ventilation", val: "Triple-vented or single-vented lids for gas exchange" },
        { label: "Packaging", val: "Sterile shrink-sleeve packs of 10 or 20" },
        { label: "Optical clarity", val: "Excellent transparency (>92%) for microscopic use" }
      ],
      description: "Absolutely flat, clear dishes enabling optimal cell adhesion and microbiological culture viewing."
    },
    {
      name: "Pipette Tips",
      sub: "Liquid handling accessories",
      specs: [
        { label: "Material", val: "Virgin Medical-Grade PP (low retention)" },
        { label: "Volume Options", val: "10ul, 200ul, 1000ul, 5ml" },
        { label: "Filters", val: "Ultra-high molecular density micro-filters" },
        { label: "Format", val: "Assembled in sterile racks or bulk packs" },
        { label: "Compatibility", val: "Universal fitment across standard single and multichannel pipettes" }
      ],
      description: "Hydrophobic tips avoiding residual liquid retention to optimize microscopic sample validation accuracies."
    }
  ];

  return (
    <section className="py-12 bg-[#F8F9F8] border-b border-custom" id="laboratory-plasticware">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        
        {/* Title */}
        <div className="text-center md:text-left space-y-2 mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1E4D2B]">Medical Polypropylene & LDPE</span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900">
            Laboratory Plasticware Solutions
          </h2>
          <div className="h-1 w-16 bg-[#1E4D2B] rounded md:mx-0 mx-auto"></div>
        </div>

        {/* Floor Plan Style Navigation Tabs */}
        <div className="flex flex-wrap gap-1.5 justify-center md:justify-start mb-6 border-b border-gray-200 pb-2">
          {plasticProducts.map((prod, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedTab(idx)}
              className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-t transition-all ${
                selectedTab === idx 
                  ? 'bg-white border-t border-x border-gray-200 text-[#1E4D2B] font-bold shadow-sm -mb-2.5 z-10' 
                  : 'text-gray-500 hover:text-[#1E4D2B] hover:bg-white'
              }`}
            >
              {prod.name}
            </button>
          ))}
        </div>

        {/* Responsive Layout matching Floorplan blueprint panel */}
        <div className="bg-white rounded border border-gray-200 shadow-custom p-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center mt-4">
          
          {/* Left Diagram Mock (replaces floor plan blueprint) */}
          <div className="md:col-span-6 flex flex-col items-center justify-center bg-white border border-gray-200 rounded p-6 relative min-h-[300px]">
            <img 
              src={
                plasticProducts[selectedTab].name === "Wash Bottles"
                  ? "https://m.media-amazon.com/images/I/411AKj9Ti4L._AC_UF1000,1000_QL80_.jpg"
                  : plasticProducts[selectedTab].name === "Storage Bottles"
                  ? "https://static1.industrybuying.com/products/lab-supplies/laboratory-glassware/glass-bottles/LAB.GLA.436797202_1765771468425.webp"
                  : plasticProducts[selectedTab].name === "Petri Dishes"
                  ? "https://ik.imagekit.io/z6mqjyyzz/media/public/remediolife-petri-dish-90mm-pack-of-100-pieces-07_04_2026-d39580c7.webp?tr=w-800,q-65,f-avif"
                  : plasticProducts[selectedTab].name === "Sample Containers"
                  ? "https://m.media-amazon.com/images/I/61+8Zjv39qL.jpg"
                  : plasticProducts[selectedTab].name === "Centrifuge Tubes"
                  ? "https://ik.imagekit.io/z6mqjyyzz/media/public/buy-well-centrifuge-tubes-15ml-pack-of-100-pieces-07_04_2026-0843071a.webp?tr=w-800,q-65,f-avif"
                  : plasticProducts[selectedTab].name === "Pipette Tips" 
                  ? "https://1l37nwyltkjspogd.public.blob.vercel-storage.com/pipette.png" 
                  : "/src/assets/images/yukon_plasticware_1781842633957.jpg"
              } 
              alt={`${plasticProducts[selectedTab].name} - Autoclavable Lab Plasticware Supplier | Yukon India`} 
              className="w-full h-full object-contain rounded max-h-[260px] max-w-sm"
              loading="lazy"
              width="400"
              height="300"
              referrerPolicy="no-referrer"
            />
            <span className="absolute bottom-3 bg-black/60 text-white text-[10px] px-2 py-1 rounded font-mono">
              Autoclavable Grade & Heavy-Duty Wall Strength
            </span>
          </div>

          {/* Right details panel */}
          <div className="md:col-span-6 flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#1E4D2B]">Technical Dimensions Sheet</span>
                <h3 className="font-heading font-extrabold text-xl md:text-2xl text-[#1A1A1A] mt-0.5">
                  {plasticProducts[selectedTab].name} Specifications
                </h3>
                <p className="text-xs text-[#555555] font-medium italic mt-0.5">
                  {plasticProducts[selectedTab].sub}
                </p>
              </div>

              <p className="text-sm text-gray-600 font-light leading-relaxed">
                {plasticProducts[selectedTab].description}
              </p>

              {/* Data Rows */}
              <div className="border-t border-gray-150 divide-y divide-gray-100 py-1 text-xs">
                {plasticProducts[selectedTab].specs.map((item, id) => (
                  <div key={id} className="grid grid-cols-12 py-2.5 items-center">
                    <span className="col-span-4 font-bold text-gray-700 tracking-wide uppercase text-[10px]">{item.label}</span>
                    <span className="col-span-8 text-gray-600 font-medium">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Downloader representing the plan brochure download */}
            <div className="pt-2">
              <button
                onClick={onDownloadSpec}
                className="w-full h-[46px] bg-[#1E4D2B] hover:bg-[#14361E] text-white text-xs uppercase tracking-wider font-semibold rounded flex items-center justify-center space-x-2 transition-all duration-300 shadow"
              >
                <Download className="w-4.5 h-4.5" />
                <span>Download {plasticProducts[selectedTab].name} Technical Drawings</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
