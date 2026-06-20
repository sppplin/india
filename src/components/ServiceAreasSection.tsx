import React from 'react';
import { MapPin, ArrowRight, Building, Landmark, Compass, Globe } from 'lucide-react';
import { ActiveView } from '../types';

interface ServiceAreasSectionProps {
  setActiveView: (view: ActiveView) => void;
}

export default function ServiceAreasSection({ setActiveView }: ServiceAreasSectionProps) {
  
  const handleCtaClick = () => {
    setActiveView('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cities = [
    {
      title: "Laboratory Supplier in Noida & Ghaziabad",
      icon: Building,
      content: "Our base of operations. We serve research labs, universities, pharma, and industrial facilities in Noida Sector 62, 63, 65, Ghaziabad, Greater Noida, and the entire NCR belt with same-day dispatch on in-stock items.",
      keywords: "laboratory glassware supplier Noida, lab equipment Ghaziabad, scientific instruments Noida"
    },
    {
      title: "Laboratory Equipment Supplier in Delhi",
      icon: Landmark,
      content: "From central Delhi university campuses to South Delhi pharma companies and East Delhi industrial labs — YUKON INDIA supplies the complete range of glassware, plasticware, instruments, and chemicals to clients across New Delhi, Faridabad, Gurugram, and NCR.",
      keywords: "laboratory equipment supplier Delhi, scientific instruments Delhi NCR, lab chemicals New Delhi"
    },
    {
      title: "Laboratory Glassware Supplier in Mumbai",
      icon: Compass,
      content: "We supply pharmaceutical-grade laboratory glassware, analytical instruments, and consumables to pharma companies, research labs, and engineering colleges in Mumbai, Navi Mumbai, Thane, Pune, Nashik, and across Maharashtra.",
      keywords: "laboratory supplier Mumbai, lab equipment Maharashtra, pharma lab glassware Mumbai"
    },
    {
      title: "Scientific Instruments Supplier in Chennai",
      icon: MapPin,
      content: "YUKON INDIA delivers high-quality lab plasticware, glassware, instruments, and chemicals to research institutions, pharma companies, and industrial facilities in Chennai, Coimbatore, Madurai, Vellore, and across Tamil Nadu.",
      keywords: "laboratory supplier Chennai, scientific equipment Tamil Nadu, lab glassware Chennai"
    },
    {
      title: "Laboratory Equipment Supplier in Bengaluru",
      icon: Building,
      content: "Serving biotech companies, IT-sector research labs, pharma manufacturers, and engineering institutions in Bengaluru, Hyderabad, Mysuru, and across Karnataka and Andhra Pradesh with reliable lab supply.",
      keywords: "lab equipment Bengaluru, scientific instruments Hyderabad, laboratory supplier South India"
    },
    {
      title: "PAN India Laboratory Supply & Delivery",
      icon: Globe,
      content: "With a robust logistics network, YUKON INDIA ships laboratory glassware, instruments, and consumables to Kolkata, Ahmedabad, Bhopal, Jaipur, Lucknow, Chandigarh, Patna, and every state in India. Bulk institutional orders welcome.",
      keywords: "PAN India lab supplier, laboratory equipment delivery India, bulk lab supply India"
    }
  ];

  return (
    <section id="service-areas" className="bg-[#F8F9F8] rounded-lg border border-gray-200 p-6 md:p-8 shadow-custom">
      
      {/* Section Header */}
      <div className="border-b border-gray-100 pb-4 mb-6">
        <span className="text-[10px] uppercase font-bold tracking-widest text-[#1E4D2B]">We Deliver Across India</span>
        <h2 className="font-heading font-extrabold text-xl md:text-2xl text-gray-900 mt-1">
          Laboratory Equipment Supplier in Noida, Delhi, Mumbai, Chennai & PAN India
        </h2>
        
        {/* Intro Paragraph */}
        <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-light mt-4">
          YUKON INDIA is a leading laboratory glassware and scientific equipment supplier with roots in Ghaziabad, Uttar Pradesh, serving clients across India for over three decades. Whether you are a research institution in Noida, a pharmaceutical company in Mumbai, a university in Delhi NCR, or an industrial laboratory in Chennai — our extensive product range and reliable logistics network ensure timely delivery of ISO-certified lab supplies to your doorstep. From borosilicate glassware and autoclavable plasticware to analytical instruments and high-purity reagents, we are equipped to fulfil bulk orders, institutional supply contracts, and urgent requirements alike. Our team of experienced professionals provides personalised product guidance, competitive pricing, and after-sales support — making us the preferred laboratory equipment partner for 200+ institutions and companies across Noida, Delhi, Mumbai, Chennai, Bengaluru, Hyderabad, Kolkata, Pune, Ahmedabad, and all major cities in India.
        </p>
      </div>

      {/* City Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cities.map((city, idx) => {
          const IconComponent = city.icon;
          return (
            <div 
              key={idx} 
              className="bg-white p-5 rounded-lg border border-gray-200 hover:border-emerald-700 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded bg-emerald-50 text-[#1E4D2B] flex items-center justify-center shadow-sm group-hover:bg-[#1E4D2B] group-hover:text-white transition-all">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-xs md:text-sm text-gray-900 group-hover:text-primary transition-colors">
                    {city.title}
                  </h3>
                </div>
                
                <p className="text-xs font-light text-slate-700 leading-relaxed">
                  {city.content}
                </p>

                {city.title.includes('Delhi') && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    <button
                      onClick={() => {
                        setActiveView('glass-beaker-supplier-delhi');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="inline-flex items-center justify-between gap-1 text-xs font-bold text-emerald-800 hover:text-emerald-950 group/btn bg-emerald-50 px-3 py-1.5 rounded cursor-pointer transition-colors"
                    >
                      <span>Delhi Glass Beakers</span>
                      <ArrowRight className="w-3 h-3 transform group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                    <button
                      onClick={() => {
                        setActiveView('pipette-supplier-delhi');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="inline-flex items-center justify-between gap-1 text-xs font-bold text-[#FC913A] hover:text-amber-800 group/btn bg-amber-50 px-3 py-1.5 rounded cursor-pointer transition-colors"
                    >
                      <span>Delhi Pipettes</span>
                      <ArrowRight className="w-3 h-3 transform group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                    <button
                      onClick={() => {
                        setActiveView('test-tube-manufacturer-delhi');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="inline-flex items-center justify-between gap-1 text-xs font-bold text-orange-850 hover:text-orange-950 group/btn bg-orange-50 px-3 py-1.5 rounded cursor-pointer transition-colors"
                    >
                      <span>Delhi Test Tubes</span>
                      <ArrowRight className="w-3 h-3 transform group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                )}

                {city.title.includes('Mumbai') && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    <button
                      onClick={() => {
                        setActiveView('pipette-supplier-mumbai');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#FC913A] hover:text-amber-800 group/btn bg-amber-50 px-3 py-1.5 rounded cursor-pointer transition-colors"
                    >
                      <span>View Mumbai Pipette Specs</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                    <button
                      onClick={() => {
                        setActiveView('test-tube-manufacturer-mumbai');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="inline-flex items-center gap-1 text-xs font-bold text-orange-850 hover:text-orange-950 group/btn bg-orange-50 px-3 py-1.5 rounded cursor-pointer transition-colors"
                    >
                      <span>Mumbai Test Tubes</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                )}

                {city.title.includes('PAN India') && (
                  <div className="flex flex-col sm:flex-row gap-2 mt-3">
                    <button
                      onClick={() => {
                        setActiveView('glass-beaker-manufacturer-india');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="inline-flex items-center justify-between gap-1 text-xs font-bold text-emerald-800 hover:text-emerald-900 group/btn bg-emerald-50 px-3 py-1.5 rounded cursor-pointer transition-colors"
                    >
                      <span>PAN India Beakers</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                    <button
                      onClick={() => {
                        setActiveView('glass-beaker-supplier-kolkata');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="inline-flex items-center justify-between gap-1 text-xs font-bold text-teal-800 hover:text-teal-900 group/btn bg-teal-50 px-3 py-1.5 rounded cursor-pointer transition-colors"
                    >
                      <span>Kolkata Beakers</span>
                      <ArrowRight className="w-3 h-3 transform group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-gray-50 mt-4 text-[10px] text-gray-400 font-mono tracking-wide">
                Keywords: <span className="text-gray-500 font-semibold">{city.keywords}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={handleCtaClick}
          className="bg-[#1E4D2B] hover:bg-[#14361E] text-white text-xs font-bold uppercase tracking-wider px-6 h-11 rounded shadow transition-all inline-flex items-center space-x-2 cursor-pointer"
        >
          <span>Get a Quote for Your City</span>
          <ArrowRight className="w-4 h-4 text-green-300 animate-pulse" />
        </button>
      </div>

    </section>
  );
}
